import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="footer-column">
            <h4 className="text-lg font-semibold mb-4"> <img
            src="https://res.cloudinary.com/dlicwfgtq/image/upload/v1706929148/bw/makjnf7l0rfsa0krvuiu.jpg"
            alt="Logo"
            
            style={{ height: '2rem', fontSize: "1rem" }}
          /></h4>
            <ul>
              <li>Curriculum</li>
              <li>Success Stories</li>
              <li>Blog Posts</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-lg font-semibold mb-4">Offerings</h4>
            <ul>
              <li>Full Stack Web Development Track</li>
              <li>Backend Development Track</li>
              <li>Frontend Development Track</li>
              <li>All Courses</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-lg font-semibold mb-4">Policies</h4>
            <ul>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Pricing Policy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="text-lg font-semibold mb-4">Follow us</h4>
            <ul className="flex space-x-4 items-center">
              <li>
                <a href="/">
                  <FacebookIcon/>
                </a>
              </li>
              <li>
                <a href="/">
                <TwitterIcon/>
                </a>
              </li>
              <li>
                <a href="/">
                <InstagramIcon/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
