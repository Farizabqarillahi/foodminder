import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/BackgroundGet.png';

function GetStartedPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to the next page
    navigate('/next-page');
  };

  return (
    <div className="get-started-page" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Logo type="type1"/>
      <Button text="Get Started" onClick={handleButtonClick} />
    </div>
  );
}


export default GetStartedPage;
