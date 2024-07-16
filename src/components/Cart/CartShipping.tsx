import Image from "next/image";

export default function CartShipping() {
  return (
    <div className="flex bg-orange-50 p-4 rounded-md">
      <Image
        src="/icons/icon-carbon-neutral.svg"
        width={20}
        height={20}
        alt="icon-shipping"
        className="mr-2"
      />
      <span className="text-sm ">
        This is a <span className="font-bold">carbon-neatral</span> delivery
      </span>
    </div>
  );
}
