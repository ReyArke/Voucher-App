import React from "react";
import useSWR from "swr";
import { ripples } from "ldrs";
import { useForm } from "react-hook-form";
import { create } from "zustand";
import useRecordStore from "../stores/userRecordStore";

ripples.register();

const fetcher = (url) => fetch(url).then((res) => res.json());
const SaleFrom = () => {
  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/products",
    fetcher
  );
  const { register, handleSubmit, reset } = useForm();

  const { addRecord, changeQuantity, records } = useRecordStore();
  const onSubmit = (data) => {
    const currentProduct = JSON.parse(data.product);
    const currentProductId = currentProduct.id;
    // console.log(currentProduct);

    const isExited = records.find(
      ({ product: { id } }) => id === currentProductId
    );
    if (isExited) {
      changeQuantity(isExited.product_id, data.quantity);
    } else {
      addRecord({
        product: currentProduct,
        product_id: currentProduct.id,
        quantity: data.quantity,
        cost: currentProduct.price * data.quantity,
        created_at: new Date().toISOString(),
      });
    }

    reset();
  };
  return (
    <div className="bg-white p-5 rounded-lg border mb-5">
      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-6 gap-3 ">
          <div className="col-span-2">
            <div className="mb-5">
              <label htmlFor="product" className="mb-2 text-sm font-medium ">
                Choose a Product
              </label>
              <select
                {...register("product")}
                id="productSelect"
                className="w-full p-2.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Select a product</option>
                {!isLoading &&
                  data.map((product) => (
                    <option key={product.id} value={JSON.stringify(product)}>
                      {product.product_name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
          <div className="col-span-2">
            <label
              htmlFor="quantity"
              className="text-sm font-sans text-gray-600 mb-3"
            >
              Quantity
            </label>
            <input
              {...register("quantity")}
              type="number"
              id="quantity"
              name="quantity"
              className="w-full p-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              min="{1}"
              max="{50}"
              required
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full py-6 bg-green-500 text-white font-bold uppercase tracking-wide rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-transform transform hover:scale-105 duration-200"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SaleFrom;
