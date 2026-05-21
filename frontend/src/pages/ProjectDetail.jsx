import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../mock";
import MyntraCaseStudy from "./MyntraCase";
import GenAICaseStudy from "./GenAICase";
import MPLCaseStudy from "./MPLCase";
import ContactSection from "../components/ContactSection";

const ProjectDetail = () => {
  const { id } = useParams();

  if (id === "myntra") return <MyntraCaseStudy />;
  if (id === "genai-education") return <GenAICaseStudy />;
  if (id === "mpl-gaming") return <MPLCaseStudy />;

  const proj = projects.find((p) => p.id === id);

  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>
      <div className="mt-12">
        <div className="flex items-center gap-3">
          <div className="h-px w-10 bg-rust" />
          <span className="text-[12px] tracking-[0.18em] uppercase text-muted-foreground">Case study — coming soon</span>
        </div>
        <h1 className="font-serif text-[44px] md:text-[64px] mt-5 font-medium leading-[1.05] max-w-[900px]">
          {proj?.title || "Project"}
        </h1>
        <p className="mt-6 max-w-[680px] text-[16px] text-muted-foreground leading-relaxed">
          A long-form research deliverable for this engagement is being prepared. In the meantime, please reach out for a walk-through of the methodology, findings, and recommendations.
        </p>
      </div>
      <ContactSection />
    </div>
  );
};

export default ProjectDetail;
