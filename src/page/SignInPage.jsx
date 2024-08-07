import React, { useState } from "react";
import SignIn from "@/components/SignIn/signIn";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="h-[80px] md:h-[100px]"></div>
      <div className="flex-grow flex items-center justify-center">
        <SignIn />
      </div>
      <FooterSection />
    </div>
  );
}

export default SignInPage;
