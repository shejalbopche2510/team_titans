import { Link } from "react-router-dom";

function MyComplaints() {
  const complaints = [
    {
      id: 1,
      title: "Classroom Fan Not Working",
      category: "Electrical",
      location: "Room 204",
      priority: "High",
      status: "Pending",
      date: "15 Aug 2026",
    },
    {
      id: 2,
      title: "Wi-Fi Not Working",
      category: "Internet",
      location: "Computer Lab",
      priority: "Medium",
      status: "In Progress",
      date: "14 Aug 2026",
    },
    {
      id: 3,
      title: "Water Leakage",
      category: "Maintenance",
      location: "Block A",
      priority: "High",
      status: "Resolved",
      date: "12 Aug 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              SMART CAMPUS
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              My Complaints
            </h1>

            <p className="mt-2 text-slate-500">
              Track the status of your submitted complaints.
            </p>
          </div>

          <Link
            to="/student/submit"
            className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white shadow hover:bg-blue-700"
          >
            + New Complaint
          </Link>
        </div>

        {/* Complaint Cards */}
        <div className="space-y-5">
          {complaints.map((complaint) => (
            <div
              key={complaint.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex flex-col justify-between gap-5 lg:flex-row">

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    📋
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      {complaint.title}
                    </h2>

                    <p className="mt-1 text-sm text-slate-500">
                      {complaint.category} • {complaint.location}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      Submitted on {complaint.date}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-full px-4 py-2 text-xs font-bold ${
                      complaint.priority === "High"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {complaint.priority} Priority
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-bold ${
                      complaint.status === "Resolved"
                        ? "bg-green-100 text-green-700"
                        : complaint.status === "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {complaint.status}
                  </span>
                </div>
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <Link
                  to={`/student/complaints/${complaint.id}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  View Complaint Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default MyComplaints;