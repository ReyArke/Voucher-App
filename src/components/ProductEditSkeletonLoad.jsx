import React from "react";

const ProductEditSkeletonLoad = () => {
  return (
    <div>
       
        <div className="animate-pulse">
          {/* Skeleton for Product Name */}
          <div className="mb-5">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>

          {/* Skeleton for Product Category */}
          <div className="mb-5">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>

          {/* Skeleton for Product Price */}
          <div className="mb-5">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-10 bg-gray-300 rounded"></div>
          </div>

          {/* Skeleton for Checkbox 1 */}
          <div className="mb-5 flex items-center">
            <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-40"></div>
          </div>

          {/* Skeleton for Checkbox 2 */}
          <div className="mb-5 flex items-center">
            <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-300 rounded w-40"></div>
          </div>

          {/* Skeleton for Buttons */}
          <div className="flex gap-5">
            <div className="h-10 bg-gray-300 rounded w-32"></div>
            <div className="h-10 bg-gray-300 rounded w-20"></div>
          </div>
        </div>
      
           
    </div>
  );
};

export default ProductEditSkeletonLoad;
