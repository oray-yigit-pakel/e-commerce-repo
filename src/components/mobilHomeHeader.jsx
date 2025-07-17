import { AlignJustify, Search, ShoppingCart, UserRound } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MobileHomeHeader() {
  const [isClicked, setIsClicked] = useState(false);

  function clickMenu() {
    setIsClicked(!isClicked);
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex flex-col p-4 shadow-md bg-white z-50">
        <div className="flex justify-between items-center">
          <div className="font-montserrat text-2xl font-bold">Bandage</div>
          <div className="flex gap-4">
            <UserRound color="black" size={24} />
            <Search color="black" size={24} />
            <ShoppingCart color="black" size={24} />
            <AlignJustify
              onClick={clickMenu}
              color="black"
              size={24}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>

      {/* Menü */}
      {isClicked && (
        <nav className="mt-[80px] flex flex-col items-center gap-[30px] text-[30px] pb-10">
          <NavLink
            exact
            to="/"
            activeClassName="text-blue-500 font-bold"
            className="text-black"
          >
            Home
          </NavLink>
          <NavLink
            to="/product"
            activeClassName="text-blue-500 font-bold"
            className="text-black"
          >
            Product
          </NavLink>
          <NavLink
            to="/pricing"
            activeClassName="text-blue-500 font-bold"
            className="text-black"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-blue-500 font-bold"
            className="text-black"
          >
            Contact
          </NavLink>
        </nav>
      )}
    </>
  );
}
