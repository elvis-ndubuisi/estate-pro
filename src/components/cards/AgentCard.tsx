import { TiSocialLinkedin } from "react-icons/ti";

type Props = {
  image: string;
  role: string;
  name: string;
  desc: string;
};

function AgentCard({ desc, image, name, role }: Props) {
  return (
    <section className="h-[25em] max-w-xs ring-2 ring-gray-400 rounded-md relative">
      <span className="inline-block absolute top-2 left-2 rounded-md px-3 py-2 bg-white text-stone-900 capitalize">
        {role}
      </span>
      <img
        src={image}
        alt={`${name}'s profile`}
        className="h-[70%] bg-gray-100"
      />
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3>{name}</h3>
          <p>{desc}</p>
        </div>
        <span className="bg-red-500 text-white rounded">
          <TiSocialLinkedin size={36} />
        </span>
      </div>
    </section>
  );
}

export default AgentCard;
