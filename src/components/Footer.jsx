import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Compyright &copy; monta {year}</p>
    </footer>
  );
}

export default Footer;
