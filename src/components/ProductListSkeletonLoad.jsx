import React from "react";

export default function ProductListSkeletonLoad() {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 animate-pulse">
        <td className="px-6 py-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-8"></div>
        </td>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-48"></div>
        </th>
        <td className="px-6 py-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24 mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex space-x-2">
            <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
        </td>
      </tr>
    </>
  );
}
