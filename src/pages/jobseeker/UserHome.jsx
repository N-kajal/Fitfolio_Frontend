import "../../styles/jobseekerHome.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../api/axio";
import JobSeekerNavbar from "../../components/JobSeekerNavbar";


function UserHome() {
  const navigate = useNavigate();

  

  const [keyword, setKeyword] = useState("");
  const [jobs, setJobs] = useState([]);
  



  // 🔍 SEARCH JOBS
  const handleSearch = async () => {
    if (!keyword.trim()) return;

    try {
      const res = await api.get("/Job_seeker/search/jobs", {
        params: { keyword }
      });
      setJobs(res.data);
    } catch (error) {
      console.error("Search failed", error);
    }
  };

 

  return (
    <>
      <JobSeekerNavbar />

      {/* MAIN CONTENT */}
      <div className="user-container">
        {/* SEARCH BAR */}
        <div className="search-bar">
          <input
  type="text"
  placeholder="Search by Job Title or Company"
  value={keyword}
  onChange={(e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === "") {
      setJobs([]); // 🔥 clear table data when input is empty
    }
  }}
/>

          <button onClick={handleSearch}>Search</button>
        </div>

        <h3 className="section-title">Job Results</h3>

<table className="job-table">
  <thead>
    <tr>
      <th>Company</th>
      <th>Industry</th>
      <th>Position</th>
      <th>Experience</th>
      <th>Location</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {jobs.length > 0 ? (
      jobs.map((job) => (
        <tr key={job.jobId}>
          <td>{job.company}</td>
          <td>{job.industry}</td>
          <td>{job.position}</td>
          <td>{job.experience}</td>
          <td>{job.location}</td>
          <td>
            <button
              className="visit-btn"
              onClick={() =>
                navigate(`/user/job-details/${job.jobId}`)
              }
            >
              Visit Profile
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
          🔍 Search for jobs to see results
        </td>
      </tr>
    )}
  </tbody>
</table>       
      </div>
    </>
  );
}

export default UserHome;
  