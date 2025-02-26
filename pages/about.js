// pages/about.js
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function About() {
  const TOTAL_XP = 100;
  const initialSkills = [
    { name: "Product Management", allocation: 0 },
    { name: "Data Analytics", allocation: 0 },
    { name: "UX/UI", allocation: 0 },
    { name: "FinTech", allocation: 0 },
    { name: "Blockchain", allocation: 0 },
  ];
  const [skills, setSkills] = useState(initialSkills);

  const totalAllocated = skills.reduce((sum, s) => sum + s.allocation, 0);
  const remaining = TOTAL_XP - totalAllocated;

  const dataForPie = skills.map((skill) => ({
    name: skill.name,
    value: skill.allocation,
  }));

  const COLORS = ["#FFD700", "#228B22", "#D2B48C", "#1E90FF", "#DA70D6"];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-gold font-artDeco text-5xl mb-4">
        About Jeremy Foxx
      </h1>

      <p className="text-tan text-xl mb-8">
        Step 5: Allocate your XP across different skills!
      </p>

      <div className="w-full max-w-md">
        {skills.map((skill, index) => (
          <div key={skill.name} className="mb-4">
            <label className="text-white block mb-2">
              {skill.name} ({skill.allocation} XP)
            </label>
            <input
              type="range"
              min="0"
              max={TOTAL_XP}
              value={skill.allocation}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                setSkills((prevSkills) => {
                  const updated = [...prevSkills];
                  updated[index] = {
                    ...updated[index],
                    allocation: newValue,
                  };
                  return updated;
                });
              }}
              className="w-full accent-gold"
            />
          </div>
        ))}
      </div>

      <div className="mt-6 text-white">
        <p>Total Allocated: {totalAllocated} / {TOTAL_XP} XP</p>
        {remaining < 0 ? (
          <p className="text-red-500">Over Budget by {-remaining} XP!</p>
        ) : (
          <p>Remaining: {remaining} XP</p>
        )}
      </div>

      {/* Optional Pie Chart */}
      <div className="mt-8">
        <PieChart width={300} height={300}>
          <Pie
            data={dataForPie}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {dataForPie.map((entry, idx) => (
              <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
