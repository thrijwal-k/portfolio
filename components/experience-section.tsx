"use client"

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Information Technology Analyst",
      company: "NTT Data",
      period: "June 2024 – Aug 2025",
      location: "Bangalore, India",
      highlights: [
        "Collaborated with U.S. client MetLife on insurance data systems",
        "Improved test coverage from 70% to 95%",
        "Reduced defect leakage by 25% using Python automation",
        "Mentored junior QA engineers and reduced onboarding time by 30%",
      ],
    },
    {
      role: "Information Technology Senior Associate",
      company: "NTT Data",
      period: "Jan 2022 – June 2024",
      location: "Bangalore, India",
      highlights: [
        "Automated test suites using Selenium, Python, and TestNG",
        "Accelerated test execution by 40%",
        "Developed reusable Python frameworks for automation",
        "Reduced release delays by 20% through defect analysis",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Work Experience</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/10 transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-foreground transition-smooth">
                    {exp.role}
                  </h3>
                  <p className="text-foreground font-semibold text-lg mt-2">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-3 text-foreground/80">
                    <span className="text-foreground/60 mt-1.5 flex-shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
