import Image from "next/image";

export default function OrderItem() {
  return (
    <div className="flex border-b-2 justify-between py-2">
      <div className="flex">
        <Image
          src="/products/image-brownie-thumbnail.jpg"
          width={40}
          height={40}
          alt="img-order-1"
        />
        <div className="flex flex-col pl-4">
          <div>Classic Tisumisu</div>
          <div>
            <span className="text-sm font-bold mr-2">1x</span>
            <span className="text-sm mr-2">@ $5.50</span>
          </div>
        </div>
      </div>
      <div className="flex items-center text-sm font-bold">$5.50</div>
    </div>
  );
}
