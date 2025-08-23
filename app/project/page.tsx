import Link from "next/link";

export default function ProjectPage() {
  const projects = [
    { id: 1, name: "Website Redesign", progress: 75, team: "Design Team" },
    { id: 2, name: "Mobile App Launch", progress: 50, team: "Dev Team" },
    { id: 3, name: "Marketing Campaign", progress: 20, team: "Marketing Team" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 bg-white">
      {/* Back Arrow */}
      <Link href="/" className="inline-block mb-6 sm:ml-4 text-gray-600 hover:text-gray-800 text-2xl">
        ←
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Projects Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Manage your projects effectively with clear timelines, resources, and goals.
      </p>

      {/* Projects Grid */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold mb-4">Active Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-4 sm:p-6 bg-white shadow rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">{project.name}</h3>
              <p className="text-gray-500 mb-4">{project.team}</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div
                  className="bg-blue-500 h-4 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600">{project.progress}% Complete</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
