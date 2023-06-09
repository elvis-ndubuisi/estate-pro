import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  exStyles?: string;
  type?: "button" | "submit";
  showAs?: "primary" | "outline";
};

function Button({
  children,
  type = "button",
  onClick,
  exStyles,
  showAs,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
      flex gap-2 items-center justify-center hover:opacity-90 transition-all 
      text-base md:text-lg font-medium py-2 px-4 rounded-lg
    text-gray-100 ${
      showAs && showAs === "primary"
        ? "bg-red-500"
        : showAs === "outline"
        ? "bg-white text-stone-950 border-2 border-red-500"
        : "bg-stone-950"
    } ${exStyles}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
