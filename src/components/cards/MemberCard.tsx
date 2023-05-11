import { TiSocialLinkedin } from "react-icons/ti";

type Props = {
  image: string;
  role: string;
  name: string;
  desc: string;
};
function MemberCard({ desc, image, name, role }: Props) {
  return (
    <section className="min-h-[25em] w-full max-w-xs ring-2 ring-gray-400 rounded-md relative">
      <span className="inline-block absolute top-2 left-2 rounded-md px-3 py-2 bg-white text-stone-900 capitalize text-sm font-medium">
        {role}
      </span>
      <img
        src={image}
        alt={`${name}'s profile`}
        className="h-[70%] w-full bg-gray-100 object-cover object-top"
      />
      <div className="flex items-start justify-between p-5">
        <div className="flex-1">
          <h3 className="font-semibold mb-2 text-xl capitalize">{name}</h3>
          <p className="leading-tight">{desc}</p>
        </div>
        <span className="bg-red-500 text-white rounded">
          <TiSocialLinkedin size={36} />
        </span>
      </div>
    </section>
  );
}

export default MemberCard;
