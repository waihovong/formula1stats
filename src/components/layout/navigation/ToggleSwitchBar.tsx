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
      <nav className="flex justify-center items-center mb-5">
        <ul className="flex">
          <li className={`px-6 py-3 m-1 xs:px-3 xs:py-1 ${activeTab === 'Driver' ? 
            'bg-red-600 text-white font-semibold rounded-md cursor-pointer ' : 
            'text-gray-700 cursor-pointer rounded-md hover:bg-red-200'}`} 
            onClick={() => handleClick('Driver')}>
            Driver
          </li>
          <li className={`px-6 py-3 m-1 xs:px-3 xs:py-1 ${activeTab === 'Team' ? 
            'bg-red-600 text-white font-semibold rounded-md cursor-pointer' : 
            'text-gray-700 cursor-pointer rounded-md hover:bg-red-200'}`} 
            onClick={() => handleClick('Team')}>
            Team
          </li>
        </ul>
      </nav>
    );
  }

export default ToggleSwitchBar;