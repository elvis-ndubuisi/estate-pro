import React from "react";

import SubscribeBanner from "../components/SubscribeBanner";
import Accordion from "../components/Accordion";
import faqs from "../assets/data/faqs";

function FAQs() {
  const accordionId = React.useId();
  return (
    <main className="px-2 max-w-screen-xl mx-auto mt-12 text-stone-950">
      <h2 className="text-center font-semibold text-5xl leading-tight max-w-md mx-auto">
        Frequently Asked Questions
      </h2>
      <span className="text-lg text-gray-500 block my-6 text-center">
        Home / FAQs
      </span>

      <section className="max-w-5xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <Accordion
            answer={faq.answer}
            question={faq.question}
            key={`${idx}-${accordionId}`}
          />
        ))}
      </section>

      <SubscribeBanner />
    </main>
  );
}

export default FAQs;
