import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LE from "../assets/look each.svg";
import "../styles/Form.css";
import Image from "react-bootstrap/Image";

const Formpage = () => {
  return (
    <>
      <div className="d-lg-flex  formmain">
        <div className="formdiv">
          <Form>
            <div className="formheading mb-4" style={{color:'#7C0B0B'}}>
              <h3>Find True Love</h3>
              <p>Your Perfect Match is Just One Click Away</p>
            </div>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <label For="test" >I am a:</label>
              <select name="" id="test" className="drop formbox" >
                <option value="" >Man looking for woman</option>
                <option value="">Woman looking for man</option>
              </select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Name*</Form.Label> <br />
              <input type="text" placeholder="John Bull" className="customform"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address*</Form.Label>
              <input type="email" placeholder="Enter email" className="customform"/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Zip Code*</Form.Label>
              <input type="number" placeholder="xxx-xxx-xxx" className="customform"/>
            </Form.Group>
<div className="btndiv">
            <button className="formbutton" type="submit">
              Join Now
            </button>
            </div>
          </Form>
        </div>
        <div className="imgdiv">
          <img src={LE} alt="le" className="LE"/>
        </div>
        
      </div>
    </>
  );
};

export default Formpage;
