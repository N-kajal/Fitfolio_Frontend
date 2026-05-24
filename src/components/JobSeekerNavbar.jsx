import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/jobSeekerNavbar.css";


function JobSeekerNavbar() {

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {

  const confirmLogout = window.confirm(
    "Are you sure you want to logout?"
  );

  if (confirmLogout) {

    localStorage.clear();

    navigate("/login");
  }
};

  return (

    <nav className="job-navbar">

      {/* LEFT LOGO */}

      <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>

      {/* RIGHT SECTION */}

      <div className="job-nav-right">

        {/* NAV LINKS */}

        <div className="job-nav-links">

          <Link
            to="/user/home"
            className={
              location.pathname === "/user/home"
                ? "active-nav"
                : ""
            }
          >
            Home
          </Link>

          <Link
            to="/user/profile"
            className={
              location.pathname === "/user/profile"
                ? "active-nav"
                : ""
            }
          >
            Profile
          </Link>

          <Link
            to="/user/dashboard"
            className={
              location.pathname === "/user/dashboard"
                ? "active-nav"
                : ""
            }
          >
            Dashboard
          </Link>

          <Link
            to="/user/cv"
            className={
              location.pathname === "/user/cv"
                ? "active-nav"
                : ""
            }
          >
            Build CV
          </Link>

          <Link
            to="/user/ai-suggestions"
            className={
              location.pathname === "/user/ai-suggestions"
                ? "active-nav"
                : ""
            }
          >
            AI Suggestions
          </Link>

        </div>

        {/* LOGOUT */}

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default JobSeekerNavbar;