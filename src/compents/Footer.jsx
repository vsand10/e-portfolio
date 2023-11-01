
import {useTheme } from './ThemeContext'
import ME from "../assests/bitmoji.png"

const Footer = () => {
  const {darkMode} = useTheme();
  return (
    
    <footer data-theme={darkMode}>
    <div className="footer-container" >
      <div className="row footer_row">
        <img src={ME} alt="" className="ME-footer" />
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/victor-sandoval-48b2b5264/" className="footer-links linked" target="_blank">
            <h3>Linkedin</h3>
          </a>
          <a href="https://github.com/vsand10" className="footer-links linked" target="_blank">
            <h3>Github</h3>
          </a>
        </div>

        <div className="footer-text">Made by Victor Sandoval</div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
