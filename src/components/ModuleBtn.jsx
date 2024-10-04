import React from "react";
import { Link } from "react-router-dom";

const ModuleBtn = ({ name, icon, url }) => {
  return (
    <Link to={url} className="h-full flex flex-col items-center bg-orange-500 text-white p-5 rounded-lg ">
     
        {icon}
        
        {name}
     
    </Link>
  );
};

export default ModuleBtn;
