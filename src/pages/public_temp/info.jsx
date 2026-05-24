import { useSearchParams, useNavigate } from "react-router-dom";
import "../../styles/info.css";

function Info() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const role = searchParams.get("role"); // JOB_SEEKER | RECRUITER

  // Safety: if user directly hits /info without role
  if (!role) {
    navigate("/");
    return null;
  }

  return (
  
  <div className="info-page">
    <div className="info-container">
      {role === "JOB_SEEKER" && (
        <>
          <h1>Find a Job</h1>
          <p>
            FitFolio helps you build your professional profile, apply for jobs,
            and track your application status easily.
          </p>

          <ul>
           <li>✔ Discover jobs from trusted recruiters</li>
           <li>✔ Search and filter roles by skills and location</li>
           <li>✔ Apply quickly using your FitFolio profile</li>
           <li>✔ Track application status in real time</li>
          </ul>
        </>
      )}

      {role === "RECRUITER" && (
        <>
          <h1>For Recruiters</h1>
          <p>
            FitFolio enables you to post jobs, review candidates, and manage
            applications efficiently.
          </p>

          <ul>
            <li>Post and manage job openings easily</li>
            <li>✔  Access verified job seeker profiles</li>
            <li>✔  Review applications with structured data</li>
             <li>✔  Shortlist and manage candidates efficiently</li>
             <li>✔  Streamline the entire hiring process</li>
          </ul>
        </>
      )}

      <div className="info-buttons">
        <button className="btn secondary" onClick={() => navigate("/")}>
          Back
        </button>

        <button
          className="btn primary"
          onClick={() => navigate(`/register?role=${role}`)}
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
);

}

export default Info;
