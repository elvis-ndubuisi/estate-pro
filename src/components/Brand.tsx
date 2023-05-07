type Prop = {
  exStyle?: string;
};

function Brand({ exStyle }: Prop) {
  return (
    <div className={`flex items-center gap-2 ${exStyle}`}>
      {/* <img
        src=""
        alt="estate pro brand"
        className="max-w-[50px] object-contain aspect-square bg-grey-200"
      /> */}
      <h1 className="font-bold text-2xl">EstatePro</h1>
    </div>
  );
}

export default Brand;
