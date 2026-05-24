import Navbar from "../../components/Navbar";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../../images/homepage.png";

function Home() {

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          {/* LEFT TEXT */}

          <div className="hero-text">

            <h1>
              Your Career,
              <br />
              Perfectly Aligned
              <br />
              With FitFolio
            </h1>

            <p>
              Create your profile and get started
            </p>

            <div className="hero-buttons">

              <button
                className="btn"
                onClick={() => navigate("/user/cv")}
              >
                <b>Build CV</b>
              </button>

              <button
                className="btn"
                onClick={() =>
                  navigate("/info?role=JOB_SEEKER")
                }
              >
                <b>Find a Job</b>
              </button>

              <button
                className="btn"
                onClick={() =>
                  navigate("/info?role=RECRUITER")
                }
              >
                <b>Hire now</b>
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="hero-image">

            <img
              src={heroImage}
              alt="Career Growth"
            />

          </div>

        </div>

      </section>

   \

    

      {/* FEATURES SECTION */}

      <section className="features-section">

        <h2 className="section-title">
          Why Choose FitFolio?
        </h2>

        <div className="features-container">

          <div className="feature-card">

            <h3>
              AI Career Suggestions
            </h3>

            <p>
              Get smart recommendations for job roles,
              missing skills, and career growth using AI.
            </p>

          </div>

          <div className="feature-card">

            <h3>
              Resume Builder
            </h3>

            <p>
              Create professional resumes easily with
              customizable templates.
            </p>

          </div>

          <div className="feature-card">

            <h3>
              Smart Job Search
            </h3>

            <p>
              Search and apply for jobs that match
              your interests and skills.
            </p>

          </div>

          <div className="feature-card">

            <h3>
              Recruiter Dashboard
            </h3>

            <p>
              Recruiters can post jobs and manage
              applications efficiently.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

<section className="steps-section">

  <h2 className="section-title">
    How FitFolio Works
  </h2>

  <div className="steps-line">

    <div className="step-item">
      <span>1</span>
      <p>Create Account</p>
    </div>

    <div className="line"></div>

    <div className="step-item">
      <span>2</span>
      <p>Build Resume</p>
    </div>

    <div className="line"></div>

    <div className="step-item">
      <span>3</span>
      <p>Get AI Suggestions</p>
    </div>

    <div className="line"></div>

    <div className="step-item">
      <span>4</span>
      <p>Apply for Jobs</p>
    </div>

  </div>

</section>

      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 FitFolio.
          All rights reserved.
          Unauthorized use prohibited.
        </p>

      </footer>
    </>
  );
}

export default Home;