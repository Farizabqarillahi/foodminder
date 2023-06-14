import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';

function NextPage() {
    const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigasi ke halaman login
    navigate('/login');
  };

  return (
    <div className="next-page">
      <Logo type="type2"/>
      <Button text="Next" onClick={handleButtonClick} />
    </div>
  );
}

export default NextPage;
