import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentDashboard from "./Student/StudentDashboard";
import SubmitComplaint from "./Student/SubmitComplaint";
import MyComplaints from "./Student/MyComplaints";
import ComplaintDetails from "./Student/ComplaintDetails";
import StudentProfile from "./Student/StudentProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route
          path="/student/submit"
          element={<SubmitComplaint />}
        />

        <Route
          path="/student/complaints"
          element={<MyComplaints />}
        />

        <Route
          path="/student/complaints/:id"
          element={<ComplaintDetails />}
        />

        <Route
          path="/student/profile"
          element={<StudentProfile />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;