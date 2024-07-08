import React, { useState } from 'react';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic 
  };

  return (
    <div
      id="contactModal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xs md:max-w-md relative">
        <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-center bg-black text-white p-3 md:p-4 rounded-t-lg">
          Hello, How can we help you?
        </h2>
        <div className="p-4 md:p-6">
          <span
            className="close text-white hover:text-gray-500 text-xl md:text-2xl cursor-pointer absolute top-2.5 md:top-3 right-2.5 md:right-3"
            onClick={onClose}
          >
            &times;
          </span>
          <form id="contactForm" onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-sm md:text-l font-medium text-gray-700">
              Your name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="mt-1 mb-3 md:mb-4 p-2 border border-gray-300 rounded w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="email" className="block text-sm md:text-l font-medium text-gray-700">
              Email address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
              className="mt-1 mb-3 md:mb-4 p-2 border border-gray-300 rounded w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="message" className="block text-sm md:text-l font-medium text-gray-700">
              How can we help you?:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 mb-3 md:mb-4 p-2 border border-gray-300 rounded w-full"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <label htmlFor="file" className="block text-sm md:text-l font-medium text-gray-700">
              Attachments:
            </label>
            <input
              type="file"
              id="file"
              name="file[]"
              multiple
              className="mt-1 mb-3 md:mb-4 p-2 border border-gray-300 rounded w-full"
              onChange={(e) => setFiles(e.target.files)}
            />

            <button
              type="submit"
              className="px-3 md:px-4 py-1.5 md:py-2 mb-3 md:mb-4 bg-black hover:bg-black/80 text-white rounded float-right"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
