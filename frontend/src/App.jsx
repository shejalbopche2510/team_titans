import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentDashboard from "./student/StudentDashboard";
import SubmitComplaint from "./student/SubmitComplaint";
import MyComplaints from "./student/MyComplaints";
import ComplaintDetails from "./student/ComplaintDetails";
import StudentProfile from "./student/StudentProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Student Dashboard */}
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />

        {/* Submit Complaint */}
        <Route
          path="/student/submit"
          element={<SubmitComplaint />}
        />

        {/* My Complaints */}
        <Route
          path="/student/complaints"
          element={<MyComplaints />}
        />

        {/* Complaint Details */}
        <Route
          path="/student/complaints/:id"
          element={<ComplaintDetails />}
        />

        {/* Student Profile */}
        <Route
          path="/student/profile"
          element={<StudentProfile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;