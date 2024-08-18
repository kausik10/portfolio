import { formatDate } from "@/utils/dateFormatter";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface PostItemProps {
  slugAsParams: string;
  title: string;
  description?: string;
  date: string;
}

export function PostItem({
  slugAsParams,
  title,
  description,
  date,
}: PostItemProps) {
  return (
    <article className="z-10 mx-auto flex max-w-full flex-col rounded-lg border border-gray-700 bg-dark_bg p-4 shadow-2xl transition duration-300 hover:bg-dark_bg_secondary">
      <div>
        <h1 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl">
          <Link
            to={slugAsParams}
            className="text-light_text hover:text-primary_border hover:underline"
          >
            {title}
          </Link>
        </h1>
      </div>
      <div className="mb-4 text-justify font-sans text-base font-light leading-7 sm:text-lg lg:text-xl">
        {description}
      </div>
      <div className="flex items-center justify-between text-sm">
        <dl className="flex items-center gap-2">
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1 font-medium">
            <Calendar className="h-4 w-4 text-primary_border" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <div className="rounded-lg bg-dark_bg_secondary p-2 text-light_text hover:bg-dark_bg hover:text-primary_border">
          <Link to={slugAsParams}>Read More</Link>
        </div>
      </div>
    </article>
  );
}
