import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1 className="text-5xl md:text-7xl font-extrabold text-center text-cyan-400 tracking-widest mb-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.9)] animate-fadeIn animate-bounce-slow">
                AtlasAura
                <span
                  className="inline-block ml-2"
                  style={{ animation: "spin 5s linear infinite" }}
                >
                  🌏
                </span>
              </h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
