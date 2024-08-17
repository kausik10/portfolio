import { formatDate } from "@/utils/dateFormatter";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface PostItemProps {
    slugAsParams: string;
    title: string;
    description?: string;
    date: string;
}

export function PostItem({ slugAsParams, title, description, date }: PostItemProps) {
    return (
        <article className="mx-auto flex flex-col bg-dark_bg_primary rounded-lg border border-gray-300 shadow-lg p-4 max-w-full hover:bg-dark_bg_secondary transition duration-300">
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                    <Link to={slugAsParams} className="text-light_text hover:underline">{title}</Link>
                </h1>
            </div>
            <div className="font-sans leading-7 text-base sm:text-lg lg:text-xl font-light text-justify mb-4">
                {description}
            </div>
            <div className="flex justify-between gap-24 items-center text-sm sm:text-base">
                <dl className="flex items-center gap-2">
                    <dt className="sr-only">Published On</dt>
                    <dd className="flex items-center gap-1 font-medium">
                        <Calendar className="h-4 w-4 text-primary_border" />
                        <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                </dl>
                <Link to={slugAsParams} className="text-primary_border hover:text-secondary_border">
                    Read More
                </Link>
            </div>
        </article>
    );
}
