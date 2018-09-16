import React, { Component } from 'react';
import '../../styles/style.scss';

export default class Header extends Component {
  render() {
    return (
        <header id="fh5co-header">

            <div className="container-fluid">

                <div className="row">
                    <a href="/" className="js-fh5co-nav-toggle fh5co-nav-toggle"><i></i></a>
                    <ul className="fh5co-social">
                        <li>
                            <a href="https://www.linkedin.com/in/david-padrino" target="_blank" rel="noopener noreferrer">
                                <i className="icon-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/dave.padrino">
                                <i className="icon-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/dave_padrino/">
                                <i className="icon-instagram"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="col-lg-12 col-md-12 text-center">
                        <h1 id="fh5co-logo"><a href="index.html">David Padrino</a></h1>
                    </div>

                </div>

            </div>

        </header>
    )
  }
}
