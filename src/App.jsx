import React, { useState } from "react";
import FooterSection from "./components/FooterSection";
import ContactButton from "./components/ContactBotton/ContactButton";
import ContactForm from "./components/ContactBotton/ContactForm";
import NavbarSection from "./components/NavbarSection";
import OurProductSection from "./components/Home/OurProductSection";
import HeroComponent from "./components/Home/HeroComponent";
import WhatsNewSection from "./components/Home/WhatsNewSection";

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
