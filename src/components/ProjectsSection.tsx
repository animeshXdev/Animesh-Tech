"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkPreview } from "./ui/link-preview";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using Next.js, Tailwind CSS, and Framer Motion.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://devathlete-animesh.vercel.app/",
    github: "https://github.com/yourname/portfolio",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather app using OpenWeather API with geolocation support.",
    tech: ["React", "TypeScript", "API"],
    live: "https://weather-next-eosin.vercel.app/",
    github: "https://github.com/yourname/weather-app",
  },
  {
    title: "Todo Manager",
    description:
      "A productivity-focused Todo App with animations and drag-and-drop.",
    tech: ["Next.js", "ShadCN", "Framer Motion"],
    live: "https://to-do-app-ruby-beta.vercel.app/",
    github: "https://to-do-app-ruby-beta.vercel.app/",
  },
];

const ProjectCard = ({
  title,
  description,
  tech,
  live,
  github,
}: {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}) => {
  const card = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="rounded-xl border border-muted bg-muted/30 dark:bg-muted/20 p-6 space-y-4 shadow-md hover:shadow-lg transition-all"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs">
        {tech.map((t) => (
          <span
            key={t}
            className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 pt-2">
        <Button variant="outline" size="sm" asChild>
          <a href={live} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-1" />
            Live
          </a>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
        </Button>
      </div>
    </motion.div>
  );

  return live !== "#" ? (
    <LinkPreview url={live}>
      <div role="presentation" className="cursor-pointer">{card}</div>
    </LinkPreview>
  ) : (
    card
  );
};

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-10 md:px-20 bg-background text-foreground"
    >
      <motion.div
        className="max-w-7xl mx-auto space-y-12"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">
            My Projects
          </h2>
          <p className="text-muted-foreground mt-3 text-lg">
            Things I’ve built and shipped recently.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
