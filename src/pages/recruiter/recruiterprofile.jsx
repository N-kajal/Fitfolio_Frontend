import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axio";
import "../../styles/recruiterProfile.css";
import RecruiterNavbar from "../../components/RecruiterNavbar";

function RecruiterProfile() {
  const navigate = useNavigate();
  const recruiterId = localStorage.getItem("userId");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await api.get(`/Recruiter/${recruiterId}`);
      setProfile(res.data);
    };
    fetchProfile();
  }, [recruiterId]);

  if (!profile) return null;

  return (
    <>
      <RecruiterNavbar />

      {/* PROFILE VIEW */}
      <div className="recruiter-profile-page">
        <div className="profile-card">
          <h2>Company Details</h2>
          <p><b>Name:</b> {profile.cmpname}</p>
          <p><b>Industry:</b> {profile.industry}</p>
          <p><b>Website:</b> {profile.cmpwebsite}</p>
          <p><b>Phone:</b> {profile.cmpphone}</p>
          <p><b>Address:</b> {profile.cmpaddress}</p>

          <h2>Recruiter Details</h2>
          <p><b>Name:</b> {profile.recrname}</p>
          <p><b>Email:</b> {profile.recremail}</p>
          <p><b>Phone:</b> {profile.recrphone}</p>
          <p><b>Position:</b> {profile.recrposition}</p>

          <button
            className="edit-btn"
            onClick={() => navigate("/recruiter/application")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default RecruiterProfile;
