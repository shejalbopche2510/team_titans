import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-7 sm:px-8">

        {/* Navbar */}
        <nav className="mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-xl font-black shadow-lg shadow-blue-500/20">
              C
            </div>

            <div>
              <h2 className="font-black tracking-tight">
                CampusCare
              </h2>

              <p className="text-xs text-slate-500">
                Student Portal
              </p>
            </div>
          </div>

          <Link
            to="/student/profile"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:bg-white/10"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 font-bold">
              S
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-bold">
                Student
              </p>

              <p className="text-xs text-slate-500">
                STU001
              </p>
            </div>
          </Link>

        </nav>

        {/* Welcome Hero */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-7 shadow-2xl sm:p-10">

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-32 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-blue-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Student Dashboard
              </span>

              <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Welcome back, Student! 👋
              </h1>

              <p className="mt-4 max-w-2xl leading-7 text-blue-100/80">
                Report campus issues, track your complaints and stay updated
                with the latest status — all from one place.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <Link
                  to="/student/submit"
                  className="rounded-xl bg-white px-6 py-3 text-center font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  + Submit Complaint
                </Link>

                <Link
                  to="/student/complaints"
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-center font-bold text-white backdrop-blur-xl transition hover:bg-white/20"
                >
                  View My Complaints →
                </Link>

              </div>

            </div>

            {/* Hero Icon */}
            <div className="hidden lg:flex lg:justify-center">
              <div className="flex h-44 w-44 items-center justify-center rounded-[2.5rem] border border-white/20 bg-white/10 text-7xl shadow-2xl backdrop-blur-xl">
                🎓
              </div>
            </div>

          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <StatCard
            icon="📋"
            title="Total Complaints"
            value="05"
            text="All submissions"
          />

          <StatCard
            icon="⏳"
            title="Pending"
            value="02"
            text="Waiting for action"
          />

          <StatCard
            icon="🔄"
            title="In Progress"
            value="01"
            text="Currently processing"
          />

          <StatCard
            icon="✅"
            title="Resolved"
            value="02"
            text="Successfully completed"
          />

        </section>

        {/* Main Content */}
        <section className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Recent Complaints */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:col-span-2 sm:p-7">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Activity
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Recent Complaints
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Track the latest issues you reported.
                </p>
              </div>

              <Link
                to="/student/complaints"
                className="hidden rounded-xl bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 sm:block"
              >
                View All
              </Link>

            </div>

            <div className="mt-7 space-y-4">

              <Complaint
                icon="⚡"
                title="Classroom Fan Not Working"
                category="Electrical"
                status="Pending"
                statusClass="bg-yellow-400/10 text-yellow-300 border-yellow-400/20"
                date="Today"
              />

              <Complaint
                icon="🌐"
                title="Wi-Fi Connection Problem"
                category="Internet"
                status="In Progress"
                statusClass="bg-blue-400/10 text-blue-300 border-blue-400/20"
                date="Yesterday"
              />

              <Complaint
                icon="💧"
                title="Water Leakage Near Lab"
                category="Maintenance"
                status="Resolved"
                statusClass="bg-green-400/10 text-green-300 border-green-400/20"
                date="3 days ago"
              />

            </div>

            <Link
              to="/student/complaints"
              className="mt-5 block rounded-xl border border-white/10 bg-white/5 py-3 text-center text-sm font-semibold text-slate-300 transition hover:bg-white/10 sm:hidden"
            >
              View All Complaints →
            </Link>

          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-7">

            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Shortcuts
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Quick Actions
            </h2>

            <div className="mt-7 space-y-3">

              <ActionCard
                to="/student/submit"
                icon="📝"
                title="Submit Complaint"
                text="Report a new issue"
              />

              <ActionCard
                to="/student/complaints"
                icon="📋"
                title="My Complaints"
                text="Check complaint status"
              />

              <ActionCard
                to="/student/profile"
                icon="👤"
                title="My Profile"
                text="Manage your account"
              />

            </div>

          </div>

        </section>

        {/* Bottom Section */}
        <section className="mt-8 grid gap-8 lg:grid-cols-2">

          {/* Resolution Progress */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Performance
                </p>

                <h2 className="mt-2 text-2xl font-black">
                  Complaint Resolution
                </h2>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-cyan-400/30 text-lg font-black text-cyan-300">
                80%
              </div>

            </div>

            <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
            </div>

            <div className="mt-5 flex justify-between text-sm">

              <span className="text-slate-500">
                4 processed
              </span>

              <span className="font-semibold text-cyan-300">
                2 resolved
              </span>

            </div>

          </div>

          {/* Help Card */}
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/5 p-7 backdrop-blur-xl">

            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                💡
              </div>

              <h2 className="mt-5 text-2xl font-black">
                Have a campus issue?
              </h2>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                Don't wait. Submit your complaint with the exact location and
                details so the right department can take action.
              </p>

              <Link
                to="/student/submit"
                className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-bold shadow-lg shadow-blue-500/20 transition hover:-translate-y-1"
              >
                Report an Issue →
              </Link>

            </div>

          </div>

        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-white/5 py-6 text-center text-xs text-slate-600">
          CampusCare • Student Complaint Management System
        </footer>

      </main>
    </div>
  );
}

/* =========================
   STAT CARD
========================= */

function StatCard({ icon, title, value, text }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.08]">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl">
          {icon}
        </div>

        <span className="text-3xl font-black">
          {value}
        </span>

      </div>

      <h3 className="mt-5 font-bold text-slate-200">
        {title}
      </h3>

      <p className="mt-1 text-xs text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* =========================
   COMPLAINT
========================= */

function Complaint({
  icon,
  title,
  category,
  status,
  statusClass,
  date,
}) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-5 transition hover:border-cyan-400/20 hover:bg-slate-900/70 sm:flex-row sm:items-center">

      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-2xl">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <h3 className="truncate font-bold text-slate-200">
          {title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-2">

          <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-slate-500">
            {category}
          </span>

          <span
            className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${statusClass}`}
          >
            {status}
          </span>

        </div>

      </div>

      <span className="text-xs text-slate-600">
        {date}
      </span>

    </div>
  );
}

/* =========================
   ACTION CARD
========================= */

function ActionCard({ to, icon, title, text }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/70"
    >

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
        {icon}
      </div>

      <div className="min-w-0 flex-1">

        <h3 className="font-bold text-slate-200">
          {title}
        </h3>

        <p className="mt-1 text-xs text-slate-600">
          {text}
        </p>

      </div>

      <span className="text-slate-600">
        →
      </span>

    </Link>
  );
}

export default StudentDashboard;