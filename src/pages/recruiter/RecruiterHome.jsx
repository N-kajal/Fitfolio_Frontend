import "../../styles/recruiterHome.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/axio";
import RecruiterNavbar from "../../components/RecruiterNavbar";

function RecruiterHome() {
  const navigate = useNavigate();
  const recruiterId = localStorage.getItem("userId");

  const [totalJobs, setTotalJobs] = useState(0);
  const [totalApplications, setTotalApplications] = useState(0);
  const [activeJobs, setActiveJobs] = useState(0);
  const [jobs, setJobs] = useState([]);

  const [shortlistedCandidates, setShortlistedCandidates] = useState(0);

  

  /* ================= LOAD DASHBOARD DATA ================= */
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        const res = await api.get(`/Recruiter/${recruiterId}/jobs`);
        const jobs = res.data.jobs || [];
        setJobs(jobs);

        // Total Jobs
        setTotalJobs(jobs.length);

        // Active Jobs (currently same as total jobs)
        setActiveJobs(jobs.length);

        let applicationsCount = 0;
        let shortlistedCount = 0;

        jobs.forEach((job) => {
          if (job.applications && job.applications.length > 0) {
            applicationsCount += job.applications.length;

            job.applications.forEach((app) => {
              if (
                app.status === "SHORTLISTED" ||
                app.status === "APPROVED"
              ) {
                shortlistedCount++;
              }
            });
          }
        });

        setTotalApplications(applicationsCount);
        setShortlistedCandidates(shortlistedCount);
      } catch (error) {
        console.error("Failed to load recruiter dashboard data:", error);
      }
    };

    loadDashboardData();
  }, [recruiterId]);

  return (
    <>
    <RecruiterNavbar />
      {/* PAGE CONTENT */}
      <div className="recruiter-page">
        <div className="stats-row">
          <div className="stat-card">
            <p>Total Jobs Posted</p>
            <h2>{totalJobs}</h2>
          </div>

          <div className="stat-card">
            <p>Total Applications Received</p>
            <h2>{totalApplications}</h2>
          </div>

          <div className="stat-card">
            <p>Active Job Listings</p>
            <h2>{activeJobs}</h2>
          </div>

          <div className="stat-card">
            <p>Shortlisted Candidates</p>
            <h2>{shortlistedCandidates}</h2>
          </div>
        </div>
        <div className="applications-table-container">
  <h2>Job Applications</h2>

  <table className="applications-table">
    <thead>
      <tr>
        <th>Job Title</th>
        <th>Applications Received</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      {jobs.length === 0 ? (
        <tr>
          <td colSpan="3">No jobs posted yet</td>
        </tr>
      ) : (
        jobs.map((job) => (
          <tr key={job.id}>
            <td>{job.title}</td>
            <td>{job.applications?.length || 0}</td>
            <td>
              <button
                className="view-btn"
                onClick={() =>
                  navigate(`/recruiter/job/${job.id}/applications`)
                }
              >
                View Applications
              </button>
            </td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>



        
      </div>
    </>
  );
}

export default RecruiterHome;
