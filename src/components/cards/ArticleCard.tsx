import { Link } from "react-router-dom";
import { TiCalendarOutline, TiStopwatch } from "react-icons/ti";

type Props = {
  slug: string;
  title: string;
  date: string;
  time: string;
  cover: string;
};

function ArticleCard({ date, slug, time, title, cover }: Props) {
  return (
    <Link
      to={`/blogs/${slug}`}
      className="max-w-[23rem] rounded-md overflow-hidden flex flex-col gap-2 border border-gray-400"
    >
      <img
        src={cover}
        alt="blog cover display"
        className="h-3/4 w-full object-cover object-center rounded-md"
      />
      <div className="px-5 py-3 text-gray-900">
        <h3 className="font-semibold leading-snug">{title}</h3>
        <hr className="my-5" />
        <aside className="flex items-center justify-start gap-3">
          <div className="flex items-center gap-3 text-gray-600 text-base">
            <TiCalendarOutline size={24} />
            {date}
          </div>
          <div className="flex items-center gap-3 text-gray-600 text-base">
            <TiStopwatch size={24} />
            {time}
          </div>
        </aside>
      </div>
    </Link>
  );
}

export default ArticleCard;
