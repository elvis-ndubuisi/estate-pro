import { SiHomebridge } from "react-icons/si";

type Prop = {
  exStyle?: string;
};

function Brand({ exStyle }: Prop) {
  return (
    <div className={`flex items-center gap-2 text-stone-950 ${exStyle}`}>
      <SiHomebridge className="text-4xl text-red-500" />
      <h1 className="font-bold text-2xl">EstatePro</h1>
    </div>
  );
}

export default Brand;
