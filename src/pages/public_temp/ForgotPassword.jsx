import { useState } from "react";

import {
  Link,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import "../../styles/forgotpassword.css";



function ForgotPassword() {

  const [searchParams] =
    useSearchParams();

  const roleParam =
    searchParams.get("role");

  const [role] = useState(
    roleParam || "JOB_SEEKER"
  );

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    let url = "";

    if (role === "JOB_SEEKER") {

      url =
        `fitfoliobackend-production.up.railway.app/Job_seeker/forgot-password?email=${email}`;

    } else {

      url =
        `fitfoliobackend-production.up.railway.app/recruiter/forgot-password?email=${email}`;
    }

    try {

      const response = await fetch(url, {
        method: "POST",
      });

      const data = await response.text();

      setMessage(data);

    } catch (error) {

      console.log(error);

      setMessage("Something went wrong");
    }
  };

  return (

    <>
      {/* NAVBAR */}

      <nav className="forgot-navbar">

         <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>


        <button
          className="forgot-back-btn"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

      </nav>

      {/* PAGE */}

      <div className="forgot-page">

        <div className="forgot-card">

          <h1 className="forgot-title">
            Forgot Password
          </h1>

          <p className="forgot-subtitle">
            Enter your registered email
          </p>

          <div className="role-badge">
            {role}
          </div>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="forgot-input"
            />

            <button
              type="submit"
              className="forgot-btn"
            >
              Send Reset Link
            </button>

          </form>

          {message && (

            <p className="forgot-message">
              {message}
            </p>

          )}

          <div className="back-login">

            <Link to="/login">
              Back to Login
            </Link>

          </div>

        </div>

      </div>
    </>
  );
}

export default ForgotPassword;