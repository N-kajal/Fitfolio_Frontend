import "../../styles/jobseekerDashboard.css";
import { useEffect, useState } from "react";
import api from "../../api/axio";
import JobSeekerNavbar from "../../components/JobSeekerNavbar";

function Dashboard() {
  
  const jobSeekerId = localStorage.getItem("userId");

  const [appliedJobs, setAppliedJobs] = useState(0);
  const [receivedOffers, setReceivedOffers] = useState(0);
  const [appliedJobsList, setAppliedJobsList] = useState([]);


  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await api.get(
          `/Job_seeker/applications?jobSeekerId=${jobSeekerId}`
        );

        const applications = res.data;

        // total applied jobs
        setAppliedJobs(applications.length);

        setAppliedJobsList(applications);

        // recruiter accepted offers
        const acceptedOffers = applications.filter(
          (app) => app.status === "APPROVED"
        );

        setReceivedOffers(acceptedOffers.length);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };

    fetchApplications();
  }, [jobSeekerId]);

 
  return (
    <>
        <JobSeekerNavbar />
      {/* PAGE CONTENT */}
      <div className="dashboard-page">
        
  <div className="stats-container">
    <div className="stat-box">
      <p>Applied Jobs</p>
      <h1>{appliedJobs}</h1>
    </div>

    <div className="stat-box">
      <p>Received Offers</p>
      <h1>{receivedOffers}</h1>
    </div>
  </div>

  {/* APPLIED JOBS TABLE */}
  <div className="applied-table-wrapper">
    <h3 className="section-title">Applied Job Details</h3>

    <table className="applied-job-table">
     <thead>
  <tr>
    <th>Job Name</th>
    <th>Company Name</th>
    <th>Applied Date</th>
    <th>Status</th>
  </tr>
</thead>

<tbody>
  {appliedJobsList.length > 0 ? (
    appliedJobsList.map((job, index) => (
      <tr key={index}>
       <td>{job.jobTitle}</td>
<td>{job.companyName}</td>

        <td>
  {job.createdDate
    ? new Date(job.createdDate).toLocaleDateString()
    : "-"}
</td>

        <td className={`status ${job.status?.toLowerCase()}`}>
          {job.status}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
        No applied jobs yet
      </td>
    </tr>
  )}
</tbody>

    </table>
  </div>
</div>
     
    </>
  );
}

export default Dashboard;
