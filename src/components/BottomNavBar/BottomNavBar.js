import React, { useState } from 'react';
import './style.css';
import { IonIcon } from '@ionic/react';
import { homeOutline, searchOutline, basketOutline, personOutline, heartOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';

const BottomNavigationBar = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState(() => {
    if (location.pathname === '/dashboard') {
      return homeOutline;
    } else if (location.pathname === '/search') {
      return searchOutline;
    } // dan seterusnya untuk halaman lainnya
  });

  const handleClick = (icon) => {
    setActiveIcon(icon);
    if (icon === homeOutline) {
      window.location.href = '/dashboard';
    } else if (icon === searchOutline) {
      window.location.href = '/search';
    } // dan seterusnya untuk ikon lainnya
  };

  const renderIcon = (icon, key) => (
    <IonIcon
      key={key}
      icon={icon}
      className={`icon${icon === activeIcon ? ' active' : ''}`}
      onClick={() => handleClick(icon)}
    />
  );

  return (
    <div className="bottom-bar">
      {renderIcon(homeOutline, 1)}
      {renderIcon(searchOutline, 2)}
      {renderIcon(basketOutline, 3)}
      {renderIcon(heartOutline, 4)}
      {renderIcon(personOutline, 5)}
    </div>
  );
};


export default BottomNavigationBar;
