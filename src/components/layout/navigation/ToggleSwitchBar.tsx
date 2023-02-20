import { useState } from 'react';

type NavbarProps = {
    onOptionChange: (option: string) => void;
    activeTab: string;
};

function ToggleSwitchBar({ onOptionChange, activeTab }: NavbarProps) {
    const handleClick = (option: string) => {
        onOptionChange(option);
    }
  
    return (
      <nav className="flex justify-center items-center">
        <ul className="flex">
          <li className={`px-6 py-3 ${activeTab === 'Driver' ? 'bg-red-600 text-white font-semibold rounded-md cursor-pointer' : 'text-gray-700 cursor-pointer'}`} onClick={() => handleClick('Driver')}>
            Driver
          </li>
          <li className={`px-6 py-3 ${activeTab === 'Team' ? 'bg-red-600 text-white font-semibold rounded-md cursor-pointer' : 'text-gray-700 cursor-pointer'}`} onClick={() => handleClick('Team')}>
            Team
          </li>
        </ul>
      </nav>
    );
  }

export default ToggleSwitchBar;