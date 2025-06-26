"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaRunning, FaLock, FaLinux, FaPython } from "react-icons/fa";
import CountUp from "react-countup";

const skillsData = {
  web: [
    { name: "React", icon: <FaReact />, level: "Advanced", percent: 90 },
    { name: "Next.js", icon: <FaNodeJs />, level: "Advanced", percent: 85 },
    { name: "TypeScript", icon: <FaReact />, level: "Intermediate", percent: 75 },
    { name: "Tailwind CSS", icon: <FaReact />, level: "Advanced", percent: 90 },
  ],
  parkour: [
    { name: "Wall Run", icon: <FaRunning />, level: "Expert", percent: 95 },
    { name: "Vaults", icon: <FaRunning />, level: "Advanced", percent: 85 },
    { name: "Cat Leap", icon: <FaRunning />, level: "Intermediate", percent: 70 },
    { name: "Precision Jump", icon: <FaRunning />, level: "Expert", percent: 90 },
  ],
  hacker: [
    { name: "Linux", icon: <FaLinux />, level: "Intermediate", percent: 80 },
    { name: "OSINT", icon: <FaLock />, level: "Intermediate", percent: 75 },
    { name: "Nmap", icon: <FaLock />, level: "Intermediate", percent: 70 },
    { name: "Python", icon: <FaPython />, level: "Beginner", percent: 60 },
  ],
};

const AnimatedStat = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center space-y-1">
    <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
      <CountUp end={value} duration={2} />+
    </h2>
    <p className="text-muted-foreground">{label}</p>
  </div>
);

const SkillCard = ({ skill }: { skill: (typeof skillsData.web)[0] }) => (
  <motion.div
    whileHover={{ scale: 1.04 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="p-4 rounded-xl bg-muted/30 border border-muted shadow-sm"
  >
    <div className="flex items-center gap-3 text-xl font-semibold text-blue-600 mb-2">
      {skill.icon}
      <span>{skill.name}</span>
    </div>
    <p className="text-sm text-muted-foreground mb-2">{skill.level}</p>
    {/* Progress Bar */}
    <div className="w-full bg-muted rounded-full h-2">
      <motion.div
        className="bg-blue-600 h-2 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.percent}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
    <p className="text-right text-xs text-muted-foreground mt-1">
      {skill.percent}%
    </p>
  </motion.div>
);

export default function SkillsPage() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-10 md:px-20 bg-background text-foreground">
      <motion.div
        className="max-w-6xl mx-auto space-y-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">My Skills</h2>
          <p className="text-muted-foreground mt-3 text-lg">Experience and Proficiency</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <AnimatedStat value={4} label="Years XP" />
          <AnimatedStat value={30} label="Projects" />
          <AnimatedStat value={12} label="Parkour Moves" />
          <AnimatedStat value={10} label="Security Tools" />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="web" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 bg-muted p-2 rounded-xl">
            <TabsTrigger value="web">Web Dev</TabsTrigger>
            <TabsTrigger value="parkour">Parkour</TabsTrigger>
            <TabsTrigger value="hacker">Hacking</TabsTrigger>
          </TabsList>

          <TabsContent
            value="web"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skillsData.web.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </TabsContent>

          <TabsContent
            value="parkour"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skillsData.parkour.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </TabsContent>

          <TabsContent
            value="hacker"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skillsData.hacker.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
