"use client"

export default function CertificationsSection() {
  const certifications = [
    { title: "AWS Certified Solutions Architect – Professional", year: "2024" },
    { title: "Snowflake Certified Professional", year: "2024" },
    { title: "Oracle Certified Data Engineer", year: "2023" },
    { title: "AWS Certified SysOps Administrator – Associate", year: "2023" },
    { title: "AWS Certified Developer – Associate", year: "2023" },
    { title: "Microsoft SQL Server Data Engineer", year: "2023" },
    { title: "AWS Certified Cloud Practitioner", year: "2022" },
    { title: "Certified SAFe 6 Practitioner", year: "2023" },
    { title: "Master Data Management (MDM) Certification", year: "2023" },
    { title: "Generative AI Level 1, 2 & 3 Certification", year: "2024" },
  ]

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Certifications & Awards</h2>
        <div className="h-1 w-24 bg-border rounded-full mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-foreground/30 hover:bg-foreground/5 transition-smooth flex items-start justify-between animate-fade-in-up"
              style={{ animationDelay: `${(index % 5) * 100}ms` }}
            >
              <div className="flex-1">
                <h4 className="font-semibold text-foreground group-hover:text-foreground/80 transition-smooth">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">{cert.year}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-foreground/30 mt-1.5 group-hover:bg-foreground/50 transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
