import { Link } from "react-router-dom";
import { useState } from "react";

function StudentProfile() {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Student Name",
    studentId: "STU001",
    department: "Information Technology",
    year: "2025 - 2026",
    email: "student@example.com",
    phone: "+91 XXXXX XXXXX",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-950">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-8">

        {/* Top Bar */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
              Student Portal
            </p>

            <h1 className="mt-2 text-3xl font-black text-white sm:text-4xl">
              My Profile
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage your profile and track your complaint activity.
            </p>
          </div>

          <Link
            to="/student"
            className="w-fit rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-300 backdrop-blur-xl transition hover:bg-white/10 hover:text-white"
          >
            ← Dashboard
          </Link>

        </div>

        {/* Profile Hero */}
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-7 shadow-2xl sm:p-10">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

              {/* Avatar */}
              <div className="relative">

                <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-white/20 bg-white/15 text-5xl font-black text-white shadow-2xl backdrop-blur-xl">
                  {profile.name.charAt(0).toUpperCase()}
                </div>

                <div className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-indigo-700 bg-emerald-400">
                  ✓
                </div>

              </div>

              <div>

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  ACTIVE STUDENT
                </span>

                <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
                  {profile.name}
                </h2>

                <p className="mt-2 text-blue-100">
                  {profile.department} • {profile.studentId}
                </p>

                <p className="mt-1 text-sm text-blue-200">
                  {profile.email}
                </p>

              </div>

            </div>

            {/* Edit / Save Buttons */}
            {!editing ? (
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
              >
                ✏️ Edit Profile
              </button>
            ) : (
              <div className="flex gap-3">

                <button
                  type="button"
                  onClick={handleCancel}
                  className="rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  className="rounded-xl bg-emerald-400 px-5 py-3 font-bold text-slate-950 shadow-xl transition hover:-translate-y-1 hover:bg-emerald-300"
                >
                  ✓ Save Changes
                </button>

              </div>
            )}

          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <Stat
            icon="📋"
            title="Total Complaints"
            value="05"
            subtitle="All submissions"
          />

          <Stat
            icon="⏳"
            title="Pending"
            value="02"
            subtitle="Waiting for action"
          />

          <Stat
            icon="🔄"
            title="In Progress"
            value="01"
            subtitle="Currently processing"
          />

          <Stat
            icon="✅"
            title="Resolved"
            value="02"
            subtitle="Successfully completed"
          />

        </section>

        {/* Main Grid */}
        <section className="mt-8 grid gap-8 lg:grid-cols-3">

          {/* Personal Information */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl lg:col-span-2">

            <div className="flex items-start justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Account
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Personal Information
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Your registered student details
                </p>
              </div>

              <div className="rounded-xl bg-cyan-400/10 p-3 text-xl">
                👤
              </div>

            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">

              {editing ? (
                <>
                  <EditField
                    icon="👤"
                    label="Full Name"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                  />

                  <EditField
                    icon="🪪"
                    label="Student ID"
                    name="studentId"
                    value={profile.studentId}
                    onChange={handleChange}
                  />

                  <EditField
                    icon="💻"
                    label="Department"
                    name="department"
                    value={profile.department}
                    onChange={handleChange}
                  />

                  <EditField
                    icon="🎓"
                    label="Academic Year"
                    name="year"
                    value={profile.year}
                    onChange={handleChange}
                  />

                  <EditField
                    icon="✉️"
                    label="Email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                  />

                  <EditField
                    icon="📱"
                    label="Phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                  />
                </>
              ) : (
                <>
                  <Info
                    icon="👤"
                    label="Full Name"
                    value={profile.name}
                  />

                  <Info
                    icon="🪪"
                    label="Student ID"
                    value={profile.studentId}
                  />

                  <Info
                    icon="💻"
                    label="Department"
                    value={profile.department}
                  />

                  <Info
                    icon="🎓"
                    label="Academic Year"
                    value={profile.year}
                  />

                  <Info
                    icon="✉️"
                    label="Email"
                    value={profile.email}
                  />

                  <Info
                    icon="📱"
                    label="Phone"
                    value={profile.phone}
                  />
                </>
              )}

            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Quick Access
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Quick Actions
            </h3>

            <div className="mt-6 space-y-3">

              <Action
                to="/student/submit"
                icon="📝"
                title="Submit Complaint"
                text="Report a new issue"
              />

              <Action
                to="/student/complaint"
                icon="📋"
                title="My Complaints"
                text="Track your complaints"
              />

              <Action
                to="/student"
                icon="🏠"
                title="Dashboard"
                text="Back to overview"
              />

            </div>
          </div>

        </section>

        {/* Progress + Activity */}
        <section className="mt-8 grid gap-8 lg:grid-cols-2">

          {/* Complaint Progress */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

            <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Overview
            </p>

            <h3 className="mt-2 text-2xl font-black text-white">
              Complaint Progress
            </h3>

            <div className="mt-7">

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-300">
                  Resolution Rate
                </span>

                <span className="text-lg font-black text-cyan-400">
                  80%
                </span>
              </div>

              <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
              </div>

              <p className="mt-3 text-xs text-slate-500">
                4 out of 5 complaints have been processed successfully.
              </p>

            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">

              <MiniStat value="05" label="Submitted" />
              <MiniStat value="03" label="Processed" />
              <MiniStat value="02" label="Resolved" />

            </div>

          </div>

          {/* Recent Activity */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

            <div className="flex items-center justify-between">

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Timeline
                </p>

                <h3 className="mt-2 text-2xl font-black text-white">
                  Recent Activity
                </h3>
              </div>

              <span className="rounded-xl bg-white/5 px-3 py-2 text-xl">
                ⚡
              </span>

            </div>

            <div className="mt-6 space-y-5">

              <Activity
                icon="🟡"
                title="Complaint submitted"
                text="Classroom Fan Not Working"
                time="Today"
              />

              <Activity
                icon="🔵"
                title="Complaint under review"
                text="Wi-Fi Connection Problem"
                time="Yesterday"
              />

              <Activity
                icon="🟢"
                title="Complaint resolved"
                text="Water Leakage"
                time="3 days ago"
              />

            </div>

          </div>

        </section>

        {/* Footer Message */}
        <div className="mt-8 rounded-3xl border border-cyan-400/10 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 p-6 text-center backdrop-blur-xl">

          <div className="text-2xl">
            💡
          </div>

          <h3 className="mt-2 font-bold text-white">
            Need help with a campus issue?
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Submit a complaint and let the right department handle it.
          </p>

          <Link
            to="/student/submit"
            className="mt-4 inline-block rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-1"
          >
            Submit New Complaint →
          </Link>

        </div>

      </main>
    </div>
  );
}

/* Edit Field */
function EditField({ icon, label, name, value, onChange }) {
  return (
    <div className="rounded-2xl border border-cyan-400/20 bg-slate-900/50 p-5">

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
          {icon}
        </div>

        <div className="min-w-0 flex-1">

          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-400">
            {label}
          </p>

          <input
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 px-3 py-2 font-bold text-white outline-none focus:border-cyan-400"
          />

        </div>

      </div>
    </div>
  );
}

/* Stat Card */
function Stat({ icon, title, value, subtitle }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.08]">

      <div className="flex items-center justify-between">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">
          {icon}
        </div>

        <span className="text-3xl font-black text-white">
          {value}
        </span>

      </div>

      <p className="mt-5 font-bold text-slate-200">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-500">
        {subtitle}
      </p>

    </div>
  );
}

/* Information Card */
function Info({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-5 transition hover:border-cyan-400/20 hover:bg-slate-900/60">

      <div className="flex items-center gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-xl">
          {icon}
        </div>

        <div className="min-w-0">

          <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
            {label}
          </p>

          <p className="mt-1 truncate font-bold text-slate-200">
            {value}
          </p>

        </div>

      </div>
    </div>
  );
}

/* Action */
function Action({ to, icon, title, text }) {
  return (
    <Link
      to={to}
      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-900/40 p-4 transition hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-slate-900/70"
    >

      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
        {icon}
      </div>

      <div className="flex-1">

        <p className="font-bold text-slate-200">
          {title}
        </p>

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

/* Mini Stat */
function MiniStat({ value, label }) {
  return (
    <div className="rounded-2xl bg-slate-900/50 p-4 text-center">

      <p className="text-2xl font-black text-white">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-600">
        {label}
      </p>

    </div>
  );
}

/* Activity */
function Activity({ icon, title, text, time }) {
  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5">
        {icon}
      </div>

      <div className="flex-1 border-b border-white/5 pb-4">

        <div className="flex items-start justify-between gap-3">

          <div>

            <p className="font-bold text-slate-200">
              {title}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {text}
            </p>

          </div>

          <span className="shrink-0 text-xs text-slate-600">
            {time}
          </span>

        </div>

      </div>

    </div>
  );
}

export default StudentProfile;