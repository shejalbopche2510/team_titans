import { Link, useParams } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();

  const complaint = {
    id,
    title: "Classroom Fan Not Working",
    category: "Electrical",
    location: "Room 204",
    priority: "High",
    status: "In Progress",
    date: "15 Aug 2026",
    description:
      "Fan is making unusual noise and stops after a few minutes.",
  };

  const timeline = [
    {
      icon: "✓",
      title: "Complaint Submitted",
      text: "Your complaint was successfully submitted.",
      date: "15 Aug 2026 • 10:30 AM",
      done: true,
    },
    {
      icon: "✓",
      title: "Complaint Under Review",
      text: "The complaint has been received by the concerned department.",
      date: "15 Aug 2026 • 11:15 AM",
      done: true,
    },
    {
      icon: "🔄",
      title: "In Progress",
      text: "The maintenance team is currently working on the issue.",
      date: "15 Aug 2026 • 01:20 PM",
      done: true,
    },
    {
      icon: "○",
      title: "Resolved",
      text: "Waiting for the issue to be completely resolved.",
      date: "Pending",
      done: false,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-8 sm:px-8">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Student Portal
            </p>

            <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              Complaint Details
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Track the complete progress of your complaint.
            </p>
          </div>

          <Link
            to="/student/complaint"
            className="w-fit rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            ← My Complaints
          </Link>

        </div>

        {/* Complaint Overview */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

          <div className="h-1 bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600" />

          <div className="p-6 sm:p-8">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

              <div>

                <div className="flex flex-wrap items-center gap-3">

                  <span className="rounded-lg bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                    CMP-{complaint.id}
                  </span>

                  <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold text-blue-300">
                    ● {complaint.status}
                  </span>

                </div>

                <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                  {complaint.title}
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                  {complaint.description}
                </p>

              </div>

              <div className="rounded-2xl border border-red-400/10 bg-red-400/5 px-5 py-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Priority
                </p>

                <p className="mt-1 text-lg font-black text-red-300">
                  ⚠ {complaint.priority}
                </p>
              </div>

            </div>

            {/* Information */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <Info
                icon="📁"
                label="Category"
                value={complaint.category}
              />

              <Info
                icon="📍"
                label="Location"
                value={complaint.location}
              />

              <Info
                icon="📅"
                label="Submitted"
                value={complaint.date}
              />

              <Info
                icon="🔖"
                label="Complaint ID"
                value={`CMP-${complaint.id}`}
              />

            </div>

          </div>
        </section>

        {/* Main Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Timeline */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8 lg:col-span-2">

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Progress
              </p>

              <h2 className="mt-2 text-2xl font-black text-white">
                Complaint Timeline
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Follow every stage of your complaint.
              </p>
            </div>

            <div className="mt-8">

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative flex gap-5"
                >

                  {/* Line */}
                  {index !== timeline.length - 1 && (
                    <div
                      className={`absolute left-5 top-11 h-[calc(100%-8px)] w-0.5 ${
                        item.done
                          ? "bg-cyan-400/50"
                          : "bg-white/10"
                      }`}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-sm font-black ${
                      item.done
                        ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
                        : "border-white/10 bg-white/5 text-slate-600"
                    }`}
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="pb-9">

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">

                      <h3
                        className={`font-bold ${
                          item.done
                            ? "text-white"
                            : "text-slate-600"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {index === 2 && (
                        <span className="w-fit rounded-full bg-blue-400/10 px-2 py-1 text-[10px] font-bold text-blue-300">
                          CURRENT
                        </span>
                      )}

                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-slate-600">
                      {item.date}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          </section>

          {/* Side Panel */}
          <aside className="space-y-6">

            {/* Current Status */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Current Status
              </p>

              <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5">

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-400/20">
                    🔄
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      Status
                    </p>

                    <p className="font-black text-blue-300">
                      In Progress
                    </p>
                  </div>

                </div>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Your complaint is currently being handled by the concerned department.
                </p>

              </div>

            </div>

            {/* Help */}
            <div className="rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 p-6 backdrop-blur-xl">

              <div className="text-3xl">
                💡
              </div>

              <h3 className="mt-3 font-bold text-white">
                Need more help?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                If you have another campus issue, you can submit a new complaint.
              </p>

              <Link
                to="/student/submit"
                className="mt-5 block rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-3 text-center text-sm font-bold text-white shadow-lg transition hover:-translate-y-1"
              >
                + New Complaint
              </Link>

            </div>

          </aside>

        </div>

      </main>
    </div>
  );
}

/* Information Card */
function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-4">

      <div className="flex items-center gap-3">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg">
          {icon}
        </div>

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600">
            {label}
          </p>

          <p className="mt-1 text-sm font-bold text-slate-300">
            {value}
          </p>
        </div>

      </div>

    </div>
  );
}

export default ComplaintDetails;