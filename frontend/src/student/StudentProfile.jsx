import { Link } from "react-router-dom";

function StudentProfile() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">
              Smart<span className="text-blue-600">Campus</span>
            </h1>
            <p className="hidden text-xs text-slate-500 sm:block">
              Student Complaint Management
            </p>
          </div>

          <Link
            to="/student"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-600"
          >
            ← Dashboard
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

        {/* Hero Profile */}
        <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-7 shadow-2xl sm:p-10">

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-24 left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">

            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">

              {/* Avatar */}
              <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-white/30 bg-white/20 text-5xl font-black text-white shadow-2xl backdrop-blur-md">
                S
              </div>

              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  ACTIVE STUDENT
                </div>

                <h2 className="text-3xl font-black text-white sm:text-4xl">
                  Student Name
                </h2>

                <p className="mt-2 text-blue-100">
                  Information Technology • STU001
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  student@example.com
                </p>
              </div>
            </div>

            <button className="rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50">
              ✏️ Edit Profile
            </button>

          </div>
        </section>

        {/* Statistics */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-blue-100 p-3 text-xl">
                📋
              </div>

              <span className="text-xs font-bold text-emerald-600">
                +12%
              </span>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Total Complaints
            </p>

            <h3 className="mt-1 text-3xl font-black text-slate-900">
              05
            </h3>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="rounded-xl bg-amber-100 p-3 text-xl w-fit">
              ⏳
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Pending
            </p>

            <h3 className="mt-1 text-3xl font-black text-amber-600">
              02
            </h3>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="rounded-xl bg-indigo-100 p-3 text-xl w-fit">
              🔄
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              In Progress
            </p>

            <h3 className="mt-1 text-3xl font-black text-indigo-600">
              01
            </h3>
          </div>

          <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="rounded-xl bg-emerald-100 p-3 text-xl w-fit">
              ✅
            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Resolved
            </p>

            <h3 className="mt-1 text-3xl font-black text-emerald-600">
              02
            </h3>
          </div>

        </section>

        {/* Information + Activity */}
        <section className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Personal Information */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-2">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  Personal Information
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Your registered student details
                </p>
              </div>

              <span className="rounded-xl bg-blue-50 px-3 py-2 text-blue-600">
                👤
              </span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">

              <InfoCard
                label="Full Name"
                value="Student Name"
                icon="👤"
              />

              <InfoCard
                label="Student ID"
                value="STU001"
                icon="🪪"
              />

              <InfoCard
                label="Department"
                value="Information Technology"
                icon="💻"
              />

              <InfoCard
                label="Email Address"
                value="student@example.com"
                icon="✉️"
              />

              <InfoCard
                label="Academic Year"
                value="2025 - 2026"
                icon="🎓"
              />

              <InfoCard
                label="Account Status"
                value="Active"
                icon="🟢"
              />

            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <h3 className="text-xl font-black text-slate-900">
              Quick Actions
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Manage your complaints
            </p>

            <div className="mt-6 space-y-3">

              <Link
                to="/student/submit"
                className="flex items-center justify-between rounded-2xl bg-blue-50 p-4 font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                <span>📝 Submit Complaint</span>
                <span>→</span>
              </Link>

              <Link
                to="/student/complaints"
                className="flex items-center justify-between rounded-2xl bg-slate-50 p-4 font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                <span>📋 My Complaints</span>
                <span>→</span>
              </Link>

              <Link
                to="/student"
                className="flex items-center justify-between rounded-2xl bg-emerald-50 p-4 font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                <span>🏠 Dashboard</span>
                <span>→</span>
              </Link>

            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-black text-slate-900">
                Recent Activity
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Latest updates on your complaints
              </p>
            </div>

            <Link
              to="/student/complaints"
              className="text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              View All →
            </Link>
          </div>

          <div className="mt-6 space-y-4">

            <Activity
              icon="🟡"
              title="Complaint is pending"
              description="Classroom Fan Not Working"
              time="Today"
            />

            <Activity
              icon="🔵"
              title="Complaint under review"
              description="Wi-Fi Not Working"
              time="Yesterday"
            />

            <Activity
              icon="🟢"
              title="Complaint resolved"
              description="Water Leakage"
              time="3 days ago"
            />

          </div>
        </section>

      </main>
    </div>
  );
}

function InfoCard({ label, value, icon }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-blue-50/40">
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {label}
          </p>

          <p className="mt-1 font-bold text-slate-800">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function Activity({ icon, title, description, time }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-slate-100">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
        {icon}
      </div>

      <div className="flex-1">
        <p className="font-bold text-slate-800">
          {title}
        </p>

        <p className="text-sm text-slate-500">
          {description}
        </p>
      </div>

      <span className="text-xs font-medium text-slate-400">
        {time}
      </span>
    </div>
  );
}

export default StudentProfile;