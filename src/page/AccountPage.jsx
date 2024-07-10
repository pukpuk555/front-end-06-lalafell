import React from "react";
import AccountNav from "@/components/MyAccount/AccountNav";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import { Outlet } from "react-router-dom";

function AccountPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="z-50">
        <NavbarSection />
      </div>
      <div className="flex justify-center md:mt-20 mt-10 pt-10">
        <div className="lg:w-[1024px] mx-2 w-full flex md:justify-around justify-center">
          <AccountNav />
          <Outlet />
        </div>
      </div>
      <div className="flex-grow"></div>
      <FooterSection />
    </div>
  );
}

export default AccountPage;
