import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5" style={{backgroundColor:'#e3e1e1'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1 style={{fontSize:'16px'}}>About Us</h1>
            <br />
            <p>
              Grocery Hub is your one-stop solution for convenient grocery shopping. With our delivery and pickup services, you can easily get the groceries you need right at your doorstep.
            </p>
          </div>
          <div className="col-md-4">
          <h1 style={{fontSize:'16px'}}>Newsletter</h1>
            <br />
            <form className="form-inline">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon2" />
                <br/>
                <div className="input-group-append" style={{paddingTop:'6%'}}>
                  <button className="btn btn-danger" type="button" style={{backgroundColor: '#d9534f',
    borderColor: '#d43f3a'}}>Sign Up</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
          <h1 style={{fontSize:'16px'}}>Contact Us</h1>
            <br />
            <p>
              Galvin Library, 33rd Main Street<br />
              Chicago, Illinois 60616<br />
              Email: iit@iit.com<br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <p className="text-center">&copy; 2023 Online Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
