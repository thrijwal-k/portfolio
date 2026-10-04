"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

export default function AboutSection() {
  const [isInBristol, setIsInBristol] = useState(true)

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">About Me</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Main About Card */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a Computer Science graduate with extensive experience in data engineering, automation, and cloud
              workflows. My journey spans from mentoring junior engineers to architecting scalable data solutions for
              Fortune 500 companies.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              At NTT Data, I collaborated with MetLife on insurance data systems, reducing defect leakage by 25% and
              improving test coverage from 70% to 95%. I'm passionate about leveraging technology to solve complex
              problems efficiently.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Currently based in Bristol, UK, pursuing my MSc in Data Science at the University of Bristol. I'm
              certified in AWS Solutions Architecture, Snowflake Data Engineering, and Oracle Cloud Infrastructure.
            </p>

            <div className="pt-6 border-t border-border">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-foreground" />
                <span className="text-sm font-semibold text-foreground">Location & Status</span>
              </div>
              <button
                onClick={() => setIsInBristol(!isInBristol)}
                className="px-4 py-2 bg-foreground/10 hover:bg-foreground/20 text-foreground rounded-lg transition-smooth text-sm font-medium"
              >
                {isInBristol ? "📍 Currently in Bristol, UK" : "🇮🇳 Citizen of India"}
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "10+", label: "Certifications" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/30 hover:bg-foreground/5 transition-smooth transform hover:scale-up cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-foreground group-hover:text-foreground transition-smooth">
                  {stat.number}
                </div>
                <p className="text-sm text-foreground/60 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
