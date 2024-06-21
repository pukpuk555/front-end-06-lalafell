import React, { useState } from "react";
import FooterSection from "./components/FooterSection";
import ContactButton from "./components/ContactButton";
import ContactForm from "./components/ContactForm";
import NavbarSection from "./components/NavbarSection";
import DisplayProduct from "./components/DisplayProduct";


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const whatNewArray = [
    {
      name: "Kimetsu no Yaiba Custom",
      describtion: "Reference from popular animation",
      img: "/kimetsu_no.png",
      price: "$10.99",
    },
    {
      name: "Lupan The 3rd Custom",
      describtion: "Reference from popular animation",
      img: "/lupin.png",
      price: "$10.99",
    },
    {
      name: "Doreaman Custom",
      describtion: "Reference from popular animation",
      img: "/doremon.png",
      price: "$10.99",
    },
    {
      name: "Harry Poster Custom",
      describtion: "Reference from popular animation",
      img: "/harry.png",
      price: "$10.99",
    },
    {
      name: "Jin-Chan Custom",
      describtion: "Reference from popular animation",
      img: "/chinchan.png",
      price: "$10.99",
    },
    {
      name: "Pokeman Custom",
      describtion: "Reference from popular animation",
      img: "/pokemon.png",
      price: "$10.99",
    },
  ];


  return (
    <div>
      <NavbarSection />
      {/* <HeroComponent />
      <WhatsNewSection whatNewArray={whatNewArray} />
      <OurProductSection /> */}
      <DisplayProduct
        whatNewArray = {whatNewArray}
        keyCap = {keyCap}
        switches = {switches}
      />
      <FooterSection />
      <ContactButton onClick={toggleModal} />
      {isModalOpen && <ContactForm onClose={toggleModal} />}
    </div>
  );
};
export default App;
