import Image from "next/image";

export default function CartItem() {
  return (
    <div className="flex justify-between items-center border-b-2 mb-2 pb-2">
      <div className="">
        <span className="text-sm font-bold">Classic Tiramisu</span>
        <div>
          <span className="text-sm font-bold mr-2">1x</span>
          <span className="text-sm mr-2">@ $5.50</span>
          <span className="text-sm font-bold">@ $5.50</span>
        </div>
      </div>
      <div className="">
        <button className="rounded-full border-2 border-[#cbafa7] w-5 h-5 flex justify-center items-center">
          <Image
            src="/icons/icon-remove-item.svg"
            width={12}
            height={12}
            alt="icon-remove-item"
          />
        </button>
      </div>
    </div>
  );
}
