import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function MobileFooter() {
  return (
    <>
      {/* Üst kısım */}
      <div className="font-montserrat w-full bg-gray-100 py-4 pl-5 pr-4">
        <div className="w-full flex justify-between items-center">
          <div className="text-[24px] font-bold">Bandage</div>
          <div className="flex gap-4">
            <Facebook className="text-blue-500" />
            <Instagram className="text-blue-500" />
            <Twitter className="text-blue-500" />
          </div>
        </div>
      </div>

      {/* Orta kısım */}
      <div className="font-montserrat py-6 pl-5">
        <div className="flex flex-col gap-8">
          {/* 1. blok */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[16px] text-left">Company Info</h3>
            <button className="text-[14px] text-left">About Us</button>
            <button className="text-[14px] text-left">Carrier</button>
            <button className="text-[14px] text-left">We are hiring</button>
            <button className="text-[14px] text-left">Blog</button>
          </div>

          {/* 2. blok */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[16px] text-left">Legal</h3>
            <button className="text-[14px] text-left">About Us</button>
            <button className="text-[14px] text-left">Carrier</button>
            <button className="text-[14px] text-left">We are hiring</button>
            <button className="text-[14px] text-left">Blog</button>
          </div>

          {/* 3. blok */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[16px] text-left">Features</h3>
            <button className="text-[14px] text-left">
              Business Marketing
            </button>
            <button className="text-[14px] text-left">User Analytic</button>
            <button className="text-[14px] text-left">Live Chat</button>
            <button className="text-[14px] text-left">Unlimited Support</button>
          </div>

          {/* 4. blok + email alanı */}
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[16px] text-left">Get In Touch</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 text-[14px] border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 text-[14px] bg-blue-500 text-white font-semibold rounded-r-md transition-all duration-200 hover:bg-blue-700 hover:scale-105">
                Subscribe
              </button>
            </div>
            <p className="text-[12px] font-thin text-left">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>
      </div>

      {/* Alt yazı */}
      <div className="w-screen bg-gray-100 py-4">
        <div className="w-full pl-5">
          <p className="text-left text-[14px] font-montserrat">
            Made With Love by Finland All Right Reserved
          </p>
        </div>
      </div>
    </>
  );
}
