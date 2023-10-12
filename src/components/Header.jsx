import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("list");

  useEffect(() => {
    if (location.pathname === "/list") setActiveItem("list");
    if (location.pathname === "/carrousel") setActiveItem("carrousel");
  }, [location.pathname]);

  return (
    <header className="w-full flex justify-center gap-5 p-2 relative">
      <NavLink
        to="/list"
        className={`text-black hover:text-blue-500 px-4 py-2 ${
          activeItem === "list" && "text-blue-500 border-b-2 border-blue-500"
        }`}
      >
        List
      </NavLink>
      <NavLink
        to="/carrousel"
        className={`text-black hover:text-blue-500 px-4 py-2 ${
          activeItem === "carrousel" &&
          "text-blue-500 border-b-2 border-blue-500"
        }`}
      >
        Carrousel
      </NavLink>
    </header>
  );
};

export default Header;
