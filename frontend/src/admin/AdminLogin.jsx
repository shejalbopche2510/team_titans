import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      navigate("/admin/dashboard");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-32 top-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-[-150px] left-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-3xl" />

      {/* Main */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-10">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div className="hidden flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-10 lg:flex">

            <div>

              {/* Logo */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-3xl shadow-xl backdrop-blur-xl">
                🏫
              </div>

              <p className="mt-10 text-xs font-bold uppercase tracking-[0.3em] text-cyan-200">
                Smart Campus
              </p>

              <h1 className="mt-3 text-4xl font-black leading-tight text-white">
                Complaint
                <br />
                Management
                <br />
                System
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-blue-100">
                Manage campus complaints, monitor their progress and keep
                student issues organized from one place.
              </p>

            </div>

            {/* Bottom Card */}
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/20">
                  🔐
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Secure Admin Access
                  </p>

                  <p className="mt-1 text-xs text-blue-100">
                    Authorized administrators only
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="p-7 sm:p-10 lg:p-12">

            {/* Mobile Logo */}
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl lg:hidden">
              🏫
            </div>

            {/* Header */}
            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Admin Portal
              </span>

              <h2 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                Welcome Back 👋
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Login to access the admin dashboard and manage campus
                complaints.
              </p>

            </div>

            {/* Form */}
            <form
              onSubmit={handleLogin}
              className="mt-8 space-y-5"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-slate-300"
                >
                  Admin Email
                </label>

                <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-slate-900/60 px-4 transition focus-within:border-cyan-400/50 focus-within:ring-4 focus-within:ring-cyan-400/5">

                  <span className="mr-3 text-lg">
                    ✉️
                  </span>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-slate-600"
                  />

                </div>

              </div>

              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-300"
                >
                  Password
                </label>

                <div className="mt-2 flex items-center rounded-xl border border-white/10 bg-slate-900/60 px-4 transition focus-within:border-cyan-400/50 focus-within:ring-4 focus-within:ring-cyan-400/5">

                  <span className="mr-3 text-lg">
                    🔒
                  </span>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-slate-600"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 text-lg text-slate-500 transition hover:text-white"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>

                </div>

              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-5 py-4 text-sm font-bold text-white shadow-xl shadow-blue-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/40 active:translate-y-0"
              >
                Login to Admin Panel →
              </button>

            </form>

            {/* Info */}
            <div className="mt-7 rounded-xl border border-white/5 bg-white/[0.03] p-4">

              <div className="flex gap-3">

                <span className="text-lg">
                  💡
                </span>

                <p className="text-xs leading-5 text-slate-500">
                  Admin access allows you to monitor and manage student
                  complaints efficiently.
                </p>

              </div>

            </div>

            {/* Footer */}
            <div className="mt-8 text-center">

              <p className="text-xs text-slate-600">
                🔐 Authorized Admin Access Only
              </p>

              <p className="mt-2 text-[10px] text-slate-700">
                © 2026 Smart Campus Complaint Management System
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminLogin;