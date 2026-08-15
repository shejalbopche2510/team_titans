import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 bg-slate-900 text-white lg:block">
        <div className="border-b border-slate-700 p-6">
          <h1 className="text-xl font-bold text-blue-400">SmartCampus</h1>
          <p className="mt-1 text-xs text-slate-400">
            Complaint Management
          </p>
        </div>

        <nav className="space-y-2 p-4">
          <Link
            to="/student"
            className="flex items-center gap-3 rounded-xl bg-blue-600 px-4 py-3 font-medium"
          >
            🏠 Dashboard
          </Link>

          <Link
            to="/student/submit"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800"
          >
            📝 Submit Complaint
          </Link>

          <Link
            to="/student/complaints"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800"
          >
            📋 My Complaints
          </Link>

          <Link
            to="/student/profile"
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800"
          >
            👤 Profile
          </Link>
        </nav>

        <div className="absolute bottom-0 w-full border-t border-slate-700 p-5">
          <p className="text-xs text-slate-500">Logged in as</p>
          <p className="mt-1 font-semibold">Student</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b bg-white px-6 py-5">
          <div>
            <p className="text-sm text-slate-500">Welcome back 👋</p>
            <h2 className="text-2xl font-bold text-slate-900">
              Student Dashboard
            </h2>
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-600">
            S
          </div>
        </header>

        <section className="p-6">
          {/* Hero */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-xl">
            <div className="max-w-2xl">
              <p className="mb-2 text-sm font-medium text-blue-100">
                SMART CAMPUS
              </p>

              <h1 className="text-3xl font-bold md:text-4xl">
                Manage your campus complaints easily.
              </h1>

              <p className="mt-3 text-blue-100">
                Submit complaints, track their progress and stay updated
                until they are resolved.
              </p>

              <Link
                to="/student/submit"
                className="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
              >
                + Submit New Complaint
              </Link>
            </div>
          </div>

          {/* Statistics */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Total Complaints</p>
                  <h3 className="mt-2 text-3xl font-bold text-slate-900">
                    05
                  </h3>
                </div>

                <div className="rounded-xl bg-blue-100 p-3 text-2xl">
                  📊
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Pending</p>
                  <h3 className="mt-2 text-3xl font-bold text-amber-600">
                    02
                  </h3>
                </div>

                <div className="rounded-xl bg-amber-100 p-3 text-2xl">
                  ⏳
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">In Progress</p>
                  <h3 className="mt-2 text-3xl font-bold text-indigo-600">
                    01
                  </h3>
                </div>

                <div className="rounded-xl bg-indigo-100 p-3 text-2xl">
                  🔄
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Resolved</p>
                  <h3 className="mt-2 text-3xl font-bold text-emerald-600">
                    02
                  </h3>
                </div>

                <div className="rounded-xl bg-emerald-100 p-3 text-2xl">
                  ✅
                </div>
              </div>
            </div>
          </div>

          {/* Recent Complaints */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Recent Complaints
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Your latest submitted complaints
                </p>
              </div>

              <Link
                to="/student/complaints"
                className="text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                View All →
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-col justify-between gap-4 rounded-xl bg-slate-50 p-4 md:flex-row md:items-center">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Classroom Fan Not Working
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Electrical • Room 204
                  </p>
                </div>

                <span className="w-fit rounded-full bg-amber-100 px-4 py-2 text-xs font-bold text-amber-700">
                  Pending
                </span>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-xl bg-slate-50 p-4 md:flex-row md:items-center">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Wi-Fi Not Working
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Internet • Computer Lab
                  </p>
                </div>

                <span className="w-fit rounded-full bg-indigo-100 px-4 py-2 text-xs font-bold text-indigo-700">
                  In Progress
                </span>
              </div>

              <div className="flex flex-col justify-between gap-4 rounded-xl bg-slate-50 p-4 md:flex-row md:items-center">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Water Leakage
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Maintenance • Block A
                  </p>
                </div>

                <span className="w-fit rounded-full bg-emerald-100 px-4 py-2 text-xs font-bold text-emerald-700">
                  Resolved
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default StudentDashboard;