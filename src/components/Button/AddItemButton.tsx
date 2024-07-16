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
      className="btn-add-cart"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHover ? (
        <div className="btn-modify-qty">
          <div onClick={handleOnRemoveQty} className="btn-modify-qty-item ml-2">
            <Image
              src="/icons/icon-decrement-quantity.svg"
              width={10}
              height={10}
              alt="icon-cart"
            />
          </div>
          <div className="text-white">{qty}</div>
          <div onClick={handleOnAddQty} className="btn-modify-qty-item mr-2">
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
