import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <p className="footer-title">{title}</p>
                <p className="footer-detail">{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="footer-quote container">
        <p>
          🌍 Life’s too short to stay in one place. Explore more with{" "}
          <strong>World Atlas</strong> — your passport to virtual adventures!
          🌐✈️
        </p>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                🧭 &copy; 2025 Dhiman Majumdar — All rights preserved like
                ancient maps 🗺️
              </p>
            </div>

            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/contact">Say Hello 👋</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
