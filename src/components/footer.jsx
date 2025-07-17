import { Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-col px-4 py-6">
      {/* Üst kısım: Bandage + ikonlar */}
      <div className="flex flex-col items-start gap-2">
        <div className="font-[Montserrat] text-[24px] font-bold">Bandage</div>
        <div className="flex gap-4">
          <Facebook className="text-blue-500" />
          <Instagram className="text-blue-500" />
          <Twitter className="text-blue-500" />
        </div>
      </div>
      <div>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <h3></h3>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <h3></h3>
          
        </div>
      </div>
      <div>
        <p>Made With Love by Finland All Right Reserved</p>
      </div>
    </div>
  );
}
