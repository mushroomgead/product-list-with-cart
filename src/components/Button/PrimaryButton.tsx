import { PrimaryButtonType } from "@/types/button";

export default function PrimaryButton({ name, onClick }: PrimaryButtonType) {
  return (
    <button
      className="flex justify-center items-center rounded-[30px] px-2 py-2 bg-[#c73b0e] text-white hover:bg-[#962c0c] font-medium w-full mt-4"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
