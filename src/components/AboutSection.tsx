"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-12 md:px-20 bg-background text-foreground"
    >
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/about.svg"
            alt="About Illustration"
            width={400}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Text */}
        <div className="space-y-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-500">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I’m Animesh, a passionate parkour athlete and web developer. I love
            to create beautiful, performant web experiences, and I train daily
            to improve my body and mind.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether it&apos;s jumping rooftops or crafting clean UIs with React,
            Next.js, and Tailwind CSS, I bring energy, focus, and creativity to
            everything I do.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
