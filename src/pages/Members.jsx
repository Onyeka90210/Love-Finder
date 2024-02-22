import React from "react";
import MB from '../assets/MB.svg'
import SJ from '../assets/SJ.svg'
import RP from '../assets/RP.svg'
import KS from '../assets/KS.svg'
import SS from '../assets/SS.svg'
import MayB from '../assets/MayB.svg'
import PD from '../assets/PD.svg'
import KJ from '../assets/KJ.svg'
import '../styles/Members.css'






const Members = () => {
  return (
    <>
      <div className="my-5">
        <h2 className="text-center MPM">Most Popular Members</h2>
        <div className="text-white mem">
          <div className="d-lg-flex memdiv">
            <div className="text-center membox">
              <img src={MB} alt="" />
              <h3>Mary Bells</h3>
              <p>Joined three months ago</p>
            </div>
            <div className="text-center membox">
              <img src={SJ} alt="" />
              <h3>Stella John</h3>
              <p>Joined two months ago</p>
            </div>
            <div className="text-center membox">
              <img src={RP} alt="" />
              <h3>Role Pail</h3>
              <p>Joined four months ago</p>
            </div>
            <div className="text-center membox">
              <img src={KS} alt="" />
              <h3>Kingsly Sly</h3>
              <p>Joined three months ago</p>
            </div>
          </div>
          <div className="d-lg-flex memdiv">
            <div className="text-center membox">
              <img src={SS} alt="" />
              <h3>Stevel Soul
              </h3>
              <p>Joined two months ago</p>
            </div>
            <div className="text-center membox">
              <img src={MayB} alt="" />
              <h3>May Blue
              </h3>
              <p>Joined three months ago</p>
            </div>
            <div className="text-center membox">
              <img src={PD} alt="" />
              <h3>Paul Doe
              </h3>
              <p>Joined three months ago</p>
            </div>
            <div className="text-center membox">
              <img src={KJ} alt="" />
              <h3>Kevin Job
              </h3>
              <p>Joined three months ago</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="VA">View All</button>
        </div>
      </div>
    </>
  );
};

export default Members;
