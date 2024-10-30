import React, { useRef, useState } from "react";
import { HiSearch, HiX } from "react-icons/hi";
import {
  HiComputerDesktop,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
} from "react-icons/hi2";
import { Link } from "react-router-dom";
import VoucherListSkeletonLoad from "./VoucherListSkeletonLoad";
import VoucherListRow from "./VoucherListRow";
import useSWR from "swr";
import { debounce, throttle } from "lodash";

const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherList = () => {
  const [search, setSearch] = useState("");
  const searchInput = useRef("");

  const { data, isLoading, error } = useSWR(
    // import.meta.env.VITE_API_URL + "/vouchers",
    search
      ? `${import.meta.env.VITE_API_URL}/vouchers?voucher_id_like=${search}`
      : `${import.meta.env.VITE_API_URL + "/vouchers"}`,
    fetcher
  );
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  //   // console.log(e.target.value)
  // };

  // throttle & debouncing
  const handleSearch = debounce((e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }, 500);
  const handleClearSearch = () => {
    // setSearch(e.target.value);
    searchInput.current.value = "";
  };
  return (
    <div>
      <div className="flex justify-between mb-5">
        <div className="">
          <div className="  relative mb-6">
            <div className=" absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              ref={searchInput}
              onChange={handleSearch}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Voucher"
            />
            {search && (
              <button
                onClick={handleClearSearch}
                className=" absolute right-2 top-0 bottom-0 m-auto"
              >
                <HiX
                  fill="red"
                  className="scale-100 active:scale-90 duration-200"
                />
              </button>
            )}
          </div>
        </div>
        <div>
          <Link
            to={"/sale"}
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Sale
            <HiComputerDesktop />
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #Voucher_id
              </th>
              <th scope="col" className="px-6 py-3">
                Customer name
              </th>

              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                CreateDate
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700  hidden last:table-row">
              <td colSpan={5} className="px-6 py-4 text-center">
                There is no Voucher
              </td>
            </tr>
            {isLoading ? (
              <td colSpan={5} className="px-6 py-4 text-center">
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
                </div>
              </td>
            ) : (
              data?.map((voucher) => (
                <VoucherListRow key={voucher.id} voucher={voucher} />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VoucherList;
