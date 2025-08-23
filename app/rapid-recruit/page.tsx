import Link from "next/link";

export default function RapidRecruitPage() {
  const jobs = [
    { id: 1, title: "Frontend Developer", location: "Remote", status: "Open" },
    { id: 2, title: "Backend Developer", location: "Lagos, Nigeria", status: "Closed" },
    { id: 3, title: "UI/UX Designer", location: "Abuja, Nigeria", status: "Open" },
  ];

  const candidates = [
    { id: 1, name: "Alice Johnson", position: "Frontend Developer", status: "Applied" },
    { id: 2, name: "Bob Smith", position: "Backend Developer", status: "Interviewed" },
    { id: 3, name: "Carol Lee", position: "UI/UX Designer", status: "Hired" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-white">
      {/* Back Arrow */}
      <Link href="/" className="inline-block mb-6 text-gray-600 hover:text-gray-800 text-2xl">
        ←
      </Link>

      <h1 className="text-3xl font-bold mb-4">Rapid Recruit Dashboard</h1>
      <p className="text-gray-600 mb-10">
        Rapid Recruit helps you discover, connect, and hire the right talent in record time.
      </p>

      {/* Job Postings */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Job Postings</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="p-6 bg-white shadow rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">{job.title}</h3>
              <p className="text-gray-500 mb-2">{job.location}</p>
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full ${
                  job.status === "Open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {job.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Candidates */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Candidates</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {candidates.map((cand) => (
            <div key={cand.id} className="p-6 bg-white shadow rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">{cand.name}</h3>
              <p className="text-gray-500 mb-2">{cand.position}</p>
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full ${
                  cand.status === "Hired"
                    ? "bg-green-100 text-green-800"
                    : cand.status === "Interviewed"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {cand.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
