import { ChevronRight } from "lucide-react";

export default function Button({ variant = "primary", children }) {
  const btnStyle =
    variant === "primary"
      ? "bg-blue-600 text-white"
      : variant === "secondary"
      ? "bg-gray-800 text-white"
      : "bg-transparent text-gray-700";

  return (
    <button
      className={`py-2.5 px-4 text-center rounded-full duration-150 flex items-center gap-x-2 ${btnStyle}`}
    >
      {children}
      <ChevronRight />
    </button>
  );
}
