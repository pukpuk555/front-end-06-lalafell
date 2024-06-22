import AccountNav from "@/components/MyAccount/AccountNav";
import ContactButton from "@/components/ContactBotton/ContactButton";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import ProfileCard from "@/components/ProfileCard";
import React, { useState } from "react";

function AccountPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="z-50">
        <NavbarSection />
      </div>
      <div className="flex justify-center md:mt-[100px] mt-[50px] pt-[50px]">
        <div className="lg:w-[1024px] mx-2 w-screen flex md:justify-around justify-center">
          <AccountNav />
          <ProfileCard />
        </div>
      </div>
      <FooterSection />
      <ContactButton onClick={toggleModal} />
      {isModalOpen && <ContactForm onClose={toggleModal} />}
    </div>
  );
}

export default AccountPage;
