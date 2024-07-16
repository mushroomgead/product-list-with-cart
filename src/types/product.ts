export type ProductItemType = {
  images: ImagesType;
  name: string;
  category: string;
  price: number;
};

export type ImagesType = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
