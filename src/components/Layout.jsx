import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <main className="flex flex-col main h-screen p-5">
        <Header />
        <Outlet />
        <Toaster position="top-right" />
      </main>
    </div>
  );
};

export default Layout;
