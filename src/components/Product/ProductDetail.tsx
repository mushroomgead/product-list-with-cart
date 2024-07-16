import { ProductItemType } from "@/types/product";

type ProductDetailType = Omit<ProductItemType, "images">;

export default function ProductDetail({
  name,
  category,
  price,
}: ProductDetailType) {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm">{name}</span>
      <span className="font-medium">{category}</span>
      <span className="font-medium text-orange-700">${price}</span>
    </div>
  );
}
