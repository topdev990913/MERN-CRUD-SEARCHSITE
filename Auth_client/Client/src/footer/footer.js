import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container-fluid">
        <h1>
          Sea Medicine: <span className="small">a Medavex company</span>
        </h1>
      </div>
      <div className="container-fluid" style={{marginTop: '30px'}}>
        <div className="row w-100">
          <div className="col-12 col-lg-6">
            <div className="col-12 heading">About Us</div>
            <div className="col-12" style={{marginTop:'15px'}}>
              <span className="name1">Sea Medicine,</span>{" "}
              <span className="name">a Medavex company</span>
            </div>
            <div className="col-12 footerlink" style={{marginTop: '10px'}}>
              7527 Ulmerton Rd, Largo, FL 33771
            </div>
            <div className="col-12">
              <span className="phone1" style={{marginTop: '10px'}}>Tel (727) 648-2402</span>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div style={{fontSize:'20px', marginTop:'40px', paddingLeft:'100px', paddingRight:'100px'}}>If you have any questions about the application, appointments, or
            scheduling, please call us! We look forward to seeing you!</div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <span className="bottom">© 2022 Copyright: Seadocfl.com</span>
      </div>
    </div>    
  );
};
export default Footer;
