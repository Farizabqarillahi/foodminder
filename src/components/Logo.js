import React from 'react';
import logoImage1 from '../assets/Logo.png';
import logoImage2 from '../assets/Logo2.png';

function Logo({ type }) {
  const logoImage = type === 'type1' ? logoImage1 : logoImage2;
  return <img className="logo" src={logoImage} alt="Logo" />;
}

export default Logo;
