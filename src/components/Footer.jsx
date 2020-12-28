import React from "react";

function Footer() {
  const yearNow = new Date().getFullYear();

  return (
    <footer>
      <p> From Skynet with love</p>
      <p> Copyright {yearNow} </p>
    </footer>
  );
}

export default Footer;
