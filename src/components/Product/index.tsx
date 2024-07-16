import ProductImage from "./ProductImage";
import ProductDetail from "./ProductDetail";
import { AddItemButton } from "../Button";
import { ProductItemType } from "@/types/product";

export default function ProductItem({
  images,
  name,
  category,
  price,
}: ProductItemType) {
  return (
    <div className="w-full md:w-1/3 px-2 pb-4">
      <div className="flex flex-col items-center">
        <ProductImage images={images} />
        <div className="relative top-[-23px] basis-2/6">
          <AddItemButton />
        </div>
      </div>
      <div className="mt-[-10px]">
        <ProductDetail name={name} category={category} price={price} />
      </div>
    </div>
  );
}
