import React from "react";
import logo from "../assets/Logo.svg";
import FL from "../assets/FL.svg";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    <div className="footercover">
        <div className="footerbackground">
          <div className="d-lg-flex footermain">
            <div className="d-flex AYR">
              <div>
                <img src={logo} alt="" className="ps-1" />
                <p style={{ fontWeight: 700 }} className="">
                  Are you ready?
                </p>
              </div>
              <button>Get Started</button>
            </div>

            <div className="FN">
              <a href="" className="footlink">
                <div className=" footernav ">
                <div className="FC">
                  <p>About Us</p>

                  <p>Contact</p>
                  <p>Newsletter</p>
                  <p>Testimonials</p>
                </div>
                <div className="FC">
                  <p>Terms & Conditions</p>
                  <p>Privacy Policy</p>
                  <p>Help Center</p>
                  <p>FAQs</p>
                </div>
                </div>
              </a>
            </div>
          </div>

          <div className="FLdiv">
        <a href="">
            <img src={FL} alt="" className="FL" />
        </a>
          </div>
        </div>
        </div>
    </>
  );
};

export default Footer;
