import React from "react";


function Footer() {
  return (
    <div className="footer" >
      <div className="container text-white">
        <div className="row mb-4">
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2">
            <h2 className="fs-3">Travel</h2>
            <p className="fs-6">
              Travel You choose the destination,
              <br />
              we offer you the experience
            </p>
            <div className="icons">
              <i className="fa-brands fa-facebook m-1"></i>
              <i className="fa-brands fa-twitter m-1"></i>
              <i className="fa-brands fa-instagram m-1"></i>
              <i className="fa-brands fa-youtube m-1"></i>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2">
            <h2 className="fs-3">About</h2>
            <p>About Us</p>
            <p>Features</p>
            <p>New & Blog</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2">
            <h2 className="fs-3">Company</h2>
            <p>Team</p>
            <p>Pricing</p>
            <p>Become a member</p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2">
            <h2 className="fs-3">Support</h2>
            <p>FAQS</p>
            <p>Support Center</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <div className="">
            <p>&copy;2023 All rights reserved</p>
          </div>
          <div className="">
            <span>Terms & Agreements</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
