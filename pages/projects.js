// pages/projects.js
import { useSkills } from "../context/SkillsContext";

const allProjects = [
  {
    title: "FinTech Dashboard",
    description: "A real-time financial dashboard for user investments.",
    skills: ["FinTech", "Data Analytics"],
  },
  {
    title: "Blockchain Explorer",
    description: "Explore blocks and transactions in a custom blockchain.",
    skills: ["Blockchain", "UX/UI"],
  },
  {
    title: "Product Launch Strategy",
    description: "Roadmap and launch plan for a new product line.",
    skills: ["Product Management"],
  },
  // Add more...
];

export default function Projects() {
  const { skills } = useSkills();

  // Filter logic: show projects if they match at least one skill with > 0 allocation
  // (or create your own logic, e.g. sum of relevant skill allocations > 0)
  const allocatedSkills = skills.filter((s) => s.allocation > 0).map((s) => s.name);

  const filteredProjects = allProjects.filter((project) =>
    project.skills.some((skillName) => allocatedSkills.includes(skillName))
  );

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-gold font-artDeco text-5xl mb-4">
        Netflix-Style Project Selection
      </h1>
      <p className="text-tan text-xl mb-8">
        Step 6: Projects filtered by your skill allocations
      </p>

      <div className="overflow-x-auto flex space-x-4">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="flex-none w-64 bg-gray-800 p-4 rounded-md"
          >
            <h2 className="text-xl mb-2">{project.title}</h2>
            <p className="text-sm mb-2">{project.description}</p>
            <div className="text-xs text-gray-400">
              Skills: {project.skills.join(", ")}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
