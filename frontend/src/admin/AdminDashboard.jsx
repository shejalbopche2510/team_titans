function AdminDashboard() {
  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <p>Smart Campus Complaint Management System</p>

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
    </div>
  );
}

export default AdminDashboard;