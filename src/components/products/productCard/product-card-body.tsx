type ProductCardBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function ProductCardBody({
  children,
  className = "mt-4 flex flex-1 flex-col gap-3",
}: ProductCardBodyProps) {
  return <div className={className}>{children}</div>;
}
