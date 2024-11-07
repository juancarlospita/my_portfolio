import React, { useState } from 'react';
import Logo from '../assets/logo1.svg';
import { CgArrowDownO } from 'react-icons/cg';
import CV from '../assets/CV_Frontend_JC.pdf';

const Header = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDownload = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500); // Duración de la animación
  };

  return (
    <header className='py-2 mb-10'>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-4">
          <a href="#">
            <img className='flex justify-center items-center w-full h-full' src={Logo} alt="Logo" />
          </a>
          <a 
            href={CV} 
            download="CV_JUAN_CARLOS.pdf" 
            onClick={handleDownload}
            className={`btn btn-sm flex items-center gap-4 ${isAnimating ? 'animate-bounce' : ''}`}
          >
            Descargar CV <CgArrowDownO className='w-7 h-7'/>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
