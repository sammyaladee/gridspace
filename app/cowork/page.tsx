import Link from "next/link";

export default function CoworkPage() {
  const projects = [
    { id: 1, name: "Website Redesign", status: "In Progress" },
    { id: 2, name: "Mobile App Launch", status: "Completed" },
    { id: 3, name: "Marketing Campaign", status: "Pending" },
  ];

  const teamMembers = [
    { id: 1, name: "Alice Johnson", role: "Designer", color: "bg-blue-400" },
    { id: 2, name: "Bob Smith", role: "Developer", color: "bg-green-400" },
    { id: 3, name: "Carol Lee", role: "Product Manager", color: "bg-purple-400" },
  ];

  const getInitials = (name: string) =>
    name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-white">
      {/* Back Arrow */}
      <Link href="/" className="inline-block mb-6 text-gray-600 hover:text-gray-800 text-2xl">
        ←
      </Link>

      <h1 className="text-3xl font-bold mb-6">Cowork Dashboard</h1>
      <p className="text-gray-600 mb-10">
        Welcome to your collaborative workspace! Here you can see projects, team members, and tasks at a glance.
      </p>

      {/* Projects Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="p-6 bg-white shadow rounded-lg border border-gray-200">
              <h3 className="font-bold text-lg mb-2">{project.name}</h3>
              <span
                className={`inline-block px-3 py-1 text-xs rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-800"
                    : project.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Members Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Team Members</h2>
        <div className="flex space-x-6">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div
                className={`w-20 h-20 mb-2 flex items-center justify-center rounded-full text-white text-xl font-bold ${member.color}`}
              >
                {getInitials(member.name)}
              </div>
              <p className="font-semibold">{member.name}</p>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
