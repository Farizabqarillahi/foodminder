import React from 'react';
import Logo from '../components/Logo';
import Button from '../components/Button';

function LoginPage() {
  const handleButtonClick = () => {
    // Logika yang akan dijalankan saat tombol ditekan
    // Misalnya, melakukan login pengguna
    console.log("Tombol 'Login' ditekan. Melakukan login...");
  };

  return (
    <div className="login-page">
      <Logo type="type2"/>
      <Button text="Login" onClick={handleButtonClick} />
    </div>
  );
}

export default LoginPage;
