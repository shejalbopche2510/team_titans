import { Link, useParams } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();

  const complaint = {
    id: id || "001",
    title: "Classroom Fan Not Working",
    category: "Electrical",
    location: "Room 204",
    priority: "High",
    status: "Pending",
    date: "15 August 2026",
    description:
      "The classroom fan is not working properly. It makes unusual noise and stops after a few minutes.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">

      {/* Top Navigation */}
      <header className="border-b border-white/10 bg-white/10 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Smart<span className="text-cyan-400">Campus</span>
            </h1>
            <p className="text-xs text-slate-400">
              Complaint Management System
            </p>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-white shadow-lg">
            S
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-10">

        {/* Back */}
        <Link
          to="/student/complaints"
          className="mb-6 inline-flex items-center rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-white/20"
        >
          ← Back to My Complaints
        </Link>

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Complaint Details
          </p>

          <h2 className="mt-2 text-4xl font-extrabold text-white">
            {complaint.title}
          </h2>

          <p className="mt-2 text-slate-400">
            Track the complete status of your complaint.
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">

          {/* Card Header */}
          <div className="flex flex-col justify-between gap-5 border-b border-white/10 bg-white/5 p-7 sm:flex-row sm:items-center">

            <div>
              <p className="text-sm text-slate-400">
                Complaint ID
              </p>

              <p className="mt-1 text-xl font-bold text-white">
                CMP-{complaint.id}
              </p>
            </div>

            <span className="w-fit rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 text-sm font-bold text-yellow-300">
              ● {complaint.status}
            </span>

          </div>

          <div className="p-7">

            {/* Information Cards */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-sm text-slate-400">
                  Category
                </p>

                <p className="mt-3 text-lg font-bold text-white">
                  🔧 {complaint.category}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-sm text-slate-400">
                  Location
                </p>

                <p className="mt-3 text-lg font-bold text-white">
                  📍 {complaint.location}
                </p>
              </div>

              <div className="rounded-2xl border border-red-400/10 bg-red-500/10 p-5">
                <p className="text-sm text-red-200">
                  Priority
                </p>

                <p className="mt-3 text-lg font-bold text-red-300">
                  ⚠️ {complaint.priority}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <p className="text-sm text-slate-400">
                  Submitted
                </p>

                <p className="mt-3 text-lg font-bold text-white">
                  📅 {complaint.date}
                </p>
              </div>

            </div>

            {/* Description */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="text-xl font-bold text-white">
                Complaint Description
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                {complaint.description}
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/40 p-6">

              <h3 className="text-xl font-bold text-white">
                Complaint Timeline
              </h3>

              <div className="mt-7 space-y-7">

                {/* Step 1 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400 ring-4 ring-green-500/10">
                    ✓
                  </div>

                  <div>
                    <h4 className="font-bold text-white">
                      Complaint Submitted
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      Your complaint was submitted successfully.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-400 ring-4 ring-yellow-500/10">
                    ●
                  </div>

                  <div>
                    <h4 className="font-bold text-white">
                      Under Review
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      Your complaint is waiting for admin review.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 opacity-40">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-500/20 text-slate-400">
                    ○
                  </div>

                  <div>
                    <h4 className="font-bold text-white">
                      Resolved
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      This step will activate after the complaint is resolved.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 flex justify-end">
              <Link
                to="/student/complaints"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:scale-105"
              >
                View All Complaints →
              </Link>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default ComplaintDetails;