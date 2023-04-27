import React from 'react';
import headerLogo from '../images/header-logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="Logo Mesto" className="logo" />
    </header>
  );
}

export default Header;
