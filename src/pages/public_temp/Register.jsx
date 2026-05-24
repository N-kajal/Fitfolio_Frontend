import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axio";
import "../../styles/register.css";
import Navbar from "../../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";


function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      if (formData.role === "JOB_SEEKER") {
        await api.post("/Job_seeker", {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: "JOB_SEEKER",
        });
      }

      if (formData.role === "RECRUITER") {
        await api.post("/Recruiter", {
          username: formData.username,
          cmpemail: formData.email,
          password: formData.password,
          role: "RECRUITER",
        });
      }

      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="register-container">
        <div className="register-card">
          <h2 className="register-title">Create Account</h2>

          <form onSubmit={handleSubmit}>
            {/* ROW 1 */}
            <div className="form-row">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="register-input"
                value={formData.username}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="register-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">

  {/* PASSWORD FIELD */}
  <div className="password-wrapper">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="Password"
      className="register-input"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <span
      className="eye-icon"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>

  {/* CONFIRM PASSWORD FIELD */}
  <div className="password-wrapper">
    <input
      type={showConfirmPassword ? "text" : "password"}
      name="confirmPassword"
      placeholder="Confirm Password"
      className="register-input"
      value={formData.confirmPassword}
      onChange={handleChange}
      required
    />
    <span
      className="eye-icon"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    >
      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>

</div>


            {/* ROW 3 */}
            <select
              name="role"
              className="register-input full-width"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="JOB_SEEKER">Job Seeker</option>
              <option value="RECRUITER">Recruiter</option>
            </select>

            {/* ROW 4 */}
            <button type="submit" className="save-btn full-width">
              Save
            </button>
          </form>

          <p className="register-footer">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
