"use client"

import { useState } from "react"
import { ExternalLink, Github, GraduationCap } from "lucide-react"

type Category = "MSc Coursework" | "Personal" | "Earlier Work"

type Project = {
  title: string
  description: string
  highlights: string[]
  tech: string[]
  achievement: string
  category: Category
  year: string
  github?: string
  live?: string
  note?: string
}

const projects: Project[] = [
  {
    title: "CellLineSelector: Cancer Cell Line Recommender for AstraZeneca",
    description:
      "MSc dissertation with AstraZeneca. A decision-support tool that ranks cancer cell lines for a chosen target gene by joining several biological datasets into one evidence-based score.",
    highlights: [
      "Cleaned 14 source files and reconciled 3 identifier systems (ACH-, PR-, CVCL_) into one model-ready dataset",
      "MOFA+ integration of 4 omics layers (RNA, proteomics, metabolomics, genomic signatures) across 1,479 cell lines; KMeans (K=31) and UMAP for similarity",
      "Evidence × Similarity × Confidence scoring with percentile-based exclusion penalties; validated on EGFR, ERBB2 and ERBB2 with CD86 exclusion",
      "Streamlit app with a local Llama 3.2 (Ollama) explanation layer. Testing showed the LLM swapped figures, so reports are now assembled deterministically in Python",
    ],
    tech: ["Python", "MOFA+", "scikit-learn", "UMAP", "Streamlit", "Ollama", "pandas"],
    achievement: "1,479 cell lines",
    category: "MSc Coursework",
    year: "2026",
    github: "https://github.com/ShankaraNG/astrazeneca",
    note: "MSc dissertation · group of 4 · supervised by Dr Daniel D'Andrea",
  },
  {
    title: "ARES: Multi-Agent AI Support System",
    description:
      "A multi-agent application where LangGraph coordinates question, scoring and review agents to turn unstructured conversation into structured, consistent assessments.",
    highlights: [
      "LangGraph StateGraph orchestration with LangChain and a local Ollama LLM, plus tool calling",
      "5-dimension scoring rubric (1–20 scale) so every output is comparable and auditable",
      "Computer vision module (DeepFace, RetinaFace) and a FastAPI + React full-stack delivery",
    ],
    tech: ["Python", "LangGraph", "LangChain", "Ollama", "FastAPI", "React"],
    achievement: "Full-stack AI",
    category: "Personal",
    year: "2026",
  },
  {
    title: "Calibrated Clinical Risk Models",
    description:
      "Predictive models on real, de-identified hospital EHR data, built to produce risk estimates clinicians could trust.",
    highlights: [
      "Compared logistic regression, XGBoost and neural networks on AUC, AUCPR, Brier score, ECE and calibration slope",
      "Improved calibration with Platt scaling and isotonic regression; Bayesian credible intervals for uncertainty",
      "Externally validated on a second hospital dataset (eICU) to test generalisation",
    ],
    tech: ["Python", "scikit-learn", "XGBoost", "MIMIC-III", "eICU"],
    achievement: "External validation",
    category: "MSc Coursework",
    year: "2026",
  },
  {
    title: "LLM Text Analytics on arXiv",
    description:
      "Tracking how AI research language shifted over time across 24,677 arXiv abstracts using embeddings and topic models.",
    highlights: [
      "Transformer embeddings (Sentence-BERT, SPECTER2) and topic modelling (LDA, NMF) with coherence-based selection",
      "Procrustes alignment of Word2Vec spaces to measure semantic drift between periods",
      "Findings written up in a 30-page technical report implementing methods from peer-reviewed papers",
    ],
    tech: ["Python", "Sentence-BERT", "SPECTER2", "Gensim", "LDA", "NMF"],
    achievement: "24,677 abstracts",
    category: "MSc Coursework",
    year: "2026",
  },
  {
    title: "UK Local Authority Insight Dashboard",
    description:
      "Interactive visual analytics dashboard on socio-economic data for 348 UK local authorities, designed for non-specialist users.",
    highlights: [
      "16 engineered measures with PCA (PC1 = 55.5% variance) and t-SNE for spatial and longitudinal views",
      "Bayesian imputation with credible intervals so users could see how far to trust each figure",
      "Redesigned filters and drill-downs after a structured usability study (timed tasks, Likert ratings)",
    ],
    tech: ["Tableau", "Python", "pandas", "PCA", "t-SNE", "Bayesian"],
    achievement: "348 authorities",
    category: "MSc Coursework",
    year: "2026",
  },
  {
    title: "Peptide Classification Pipeline",
    description:
      "End-to-end machine learning pipeline in R for a binary classification problem with 7,403 observations and 390 features.",
    highlights: [
      "Exploratory analysis and preprocessing with recipes; gradient-boosted trees via tidymodels",
      "Group-based cross-validation to stop related records leaking between training and test data",
      "25-configuration hyperparameter search tuned for F1; F1 = 0.52 and ROC-AUC = 0.68 on held-out data",
    ],
    tech: ["R", "tidymodels", "recipes", "bonsai", "tidyverse"],
    achievement: "ROC-AUC 0.68",
    category: "MSc Coursework",
    year: "2026",
  },
  {
    title: "Auto-Scaling Cloud Data Pipeline",
    description:
      "Event-driven AWS pipeline (S3 → SQS → EC2 workers → DynamoDB) that scales on queue depth across two Availability Zones.",
    highlights: [
      "Scaled on SQS queue depth rather than CPU, because it better reflects user-visible latency",
      "Tuned policies and instance types to cut batch time for 120 files from ~15 to ~7 minutes",
      "Least-privilege IAM, private subnets via NAT Gateway and CloudWatch alarms",
    ],
    tech: ["AWS", "S3", "SQS", "EC2", "DynamoDB", "CloudWatch", "Python"],
    achievement: "2× faster",
    category: "MSc Coursework",
    year: "2025",
  },
  {
    title: "Reproducible Experimental Pipeline",
    description:
      "A seed-controlled benchmarking pipeline comparing optimisation methods across many problems, with automated statistics.",
    highlights: [
      "3,240 model evaluations (27 problems × 4 methods × 30 runs)",
      "Automated ANOVA, Tukey HSD and Cohen's d so conclusions rested on evidence",
      "Fully version-controlled in Git for complete reproducibility",
    ],
    tech: ["R", "Python", "Git", "ANOVA", "Statistics"],
    achievement: "3,240 runs",
    category: "MSc Coursework",
    year: "2025",
  },
  {
    title: "Data Pipeline Optimization",
    description: "ETL orchestration improving Snowflake query performance for reporting workloads.",
    highlights: ["Restructured ETL steps and queries to speed up downstream reporting"],
    tech: ["Snowflake", "Python", "AWS Lambda", "SQL"],
    achievement: "30% faster",
    category: "Earlier Work",
    year: "2023",
  },
  {
    title: "Sentiment Analysis Engine",
    description: "Machine learning model classifying social media sentiment.",
    highlights: ["NLP preprocessing and a supervised classifier reaching 85% accuracy"],
    tech: ["Python", "NLP", "Machine Learning"],
    achievement: "85% accuracy",
    category: "Earlier Work",
    year: "2020",
  },
  {
    title: "Image Forgery Detection",
    description: "RCNN-based system detecting forged regions in digital images.",
    highlights: ["Region-based CNN approach improving detection accuracy by 18% over baseline"],
    tech: ["Python", "RCNN", "Computer Vision", "Git"],
    achievement: "+18% accuracy",
    category: "Earlier Work",
    year: "2019",
  },
]

const filters: ("All" | Category)[] = ["All", "MSc Coursework", "Personal", "Earlier Work"]

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof filters)[number]>("All")
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Projects</h2>
        <div className="h-1 w-24 bg-border rounded-full mb-8" />

        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-smooth ${
                active === f
                  ? "bg-foreground text-background border-foreground"
                  : "border-border text-foreground/70 hover:text-foreground hover:border-foreground/40"
              }`}
            >
              {f}
              <span className="ml-2 text-xs opacity-60">
                {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/30 transition-smooth hover:shadow-lg hover:shadow-foreground/10"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-border" />

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-3 text-xs text-foreground/60">
                  <span className="flex items-center gap-1.5">
                    {project.category === "MSc Coursework" && <GraduationCap size={14} />}
                    {project.category} · {project.year}
                  </span>
                  <span className="font-bold text-foreground bg-foreground/5 px-3 py-1 rounded-full whitespace-nowrap">
                    {project.achievement}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                {project.note && <p className="text-xs text-foreground/60 mb-3">{project.note}</p>}
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                <ul className="space-y-2 mb-5 text-sm text-foreground/80">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-foreground/40 mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-foreground/5 text-foreground px-3 py-1 rounded-full border border-foreground/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="flex gap-3 pt-4 mt-5 border-t border-border">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-foreground hover:bg-foreground/5 rounded-lg transition-smooth"
                      >
                        <Github size={16} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 text-foreground hover:bg-foreground/5 rounded-lg transition-smooth"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm">Live</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
