import { Link, useParams } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();

  const complaint = {
    id: id || "1",
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
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-6">
          <Link
            to="/student/complaints"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            ← Back to My Complaints
          </Link>

          <p className="mt-5 text-sm font-semibold text-blue-600">
            COMPLAINT DETAILS
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900">
            {complaint.title}
          </h1>
        </div>

        {/* Main Card */}
        <div className="rounded-3xl bg-white p-6 shadow-lg md:p-8">

          {/* Status */}
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm text-slate-500">
                Complaint ID
              </p>

              <p className="mt-1 font-bold text-slate-800">
                CMP-{complaint.id}
              </p>
            </div>

            <span className="w-fit rounded-full bg-yellow-100 px-5 py-2 text-sm font-bold text-yellow-700">
              {complaint.status}
            </span>
          </div>

          {/* Details Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Category
              </p>

              <p className="mt-2 font-bold text-slate-900">
                🔧 {complaint.category}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Location
              </p>

              <p className="mt-2 font-bold text-slate-900">
                📍 {complaint.location}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Priority
              </p>

              <p className="mt-2 font-bold text-red-600">
                ⚠️ {complaint.priority}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm text-slate-500">
                Submitted Date
              </p>

              <p className="mt-2 font-bold text-slate-900">
                📅 {complaint.date}
              </p>
            </div>

          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-slate-900">
              Complaint Description
            </h2>

            <div className="mt-3 rounded-2xl bg-slate-50 p-5 leading-7 text-slate-600">
              {complaint.description}
            </div>
          </div>

          {/* Status Timeline */}
          <div className="mt-8">
            <h2 className="text-lg font-bold text-slate-900">
              Complaint Status
            </h2>

            <div className="mt-6 space-y-6">

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Complaint Submitted
                  </h3>

                  <p className="text-sm text-slate-500">
                    Your complaint has been submitted successfully.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  •
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Pending Review
                  </h3>

                  <p className="text-sm text-slate-500">
                    Waiting for admin to review the complaint.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-40">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                  ○
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Resolved
                  </h3>

                  <p className="text-sm text-slate-500">
                    Complaint will appear here after resolution.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ComplaintDetails;