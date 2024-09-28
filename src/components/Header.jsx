// Header.js
import React from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white py-2">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex space-x-4">
        <span>example@gmail.com</span>
        <span>15 B-3 Lorem ipsum dolor Bali 805.71.</span>
      </div>
      <span>Opening: Mon-Fri 08:00 - 17:00</span>
    </div>
  </header>
);

export default Header;
