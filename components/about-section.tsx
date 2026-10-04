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
              I'm an Information Science engineering graduate with an MSc in Data Science from the University of
              Bristol, and over three years of industry experience in data, reporting and test automation.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              At NTT DATA, working on MetLife's accident and health insurance programme, I owned 32 scheduled data
              warehouse outputs, built SQL and Python checks that raised data-quality coverage from 70% to 95% and cut
              defects by 25%, and automated testing to make it 40% faster. I was promoted from Senior Associate to IT
              Analyst.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              During my MSc I focused on forecasting, time series in healthcare, machine learning and visual
              analytics. I'm based in Bristol, UK, and I'm looking for data, BI and QA roles where good data improves
              real decisions.
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
          <div className="grid grid-cols-2 gap-4 content-start">
            {[
              { number: "3+", label: "Years Experience" },
              { number: "32", label: "Data Outputs Owned" },
              { number: "70→95%", label: "Data-Quality Coverage" },
              { number: "11", label: "Projects" },
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
