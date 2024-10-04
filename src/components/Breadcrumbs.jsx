import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ currentPageTitle, link }) => {
  return (
    <div className="w-full flex gap-3 mb-5">
      {/* <!-- Breadcrumb --> */}
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex gap-3  items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
             <HiHome/>
              Home
            </Link>
          </li>
          
          <li aria-current="page">
            <div className="flex items-center">
            <HiOutlineChevronRight />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {currentPageTitle}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
