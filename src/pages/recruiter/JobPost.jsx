import { useEffect, useState } from "react";
import "../../styles/jobPost.css";
import api from "../../api/axio";
import RecruiterNavbar from "../../components/RecruiterNavbar";

function JobPost() { 1

  const recruiterId = localStorage.getItem("userId");

  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [editData, setEditData] = useState({});

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    experience: "",
    salary: "",
    location: "",
  });

  

  /* ================= LOAD JOBS ================= */
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const res = await api.get(`/Recruiter/${recruiterId}/jobs`);
        setJobs(res.data.jobs || []);
      } catch (error) {
        console.error("Failed to load jobs:", error);
      }
    };
    loadJobs();
  }, [recruiterId]);

  /* ================= INPUT HANDLERS ================= */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  /* ================= POST JOB ================= */
  const handlePostJob = async () => {
    try {
      await api.post(`/Recruiter/${recruiterId}/job`, formData);

      setFormData({
        title: "",
        description: "",
        experience: "",
        salary: "",
        location: "",
      });

      const res = await api.get(`/Recruiter/${recruiterId}/jobs`);
      setJobs(res.data.jobs || []);
    } catch (error) {
      console.error("Failed to post job:", error);
      alert("Failed to post job");
    }
  };

  /* ================= EDIT JOB ================= */
  const handleEdit = (job) => {
    setEditingJobId(job.id);
    setEditData({
      title: job.title,
      description: job.description,
      experience: job.experience,
      salary: job.salary,
      location: job.location,
    });
  };

  const handleUpdateJob = async (jobId) => {
    try {
      await api.put(`/Recruiter/${recruiterId}/job/${jobId}`, editData);

      setJobs((prev) =>
        prev.map((job) =>
          job.id === jobId ? { ...job, ...editData } : job
        )
      );

      setEditingJobId(null);
    } catch (error) {
      console.error("Failed to update job:", error);
      alert("Failed to update job");
    }
  };

  /* ================= DELETE JOB ================= */
  const handleDeleteJob = async (jobId) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;

    try {
      await api.delete(`/Recruiter/${recruiterId}/job/${jobId}`);
      setJobs((prev) => prev.filter((job) => job.id !== jobId));
    } catch (error) {
      console.error("Failed to delete job:", error);
      alert("Failed to delete job");
    }
  };

  return (
    <>
       <RecruiterNavbar />

      {/* PAGE */}
      <div className="jobpost-page">
        <div className="jobpost-layout">

          {/* FORM SECTION */}
          <div className="jobpost-section">
            <h3>Job Posting Form</h3>
            <div className="jobpost-form">
              <div className="form-row">
                <label>Title</label>
                <input name="title" value={formData.title} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>Description</label>
                <input name="description" value={formData.description} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>Experience</label>
                <input name="experience" value={formData.experience} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>Salary</label>
                <input name="salary" value={formData.salary} onChange={handleChange} />
              </div>

              <div className="form-row">
                <label>Location</label>
                <input name="location" value={formData.location} onChange={handleChange} />
              </div>

              <button className="post-btn" onClick={handlePostJob}>
                Post Job
              </button>
            </div>
          </div>
          </div>

          {/* TABLE SECTION */}
           <div className="jobpost-section">
            <h3>Posted Jobs</h3>
            <div className="jobs-table-wrapper">
             <table className="jobs-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Created Date</th>
                  <th>Experience</th>
                  <th>Description</th>
                  <th>Salary</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job, index) => (
  <tr key={job.id}>
    <td>{index + 1}</td>


                    {editingJobId === job.id ? (
                      <>
                        <td><input name="title" value={editData.title} onChange={handleEditChange} /></td>
                        <td>{job.createdDate || "—"}</td>
                        <td><input name="experience" value={editData.experience} onChange={handleEditChange} /></td>
                        <td><input name="description" value={editData.description} onChange={handleEditChange} /></td>
                        <td><input name="salary" value={editData.salary} onChange={handleEditChange} /></td>
                        <td><input name="location" value={editData.location} onChange={handleEditChange} /></td>
                        <td>
                          <button onClick={() => handleUpdateJob(job.id)}>Save</button>
                          <button onClick={() => setEditingJobId(null)}>Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{job.title}</td>
                        <td>{job.createdDate || "—"}</td>
                        <td>{job.experience}</td>
                        <td>{job.description}</td>
                        <td>{job.salary}</td>
                        <td>{job.location}</td>
                        <td>
                          <button onClick={() => handleEdit(job)}>Update</button>
                          <button onClick={() => handleDeleteJob(job.id)}>Delete</button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
      
    </>
  );
}

export default JobPost;
