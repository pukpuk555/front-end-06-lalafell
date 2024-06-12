import React, { useState } from 'react';
import FooterSection from './components/FooterSection';
import ContactButton from './components/ContactButton';
import ContactForm from './components/ContactForm';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {/* Add your main content here */}
        <h1 className="text-center mt-4">Welcome to Lalafell Keyboard</h1>
        {/* You can add more content here */}
      </div>
      <FooterSection />
      <ContactButton onClick={toggleModal} />
      {isModalOpen && <ContactForm onClose={toggleModal} />}
    </div>
  );
};

export default App;

