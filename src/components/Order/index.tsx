import Image from "next/image";
import PrimaryButton from "../Button/PrimaryButton";
import CartSummary from "../Cart/CartSummary";
import OrderItem from "./OrderItem";

export default function OrderConfirm() {
  return (
    <div className="p-4 rounded-lg bg-white">
      <Image
        src="/icons/icon-order-confirmed.svg"
        width={30}
        height={30}
        alt="icon-confirmed"
        className="mb-4"
      />
      <h1 className="font-bold text-2xl">Order confirmed</h1>
      <h1 className="text-sm mb-4">We hope you enjoy your food!</h1>
      <div className="bg-orange-50 rounded-lg p-4">
        <OrderItem />
        <OrderItem />
        <CartSummary />
      </div>
      <PrimaryButton name="Start New Order" />
    </div>
  );
}
