"use client"

import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Sentiment Analysis Engine",
      description: "ML model analyzing social media sentiment with 85% accuracy",
      tech: ["Python", "NLP", "Machine Learning", "TensorFlow"],
      achievement: "85% Accuracy",
    },
    {
      title: "Image Forgery Detection",
      description: "RCNN-based system detecting forged regions in digital images",
      tech: ["RCNN", "Python", "Computer Vision", "Git"],
      achievement: "18% Improvement",
    },
    {
      title: "Data Pipeline Optimization",
      description: "ETL orchestration system improving Snowflake query performance",
      tech: ["Snowflake", "Python", "AWS Lambda", "SQL"],
      achievement: "30% Faster",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
        <div className="h-1 w-24 bg-border rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/30 transition-smooth transform hover:scale-105 hover:shadow-lg hover:shadow-foreground/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-border" />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-smooth flex-1">
                    {project.title}
                  </h3>
                  <div className="text-foreground text-xs font-bold bg-foreground/5 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                    {project.achievement}
                  </div>
                </div>

                <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-foreground/5 text-foreground px-3 py-1 rounded-full border border-foreground/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-foreground hover:bg-foreground/5 rounded-lg transition-smooth">
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-2 text-foreground hover:bg-foreground/5 rounded-lg transition-smooth">
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
