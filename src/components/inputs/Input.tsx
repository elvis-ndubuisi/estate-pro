type Props = {
  type?: "text" | "email" | "password";
  placeholder?: string;
  exStyles?: string;
};

function Input({
  type = "text",
  placeholder = "placeholder",
  exStyles,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`bg-gray-100 p-4 rounded lowercase outline-none hover:ring-2 focus:ring-2 ring-orange-500 placeholder:capitalize md:placeholder:text-lg md:text-lg ${exStyles}`}
    />
  );
}

export default Input;
