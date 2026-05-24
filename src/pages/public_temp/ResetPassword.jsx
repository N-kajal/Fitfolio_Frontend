import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/resetpassword.css";

function ResetPassword({ userType }) {

  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      let apiUrl = "";

      if (userType === "jobseeker") {

        apiUrl =
          `fitfoliobackend-production.up.railway.app/Job_seeker/reset-password/${token}`;

      } else {

        apiUrl =
          `fitfoliobackend-production.up.railway.app/Recruiter/reset-password/${token}`;
      }

      const res = await axios.post(
        apiUrl,
        { password }
      );

      alert(res.data.message);

      navigate("/login");

    } catch (err) {

      console.error(err);

      alert("Error resetting password");
    }
  };

  return (

    <div className="reset-page">

      <div className="reset-card">

        <h2 className="reset-title">
          Reset Password
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="reset-input"
          />

          <button
            type="submit"
            className="reset-btn"
          >
            Update Password
          </button>

        </form>

      </div>

    </div>
  );
}

export default ResetPassword;