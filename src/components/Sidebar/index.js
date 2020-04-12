import React from "react";

const Sidebar = ({ sidebarOpen, setSidebarOpen, socialList }) => {
  return (
    <div
      id="fh5co-offcanvas"
      className={
        sidebarOpen ? "showSidebar animated fadeInLeft" : "animated fadeOutLeft"
      }
    >
      <span
        onClick={() => {
          setSidebarOpen(false);
        }}
        className="fh5co-close-offcanvas js-fh5co-close-offcanvas"
      >
        <span>
          <i className="icon-cross3"></i> <span>Close</span>
        </span>
      </span>
      <div className="fh5co-bio">
        <figure>
          <img src="dp.png" alt="David Padrino" className="img-responsive" />
        </figure>
        <h3 className="heading">About Me</h3>
        <h2>David Padrino</h2>
        <p>
          Full Stack Web developer, Software passionate, astrophysics lover,
          Javascript enthusiast
        </p>
        {socialList()}
      </div>
      <div className="fh5co-menu">
        <div className="fh5co-box">
          <h3 className="heading">Menu</h3>
          <ul>
            <li>
              <a href="cv/resume.pdf" target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
