import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    const path = process.env.PUBLIC_URL;
    return (
        <footer className="footer">
            <div className="footer-content">
              <div>
                <img src={`${path}/assets/images/footer/logo_aptech.png`} alt="Logo" className="footer-logo" /> {/* Add the class here */}
              </div>
                <div className="footer-category">
                    <h1>About Us</h1>
                    <p>We are a team of passionate developers.</p>
                </div>
                <div className="footer-category">
                    <h1>Contact</h1>
                    <ul>
                        <li><h4>Email: aptech.fpt@fe.edu.vn</h4></li>
                        <li><h4>Address: 590 Cach Mang Thang 8 Street, Ward 11, District 3, Ho Chi Minh City, Vietnam</h4></li>
                        <li><h4>Hotline: 0931 313 329</h4></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 The Cosmic Discoveries. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
