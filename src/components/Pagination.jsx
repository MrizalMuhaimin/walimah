import { useEffect, useState } from "react";
import first from "./../assets/img/first.svg";

export const Pagination = ({
  page = 6,
  totalPage = 9,
  onChange = () => {},
  setPage = () => {},
}) => {
  const [active, setActive] = useState(page);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(totalPage);
  const [isDot, setIsDot] = useState(false);

  const reloadPage = () => {
    if (totalPage >= 7) {
      if (page + 4 > totalPage) {
        setIsDot(false);
      } else {
        setIsDot(true);
      }
    } else {
      setIsDot(false);
    }

    setEndPage(totalPage);
    setActive(page);

    if (page > 3) {
      if (totalPage - page < 4) {
        if (totalPage === 4) {
          setStartPage(1);
        } if (totalPage === 5) {
          setStartPage(1);
        }else {
          setStartPage(totalPage - 5);
        }
      } else {
        setStartPage(page - 2);
      }
    } else {
      setStartPage(1);
    }
  };

  useEffect(() => {
    reloadPage();
  }, [page, totalPage]);

  return (
    <div className="flex items-center justify-center  bg-white px-4 py-3 text-body4 text-coklat700">
      <div className=" flex w-full items-center justify-between ">
        <div className="w-full">
          <nav className="flex w-full " aria-label="Pagination">
            <img
              onClick={() => {
                onChange("-");
              }}
              src={first}
              className="mr-auto rotate-180 cursor-pointer px-4"
            />
            <a
              href="#"
              aria-current="page"
              onClick={() => {
                setPage(startPage);
              }}
              className={`relative z-10 inline-flex items-center rounded-sm px-2 py-0.5 text-body4 font-semibold text-coklat800 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-indigo-600 ${
                startPage === active ? "bg-coklat200" : ""
              }`}
            >
              {startPage}
            </a>
            {totalPage >= 2 && (
              <a
                href="#"
                onClick={() => {
                  setPage(startPage + 1);
                }}
                className={`relative z-10 inline-flex items-center rounded-sm px-2 py-0.5 text-body4 font-semibold text-coklat800 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-indigo-600 ${
                  startPage + 1 === active ? "bg-coklat200" : ""
                }`}
              >
                {startPage + 1}
              </a>
            )}
            {totalPage >= 3 && (
              <a
                href="#"
                onClick={() => {
                  setPage(startPage + 2);
                }}
                className={`relative z-10 inline-flex items-center rounded-sm px-2 py-0.5  text-body4 font-semibold text-coklat800 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-indigo-600 ${
                  startPage + 2 === active ? "bg-coklat200" : ""
                }`}
              >
                {startPage + 2}
              </a>
            )}
            {isDot && (
              <span className="relative inline-flex items-center px-2 py-1 text-body4 font-semibold text-coklat500  ring-gray-300 focus:outline-offset-0">
                ...
              </span>
            )}
            {totalPage >= 4 && (
              <a
                href="#"
                onClick={() => {
                  setPage(
                    endPage == 5
                      ? endPage - 1
                      : endPage == 4
                      ? endPage
                      : endPage - 2
                  );
                }}
                className={`relative z-10 inline-flex items-center rounded-sm px-2 py-0.5  text-body4 font-semibold text-coklat800 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-indigo-600 ${
                  (endPage == 5
                    ? endPage - 1
                    : endPage == 4
                    ? endPage
                    : endPage - 2) === active 
                    ? "bg-coklat200"
                    : ""
                }`}
              >
                {endPage == 5
                  ? endPage - 1
                  : endPage == 4
                  ? endPage
                  : endPage - 2}
              </a>
            )}
            {totalPage >= 5 && (
              <a
                href="#"
                onClick={() => {
                  setPage(endPage == 5 ? endPage : endPage - 1);
                }}
                className={`relative z-10 inline-flex items-center rounded-sm px-2 py-0.5  text-body4 font-semibold text-coklat800 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-indigo-600 ${
                  (endPage == 5 ? endPage : endPage - 1) === active ? "bg-coklat200" : ""
                }`}
              >
                {endPage == 5 ? endPage : endPage - 1}
              </a>
            )}
            {totalPage >= 6 && (
              <a
                href="#"
                onClick={() => {
                  setPage(endPage);
                }}
                className={`relative z-10 inline-flex items-center rounded-sm px-2 py-0.5  text-body4 font-semibold text-coklat800 focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline focus-visible:outline-indigo-600 ${
                  endPage === active ? "bg-coklat200" : ""
                }`}
              >
                {endPage}
              </a>
            )}
            <img
              src={first}
              onClick={() => {
                onChange("+");
              }}
              className="ml-auto cursor-pointer px-4"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
