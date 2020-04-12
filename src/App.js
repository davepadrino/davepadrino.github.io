import React, { useState, useEffect } from "react";

import Footer from "./components/Footer";
import SimpleModal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import "./styles/style.scss";
import firebase from "./firebase.js";
import { social } from "./configObjects";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [projects, setProjects] = useState(
    [].sort((a, b) => b.order - a.order)
  );
  const [selectedProject, setSelectedProject] = useState(null);

  const socialList = () => (
    <ul className="fh5co-social">
      {social.map((el) => (
        <li key={el.name}>
          <a href={el.url} target="_blank" rel="noopener noreferrer">
            <i className={`icon-${el.name}`} />
          </a>
        </li>
      ))}
    </ul>
  );

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    firebase
      .database()
      .ref()
      .once("value", (snap) => {
        const elements = snap.val();
        setProjects(Object.values(elements).sort((a, b) => b.order - a.order));
      });
  }, []);

  return (
    <div
      onClick={() => {
        if (sidebarOpen) {
          setSidebarOpen(false);
        }
      }}
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        socialList={socialList}
      />
      <header id="fh5co-header">
        <div className="container-fluid">
          <div className="row">
            <span
              onClick={() => {
                setSidebarOpen(true);
              }}
              className="js-fh5co-nav-toggle fh5co-nav-toggle"
            >
              <i></i>
            </span>
            {socialList()}
            <div className="col-lg-12 col-md-12 text-center">
              <h1 id="fh5co-logo">
                <a href="index.html">David Padrino</a>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row fh5co-post-entry">
          {projects.length > 0 &&
            Object.keys(projects).map((project, index) => (
              <article
                key={index}
                className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box"
              >
                <div>
                  <figure>
                    <p>
                      <img
                        src={projects[`${project}`].imageUrl}
                        alt="home"
                        className="img-responsive"
                      />
                    </p>
                  </figure>
                  <span className="fh5co-meta">
                    <p>{projects[`${project}`].tech}</p>
                  </span>
                  <a
                    href={projects[`${project}`].webUrl}
                    className="fh5co-meta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                  <h2
                    className="fh5co-article-title title-project"
                    onClick={() => {
                      handleOpen();
                      setSelectedProject(projects[`${project}`]);
                    }}
                  >
                    {projects[`${project}`].projectName}
                  </h2>
                  <span className="fh5co-meta fh5co-date">
                    {projects[`${project}`].year}
                  </span>
                </div>
              </article>
            ))}
          {modalOpen && (
            <SimpleModal
              open={modalOpen}
              handleClose={handleClose}
              project={selectedProject}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
