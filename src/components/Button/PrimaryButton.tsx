import { PrimaryButtonType } from "@/types/button";

export default function PrimaryButton({ name, onClick }: PrimaryButtonType) {
  return (
    <button className="btn-primary" onClick={onClick}>
      {name}
    </button>
  );
}
