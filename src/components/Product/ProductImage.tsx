import { ImagesType } from "@/types/product";

type ProductImageType = { images: ImagesType };

export default function ProductImage({ images }: ProductImageType) {
  return (
    <picture className="rounded-lg">
      <source media="(max-width: 600px)" srcSet={images.mobile} />
      <source media="(max-width: 768px)" srcSet={images.tablet} />
      <source media="(max-width: 1200px)" srcSet={images.desktop} />
      <img
        src={images.desktop}
        alt="responsive-image-product"
        className="rounded-lg"
      />
    </picture>
  );
}
