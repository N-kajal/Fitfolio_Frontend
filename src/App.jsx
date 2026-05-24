import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./pages/public_temp/Home";
import Login from "./pages/public_temp/Login";
import Register from "./pages/public_temp/Register";
import UserHome from "./pages/jobseeker/UserHome";
import Application from "./pages/jobseeker/Application";
import Dashboard from "./pages/jobseeker/Dashboard";
import RecruiterHome from "./pages/recruiter/RecruiterHome";
import JobPost from "./pages/recruiter/JobPost";
import AdminUsers from "./pages/recruiter/AdminUsers";
import RecruiterApplication from "./pages/recruiter/RecruiterApplication";
import Info from "./pages/public_temp/info";
import CvBuilder from "./pages/common/CVBuilder";
import JobDetails from "./pages/jobseeker/jobDetails"
import CVEditor from "./pages/common/CEditor";
import UserProfile from "../src/pages/jobseeker/userprofile";
import RecruiterProfile from "../src/pages/recruiter/recruiterprofile";
import JobApplications  from "./pages/recruiter/jobApplications";
import ForgotPassword from "./pages/public_temp/ForgotPassword";
import ResetPassword from "./pages/public_temp/ResetPassword";
import AISuggestions from "./pages/jobseeker/AISuggestions";

function App() {
  return (
    <Routes>
      <Route
  path="/reset-password/jobseeker/:token"
  element={<ResetPassword userType="jobseeker" />}
/>

<Route
  path="/reset-password/recruiter/:token"
  element={<ResetPassword userType="recruiter" />}
/>
      <Route
  path="/forgot-password" element={<ForgotPassword />}/>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user/home" element={<UserHome />} />
      <Route path="/user/application" element={<Application />} />
      <Route path="/user/dashboard" element={<Dashboard />} />
      <Route path="/recruiter/home" element={<RecruiterHome />} />
      <Route path="/recruiter/job-post" element={<JobPost />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/recruiter/application" element={<RecruiterApplication />} />
      <Route path="/info" element={<Info />} />
      <Route path="/user/cv" element={<CvBuilder />} />
      <Route path="/user/cv/editor/:templateId" element={<CVEditor />} />
      <Route path="/user/job-details/:jobId" element={<JobDetails />} />
      <Route path="/user/profile" element={<UserProfile />} />    
      <Route path="/user/ai-suggestions" element={<AISuggestions />} />
      <Route path="/recruiter/profile" element={<RecruiterProfile />} />
      <Route path="/recruiter/job/:jobId/applications"  element={<JobApplications />} />



    </Routes>
  );
}

export default App;
