import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";


function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
     <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>

      {/* RIGHT SIDE LINKS */}
      <div className="nav-right">
        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/login" className="login-btn">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;