import { Children } from "react";
import React from 'react';

import Layout from "./components/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import DashboardPage from "./pages/DashboardPage";
import ProductPage from "./pages/ProductPage";
import VoucherPage from "./pages/VoucherPage";
import { createBrowserRouter } from "react-router-dom";
import SalePage from "./pages/SalePage";

const router=createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout />,
            errorElement:<NotFoundPage/>,
            children:[
                {
                    index:true,
                    element:<DashboardPage/>
                },
                {
                    path:"/product",
                    element:<ProductPage/>
                },
                {
                    path:"/sale",
                    element:<SalePage/>
                },
                {
                    path:"/voucher",
                    element:<VoucherPage/>
                }
            ]
        }
    ]
)
export default router