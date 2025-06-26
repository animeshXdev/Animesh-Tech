"use client";

import { motion } from "framer-motion";
import { FaCode, FaRunning, FaUserSecret } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <FaRunning className="text-blue-600 dark:text-blue-500 text-3xl" />,
    title: "Parkour Athlete",
    desc: "I train daily in parkour, mastering movement, precision, and body control. Parkour fuels my focus and mindset.",
  },
  {
    icon: <FaCode className="text-green-600 dark:text-green-500 text-3xl" />,
    title: "Web Developer",
    desc: "I build fast, modern websites using React, Next.js, and Tailwind CSS. I love designing clean UI & smooth UX.",
  },
  {
    icon: <FaUserSecret className="text-red-600 dark:text-red-500 text-3xl" />,
    title: "Ethical Hacker",
    desc: "I explore cybersecurity, bug bounty, and ethical hacking basics. I enjoy finding vulnerabilities & securing systems.",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 px-6 sm:px-12 md:px-20 bg-background text-foreground"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center space-y-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">
            My Qualities & Journey
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            I balance code, movement, and digital security with discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full shadow-md border border-zinc-200 dark:border-zinc-700 backdrop-blur-md bg-white/70 dark:bg-zinc-900/70 transition-transform duration-300 hover:shadow-blue-300/30 dark:hover:shadow-blue-500/20 hover:shadow-xl">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  {feat.icon}
                  <h3 className="text-xl font-semibold">{feat.title}</h3>
                  <p className="text-muted-foreground">{feat.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
