import React, { useState } from "react";
import ContactButton from "@/components/Footer/ContactButton";
import ContactForm from "@/components/Footer/ContactForm";
import Footer from "@/components/Footer/Footer";

function FooterSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bottom-0">
       <ContactButton onClick={toggleModal} />
       {isModalOpen && <ContactForm onClose={toggleModal} />}
      <Footer />
    </div>
  );
}

export default FooterSection;

