import React from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

type Props = {
  question: string;
  answer: string;
};

function Accordion({ answer, question }: Props) {
  const [reveal, setReveal] = React.useState(false);
  return (
    <section
      className={`flex flex-col gap-3 border-[3px] rounded-lg shadow px-3 py-5 hover:border-red-500 focus:border-red-500 transition-all ${
        reveal && "border-red-500"
      }`}
    >
      <header
        className="flex items-center justify-between gap-3"
        role="button"
        onClick={() => setReveal(!reveal)}
      >
        <h4 className="flex-1 font-semibold text-xl">{question}</h4>
        <div
          className={`p-3 rounded-full shadow-md ${
            reveal ? "bg-red-500 text-white" : "text-red-500 bg-white"
          }`}
        >
          {reveal ? <FaChevronDown /> : <FaChevronRight />}
        </div>
      </header>
      <main className={`${reveal ? "block" : "hidden"} md:text-lg`}>
        {answer}
      </main>
    </section>
  );
}

export default Accordion;
