import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div>
      <h1>Smart Campus Complaint Management System</h1>

      <h2>Student Dashboard</h2>

      <p>Welcome, Student!</p>

      <div>
        <h3>Total Complaints</h3>
        <p>5</p>
      </div>

      <div>
        <h3>Pending Complaints</h3>
        <p>2</p>
      </div>

      <div>
        <h3>In Progress</h3>
        <p>1</p>
      </div>

      <div>
        <h3>Resolved Complaints</h3>
        <p>2</p>
      </div>

      <br />

      <Link to="/student/submit">
        <button>Submit Complaint</button>
      </Link>

      <Link to="/student/complaints">
        <button>My Complaints</button>
      </Link>

      <Link to="/student/profile">
        <button>Profile</button>
      </Link>
    </div>
  );
}

export default StudentDashboard;