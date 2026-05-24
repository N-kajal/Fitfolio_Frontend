import { useState } from "react";

import ReactMarkdown from "react-markdown";
import api from "../../api/axio";
import "../../styles/aisuggestions.css";
import JobSeekerNavbar from "../../components/JobSeekerNavbar";
import { useNavigate } from "react-router-dom";

function AISuggestions() {
   const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upload"); // "upload" | "manual"
  const [resumeFile, setResumeFile] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuggestions("");

    try {
      const formData = new FormData();
      if (activeTab === "upload") {
        if (!resumeFile) {
          setError("Please select a resume file.");
          setLoading(false);
          return;
        }
        formData.append("resume", resumeFile);
      } else {
        if (!textInput.trim()) {
          setError("Please enter your skills/interests.");
          setLoading(false);
          return;
        }
        formData.append("textInput", textInput);
      }

      // Use axios to send multipart/form-data
      const res = await api.post("/Job_seeker/ai-suggestions", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuggestions(res.data.suggestions);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.error || "An error occurred while generating suggestions."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
        <nav className="cv-navbar">
           <div
  className="logo-text"
  onClick={() => navigate("/")}
>
  Fit<span>Folio</span>
</div>
      
          <button
        className="cv-back-btn"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
        </nav>
      <div className="ai-suggestions-container">
        <div className="ai-header">
          <h1>AI Career Suggestions</h1>
          <p>
            Upload your resume or enter your skills to receive personalized job roles,
            missing skills, and career path recommendations powered by AI.
          </p>
        </div>

        <div className="ai-tabs">
          <button
            className={`tab-btn ${activeTab === "upload" ? "active" : ""}`}
            onClick={() => setActiveTab("upload")}
          >
            Upload Resume
          </button>
          <button
            className={`tab-btn ${activeTab === "manual" ? "active" : ""}`}
            onClick={() => setActiveTab("manual")}
          >
            Manual Entry
          </button>
        </div>

        <div className="ai-card">
          <form onSubmit={handleSubmit} className="ai-form">
            {activeTab === "upload" && (
              <div className="form-group">
                <label>Upload your Resume (PDF)</label>
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="file-input"
                />
              </div>
            )}

            {activeTab === "manual" && (
              <div className="form-group">
                <label>Enter your Skills, Interests, or Current Role</label>
                <textarea
                  placeholder="e.g. I know React, Node.js, and MongoDB. I am interested in full-stack development..."
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="text-input"
                  rows={5}
                />
              </div>
            )}

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Generating Suggestions..." : "Get AI Suggestions"}
            </button>
          </form>
        </div>

        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Analyzing your profile and finding the best matches...</p>
          </div>
        )}

        {suggestions && !loading && (
          <div className="ai-results">
            <h2>Your AI Recommendations</h2>
            <div className="markdown-content">
              <ReactMarkdown>{suggestions}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AISuggestions;
