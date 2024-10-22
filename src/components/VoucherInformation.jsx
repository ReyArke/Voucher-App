import React, { useState } from "react";
import { set, useForm } from "react-hook-form";

import { ring2 } from "ldrs";
import SaleFrom from "./SaleFrom";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/userRecordStore";
import toast from "react-hot-toast";

ring2.register();

const VoucherInformation = () => {
  const [isSending, setIsSending] = useState(false);

  const { records, resetRecord } = useRecordStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSending(true);
    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.05;
    const net_total = total + tax;

    const currentVoucher = { ...data, records, total, tax, net_total };

    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      body: JSON.stringify(currentVoucher),
      headers: {
        "Content-Type": "application/json",
      },
    });
    toast.success("Voucher Create Successfully");

    resetRecord();
    reset();
    setIsSending(false);
  };

  // utils/invoiceGenerator.js

  const generateInvoiceNumber = () => {
    const prefix = "INV"; // You can customize this
    const date = new Date();

    // Get current date in YYYYMMDD format
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random 4-digit number for uniqueness
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);

    // Combine prefix, formatted date, and random number to form the invoice number
    return `${prefix}-${formattedDate}-${randomSuffix}`;
  };
  // console.log(generateInvoiceNumber());

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} id="infoFrom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="last_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.voucher_id ? "text-red-500" : " text-gray-900"
                } dark:text-white`}
              >
                Voucher ID
              </label>
              <input
                type="text"
                defaultValue={generateInvoiceNumber()}
                {...register("voucher_id", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border ${
                  errors.voucher_id
                    ? " border-red-500  focus:ring-red-500  focus:border-red-500"
                    : "border-gray-300  focus:ring-blue-500  focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.voucher_id?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Voucher ID is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="last_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.voucher_name ? "text-red-500" : " text-gray-900"
                } dark:text-white`}
              >
                Voucher Name
              </label>
              <input
                type="text"
                {...register("voucher_name", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border ${
                  errors.voucher_name
                    ? " border-red-500  focus:ring-red-500  focus:border-red-500"
                    : "border-gray-300  focus:ring-blue-500  focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.voucher_name?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Voucher Name is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="last_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.voucher_email ? "text-red-500" : " text-gray-900"
                } dark:text-white`}
              >
                Voucher Email
              </label>
              <input
                type="email"
                {...register("voucher_email", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border ${
                  errors.voucher_email
                    ? " border-red-500  focus:ring-red-500  focus:border-red-500"
                    : "border-gray-300  focus:ring-blue-500  focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.voucher_email?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Voucher Email is required
                </p>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-5">
              <label
                htmlFor="last_name"
                className={`block mb-2 text-sm font-medium ${
                  errors.sale_date ? "text-red-500" : " text-gray-900"
                } dark:text-white`}
              >
                Sale Date
              </label>
              <input
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                {...register("sale_date", {
                  required: true,
                  minLength: 3,
                  maxLength: 30,
                })}
                className={`bg-gray-50 border ${
                  errors.sale_date
                    ? " border-red-500  focus:ring-red-500  focus:border-red-500"
                    : "border-gray-300  focus:ring-blue-500  focus:border-blue-500"
                } text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              />
              {errors.sale_date?.type === "required" && (
                <p className="text-red-500 text-sm mt-1">
                  Sale Date is required
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
      <SaleFrom />

      <VoucherTable />
      <div className="flex justify-end items-center gap-3 m-5">
        <div className=" flex items-center">
          <input
            {...register("all_correct")}
            required
            //  if no need this because if u use not run to save and loading
            id="all-correct"
            form="infoFrom"
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

        <button
          type="submit"
          form="infoFrom"
          className="flex gap-3   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Confirm Voucher</span>
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
      </div>
    </>
  );
};

export default VoucherInformation;
