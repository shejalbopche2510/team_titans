function MyComplaints() {
  const complaints = [
    {
      title: "Classroom Fan Not Working",
      category: "Electrical",
      status: "Pending",
    },
    {
      title: "Wi-Fi Not Working",
      category: "Internet",
      status: "In Progress",
    },
    {
      title: "Water Leakage",
      category: "Maintenance",
      status: "Resolved",
    },
  ];

  return (
    <div>
      <h1>My Complaints</h1>

      {complaints.map((complaint, index) => (
        <div key={index}>
          <h3>{complaint.title}</h3>
          <p>Category: {complaint.category}</p>
          <p>Status: {complaint.status}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComplaints;