"use client"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "SQL", "JavaScript", "C/C++", "R", "HTML/CSS"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Oracle Cloud", "Google Cloud", "Snowflake", "ETL", "CloudFormation"],
    },
    {
      category: "Data & Testing",
      skills: ["Data Engineering", "Test Automation", "Selenium", "JMeter", "Postman", "API Testing"],
    },
    {
      category: "Frameworks & Tools",
      skills: ["React", "Node.js", "Flask", "FastAPI", "Git", "Jira", "PyCharm", "VS Code"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Technical Skills</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group bg-card border border-border rounded-xl p-6 hover:border-foreground/30 hover:bg-foreground/5 transition-smooth transform hover:scale-up animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-foreground transition-smooth">
                {category.category}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-foreground/70 group-hover:text-foreground transition-smooth p-2 rounded hover:bg-foreground/10 cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
