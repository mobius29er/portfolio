// pages/projects.js
import { useSkills } from "../context/SkillsContext";

const allProjects = [
  {
    title: "FinTech Dashboard",
    description: "A real-time financial dashboard for user investments.",
    skills: ["FinTech", "Data Analytics"],
    imageUrl: "/images/fintech-dashboard.png", // optional
  },
  {
    title: "Blockchain Explorer",
    description: "Explore blocks and transactions in a custom blockchain.",
    skills: ["Blockchain", "UX/UI"],
    imageUrl: "/images/blockchain-explorer.png",
  },
  {
    title: "Product Launch Strategy",
    description: "Roadmap and launch plan for a new product line.",
    skills: ["Product Management"],
    imageUrl: "/images/product-launch.png",
  },
  {
    title: "Analytics Automation",
    description: "Automated data pipeline for advanced reporting.",
    skills: ["Data Analytics"],
    imageUrl: "/images/analytics-automation.png",
  },
  {
    title: "UI/UX Redesign",
    description: "Overhauled the interface for a legacy application.",
    skills: ["UX/UI"],
    imageUrl: "/images/ui-ux-redesign.png",
  },
  // Add more as needed
];

export default function Projects() {
  const { skills } = useSkills();

  // 1. Figure out which skills have allocation > 0
  const allocatedSkills = skills
    .filter((s) => s.allocation > 0)
    .map((s) => s.name);

  // 2. Filter projects that match any allocated skill
  const filteredProjects = allProjects.filter((project) =>
    project.skills.some((skillName) => allocatedSkills.includes(skillName))
  );

  // (Optional) If user hasn't allocated anything, we could show all projects or none.
  // For example, if allocatedSkills.length === 0, maybe we show allProjects or a message.
  // Let's do a quick fallback to show all if no skills allocated:
  const finalProjects =
    allocatedSkills.length === 0 ? allProjects : filteredProjects;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-gold font-artDeco text-4xl mb-6">
        Netflix-Style Project Selection
      </h1>
      <p className="text-tan text-lg mb-8">
        Step 6: Projects filtered by your skill allocations
      </p>

      {finalProjects.length === 0 ? (
        <p className="text-gray-400">No projects match your allocated skills.</p>
      ) : (
        <div className="overflow-x-auto flex space-x-4 pb-4">
          {finalProjects.map((project) => (
            <div
              key={project.title}
              className="flex-none w-64 bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition"
            >
              {project.imageUrl && (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="mb-2 w-full h-32 object-cover rounded"
                />
              )}
              <h2 className="text-xl mb-2 text-gold font-artDeco">
                {project.title}
              </h2>
              <p className="text-sm mb-2">{project.description}</p>
              <div className="text-xs text-gray-400">
                Skills: {project.skills.join(", ")}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
