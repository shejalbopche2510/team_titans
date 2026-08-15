import { useState } from "react";

function SubmitComplaint() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    priority: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-600">
            SMART CAMPUS
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Submit a Complaint
          </h1>

          <p className="mt-2 text-slate-500">
            Tell us about your campus issue and we will help resolve it.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Title */}
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Complaint Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Example: Classroom fan not working"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            {/* Category + Priority */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Category
                </label>

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select Category</option>
                  <option>Electrical</option>
                  <option>Cleanliness</option>
                  <option>Internet</option>
                  <option>Classroom</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-semibold text-slate-700">
                  Priority
                </label>

                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select Priority</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

            </div>

            {/* Location */}
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Location
              </label>

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Example: Room 204, Block A"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Complaint Description
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="6"
                placeholder="Describe your problem in detail..."
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">

              <button
                type="submit"
                className="flex-1 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Submit Complaint
              </button>

              <button
                type="reset"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50"
              >
                Clear Form
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default SubmitComplaint;