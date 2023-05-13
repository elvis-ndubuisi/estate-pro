import React from "react";

type Prop = {
  htmlFor: string;
  name?: string;
  options: { label: string; value: string }[];
  exStyles?: string;
  icon?: React.ReactNode;
};

function Select({ htmlFor, options, name, exStyles, icon }: Prop) {
  const uid = React.useId();

  return (
    <label
      htmlFor={htmlFor}
      className={`flex items-center gap-4 min-w-[15rem] p-4 rounded-md border-2 border-gray-200 text-gray-700 bg-white ${exStyles}`}
    >
      {icon && icon}
      <select
        name={name}
        id={htmlFor}
        className="flex-1 bg-transparent w-full capitalize"
      >
        {options.map((opt, idx) => (
          <option value={opt.value} key={`${uid}-${idx}`}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
