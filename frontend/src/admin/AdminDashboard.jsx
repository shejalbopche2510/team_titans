function AdminDashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <p>Smart Campus Complaint Management System</p>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Total Complaints</h3>
          <h2>0</h2>
        </div>

        <div className="dashboard-card">
          <h3>Pending</h3>
          <h2>0</h2>
        </div>

        <div className="dashboard-card">
          <h3>In Progress</h3>
          <h2>0</h2>
        </div>

        <div className="dashboard-card">
          <h3>Resolved</h3>
          <h2>0</h2>
        </div>

      </div>

      {/* Complaints Table */}
      <div className="complaints-section">
        <h2>Recent Complaints</h2>

        <table className="complaints-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Wi-Fi Not Working</td>
              <td>Wi-Fi</td>
              <td>Computer Lab</td>
              <td>Pending</td>
            </tr>

            <tr>
              <td>Water Leakage</td>
              <td>Water</td>
              <td>Hostel</td>
              <td>In Progress</td>
            </tr>

            <tr>
              <td>Classroom Light Problem</td>
              <td>Electricity</td>
              <td>Room 204</td>
              <td>Resolved</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default AdminDashboard;