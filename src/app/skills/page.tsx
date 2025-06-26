"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaRunning, FaLock } from "react-icons/fa";
import CountUp from "react-countup";
import { Separator } from "@/components/ui/separator";
import { JSX } from "react";

const webSkills = [
  { name: "React", icon: <FaReact />, level: "Advanced" },
  { name: "Next.js", icon: <FaNodeJs />, level: "Advanced" },
  { name: "TypeScript", icon: <FaReact />, level: "Intermediate" },
  { name: "Tailwind CSS", icon: <FaReact />, level: "Advanced" },
];

const parkourSkills = [
  { name: "Wall Run", icon: <FaRunning />, level: "Expert" },
  { name: "Vaults", icon: <FaRunning />, level: "Advanced" },
  { name: "Cat Leap", icon: <FaRunning />, level: "Intermediate" },
  { name: "Precision Jump", icon: <FaRunning />, level: "Expert" },
];

const hackerSkills = [
  { name: "Linux", icon: <FaLock />, level: "Intermediate" },
  { name: "OSINT", icon: <FaLock />, level: "Intermediate" },
  { name: "Burp Suite", icon: <FaLock />, level: "Beginner" },
  { name: "Nmap", icon: <FaLock />, level: "Intermediate" },
];

const AnimatedStat = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center space-y-1">
    <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-500">
      <CountUp end={value} duration={2} />+
    </h2>
    <p className="text-muted-foreground">{label}</p>
  </div>
);

const SkillCard = ({ skill }: { skill: { name: string; icon: JSX.Element; level: string } }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.3 }}
    className="p-4 rounded-xl bg-muted/30 border border-muted shadow-sm text-center space-y-2"
  >
    <div className="text-3xl text-blue-600 mx-auto">{skill.icon}</div>
    <h4 className="font-semibold">{skill.name}</h4>
    <p className="text-sm text-muted-foreground">{skill.level}</p>
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
          <p className="text-muted-foreground mt-3 text-lg">What I bring to the table.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <AnimatedStat value={4} label="Years XP" />
          <AnimatedStat value={30} label="Projects" />
          <AnimatedStat value={12} label="Parkour Moves" />
          <AnimatedStat value={10} label="Security Tools" />
        </div>

        <Separator className="my-6" />

        {/* Tabs */}
        <Tabs defaultValue="web" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-4 bg-muted p-2 rounded-xl">
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="parkour">Parkour</TabsTrigger>
            <TabsTrigger value="hacker">Ethical Hacking</TabsTrigger>
          </TabsList>

          <TabsContent value="web" className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {webSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </TabsContent>

          <TabsContent value="parkour" className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {parkourSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </TabsContent>

          <TabsContent value="hacker" className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {hackerSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}
