import DisplayProduct from "@/components/DisplayProduct/DisplayProduct";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import React from "react";

function OurProduct({ whatNewArray }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <NavbarSection />
      </div>
      <DisplayProduct whatNewArray={whatNewArray} />
      <div className="flex-grow"></div> 
      <FooterSection />
    </div>
  );
}

export default OurProduct;
