import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ==================== AUTHENTICATION ====================
import Login from "./auth/Login";
import Register from "./auth/Register";

// ==================== STUDENT ====================
import StudentDashboard from "./Student/StudentDashboard";
import StudentProfile from "./Student/StudentProfile";
import ResumeUpload from "./Student/ResumeUpload";
import ResumeAnalysis from "./Student/ResumeAnalysis";
import JobPortal from "./Student/JobPortal";
import AIMatch from "./Student/AIMatch";
import Assessments from "./Student/Assessments";
import MockInterview from "./Student/MockInterview";
import Applications from "./Student/Applications";
import Notifications from "./Student/Notifications";

// ==================== COMPANY ====================
import CompanyLayout from "./layouts/CompanyLayout";
import CompanyDashboard from "./Company/CompanyDashboard";
import CompanyProfile from "./Company/CompanyProfile";
import PostJob from "./Company/PostJob";
import ManageJobs from "./Company/ManageJobs";
import Applicants from "./Company/Applicants";
import CandidateDetails from "./Company/CandidateDetails";
import AIShortlist from "./Company/AIShortlist";
import InterviewScheduler from "./Company/InterviewScheduler";
import Analytics from "./Company/Analytics";
import CompanyNotifications from "./Company/Notifications";

// ==================== ADMIN ====================
import AdminDashboard from "./Admin/AdminDashboard";
import Students from "./Admin/Students";
import Companies from "./Admin/Companies";
import JobApproval from "./Admin/JobApproval";
import AIControl from "./Admin/AIControl";
import AdminAnalytics from "./Admin/Analytics";
import Reports from "./Admin/Reports";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ==================================================
            AUTHENTICATION
        ================================================== */}

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />


        {/* ==================================================
            STUDENT
        ================================================== */}

        <Route
          path="/student/dashboard"
          element={<StudentDashboard />}
        />

        <Route
          path="/student/profile"
          element={<StudentProfile />}
        />

        <Route
          path="/student/resume"
          element={<ResumeUpload />}
        />

        <Route
          path="/student/resume-analysis"
          element={<ResumeAnalysis />}
        />

        <Route
          path="/student/jobs"
          element={<JobPortal />}
        />

        <Route
          path="/student/ai-match"
          element={<AIMatch />}
        />

        <Route
          path="/student/assessments"
          element={<Assessments />}
        />

        <Route
          path="/student/interview"
          element={<MockInterview />}
        />

        <Route
          path="/student/applications"
          element={<Applications />}
        />

        <Route
          path="/student/notifications"
          element={<Notifications />}
        />


        {/* ==================================================
            COMPANY
        ================================================== */}

        <Route
          path="/company"
          element={<CompanyLayout />}
        >

          <Route
            path="dashboard"
            element={<CompanyDashboard />}
          />

          <Route
            path="profile"
            element={<CompanyProfile />}
          />

          <Route
            path="jobs/post"
            element={<PostJob />}
          />

          <Route
            path="jobs"
            element={<ManageJobs />}
          />

          <Route
            path="applicants"
            element={<Applicants />}
          />

          <Route
            path="applicants/:id"
            element={<CandidateDetails />}
          />

          <Route
            path="ai-shortlist"
            element={<AIShortlist />}
          />

          <Route
            path="interviews"
            element={<InterviewScheduler />}
          />

          <Route
            path="analytics"
            element={<Analytics />}
          />

          <Route
            path="notifications"
            element={<CompanyNotifications />}
          />

        </Route>


        {/* ==================================================
            ADMIN
        ================================================== */}

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        {/* Admin Students */}
        <Route
          path="/admin/students"
          element={<Students />}
        />

        {/* Admin Companies */}
        <Route
          path="/admin/companies"
          element={<Companies />}
        />

        {/* Admin Job Approval */}
        <Route
          path="/admin/jobs"
          element={<JobApproval />}
        />

        {/* Admin AI Control */}
        <Route
          path="/admin/ai-control"
          element={<AIControl />}
        />

        {/* Admin Analytics */}
        <Route
          path="/admin/analytics"
          element={<AdminAnalytics />}
        />

        {/* Admin Reports */}
        <Route
          path="/admin/reports"
          element={<Reports />}
        />


        {/* ==================================================
            FALLBACK
        ================================================== */}

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;