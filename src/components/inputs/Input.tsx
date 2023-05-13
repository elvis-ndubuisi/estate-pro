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
    <label className="block">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full bg-gray-100 p-4 rounded lowercase outline-none hover:ring-2 focus:ring-2 ring-orange-500 placeholder:capitalize md:placeholder:text-lg md:text-lg ${exStyles}`}
      />
    </label>
  );
}

export default Input;
