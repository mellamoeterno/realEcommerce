import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { getStripe } from "../../../lib/stripe";

type CheckoutRequestItem = {
  productId: string;
  quantity: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { items?: CheckoutRequestItem[] };
    const items = body.items ?? [];

    if (items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const quantitiesById = new Map<string, number>();
    for (const item of items) {
      if (!item.productId || item.quantity < 1) {
        return NextResponse.json(
          { error: "Invalid cart payload." },
          { status: 400 }
        );
      }
      quantitiesById.set(item.productId, item.quantity);
    }

    const products = await prisma.products.findMany({
      where: { id: { in: [...quantitiesById.keys()] } },
      select: {
        id: true,
        name: true,
        price: true,
      },
    });

    if (products.length !== quantitiesById.size) {
      return NextResponse.json(
        { error: "One or more products no longer exist." },
        { status: 400 }
      );
    }

    const lineItems = products.map((product) => ({
      quantity: quantitiesById.get(product.id)!,
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
        },
        unit_amount: Math.round(Number(product.price.toString()) * 100),
      },
    }));

    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${appUrl}/cart/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cart?cancelled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout session error:", error);
    return NextResponse.json(
      { error: "Could not create checkout session." },
      { status: 500 }
    );
  }
}

