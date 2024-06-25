import React ,{useEffect} from 'react';
// import './Footer.css';

const Footer = () => {
  useEffect(() => {
    const adjustFooter = () => {
      const footer = document.querySelector('footer');
      if (document.body.scrollHeight <= window.innerHeight) {
        footer.style.position = 'absolute';
        footer.style.bottom = '0';
        footer.style.width = '100%';
      } else {
        footer.style.position = 'relative';
      }
    };

    window.addEventListener('resize', adjustFooter);
    window.addEventListener('load', adjustFooter);
    adjustFooter();

    return () => {
      window.removeEventListener('resize', adjustFooter);
      window.removeEventListener('load', adjustFooter);
    };
  }, []);
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We celebrate the rich and diverse culture of India by offering a wide range of products that reflect our heritage. Our mission is to bring the beauty of Indian art and craftsmanship to your doorstep.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/wholesale-buy">Wholesale Buy</a></li>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/offers">Offers</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@indianart.com</p>
          <p>Phone: +91 123 456 7890</p>
          <div className="socials">
            <a href="https://www.facebook.com"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com"><img src="/path/to/twitter-icon.png" alt="Twitter" /></a>
            <a href="https://www.instagram.com/kaushal_2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="images\instagram.jpeg" alt="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2024 Indian Art | Designed by YourName
      </div>
    </footer>
  );
};

export default Footer;
