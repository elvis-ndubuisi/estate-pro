import { Link } from "react-router-dom";
import { TbRulerMeasure, TbBed, TbBath } from "react-icons/tb";

type Props = {
  image: string;
  price: string;
  sqft: number;
  bedrooms: number;
  location: string;
  bathrooms: number;
  slug: string;
};

function PropertyCard({
  bathrooms,
  bedrooms,
  image,
  location,
  price,
  sqft,
  slug,
}: Props) {
  return (
    <Link
      to={`/properties/${slug}`}
      className="max-w-[23rem] rounded-md overflow-hidden flex flex-col gap-4 bg-white border border-gray-300"
    >
      <img
        src={image}
        alt="home snapshot"
        className="h-3/4 w-full object-cover object-center"
      />
      <hr className="border rounded border-stone-950 w-1/2" />
      <div className="px-3">
        <h3 className="font-bold text-2xl my-2">${price}</h3>
        <p className="font-medium my-3">Home in {location}</p>
        <hr className="border border-gray-300 mb-4" />
        <div className="text-sm flex items-center justify-between pt-2 pb-5 selection:bg-none">
          <div className="flex items-center gap-1 bg-gray-100 p-2 rounded min-w-[85px] justify-center">
            <TbRulerMeasure size={18} />
            {sqft} sqft
          </div>
          <div className="flex items-center gap-1 bg-gray-100 p-2 rounded min-w-[85px] justify-center">
            <TbBed size={18} />
            {bedrooms}
          </div>
          <div className="flex items-center gap-1 bg-gray-100 p-2 rounded min-w-[85px] justify-center">
            <TbBath size={18} />
            {bathrooms}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PropertyCard;
