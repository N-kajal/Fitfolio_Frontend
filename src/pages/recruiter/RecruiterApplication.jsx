import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axio";
import "../../styles/RecruiterApplication.css";

const RecruiterApplication = () => {
  const navigate = useNavigate();
  const recruiterId = localStorage.getItem("userId");

  const [formData, setFormData] = useState({
    cmpname: "",
    cmpdesc: "",
    cmpwebsite: "",
    cmpaddress: "",
    city: "",
    state: "",
    country: "",
    cmpphone: "",
    industry: "",
    recrname: "",
    recremail: "",
    recrphone: "",
    recrposition: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/Recruiter/${recruiterId}`, formData);
      alert("Recruiter profile updated successfully");
    } catch (err) {
      console.error(err);
      alert("Update failed");
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="jobpost-navbar">
         <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>

   <button
  className="cv-back-btn"
  onClick={() => navigate(-1)}
>
   Back
</button>
        
      </nav>

      {/* PAGE */}
      <div className="recruiter-application-page">
        <form onSubmit={handleSubmit} className="profile-form">

          {/* COMPANY DETAILS */}
          <div className="profile-card">
            <h3>Company Details</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Company Name</label>
                <input name="cmpname" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Website</label>
                <input name="cmpwebsite" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Industry</label>
                <input name="industry" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Company Phone</label>
                <input name="cmpphone" onChange={handleChange} />
              </div>

              <div className="form-group full-width">
                <label>Company Description</label>
                <input name="cmpdesc" onChange={handleChange} />
              </div>

              <div className="form-group full-width">
                <label>Address</label>
                <input name="cmpaddress" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>City</label>
                <input name="city" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>State</label>
                <input name="state" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input name="country" onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* RECRUITER DETAILS */}
          <div className="profile-card">
            <h3>Recruiter Details</h3>

            <div className="form-grid">
              <div className="form-group">
                <label>Recruiter Name</label>
                <input name="recrname" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input name="recremail" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input name="recrphone" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Position</label>
                <input name="recrposition" onChange={handleChange} />
              </div>
            </div>
          </div>

          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default RecruiterApplication;
