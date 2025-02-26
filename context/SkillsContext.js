// /context/SkillsContext.js
import { createContext, useContext, useState } from "react";

const SkillsContext = createContext();

export function SkillsProvider({ children }) {
  // We'll store skill data + total XP here
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

  return (
    <SkillsContext.Provider
      value={{ skills, setSkills, TOTAL_XP, totalAllocated, remaining }}
    >
      {children}
    </SkillsContext.Provider>
  );
}

export function useSkills() {
  return useContext(SkillsContext);
}
