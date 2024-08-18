import { useState } from "react";

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
}

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
}: PaginationProps) => {
  const [activePage, setIsActivePage] = useState(1);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageClick = (pageNumber: number) => {
    setIsActivePage(pageNumber);
    paginate(pageNumber);
    window.scrollTo(0, 0);
  };
  return (
    <>
      <nav className="p-5">
        <ul className="flex justify-end">
          {pageNumbers.map((number) => (
            <li className="mr-6" key={number}>
              <button
                className={`rounded border px-4 py-2 transition-colors ${
                  activePage === number
                    ? "border-primary_border text-primary_border"
                    : "border-light_text text-light_text"
                } bg-dark_bg_secondary`}
                onClick={() => pageClick(number)}
                aria-label={`Go to Page ${number}`}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
