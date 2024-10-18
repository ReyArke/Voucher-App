import React from "react";

const ProductListEmptyStage = () => {
  return (
    <div>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td colSpan={5} className="px-6 py-4 text-center">
          There is no product
        </td>
      </tr>
    </div>
  );
};

export default ProductListEmptyStage;
