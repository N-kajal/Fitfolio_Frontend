import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/recruiterNavbar.css";


function RecruiterNavbar() {

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

    <nav className="recruiter-navbar">

      {/* LEFT LOGO */}
 <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>

      {/* RIGHT SECTION */}

      <div className="recruiter-right">

        {/* NAV LINKS */}

        <div className="recruiter-links">

          <Link
            to="/recruiter/home"
            className={
              location.pathname === "/recruiter/home"
                ? "active-recruiter-nav"
                : ""
            }
          >
            Home
          </Link>

          <Link
            to="/recruiter/profile"
            className={
              location.pathname === "/recruiter/profile"
                ? "active-recruiter-nav"
                : ""
            }
          >
            Profile
          </Link>

          <Link
            to="/recruiter/home"
            className={
              location.pathname === "/recruiter/home"
                ? "active-recruiter-nav"
                : ""
            }
          >
            Dashboard
          </Link>

          <Link
            to="/recruiter/job-post"
            className={
              location.pathname === "/recruiter/job-post"
                ? "active-recruiter-nav"
                : ""
            }
          >
            Build Job
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

        {/* LOGOUT BUTTON */}

        <button
          className="recruiter-logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </nav>
  );
}

export default RecruiterNavbar;