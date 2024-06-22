import React, { useState } from "react";
import FooterSection from "./components/FooterSection";
import ContactButton from "./components/ContactButton";
import ContactForm from "./components/ContactForm";
import NavbarSection from "./components/NavbarSection";
import OurProductSection from "./components/OurProductSection";
import HeroComponent from "./components/HeroComponent";
import WhatsNewSection from "./components/WhatsNewSection";

const App = ({ whatNewArray }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="z-50">
        <NavbarSection />
      </div>
      <HeroComponent />
      <WhatsNewSection whatNewArray={whatNewArray} />
      <OurProductSection />
      <FooterSection />
      <ContactButton onClick={toggleModal} />
      {isModalOpen && <ContactForm onClose={toggleModal} />}
    </div>
  );
};
export default App;
