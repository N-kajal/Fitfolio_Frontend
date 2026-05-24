import { useState, useEffect } from "react";
import api from "../../api/axio";
import "../../styles/jobseekerApplication.css";
import { useNavigate } from "react-router-dom";


function Application() {
  const jobSeekerId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    education: "",
    experience: "",
    skills: "",
    projects: "",
    job_Prefernces: "",
    links: "",
  });

  const [originalData, setOriginalData] = useState({});

  // 🔹 FETCH EXISTING PROFILE
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/Job_seeker/${jobSeekerId}`);
        setFormData(res.data);
        setOriginalData(res.data); // keep copy for comparison
      } catch  {
        alert("Failed to load profile");
      }
    };

    fetchProfile();
  }, [jobSeekerId]);

  // 🔹 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 UPDATE PROFILE (ONLY CHANGED FIELDS)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {};

    Object.keys(formData).forEach((key) => {
      if (
        formData[key] !== originalData[key] &&
        formData[key] !== ""
      ) {
        updatedData[key] = formData[key];
      }
    });

    if (Object.keys(updatedData).length === 0) {
      alert("No changes made");
      return;
    }

    try {
      await api.put(`/Job_seeker/${jobSeekerId}`, updatedData);
alert("Profile updated successfully!");
setOriginalData(formData);

// ✅ navigate back to profile info page
navigate("/user/profile");

    } catch {
      alert("Failed to update profile");
    }
  };

 ;

  return (
    <>
      {/* NAVBAR */}
      <nav className="dashboard-navbar">
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

      {/* PAGE CONTENT */}
      <div className="application-page">
        <h1>Personal Details</h1>

        <form className="application-form" onSubmit={handleSubmit}>
          <input name="full_name" value={formData.full_name || ""} placeholder="Full Name" onChange={handleChange} />
          <input name="email" value={formData.email || ""} placeholder="Email" onChange={handleChange} />
          <input name="phone_number" value={formData.phone_number || ""} placeholder="Phone Number" onChange={handleChange} />
          <input name="education" value={formData.education || ""} placeholder="Education" onChange={handleChange} />
          <input name="experience" value={formData.experience || ""} placeholder="Experience" onChange={handleChange} />
          <input name="skills" value={formData.skills || ""} placeholder="Skills" onChange={handleChange} />
          <input name="projects" value={formData.projects || ""} placeholder="Projects" onChange={handleChange} />
          <input name="job_Prefernces" value={formData.job_Prefernces || ""} placeholder="Job Preferences" onChange={handleChange} />
          <input name="links" value={formData.links || ""} placeholder="Links" onChange={handleChange} />

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </>
  );
}

export default Application;
