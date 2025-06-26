"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="min-h-screen  sm:p-12 md:p-20 font-[family-name:var(--font-geist-sans)] bg-background text-foreground">
      <div className="grid grid-cols-1  pt-15 md:grid-cols-2 gap-10 items-center justify-center max-w-7xl mx-auto">
        {/* Left: Text Section */}
        <motion.div
          className="space-y-6 text-center md:text-left order-2 sm:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-blue-600 dark:text-blue-500">Animesh</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground">
            <Typewriter
              words={[
                "Parkour Athlete",
                "Web Developer",
                "Personal Trainer",
                "Next.js Expert",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground">
            I craft engaging digital experiences and help people stay fit, fast,
            and focused. Let’s build something amazing together.
          </p>

          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/about">
              <Button size="lg" className="group">
                Explore More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center md:justify-start pt-4 text-2xl text-muted-foreground">
            <a href="https://github.com/" target="_blank">
              <FaGithub className="hover:text-black dark:hover:text-white transition" />
            </a>
            <a href="https://linkedin.com/" target="_blank">
              <FaLinkedin className="hover:text-blue-600 transition" />
            </a>
            <a href="https://instagram.com/" target="_blank">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right: Hero Illustration */}
        <motion.div
          className="w-full flex justify-center order-1 sm:order-2"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/globe.svg" // Place your image in the /public folder
            alt="Hero Illustration"
            width={400}
            height={400}
            className="w-3/4 sm:w-2/3 md:w-full max-w-md h-auto"
            priority
          />
        </motion.div>
      </div>
    </main>
  );
}
