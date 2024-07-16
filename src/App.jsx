import React from "react";
import FooterSection from "./components/FooterSection";
import NavbarSection from "./components/NavbarSection";
import OurProductSection from "./components/Home/OurProductSection";
import HeroComponent from "./components/Home/HeroComponent";
import WhatsNewSection from "./components/Home/WhatsNewSection";

const App = ({ whatNewArray }) => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="z-50">
        <NavbarSection />
      </div>
      <HeroComponent />
      <WhatsNewSection whatNewArray={whatNewArray} />
      <OurProductSection />
      <FooterSection />
    </div>
  );
};
export default App;
