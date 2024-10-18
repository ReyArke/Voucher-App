import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiOutlinePencil, HiOutlineTrash, HiPlus } from "react-icons/hi2";
import { useSWRConfig } from "swr";

import { reuleaux } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

reuleaux.register();

// Default values shown

const ProductRow = ({
  product: { id, product_name, category, price, created_at },
}) => {
  const { mutate } = useSWRConfig();

  const [isDeleting, setDeleting] = useState(false);
  const data = new Date(created_at);

  const currentDate = data.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const currentTime = data.toLocaleTimeString("en-GB", {
    timeZone: "Asia/Yangon",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
  const handleDeleteProduct = async () => {
    setDeleting(true);
    const res = await fetch(import.meta.env.VITE_API_URL + `/products/${id}`, {
      method: "DELETE",
    });
    toast.success(`${product_name} delete Successfully!`)
    mutate(import.meta.env.VITE_API_URL + `/products`);
  };
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{id}</td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product_name}
        </th>

        <td className="px-6 py-4">{category}</td>
        <td className="px-6 py-4 text-end">
          <p className="text-xs">{currentDate}</p>
          <p className="text-xs">{currentTime}</p>
        </td>
        <td className="px-6 py-4 text-end">${price}</td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Link
            to={`/product/edit/${id}`}
             
              className="size-10 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <HiOutlinePencil />
            </Link>

            <button
              type="button"
              onClick={handleDeleteProduct}
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

export default ProductRow;
