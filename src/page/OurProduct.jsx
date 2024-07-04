import ContactButton from "@/components/ContactBotton/ContactButton";
import ContactForm from "@/components/ContactBotton/ContactForm";
import DisplayProduct from "@/components/DisplayProduct/DisplayProduct";
import FooterSection from "@/components/FooterSection";
import NavbarSection from "@/components/NavbarSection";
import React, { useState } from "react";

function OurProduct({ whatNewArray }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="z-50">
        <NavbarSection />
      </div>
      <DisplayProduct whatNewArray={whatNewArray} />
      <FooterSection />
      <ContactButton onClick={toggleModal} />
      {isModalOpen && <ContactForm onClose={toggleModal} />}
    </div>
  );
}

export default OurProduct;
