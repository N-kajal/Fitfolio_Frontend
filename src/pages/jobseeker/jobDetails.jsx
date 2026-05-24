import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axio";
import "../../styles/jobDetails.css";





function JobDetails() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const jobSeekerId = localStorage.getItem("userId");
const [showModal, setShowModal] = useState(false);
const [cvFile, setCvFile] = useState(null);
const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const res = await api.get(`/Job_seeker/job/details/${jobId}`);
        setJob(res.data);
      } catch (error) {
        console.error("Failed to load job details", error);
        setJob(null);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!job) {
    return (
      <div className="job-details-container">
        <button className="back-btn" onClick={() => navigate("/user/home")}>
          ← Back
        </button>
        <p>Job not available anymore</p>
      </div>
    );
  }

  const handleApply = async () => {
  if (!cvFile) {
    alert("Please upload your CV");
    return;
  }

  try {
    setLoading(true);

    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("jobSeekerId", jobSeekerId);
    formData.append("cv", cvFile);

    const response = await fetch(
  "fitfoliobackend-production.up.railway.app/Job_seeker/apply-with-cv",
  {
    method: "POST",
    body: formData
  }
);

if (!response.ok) {
  const errorText = await response.text();
  throw new Error(errorText);
}

alert("Application submitted successfully");

    setShowModal(false);
  } catch(error)  {
    alert(error.message || "Application failed");
  } finally {
    setLoading(false);
  }
};


 return (
  <>
    {/* JOB DETAILS NAVBAR */}
    <nav className="job-details-navbar" >
      {/* LEFT: LOGO */}
        {/* LEFT LOGO */}
 <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>

      {/* RIGHT: BACK BUTTON */}
      <button
        className="jd-back-btn"
        onClick={() => navigate("/user/home")}
      >
         Back
      </button>
      <button
  className="jd-apply-btn"
  onClick={() => setShowModal(true)}
>
  Apply
</button>

    </nav>

    {/* PAGE CONTENT */}
    <div className="job-details-container">
      <div className="job-card">
        {/* Company Logo (Initial) */}
        <div className="company-logo-text">
          {job.companyName?.charAt(0)}
        </div>

        {/* JOB DETAILS */}
        <h2>{job.jobTitle}</h2>
        <p className="job-desc">{job.jobDescription}</p>

        <p><b>Experience:</b> {job.experience}</p>
        <p><b>Salary:</b> {job.salary}</p>
        <p><b>Location:</b> {job.jobLocation}</p>

        <hr />

        {/* COMPANY DETAILS */}
        <h3>{job.companyName}</h3>
        <p>{job.companyDescription}</p>

        <p><b>Industry:</b> {job.industry}</p>
        <p><b>Founded:</b> {job.companyFounded}</p>
        <p><b>Website:</b> {job.companyWebsite}</p>
        <p><b>Email:</b> {job.companyEmail}</p>
        <p><b>Phone:</b> {job.companyPhone}</p>
        <p>
          <b>Address:</b> {job.companyAddress},{" "}
          {job.city}, {job.state}, {job.country}
        </p>
      </div>
    </div>
    {showModal && (
  <div className="modal-overlay">
    <div className="apply-modal">
      <h3>Upload Your CV</h3>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setCvFile(e.target.files[0])}
      />

      <div className="modal-actions">
        <button onClick={handleApply} disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>

        <button onClick={() => setShowModal(false)}>
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

  </>
);

}

export default JobDetails; 