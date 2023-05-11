import { TiSocialLinkedin } from "react-icons/ti";
import { BiPhone, BiMailSend } from "react-icons/bi";

type Props = {
  image: string;
  role: string;
  name: string;
  desc: string;
  phone: string;
  mail: string;
};

function AgentCard({ desc, image, name, role, mail, phone }: Props) {
  return (
    <section className="max-w-[23rem] w-full ring-2 ring-gray-400 rounded-md relative">
      <span className="inline-block absolute top-2 left-2 rounded-md px-3 py-2 bg-white text-stone-900 capitalize text-sm font-medium">
        {role}
      </span>
      <img
        src={image}
        alt={`${name}'s profile`}
        className="h-72 w-full bg-gray-100 object-cover object-top"
      />
      <section className="p-5 h-[30%]">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-semibold mb-2 text-xl capitalize">{name}</h3>
            <p className="leading-tight">{desc}</p>
          </div>
          <span className="bg-red-500 text-white rounded">
            <TiSocialLinkedin size={36} />
          </span>
        </div>

        <hr className="my-4" />

        <div className="flex items-center gap-3 mb-4">
          <BiPhone size={24} className="text-red-500" />
          <a href="tel:+">{phone}</a>
        </div>

        <div className="flex items-center gap-3">
          <BiMailSend size={24} className="text-red-500" />
          <a href="mailto:">{mail}</a>
        </div>
      </section>
    </section>
  );
}

export default AgentCard;
