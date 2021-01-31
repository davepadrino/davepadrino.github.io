import React from "react";
import "../../styles/style.scss";

const Footer = ({ sidebarOpen }) => {
  return (
    <footer id="fh5co-footer" className={sidebarOpen && "gray-blur-effect"}>
      <p>
        <small>{`© ${new Date().getFullYear()}. David Padrino. All Rights Reserverd. `}</small>
      </p>
    </footer>
  );
};

export default Footer;
