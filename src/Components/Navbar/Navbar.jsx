import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const navbarStyle = ({ isActive }) => {
    return {
      fontSize: isActive ? "22px" : "17px",
      fontWeight: isActive ? "600" : "100",
      color: isActive ? "yellow" : "#fff",
    };
  };
  return (
    <header>
      <Link to="/" className="logo">
        Logo
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/" style={navbarStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="about" style={navbarStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
