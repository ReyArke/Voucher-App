import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import {
  HiComputerDesktop,
  HiOutlinePencil,
  HiOutlineTrash,
  HiPlus,
} from "react-icons/hi2";
import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";
import { reuleaux } from "ldrs";
import toast from "react-hot-toast";

reuleaux.register();

const VoucherListRow = ({
  voucher: { id, voucher_id, voucher_name, voucher_email, sale_date },
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setDeleting] = useState(false);

  const handleDeleteProduct = async () => {
    setDeleting(true);
    const res = await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    toast.success("Voucher delete Successfully!");
    mutate(import.meta.env.VITE_API_URL + `/vouchers`);
  };
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{voucher_id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {voucher_name}
        </th>

        <td className="px-6 py-4">{voucher_email}</td>
        <td className="px-6 py-4 text-end">
          <ShowDate timestamp={sale_date} />
        </td>

        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={handleDeleteProduct}
              type="button"
              className="size-10 flex justify-center items-center text-sm font-medium text-red-500 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {isDeleting ? (
                <l-reuleaux
                  size="20"
                  stroke="2"
                  stroke-length="0.15"
                  bg-opacity="0.1"
                  speed="1.2"
                  color="red"
                ></l-reuleaux>
              ) : (
                <HiOutlineTrash />
              )}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default VoucherListRow;
