import html2pdf from "html2pdf.js";
import printJS from "print-js";
import React from "react";
import { useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const VoucherCard = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  const handlePrint = () => {
    // window.print();

    printJS({
      printable: "printArea",
      type: "html",
      // header: "Invoice",tj,
      css: [
        "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css", // Use the CDN
        "/path/to/your/print.css", // Your custom print stylesheet path
      ],
      scanStyles: true,
    });
  };

  const handlePdf = () => {
    const element = document.getElementById("printArea"); // Replace with your element's ID

    //Convert the DOM element to PDF
    const opt = {
      margin: 0.01,
      filename: "Voucher.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit:"in", format:"a5", orientation:"portrait" }, // Set format to 'a5'
    };

    html2pdf().from(element).set(opt).save();

  };

  if (isLoading) return <p>Loading...</p>;
  console.log(data);
  return (
    <div className="flex">
      <div id="printArea" className="w-[14.8cm]  bg-white p-10  shadow-lg">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Invoice</h1>
            <p className="text-gray-500 text-xs mt-2">
              Invoice Number: {data.voucher_id}
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-800 font-bold">Invoice to</p>
            <p className="text-gray-800 font-bold">{data.voucher_name}</p>
            <p className="text-gray-500 text-xs ">{data.sale_date}</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="overflow-hidden border border-gray-200 rounded-lg">
            <table className="w-full text-sm mb-8 text-gray-700 ">
              <thead className="bg-gray-100">
                <tr className="border-b-2 border-gray-300">
                  <th className="px-6 py-4 font-medium text-xs">#</th>
                  <th className="px-6 py-4 font-medium text-xs">
                    Product_Name
                  </th>
                  {/* <th className="px-6 py-4 font-medium">Category</th> */}
                  <th className="px-6 py-4 font-medium text-xs">Quantity</th>

                  <th className="px-6 py-4 font-medium text-xs">Unit Price</th>
                  <th className="px-6 py-4 font-medium text-xs text-right ">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.records.map((record, index) => (
                  <tr
                    key={record.product_id}
                    className="border-b border-gray-200"
                  >
                    <td className="px-6 py-4 text-xs">{index + 1}</td>
                    <td className="px-6 py-4 text-xs">
                      {record.product.product_name}
                    </td>
                    {/* <td className="px-6 py-4">{record.product.category}</td> */}
                    <td className="px-6 py-4 text-xs">{record.quantity}</td>
                    <td className="px-6 py-4 text-xs">
                      {record.product.price}
                    </td>
                    <td className="px-6 py-4 text-xs text-right">
                      {record.cost}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-b border-gray-200">
                <tr>
                  <td className="px-6 py-4 text-right text-xs" colSpan={4}>
                    ToTal
                  </td>
                  <td className="px-6 py-4 text-xs">${data.total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-right text-xs" colSpan={4}>
                    Tax
                  </td>
                  <td className="px-6 py-4 text-xs">${data.tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-right text-xs" colSpan={4}>
                    Net Total
                  </td>
                  <td className="px-6 py-4 text-xs">${data.net_total.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-800 font-semibold">Billed To:</p>

              <p className="text-sm text-gray-500">Kpy/Wave:09534234324</p>
              <p className="text-sm text-gray-500">KBZ BANK:123456789</p>
              <p className="text-sm text-gray-500">AYA BANK:123456789</p>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-bold text-gray-800">Arkeon</h2>
              <p className="text-sm text-gray-500">
                456 Business Rd, Suite 300
              </p>
              <p className="text-sm text-gray-500">City, ST 67890</p>
              <p className="text-sm text-gray-500">Email: info@arkeon.com</p>
            </div>
          </div>
        </div>

        <div className=" w-full mt-10 text-center text-gray-500 text-sm">
          <p>
            Thank you for choosing our services. Payment is due within 15 days.
          </p>
          <p className="mt-2">
            Contact us at billing@yourcompany.com if you have any questions.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <button
          className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handlePrint}
        >
          Print
        </button>
        <button
          className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handlePdf}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;

{
  /* <a class="" href="/sale">
  Create Sale
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    aria-hidden="true"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
      clip-rule="evenodd"
    ></path>
  </svg>
</a>; */
}
