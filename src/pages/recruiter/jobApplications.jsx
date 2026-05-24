import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axio";
import "../../styles/jobApplications.css";

function JobApplications() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [applications, setApplications] = useState([]);
  const recruiterId = localStorage.getItem("userId");

  useEffect(() => {
    const loadApplications = async () => {
      try {
        const res = await api.get(`/Recruiter/job/${jobId}/applications`);
        setApplications(res.data || []);
      } catch (err) {
        console.error("Failed to load applications", err);
      }
    };

    loadApplications();
  }, [jobId]);

  const updateStatus = async (applicationId, status) => {
    try {
      await api.put("/Recruiter/application/status", null, {
        params: {
          recruiterId,
          applicationId,
          status,
        },
      });

      setApplications((prev) =>
        prev.map((app) =>
          app.id === applicationId ? { ...app, status } : app
        )
      );
    } catch {
      alert("Failed to update application status");
    }
  };

  return (
    <div className="job-applications-page">
      <div className="job-applications-card">
        <h2>Job Applications</h2>

        {applications.length === 0 ? (
          <div className="no-applications">No applications found</div>
        ) : (
          <table className="job-applications-table">
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Status</th>
                <th>CV</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.jobSeeker?.username}</td>

                  <td>
                    <span
                      className={`status-badge ${
                        app.status === "APPROVED"
                          ? "status-shortlisted"
                          : app.status === "REJECTED"
                          ? "status-rejected"
                          : "status-applied"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>

                  <td>
                    {app.status === "REJECTED" ? (
                      <span style={{ color: "#999", fontSize: "14px" }}>
                        Not Available
                      </span>
                    ) : (
                      <a
                        href={`fitfoliobackend-production.up.railway.app/Recruiter/application/${app.id}/cv`}
                        target="_blank"
                        rel="noreferrer"
                        className="action-btn view-cv-btn"
                      >
                        Download CV
                      </a>
                    )}
                  </td>

                  <td>
                    {app.status === "APPLIED" ? (
                      <>
                        <button
                          className="action-btn accept-btn"
                          onClick={() =>
                            updateStatus(app.id, "APPROVED")
                          }
                        >
                          Approve
                        </button>
                        <button
                          className="action-btn reject-btn"
                          onClick={() =>
                            updateStatus(app.id, "REJECTED")
                          }
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
      </div>
    </div>
  );
}

export default JobApplications;
