"use client"

import { Mail, Linkedin, Github, MapPin } from "lucide-react"

const GITHUB_URL = "https://github.com/thrijwal-k"

export default function ContactSection() {
  const links = [
    { icon: Mail, label: "thrijwalk@gmail.com", href: "mailto:thrijwalk@gmail.com" },
    { icon: Linkedin, label: "linkedin.com/in/thrijwal-k", href: "https://linkedin.com/in/thrijwal-k" },
    { icon: Github, label: "github.com/thrijwal-k", href: GITHUB_URL },
  ]

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get in Touch</h2>
        <div className="h-1 w-24 bg-border rounded-full mb-8" />
        <p className="text-lg text-foreground/80 max-w-2xl mb-10 leading-relaxed">
          I'm open to data analyst, data engineering, business analyst, BI, QA and cloud roles across the UK. If
          you'd like to talk about a role or a project, I'd be glad to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:border-foreground/30 hover:bg-foreground/5 transition-smooth break-all"
            >
              <Icon size={20} className="shrink-0" />
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>

        <p className="flex items-center gap-2 text-sm text-foreground/60 mt-8">
          <MapPin size={16} /> Bristol, UK · open to relocation
        </p>
      </div>

      <footer className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border text-sm text-foreground/50">
        © {new Date().getFullYear()} Thrijwal Krishnappa
      </footer>
    </section>
  )
}
