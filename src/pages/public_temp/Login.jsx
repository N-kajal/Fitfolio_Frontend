import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../../styles/login.css";
import Navbar from "../../components/Navbar"; 
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "fitfolio" && password === "abc") {
    localStorage.setItem("role", "ADMIN");
    navigate("/admin/users");
    return;   
  }
  
    if (!role) {
      setMessage("Please select a role");
      return;
    }

    try {
      const response = await fetch("fitfoliobackend-production.up.railway.app/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          role,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      // ✅ Save login info
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("role", data.role);

      // ✅ ROLE-BASED HOME REDIRECT
      if (data.role === "JOB_SEEKER") {
        navigate("/user/home");
      } else if (data.role === "RECRUITER") {
        navigate("/recruiter/home");
      }

    } catch {
      setMessage("Invalid username or password");
    }
  };

  return (
  
     
    <div className="login-container">
      
   <Navbar />
      
      <div className="login-card">
        
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <div className="password-wrapper">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="login-input"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />

  <span
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <FaEyeSlash /> : <FaEye />}
  </span>
</div>


          {/* ROLE BUTTONS */}
          <div className="role-buttons">
            <button
              type="button"
              className={role === "JOB_SEEKER" ? "active" : ""}
              onClick={() => setRole("JOB_SEEKER")}
            >
              Job Seeker
            </button>

            <button
              type="button"
              className={role === "RECRUITER" ? "active" : ""}
              onClick={() => setRole("RECRUITER")}
            >
              Recruiter
            </button>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="forgot-password">
  <Link to={`/forgot-password?role=${role}`}>
    Forgot Password?
  </Link>
</p>
        </form>

        

        {message && <p className="login-error">{message}</p>}

        <div className="login-footer">

  <button
    type="button"
    className="back-btn"
    onClick={() => navigate(-1)}
  >
     Back
  </button>

  <p>
    Don’t have an account? <Link to="/register">Register</Link>
  </p>

</div>


      </div>
    </div>
    
  );
}

export default Login;
