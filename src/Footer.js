import React from 'react'
import './style.css'
export default function Footer() {
    return (
        <footer className="tm-bg-gray pt-5 pb-3 tm-text-gray tm-footer">
        <div className="container-fluid tm-container-small">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    
                
                    
                    <ul className="tm-social-links d-flex justify-content-end pl-0 mb-5">
                       <h3 className="tm-text-primary  " style={{"color": "#047091"}}>follow me here</h3>
                        <li className="mb-2"><a href="https://twitter.com/dev_navdeep"><i className="fab fa-twitter"></i></a></li>
                        <li className="mb-2"><a href="https://www.instagram.com/__nav_deep/"><i className="fab fa-instagram"></i></a></li>
                        <li className="mb-2"><a href="https://github.com/navdhakar"><i className="fab fa-github"></i></a></li>
                    </ul>
                    <a href="#" className="tm-text-gray text-right d-block mb-2">Terms of Use</a>
                    <a href="#" className="tm-text-gray text-right d-block">Privacy Policy</a>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4 tm-footer-title" style={{"color": "#047091"}}>Our Links</h3>
                    <ul className="tm-footer-links pl-0">
                        <li><a href="https://navdeep.xyz/">Blog</a></li>
                        <li><a href="#">API</a></li>
                        
                    </ul>
                </div>
                <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                    <h3 className="tm-text-primary mb-4 tm-footer-title" style={{"color": "#047091"}}>About Tipster</h3>
                    <p>Tipster is a place where you can read and post daily tips and trick related to different programming languages</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-7 col-12 px-5 mb-3">
                    Copyright © 2020 Navdeep Dhakar. All rights reserved.
                </div>
                <div className="col-lg-4 col-md-5 col-12 px-5 text-right">
                    Designed by <a href="https://templatemo.com" className="tm-text-gray" rel="sponsored" target="_parent">Navdeep Dhakar</a>
                </div>
            </div>
        </div>
    </footer>
    )
}
