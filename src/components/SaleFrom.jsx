import React from "react";

const SaleFrom = () => {
  return (
    <div className="bg-white p-5 rounded-lg border">
      <from>
        <div className="grid grid-cols-6 gap-3 ">
          <div className="col-span-2">
            <div className="mb-5">
              <label htmlFor="product" className="mb-2 text-sm font-medium ">
                Choose a Product
              </label>
              <select
                id="product"
                name="product"
                className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value>-- Select a Product --</option>
                <option value="product1">Product A</option>
                <option value="product2">Product B</option>
                <option value="product3">Product C</option>
              </select>
            </div>
          </div>

          <div className="col-span-2">
            <label for="quantity" class="text-sm font-sans text-gray-600 mb-3">
              Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              class="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              min="1"
              max="50"
            />
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              class="w-full py-6 bg-green-500 text-white font-bold uppercase tracking-wide rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-transform transform hover:scale-105 duration-200"
            >
              Place Order
            </button>
          </div>
        </div>
      </from>
    </div>
  );
};

export default SaleFrom;
