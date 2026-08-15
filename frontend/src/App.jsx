import { Routes, Route } from "react-router-dom";

import StudentDashboard from "./student/StudentDashboard";
import SubmitComplaint from "./student/SubmitComplaint";
import MyComplaint from "./student/MyComplaint";
import ComplaintDetails from "./student/ComplaintDetails";
import StudentProfile from "./student/StudentProfile";
import AdminLogin from "./admin/AdminLogin";

function App() {
  return (
    <Routes>

      {/* Student Dashboard */}
      <Route path="/" element={<StudentDashboard />} />
      <Route path="/admin/dashboard" element={<StudentDashboard />} />

      {/* Submit Complaint */}
      <Route
        path="/student/submit"
        element={<SubmitComplaint />}
      />

      {/* My Complaints */}
      <Route
        path="/student/complaints"
        element={<MyComplaint />}
      />

      {/* Complaint Details */}
      <Route
        path="/student/complaint/:id"
        element={<ComplaintDetails />}
      />

      {/* Student Profile */}
      <Route
        path="/student/profile"
        element={<StudentProfile />}
      />

       <Route
        path="/admin"
        element={<AdminLogin />}
      />


    </Routes>
  );
}

export default App;