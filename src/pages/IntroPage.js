import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/BackgroundGet.png';
import Logo from '../components/Logo';

const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/get-started');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="get-started-page" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <Logo type="type1"/>
    </div>
  );
};

export default IntroPage;
