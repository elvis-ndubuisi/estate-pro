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
      flex gap-2 items-center justify-center hover:opacity-80 transition-all 
      capitalize text-lg font-medium p-3 rounded-lg
    text-white bg-black ${
      showAs && showAs === "primary"
        ? "bg-red-500"
        : showAs === "outline"
        ? "bg-white text-black border-2 border-red-500"
        : null
    } ${exStyles}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
