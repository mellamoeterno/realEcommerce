export type ProductDTO = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageUrls: string[];
  quantityLimit?: number;
  category?: string;
  createdAt?: string;
};

