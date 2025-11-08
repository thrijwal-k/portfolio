"use client"
import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import CertificationsSection from "@/components/certifications-section"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Show name intro for 2 seconds, then load content
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {!showContent && (
        <div className="fixed inset-0 bg-background flex items-center justify-center z-50 animate-intro">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-intro-text">
              Thrijwal Krishnappa
            </h1>
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <Navigation />

        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificationsSection />
        </main>
      </div>
    </div>
  )
}
