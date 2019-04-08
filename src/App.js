import React, { Component } from 'react';

import Footer from './components/footerComponent';
import './styles/style.scss';
import firebase from './firebase.js';
import { social, firebaseFolders } from './configObjects'



class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false,
      projects: []
    }
  }

  socialList = () => 
    <ul className="fh5co-social">
      {social.map(el => 
          <li key={el.name}>
              <a href={el.url} target="_blank" rel="noopener noreferrer">
                  <i className={`icon-${el.name}`} />
              </a>
          </li>
      )}
    </ul>


  componentDidMount = () => {
    // firebaseFolders.forEach(element => {
    //   element.resourceName.forEach(img => {
    //     console.log(`/${element.folderName}/${img.imageUrl}`);
    //     firebase.storage().ref().child(`/${element.folderName}/${img.imageUrl}`).getDownloadURL().then(el => {
    //           this.setState({projects: [...this.state.projects , `${element.folderName}`: el]]})

    //       // this.setState({[`/${element.folderName}/${img.imageUrl}`]: el})
    //     })
    //   })
    // })
      firebase.storage().ref().child(`/Lider Positivo/home.bmp`).getDownloadURL().then(el => {
        this.setState({projects: [{'lp': el}]})
        // this.setState({projects: [{[`lider-positivo`]: el}]})
      })
  }
  

  render() {
    console.log('this,state', this.state)
    return (
      <div onClick={() => {
        if (this.state.sidebarOpen) {
          this.setState({sidebarOpen: false});
        }
      }} >
        <div id="fh5co-offcanvas" className={this.state.sidebarOpen ? 'showSidebar animated fadeInLeft' : 'animated fadeOutLeft'}>
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
			<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
      {Object.keys(this.state.projects).map((project, index) => 
      <div key={index}>
        <figure>
					<p><img src={this.state.projects[project]} alt="home" className="img-responsive" /></p>
				</figure>
				<span className="fh5co-meta"><p>Wordpress {project}</p></span>
				<a href="https://liderpositivo.com/" className="fh5co-meta" target="_blank" rel="noopener noreferrer">Visit</a>
				<h2 className="fh5co-article-title"><a href="#" data-toggle="modal" data-target="#lider-positivo-modal">Líder Positivo</a></h2>
				<span className="fh5co-meta fh5co-date"> 2018</span>
      </div>
        )
      }
			</article>
      }

			<div id="lider-positivo-modal" className="modal fade" tabIndex="-1" role="dialog">
				<div className="modal-dialog modal-lg">


					<div className="modal-content">
						<div className="modal-header">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Líder Positivo</h4>
						</div>
						<div className="modal-body">
							<div className="row">

								<div id="lider-positivo-carousel" className="carousel slide col-xs-12 col-md-7" data-ride="carousel">

									<ol className="carousel-indicators">
										<li data-target="#lider-positivo-carousel" data-slide-to="0" className="active"></li>
										<li data-target="#lider-positivo-carousel" data-slide-to="1"></li>
										<li data-target="#lider-positivo-carousel" data-slide-to="2"></li>
										<li data-target="#lider-positivo-carousel" data-slide-to="3"></li>
										<li data-target="#lider-positivo-carousel" data-slide-to="4"></li>
									</ol>


									<div className="carousel-inner">
										<div className="item active">
											<img src={this.state.lp} alt="login"/>
										</div>

									</div>


									<a className="left carousel-control" href="#lider-positivo-carousel" data-slide="prev">
									<span className="glyphicon glyphicon-chevron-left"></span>
									<span className="sr-only">Previous</span>
								</a>
									<a className="right carousel-control" href="#lider-positivo-carousel" data-slide="next">
									<span className="glyphicon glyphicon-chevron-right"></span>
									<span className="sr-only">Next</span>
								</a>
								</div>
								<div className="col-md-5 col-xs-12">
									<h4>Description</h4>
									<p>
										This is another personal project started and finished by me. Made in wordpress, my first experience in task management and
										playing developer and project mananger roles.
									</p>
									<h4>Technologies</h4>
									<ul>
										<li>Wordpress</li>
										<li>Postgres</li>
									</ul>
									<h4>Role</h4>
									Fullstack Developer
								</div>

							</div>

						</div>

					</div>

				</div>
			</div>






            </div>
          </div>            

        <Footer />
      </div>
    );
  }
}

export default App;
