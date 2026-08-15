import { Routes, Route } from "react-router-dom";

import StudentDashboard from "./student/StudentDashboard";
import SubmitComplaint from "./student/SubmitComplaint";
import MyComplaints from "./student/MyComplaint";
import ComplaintDetails from "./student/ComplaintDetails";
import StudentProfile from "./student/StudentProfile";

function App() {
  return (
    <Routes>
      {/* Dashboard */}
      <Route path="/" element={<StudentDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />

      {/* Submit Complaint */}
      <Route
        path="/student/submit"
        element={<SubmitComplaint />}
      />

      {/* My Complaints */}
      <Route
        path="/student/complaint"
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
    </Routes>
  );
}

export default App;