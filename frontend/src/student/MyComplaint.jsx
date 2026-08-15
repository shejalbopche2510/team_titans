import { useState } from "react";
import { Link } from "react-router-dom";

function MyComplaints() {
  const [filter, setFilter] = useState("All");

  const complaints = [
    {
      id: 1,
      title: "Classroom Fan Not Working",
      category: "Electrical",
      location: "Room 204",
      priority: "High",
      status: "Pending",
      date: "15 Aug 2026",
      description: "Fan is making unusual noise and stops after a few minutes.",
    },
    {
      id: 2,
      title: "Wi-Fi Connection Problem",
      category: "Internet",
      location: "Computer Lab",
      priority: "Medium",
      status: "In Progress",
      date: "14 Aug 2026",
      description: "Internet connection is unstable in the computer laboratory.",
    },
    {
      id: 3,
      title: "Water Leakage",
      category: "Maintenance",
      location: "Block A",
      priority: "Low",
      status: "Resolved",
      date: "12 Aug 2026",
      description: "Water leakage near the entrance of Block A.",
    },
  ];

  const filteredComplaints =
    filter === "All"
      ? complaints
      : complaints.filter((complaint) => complaint.status === filter);

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Background */}
      <div className="fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8">

        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Student Portal
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              My Complaints
            </h1>

            <p className="mt-3 max-w-xl text-slate-400">
              Track your complaints, check their progress and view complete
              complaint details from one place.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/student"
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
            >
              ← Dashboard
            </Link>

            <Link
              to="/student/submit"
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
            >
              + New Complaint
            </Link>
          </div>

        </div>

        {/* Statistics */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            title="Total"
            value="03"
            icon="📋"
            text="All complaints"
          />

          <StatCard
            title="Pending"
            value="01"
            icon="⏳"
            text="Waiting for review"
          />

          <StatCard
            title="In Progress"
            value="01"
            icon="🔄"
            text="Being resolved"
          />

          <StatCard
            title="Resolved"
            value="01"
            icon="✅"
            text="Successfully completed"
          />

        </div>

        {/* Filter */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-bold text-white">
              Complaint History
            </h2>

            <p className="text-sm text-slate-500">
              Showing {filteredComplaints.length} complaint(s)
            </p>
          </div>

          <div className="flex flex-wrap gap-2">

            {["All", "Pending", "In Progress", "Resolved"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  filter === item
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}

          </div>
        </div>

        {/* Complaints */}
        <div className="mt-6 space-y-5">

          {filteredComplaints.map((complaint) => (
            <ComplaintCard
              key={complaint.id}
              complaint={complaint}
            />
          ))}

          {filteredComplaints.length === 0 && (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">
              <div className="text-5xl">📭</div>

              <h3 className="mt-4 text-xl font-bold text-white">
                No complaints found
              </h3>

              <p className="mt-2 text-slate-400">
                There are no complaints with this status.
              </p>
            </div>
          )}

        </div>

      </main>
    </div>
  );
}

/* Statistics Card */
function StatCard({ title, value, icon, text }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.08]">

      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          {icon}
        </div>

        <span className="text-xs font-semibold text-slate-500">
          {text}
        </span>
      </div>

      <p className="mt-6 text-sm font-medium text-slate-400">
        {title}
      </p>

      <p className="mt-1 text-3xl font-black text-white">
        {value}
      </p>

    </div>
  );
}

/* Complaint Card */
function ComplaintCard({ complaint }) {
  const statusStyle = {
    Pending: "bg-yellow-400/10 text-yellow-300 border-yellow-400/20",
    "In Progress": "bg-blue-400/10 text-blue-300 border-blue-400/20",
    Resolved: "bg-green-400/10 text-green-300 border-green-400/20",
  };

  const priorityStyle = {
    High: "text-red-300 bg-red-400/10",
    Medium: "text-orange-300 bg-orange-400/10",
    Low: "text-green-300 bg-green-400/10",
  };

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-2xl hover:shadow-blue-950/30">

      {/* Top line */}
      <div className="h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />

      <div className="p-6 sm:p-7">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          {/* Details */}
          <div className="flex gap-4">

            <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-2xl sm:flex">
              📝
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">

                <h3 className="text-xl font-bold text-white">
                  {complaint.title}
                </h3>

                <span className="rounded-lg bg-white/5 px-2 py-1 text-xs font-bold text-slate-500">
                  CMP-{complaint.id}
                </span>

              </div>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                {complaint.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  📁 {complaint.category}
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-300">
                  📍 {complaint.location}
                </span>

                <span
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold ${priorityStyle[complaint.priority]}`}
                >
                  ⚠ {complaint.priority}
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-400">
                  📅 {complaint.date}
                </span>

              </div>
            </div>

          </div>

          {/* Right */}
          <div className="flex shrink-0 items-center justify-between gap-4 lg:flex-col lg:items-end">

            <span
              className={`rounded-full border px-4 py-2 text-xs font-bold ${statusStyle[complaint.status]}`}
            >
              ● {complaint.status}
            </span>

            <Link
              to={`/student/complaints/${complaint.id}`}
              className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/10 transition hover:scale-105"
            >
              View Details →
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default MyComplaints;