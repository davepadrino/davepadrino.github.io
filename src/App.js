import React, { Component } from 'react';

import Footer from './components/footerComponent';
import SimpleModal from './components/modalComponent'
import './styles/style.scss';
import firebase from './firebase.js';
import { social } from './configObjects'


class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false,
      modalOpen: false,
      projects: [].sort((a,b) => b.order-a.order),
      selectedProject: null
    }
  }

  socialList = () => 
    <ul className="fh5co-social">
      {social.map(el => 
          <li key={el.name}>
              <a href={el.url} 
                target="_blank"
                rel="noopener noreferrer">
                  <i className={`icon-${el.name}`} />
              </a>
          </li>
      )}
    </ul>


  componentDidMount = () => {
    firebase.database().ref().once('value', snap => {
      const elements = snap.val();
      snap.forEach(singleSnap => {
        this.setState({projects: [...this.state.projects, 
          {
            imageUrl: elements[singleSnap.key].imageUrl, 
            projectName: elements[singleSnap.key].projectName,
            year: elements[singleSnap.key].year,
            webUrl: elements[singleSnap.key].webUrl,
            tech: elements[singleSnap.key].tech,
            folderName: elements[singleSnap.key].folderName,
            description: elements[singleSnap.key].description,
            images: elements[singleSnap.key].images,
            technologies: elements[singleSnap.key].technologies,
            role: elements[singleSnap.key].role,
            order: elements[singleSnap.key].order
          }].sort((a,b) => console.log('33333', b.order-a.order))})
      })
    });
  }

    handleOpen = () => {
      this.setState({ modalOpen: true });
    };

    handleClose = () => {
      this.setState({ modalOpen: false });
    };

  render() {
    return (
      <div onClick={() => {
        if (this.state.sidebarOpen) {
          this.setState({sidebarOpen: false});
        }
      }}>
        <div id="fh5co-offcanvas" 
            className={this.state.sidebarOpen ? 'showSidebar animated fadeInLeft' : 'animated fadeOutLeft'}>
          <span 
            onClick={() => {
              this.setState({sidebarOpen: false});
              
            }} 
            className="fh5co-close-offcanvas js-fh5co-close-offcanvas">
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
          <p>Full Stack Web developer, Software passionate, astrophysics lover, Javascript enthusiast</p>
          {this.socialList()}
        </div>
        <div className="fh5co-menu">
          <div className="fh5co-box">
            <h3 className="heading">Menu</h3>
            <ul>
              <li><a href="cv/resume.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      
        <header id="fh5co-header">
          <div className="container-fluid">
              <div className="row">
                  <span 
                    onClick={() => {
                      this.setState({sidebarOpen: true});
                      
                    }}
                    className="js-fh5co-nav-toggle fh5co-nav-toggle">
                    <i></i>
                  </span>
                  {this.socialList()}
                  <div className="col-lg-12 col-md-12 text-center">
                      <h1 id="fh5co-logo"><a href="index.html">David Padrino</a></h1>
                  </div>
              </div>
          </div>
        </header>

        	<div className="container-fluid">
            <div className="row fh5co-post-entry">            
              { this.state.projects.length > 0 && 
                Object.keys(this.state.projects).map((project, index) => 
                <article key={index} className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
                  <div >
                    <figure >
                      <p><img src={this.state.projects[`${project}`].imageUrl} alt="home" className="img-responsive" /></p>
                    </figure>
                    <span className="fh5co-meta"><p>{this.state.projects[`${project}`].tech}</p></span>
                    <a href={this.state.projects[`${project}`].webUrl} className="fh5co-meta" target="_blank" rel="noopener noreferrer">Visit</a>
                    <h2 className="fh5co-article-title title-project" 
                      onClick={() => {
                        this.handleOpen();
                        this.setState({
                          selectedProject: this.state.projects[`${project}`]
                        })
                      }}>
                      {this.state.projects[`${project}`].projectName}
                    </h2>
                    <span className="fh5co-meta fh5co-date">{this.state.projects[`${project}`].year}</span>
                  </div>
                  </article>
              )}
              {this.state.modalOpen &&
                  <SimpleModal 
                    open={this.state.modalOpen} 
                    handleClose={this.handleClose} 
                    project={this.state.selectedProject}
                  />                      
              }
            </div>
          </div>            
        <Footer />
      </div>
    );
  }
}


export default App;
