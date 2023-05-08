type Props = {
  placeholder?: string;
  rows?: number;
  exStyles?: string;
};

function Textarea({ placeholder, rows = 10, exStyles }: Props) {
  return (
    <textarea
      placeholder={placeholder}
      rows={rows}
      className={`bg-gray-100 p-4 rounded lowercase outline-none hover:ring-2 focus:ring-2 ring-orange-500 placeholder:capitalize md:placeholder:text-lg md:text-lg ${exStyles}`}
    />
  );
}

export default Textarea;
