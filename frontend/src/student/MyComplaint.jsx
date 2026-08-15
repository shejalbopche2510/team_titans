function MyComplaints() {
  const complaints = [
    {
      id: 1,
      title: "Classroom Fan Not Working",
      category: "Electrical",
      location: "Room 204",
      status: "Pending",
    },
    {
      id: 2,
      title: "Wi-Fi Not Working",
      category: "Internet",
      location: "Computer Lab",
      status: "In Progress",
    },
    {
      id: 3,
      title: "Water Leakage",
      category: "Maintenance",
      location: "Block A",
      status: "Resolved",
    },
  ];

  return (
    <div>
      <h1>My Complaints</h1>

      {complaints.map((complaint) => (
        <div key={complaint.id}>
          <h3>{complaint.title}</h3>
          <p>Category: {complaint.category}</p>
          <p>Location: {complaint.location}</p>
          <p>Status: {complaint.status}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default MyComplaints;