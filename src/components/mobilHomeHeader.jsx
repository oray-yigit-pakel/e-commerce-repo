import { AlignJustify, Search, ShoppingCart, UserRound } from "lucide-react";
import React, { useState } from "react";

export default function MobileHomeHeader() {
  const [isClicked, setIsClicked] = useState(false);

  function clickMenu() {
    setIsClicked(!isClicked); // toggle open/close
  }

  return (
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

      {/* Toggle Menü */}
      <div
        className={`
    ${isClicked ? "flex" : "hidden"}
    my-[100px] flex-col items-center gap-[30px] text-[30px]
  `}
      >
        <button className="text-left">Home</button>
        <button className="text-left">Product</button>
        <button className="text-left">Pricing</button>
        <button className="text-left">Contact</button>
      </div>
    </header>
  );
}
