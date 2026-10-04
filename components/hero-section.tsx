"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen pt-24 md:pt-32 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <p className="text-foreground/70 font-semibold text-base md:text-lg tracking-wide">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Thrijwal Krishnappa
            </h1>
            <p className="text-lg md:text-xl text-foreground/70">Data Engineer & Cloud Architect | Bristol, UK</p>
          </div>

          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            I craft data solutions and cloud architectures that optimize processes, reduce manual effort, and ensure
            reliable operations. Specialized in Python, SQL, AWS, and enterprise data systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 md:px-8 py-2 md:py-3 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-smooth transform hover:scale-105 text-sm md:text-base"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 md:px-8 py-2 md:py-3 border border-foreground text-foreground rounded-lg font-semibold hover:bg-foreground/10 transition-smooth text-sm md:text-base"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right - Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/10 to-foreground/5 rounded-full blur-2xl" />
            <div className="relative w-full h-full rounded-full p-1 bg-foreground overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c1182f92-7ef4-4eaf-a836-0e1890a59545-tf4mmn9bmDGM6P83v5YUng8j3CrrFu.jpg"
                alt="Thrijwal Krishnappa"
                width={400}
                height={400}
                className="w-full h-full rounded-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-foreground" />
      </div>
    </section>
  )
}
