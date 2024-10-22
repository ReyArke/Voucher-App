import React from 'react'

const VoucherListSkeletonLoad = () => {
    const loaderCount = 5; 
  return (
    <>
       {[...Array(loaderCount)].map((_, index) => (
        <tr key={index} className="animate-pulse">
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </td>
          <th scope="row" className="px-6 py-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
          </th>
          <td className="px-6 py-4">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-48"></div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="flex flex-col space-y-1">
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
              <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
            </div>
          </td>
          <td className="px-6 py-4 text-end">
            <div className="inline-flex rounded-md shadow-sm">
              <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-l"></div>
              <div className="h-10 w-10 bg-gray-300 dark:bg-gray-700 rounded-r"></div>
            </div>
          </td>
        </tr>
      ))}
    </>
  )
}

export default VoucherListSkeletonLoad
