import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { ring2 } from "ldrs";
import toast from "react-hot-toast";

ring2.register();

const ProductCreateCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    setIsSending(true);

    await fetch(import.meta.env.VITE_API_URL + "/products", {
      method: "POST",
      body: JSON.stringify({
        product_name: data.product_name,
        price: data.price,
        category: data.category,
        created_at: new Date().toISOString(),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(data);
    setIsSending(false);
    reset();
    if (data.back_to_product_list) {
      navigate("/product");
    }
    toast.success("Product create Successfully");
  };
  return (
    <main className="bg-stone-100 p-5 rounded-lg w-full md:w-1/2">
      <h1 className="text-3xl mb-3 font-bold">Create Product</h1>
      <p className="mb-10 text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nulla
        ipsam corrupti est laudantium nam esse magni fuga voluptate similique
        sapiente dignissimos aspernatur ad asperiores neque iusto, perferendis
        cupiditate omnis.
      </p>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="mb-5">
          <div>
            <label
              htmlFor="first_name"
              className={`block mb-2 text-sm font-medium ${
                errors.product_name ? "text-red-500" : " text-gray-900"
              } dark:text-white`}
            >
              New Product name
            </label>
            <input
              type="text"
              {...register("product_name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              className={`"bg-gray-50 border ${
                errors.product_name
                  ? " border-gray-300  focus:ring-red-500  focus:border-red-500"
                  : "border-gray-300  focus:ring-blue-500  focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
              placeholder="Eg.Apple"
            />
            {errors.product_name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                Product Name is required
              </p>
            )}
            {errors.product_name?.type === "minLength" && (
              <p className="text-red-500">
                Product name must be greater than 3 characters
              </p>
            )}
            {errors.maxLength?.type === "maxLength  " && (
              <p className="text-red-500">
                Product name must be less than 10 characters
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="last_name"
              className={`block mb-2 text-sm font-medium ${
                errors.product_price ? "text-red-500" : " text-gray-900"
              } dark:text-white`}
            >
              Product Category
            </label>
            <input
              type="text"
              {...register("category", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              className={`"bg-gray-50 border ${
                errors.category
                  ? " border-gray-300  focus:ring-red-500  focus:border-red-500"
                  : "border-gray-300  focus:ring-blue-500  focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Eg.Apple"`}
            />
            {errors.category?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                Product Category is required
              </p>
            )}
            {errors.category?.type === "minLength" && (
              <p className="text-red-500">
                Product Category must be greater than 3 characters
              </p>
            )}
            {errors.category?.type === "maxLength" && (
              <p className="text-red-500">
                Product Category must be less than 30 characters
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="last_name"
              className={`block mb-2 text-sm font-medium ${
                errors.product_price ? "text-red-500" : " text-gray-900"
              } dark:text-white`}
            >
              Product Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: true,
                min: 100,
                max: 10000,
              })}
              className={`"bg-gray-50 border ${
                errors.price
                  ? " border-gray-300  focus:ring-red-500  focus:border-red-500"
                  : "border-gray-300  focus:ring-blue-500  focus:border-blue-500"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"`}
              placeholder="Eg.Apple"
            />
            {errors.price?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">
                Product Price is required
              </p>
            )}
            {errors.price?.type === "min" && (
              <p className="text-red-500">
                Product price must be greater than $100
              </p>
            )}
            {errors.price?.type === "max  " && (
              <p className="text-red-500">
                Product name must be less than $10000
              </p>
            )}
          </div>
          <div className=" mb-5">
            <input
              {...register("all_correct")}
              // required  if no need this because if u use not run to save and loading
              id="all-correct"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="all-correct"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Make Sure all field are correct
            </label>
          </div>

          <div className=" mb-5">
            <input
              {...register("back_to_product_list")}
              id="back-to-product-list"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="back-to-product-list"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Back To Product List After Saving
            </label>
          </div>
          <div className="flex justify-start items-start gap-5">
            <button
              type="submit"
              className="flex gap-3   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span>Save</span>
              {isSending && (
                <l-ring-2
                  size="20"
                  stroke="5"
                  stroke-length="0.25"
                  bg-opacity="0.1"
                  speed="0.8"
                  color="white"
                ></l-ring-2>
              )}
            </button>
            <Link
              to="/product"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </main>
  );
};

export default ProductCreateCard;
