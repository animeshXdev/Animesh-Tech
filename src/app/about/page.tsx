"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FaRunning,
  FaLaptopCode,
  FaUserSecret,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaDownload,
} from "react-icons/fa";

const timeline = [
  {
    year: "2020",
    title: "Started Parkour",
    desc: "Began training in local parks and rooftops. Built strength, agility, and discipline.",
  },
  {
    year: "2022",
    title: "Web Dev Journey",
    desc: "Discovered HTML, CSS, and JavaScript. Fell in love with building things on the web.",
  },
  {
    year: "2023",
    title: "React & Next.js",
    desc: "Built full-stack websites using React, Tailwind, and Next.js. Learned UI/UX deeply.",
  },
  {
    year: "2024",
    title: "Security Enthusiast",
    desc: "Exploring ethical hacking and cybersecurity. Passion for ethical web practices.",
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen py-24 px-4 sm:px-10 md:px-20 bg-background text-foreground">
      <motion.div
        className="max-w-6xl mx-auto space-y-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src="/profile.jpg"
              alt="Animesh"
              fill
              priority
              className="rounded-2xl object-cover shadow-xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m <strong>Animesh</strong> — a{" "}
              <span className="text-blue-600 font-semibold">Parkour athlete</span> and{" "}
              <span className="text-blue-600 font-semibold">Web Developer</span>. I blend creativity,
              logic, and discipline from both worlds. I also explore{" "}
              <span className="text-purple-500 font-semibold">ethical hacking</span> to strengthen my tech mindset.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <FaRunning className="text-blue-500 w-5 h-5" />
                <span>Parkour Athlete</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLaptopCode className="text-green-500 w-5 h-5" />
                <span>Web Developer</span>
              </div>
              <div className="flex items-center gap-2">
                <FaUserSecret className="text-purple-500 w-5 h-5" />
                <span>Ethical Hacker</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind</Badge>
              <Badge variant="secondary">Framer Motion</Badge>
              <Badge variant="secondary">Linux</Badge>
              <Badge variant="secondary">OSINT</Badge>
            </div>

            <div className="flex gap-4 pt-4 flex-wrap">
              <Button asChild variant="default">
                <a href="/Animesh_CV.pdf" download>
                  <FaDownload className="mr-2" />
                  Download CV
                </a>
              </Button>
              <a href="https://github.com/animeshXdev" target="_blank" rel="noreferrer">
                <FaGithub className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
                <FaInstagram className="w-6 h-6 hover:text-pink-500 transition" />
              </a>
              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noreferrer">
                <FaYoutube className="w-6 h-6 hover:text-red-500 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-center">My Journey</h3>
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="border-l-4 border-blue-500 pl-6 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="absolute w-4 h-4 rounded-full bg-blue-500 left-[-10px] top-[8px]" />
                <h4 className="text-lg font-semibold">{item.year} — {item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
