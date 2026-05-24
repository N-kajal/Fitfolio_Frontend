import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axio";
import "../../styles/jobseekerprofile.css";
import JobSeekerNavbar from "../../components/JobSeekerNavbar";

function UserProfile() {
  const navigate = useNavigate();
  const jobSeekerId = localStorage.getItem("userId");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get(`/Job_seeker/${jobSeekerId}`);
      setProfile(res.data);
    };
    fetchProfile();
  }, [jobSeekerId]);

  if (!profile) return null;
  

  return (
    <>
      <JobSeekerNavbar />

      <div className="profile-page">
        <h1>Profile Summary</h1>

        <div className="profile-card">
          <p><b>Name:</b> {profile.full_name}</p>
          <p><b>Email:</b> {profile.email}</p>
          <p><b>Phone:</b> {profile.phone_number}</p>
          <p><b>Education:</b> {profile.education}</p>
          <p><b>Experience:</b> {profile.experience}</p>
          <p><b>Skills:</b> {profile.skills}</p>
          <p><b>Projects:</b> {profile.projects}</p>
          <p><b>Job Preferences:</b> {profile.job_Prefernces}</p>
          <p><b>Links:</b> {profile.links}</p>

          <button onClick={() => navigate("/user/application")}>
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
