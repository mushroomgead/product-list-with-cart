import Image from "next/image";
import { useState } from "react";

export default function AddItemButton() {
  const [isHover, setIsHover] = useState(false);
  const [qty, setQty] = useState(0);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleOnAddQty = () => {
    setQty(qty + 1);
  };

  const handleOnRemoveQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };
  return (
    <button
      className="border-2 border-amber-700 flex justify-center items-center rounded-[30px] px-2 py-2 bg-white font-medium w-[160px] h-[50px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="flex bg-[#ca3b0d] absolute top-0 left-0 right-0 bottom-0 rounded-[30px] justify-between items-center">
          <div
            onClick={handleOnRemoveQty}
            className="border-2 rounded-full w-6 h-6 flex justify-center items-center ml-2"
          >
            <Image
              src="/icons/icon-decrement-quantity.svg"
              width={10}
              height={10}
              alt="icon-cart"
            />
          </div>
          <div className="text-white">{qty}</div>
          <div
            onClick={handleOnAddQty}
            className="border-2 rounded-full w-6 h-6 flex justify-center items-center mr-2"
          >
            <Image
              src="/icons/icon-increment-quantity.svg"
              width={10}
              height={10}
              alt="icon-cart"
            />
          </div>
        </div>
      ) : (
        <>
          <Image
            src="/icons/icon-add-to-cart.svg"
            width={20}
            height={20}
            alt="icon-cart"
            className="mr-2"
          />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  );
}
