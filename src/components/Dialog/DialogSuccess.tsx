import { useEffect, useRef } from "react";
import OrderConfirm from "../Order";

type DialogSuccess = {
  isOpen: boolean;
  onclose: any;
};
export default function DialogSuccess({ isOpen, onclose }: DialogSuccess) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      onclose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen fixed left-0 top-0 bottom-0 overflow-hidden z-10 bg-[#00000059]">
      <dialog
        open={true}
        className="z-10 bg-transparent absolute top-32 w-[80%] md:w-[35%]"
        ref={dialogRef}
      >
        <OrderConfirm />
      </dialog>
    </div>
  );
}
