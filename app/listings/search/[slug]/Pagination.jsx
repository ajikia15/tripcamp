import { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  mapState,
}) => {
  const pageRangeDisplayed = 5; // Number of visible page buttons
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  // Calculate the start and end index of the page range
  let startPage = Math.max(1, currentPage - Math.floor(pageRangeDisplayed / 2));
  let endPage = Math.min(startPage + pageRangeDisplayed - 1, totalPages);

  // Adjust the start and end index if they exceed the valid range
  startPage = Math.max(1, endPage - pageRangeDisplayed + 1);

  let pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);
  const paginationRef = useRef(null);
  useEffect(() => {
    paginationRef.current && autoAnimate(paginationRef.current);
  }, [paginationRef]);
  return (
    <div className="bottom-0 left-0 right-0 grid py-2 bg-white col-span-full">
      <div
        ref={paginationRef}
        className="flex items-center justify-center w-full gap-2 md:gap-4"
      >
        {currentPage > 1 ? (
          <button
            className="grid h-10 text-gray-600 aspect-square place-items-center"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="currentColor"
                  d="M8.293 12.707a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 1 1 1.414 1.414L10.414 12l4.95 4.95a1 1 0 0 1-1.414 1.414l-5.657-5.657Z"
                />
              </g>
            </svg>
          </button>
        ) : (
          <div className="grid h-10 text-gray-600 opacity-0 aspect-square place-items-center"></div>
        )}

        {startPage > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="grid h-10 text-gray-900 aspect-square place-items-center"
            >
              1
            </button>
            {startPage > 2 && <span className="ellipsis">...</span>}
          </>
        )}

        {pages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={`grid h-10 text-gray-900 aspect-square place-items-center ${
                page === currentPage ? "text-white bg-blue-600 rounded-md" : ""
              }`}
            >
              {page}
            </button>
          );
        })}

        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="ellipsis">...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="grid h-10 text-gray-900 aspect-square place-items-center"
            >
              {totalPages}
            </button>
          </>
        )}

        {currentPage < totalPages ? (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="grid h-10 text-gray-600 aspect-square place-items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                <path
                  fill="currentColor"
                  d="M15.707 11.293a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 1 1-1.414-1.414l4.95-4.95l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657Z"
                />
              </g>
            </svg>
          </button>
        ) : (
          <div className="grid h-10 text-gray-600 opacity-0 aspect-square place-items-center"></div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
