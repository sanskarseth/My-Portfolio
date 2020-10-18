import React from 'react';
import "./Footer.css";
import {ReactComponent as Github} from "./img/github-brands.svg";
import {ReactComponent as Insta} from "./img/instagram-brands.svg";
import {ReactComponent as Facebook} from "./img/facebook-brands.svg";
import {ReactComponent as LinkedIn} from "./img/linkedin-brands.svg";

const Footer = () => {
    return ( 
        <div>
            <div className="container-fluid last">
                  <div className="row">

                        <div className="col-lg-12 text-center text-white">
                              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/_seth_sanskar/">
                                    <Insta className="icons"></Insta>
                              </a>
                              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://github.com/sanskarseth">
                                    <Github className="icons"></Github>
                              </a>
                              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sethsanskar">
                                    <Facebook className="icons"></Facebook>
                              </a>

                              <a className="text-white" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sanskar-seth-712764129/">
                                    <LinkedIn className="icons fa-7x"></LinkedIn>
                              </a>
                        </div>

                  </div>
                  <div className="row">
                        <div className="col-12 col-md-4 col-sm-4 text-center text-white">
                              <p>Sanskar Seth</p>
                        </div>
                        <div className="col-12 col-md-4 col-sm-4 text-center text-white">
                              <p>Made with Love 
                                    <span role="img" aria-label="heart">
                                        ❤️️
                                    </span>
                                </p>

                        </div>
                        <div className="col-12 col-md-4 col-sm-4 text-center text-white">
                              <p>© Sanskar</p>
                        </div>
                  </div>
            </div>
        </div>
    
    );
}
 
export default Footer;