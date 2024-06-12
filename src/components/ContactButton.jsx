import React from 'react';

const ContactButton = ({ onClick }) => {
  return (
    <div
      id="contactBtn"
      onClick={onClick}
      className="fixed bottom-5 right-5 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-gray-500"
    >
      <span role="img" aria-label="Chat">💬</span>
    </div>
  );
};

export default ContactButton;
