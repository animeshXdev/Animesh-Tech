import { AboutSection } from '@/components/AboutSection'
import { FeaturesSection } from '@/components/FeaturesSection'
import Hero from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import React from 'react'

const Homepage = () => {
  return (
    <>
    <Hero />
    <AboutSection />
    <FeaturesSection />
    <SkillsSection />
    <ProjectsSection />
    </>
  )
}

export default Homepage