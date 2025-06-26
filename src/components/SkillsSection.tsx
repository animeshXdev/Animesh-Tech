"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaRunning, FaLock } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";
import { JSX, useState } from "react";

const webSkills = [
  { label: "React", icon: <FaReact />, level: 90 },
  { label: "Next.js", icon: <SiNextdotjs />, level: 85 },
  { label: "TypeScript", icon: <SiTypescript />, level: 80 },
  { label: "Node.js", icon: <FaNodeJs />, level: 70 },
];

const parkourSkills = [
  { label: "Wall Run", icon: <FaRunning />, level: 95 },
  { label: "Vaults", icon: <FaRunning />, level: 90 },
  { label: "Cat Grab", icon: <FaRunning />, level: 85 },
  { label: "Precision Jump", icon: <FaRunning />, level: 80 },
];

const hackerSkills = [
  { label: "Recon", icon: <FaLock />, level: 75 },
  { label: "Burp Suite", icon: <FaLock />, level: 70 },
  { label: "Linux CLI", icon: <FaLock />, level: 65 },
];

const SkillBar = ({ skill }: { skill: { label: string; icon: JSX.Element; level: number } }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    viewport={{ once: true }}
    className="space-y-1"
  >
    <div className="flex items-center gap-2 text-sm sm:text-base">
      <span className="text-blue-500 text-lg">{skill.icon}</span>
      <span className="font-medium">{skill.label}</span>
    </div>
    <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-2 rounded">
      <div
        className="bg-blue-500 h-full rounded transition-all duration-500"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </motion.div>
);

export const SkillsSection = () => {
  const [tab, setTab] = useState("all");

  const allSkills = [...webSkills, ...parkourSkills, ...hackerSkills];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-background text-foreground">
      <motion.div
        className="max-w-7xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-500">
            My Skills
          </h2>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg">
            Explore my tech, parkour, and cybersecurity skills.
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-2 sm:gap-4 bg-muted p-1 rounded mb-10">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web Dev</TabsTrigger>
            <TabsTrigger value="parkour">Parkour</TabsTrigger>
            <TabsTrigger value="hacker">Hacking</TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {allSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {webSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="parkour">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {parkourSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hacker">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {hackerSkills.map((skill, i) => (
                <SkillBar key={i} skill={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};
