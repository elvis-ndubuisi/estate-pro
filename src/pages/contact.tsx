import React from "react";

import Button from "../components/Button";
import Input from "../components/inputs/Input";
import Textarea from "../components/inputs/Textarea";
import Accordion from "../components/Accordion";
import SubscribeBanner from "../components/SubscribeBanner";
import faqs from "../assets/data/faqs";
import NavBar from "../components/NavBar";

function Contact() {
  const faqId = React.useId();
  return (
    <>
      <NavBar />

      <main className="mt-16">
        <section className="px-2 max-w-screen-xl mx-auto text-stone-950 pt-12 flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-4 lg:flex-1">
            <h2 className="font-semibold text-4xl md:text-5xl text-center md:text-left">
              Contact us
            </h2>
            <p className="text-gray-600 text-center md:text-left max-w-md mx-auto md:mx-0 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              asjii
            </p>

            <div className="flex flex-col items-center gap-2 text-lg font-semibold md:items-start">
              <a
                className="flex items-center gap-3"
                href="mailto:provictor.ie@gmail.com"
              >
                estatepro@email.com
              </a>
              <a className="flex items-center gap-3" href="tel:+">
                +234-8164-9780-72
              </a>
            </div>
          </div>

          <form className="p-4 rounded-lg shadow-xl flex flex-col items-start gap-4 lg:flex-1 mt-6 lg:mt-0">
            <fieldset className="flex flex-col gap-5 md:flex-row w-full">
              <Input placeholder="enter name" exStyles="flex-1" />
              <Input placeholder="enter email" exStyles="flex-1" />
            </fieldset>

            <fieldset className="flex flex-col gap-5 md:flex-row w-full">
              <Input placeholder="enter phone number" exStyles="flex-1" />
              <Input placeholder="select option" exStyles="flex-1" />
            </fieldset>

            <Textarea placeholder="enter your message" exStyles="w-full" />

            <Button showAs="primary" type="submit">
              Submit Now
            </Button>
          </form>
        </section>

        <section className="my-12 grid items-center px-5 min-h-[30em] py-6 bg-[url('/src/assets/houses/rowan-heuvel-bjej8BY1JYQ-unsplash.jpg')] bg-center bg-fixed">
          <address className="bg-stone-50 rounded-md px-4 py-6 text-base md:text-lg not-italic max-w-md">
            <h4 className="font-semibold text-2xl">Our Location</h4>
            <p className="text-gray-600 my-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
              itaque porro quisquam. Dicta.
            </p>

            <div className="flex items-start gap-4">
              <span>icon</span>
              <p className="font-semibold">
                3891 Ranch View Dr. Richardson, Aba Nigeria <br /> 900102
              </p>
            </div>

            <div className="flex items-start gap-4">
              <span>icon</span>
              <p className="font-semibold">
                3891 Parket Rd, Umar Idris, Lagos Nigeria <br /> 900102
              </p>
            </div>
          </address>
        </section>

        <h3 className="px-2 text-center font-semibold text-3xl my-8">
          Frequently Asked Questions
        </h3>
        <section className="px-2 flex flex-col gap-5 max-w-3xl mx-auto">
          {faqs.map((faq, idx) => (
            <Accordion
              answer={faq.answer}
              question={faq.question}
              key={`${idx}-${faqId}`}
            />
          ))}
        </section>

        <div className="px-2">
          <SubscribeBanner />
        </div>
      </main>
    </>
  );
}

export default Contact;
