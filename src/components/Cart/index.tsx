import Image from "next/image";
import { PrimaryButtonType } from "@/types/button";
import PrimaryButton from "../Button/PrimaryButton";
import CartItem from "./CartItem";
import CartShipping from "./CartShipping";
import CartSummary from "./CartSummary";

type PickedType = Pick<PrimaryButtonType, "onClick">;

type CheckoutType = {
  [K in keyof PickedType as K extends "onClick"
    ? "onCheckout"
    : never]: PickedType[K];
};

export default function Checkout({ onCheckout }: CheckoutType) {
  const isEmptyCart = !true;
  return (
    <div className="bg-white p-4 rounded-lg m-8">
      <h1 className="font-bold text-2xl mb-4 text-[#c73b0e]">Your Cart (7)</h1>
      {isEmptyCart ? (
        <div className="flex justify-center flex-col items-center pt-4">
          <Image
            src="/products/illustration-empty-cart.svg"
            width={120}
            height={120}
            alt="empty-cart"
          />
          <span className="text-[#8d7d79] font-medium mt-4 pb-6">
            Your added items will appear here
          </span>
        </div>
      ) : (
        <>
          <CartItem />
          <CartItem />
          <CartSummary />
          <CartShipping />
          <PrimaryButton name="Confirm Order" onClick={onCheckout} />
        </>
      )}
    </div>
  );
}
