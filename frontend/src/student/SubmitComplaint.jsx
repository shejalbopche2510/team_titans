import { useState } from "react";
import { Link } from "react-router-dom";

function SubmitComplaint() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    priority: "Medium",
    location: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background */}
      <div className="fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-8 sm:px-8">

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Student Portal
            </div>

            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
              Submit Complaint
            </h1>

            <p className="mt-3 text-slate-400">
              Tell us about the issue and our team will work to resolve it.
            </p>
          </div>

          <Link
            to="/student"
            className="w-fit rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-200 backdrop-blur-xl transition hover:bg-white/10"
          >
            ← Dashboard
          </Link>

        </div>

        {/* Success Message */}
        {submitted && (
          <div className="mb-6 flex items-start gap-4 rounded-2xl border border-green-400/20 bg-green-400/10 p-5 text-green-300 backdrop-blur-xl">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-400/20 text-xl">
              ✓
            </div>

            <div>
              <h3 className="font-bold">
                Complaint Submitted Successfully!
              </h3>

              <p className="mt-1 text-sm text-green-300/80">
                Your complaint has been recorded. You can track its status
                from My Complaints.
              </p>
            </div>
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:col-span-2"
          >

            <div className="mb-8">
              <h2 className="text-xl font-bold text-white">
                Complaint Information
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Provide accurate details so the issue can be resolved quickly.
              </p>
            </div>

            {/* Title */}
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Complaint Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Classroom fan is not working"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            {/* Category + Priority */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-slate-300 outline-none transition focus:border-cyan-400"
                >
                  <option value="">Select category</option>
                  <option value="Electrical">⚡ Electrical</option>
                  <option value="Internet">🌐 Internet</option>
                  <option value="Maintenance">🔧 Maintenance</option>
                  <option value="Classroom">🏫 Classroom</option>
                  <option value="Cleanliness">🧹 Cleanliness</option>
                  <option value="Other">📌 Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-300">
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-slate-300 outline-none transition focus:border-cyan-400"
                >
                  <option value="Low">🟢 Low</option>
                  <option value="Medium">🟡 Medium</option>
                  <option value="High">🔴 High</option>
                </select>
              </div>

            </div>

            {/* Location */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Example: Room 204, Block A"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            {/* Description */}
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-300">
                  Description
                </label>

                <span className="text-xs text-slate-600">
                  {formData.description.length}/500
                </span>
              </div>

              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => {
                  if (e.target.value.length <= 500) {
                    handleChange(e);
                  }
                }}
                placeholder="Describe the problem in detail..."
                rows="6"
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none placeholder:text-slate-600 transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            {/* Attachment UI */}
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Attach Evidence
                <span className="ml-2 text-xs font-normal text-slate-600">
                  Optional
                </span>
              </label>

              <div className="rounded-2xl border border-dashed border-white/15 bg-slate-900/40 p-7 text-center transition hover:border-cyan-400/40">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl">
                  📎
                </div>

                <p className="mt-3 font-semibold text-slate-300">
                  Upload image or document
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  JPG, PNG or PDF • Max 5MB
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10"
                >
                  Choose File
                </button>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

              <Link
                to="/student"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-center font-semibold text-slate-300 transition hover:bg-white/10"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-blue-500/30"
              >
                Submit Complaint →
              </button>

            </div>

          </form>

          {/* Side Panel */}
          <aside className="space-y-5">

            {/* How it works */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <h3 className="text-lg font-bold text-white">
                How It Works
              </h3>

              <div className="mt-6 space-y-6">

                <Step
                  number="01"
                  title="Submit"
                  text="Tell us about your issue."
                />

                <Step
                  number="02"
                  title="Review"
                  text="Our team reviews your complaint."
                />

                <Step
                  number="03"
                  title="Resolve"
                  text="The responsible department works on it."
                />

                <Step
                  number="04"
                  title="Track"
                  text="Monitor the status from your dashboard."
                />

              </div>

            </div>

            {/* Tips */}
            <div className="rounded-3xl border border-cyan-400/10 bg-cyan-400/5 p-6 backdrop-blur-xl">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-xl">
                💡
              </div>

              <h3 className="mt-4 font-bold text-white">
                Helpful Tips
              </h3>

              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-400">
                <li>• Give a clear complaint title.</li>
                <li>• Mention the exact location.</li>
                <li>• Explain the issue clearly.</li>
                <li>• Add evidence when necessary.</li>
              </ul>

            </div>

          </aside>

        </div>
      </main>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="flex gap-4">

      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-xs font-black text-cyan-300">
        {number}
      </div>

      <div>
        <h4 className="font-bold text-slate-200">
          {title}
        </h4>

        <p className="mt-1 text-sm leading-5 text-slate-500">
          {text}
        </p>
      </div>

    </div>
  );
}

export default SubmitComplaint;