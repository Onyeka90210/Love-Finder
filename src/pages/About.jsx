import React from "react";
import "../styles/About.css";
import Chat from "../assets/Chat.svg";
import Heart from "../assets/Heart.svg";
import Profile from "../assets/Profile.svg";

const About = () => {
  return (
    <>
      <div className="">
        <div className="text-center AU">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elementum nisl sit ut magna
            cras velit nec orci enim. Suspendisse ultrices eget elit adipiscing
            diam sed in aenean condimentum. Dignissim consectetur platea odio
            nulla magnis scelerisque vel. Tellus amet tempus massa ut magnis leo
            molestie a. Duis rhoncus vel massa sit quam odio. Posuere enim
            libero mollis tristique lobortis est turpis orci. At mattis tortor
            cursus dolor ultrices maecenas a tempus. Elementum nisl sit ut magna
            cras velit nec orci enim. Suspendisse ultrices eget elit adipiscing
            diam sed in aenean condimentum. Dignissim consectetur platea odio
            nulla magnis scelerisque vel. Tellus amet tempus massa ut magnis leo
            molestie a. Duis rhoncus vel massa sit quam odio. Posuere enim
            libero mollis tristique lobortis est turpis orci. At mattis tortor
            cursus dolor ultrices maecenas a tempus.
          </p>
        </div>
        <div className="my-5">
          <h2 className="text-center HIW">How it works</h2>
          <div className="d-lg-flex boxdiv my-4">
            <div className="HIWbox">
              <div className="text-center HIWboxinner">
                <img src={Profile} alt="" />
                <h3>Create Profile</h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet vitae consectetur. Diam nulla velit
                odio urna lacinia tincidunt diam tortor. Pellentesque eget lorem
                nisi auct erat sit sed enim. Amet nunc arcu cursus adipiscing
                sapie imperdiet.
              </p>
            </div>
            <div className="HIWbox">
              <div className="text-center HIWboxinner">
              <img src={Heart} alt="" />
              <h3>Find Match</h3>

              </div>
              <p>
                Lorem ipsum dolor sit amet vitae consectetur. Diam nulla velit
                odio urna lacinia tincidunt diam tortor. Pellentesque eget lorem
                nisi auct erat sit sed enim. Amet nunc arcu cursus adipiscing
                sapie imperdiet.
              </p>
            </div>
            <div className="HIWbox">
              <div className="text-center HIWboxinner">
              <img src={Chat} alt="" />
              <h3>Start Dating</h3>

              </div>
              <p>
                Lorem ipsum dolor sit amet vitae consectetur. Diam nulla velit
                odio urna lacinia tincidunt diam tortor. Pellentesque eget lorem
                nisi auct erat sit sed enim. Amet nunc arcu cursus adipiscing
                sapie imperdiet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
