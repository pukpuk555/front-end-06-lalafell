import React from "react";
import SignUp from "@/components/SignIn/signUp";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";

function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSection />
      <div className="h-[80px] md:h-[100px]"></div>
      <div className="flex-grow flex items-center justify-center">
        <SignUp />
      </div>
      <FooterSection />
    </div>
  );
}

export default SignInPage;
