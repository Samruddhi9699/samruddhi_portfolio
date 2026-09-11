import React from "react";
import SectionHeading from "../SectionHeading";

const highlights = [
  "Sole developer of the entire platform — independently designed and built the frontend, backend integration, donation flow, content management and deployment.",
  "Built a responsive web platform on Next.js, integrating Strapi CMS so admins can manage website content, media and dynamic sections without touching frontend code.",
  "Implemented the complete online donation flow through Razorpay — payment integration, transaction handling and secure payment verification for donor contributions.",
  "Handled production deployment and domain configuration end to end — hosting, environment variables, DNS setup and go-live.",
];

const stack = [
  "Next.js",
  "React",
  "Strapi",
  "Node.js",
  "Razorpay",
  "Tailwind CSS",
];

const Experience = () => {
  return (
    <div className="border-t border-seam px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeading
          label="Experience"
          title="Where I work"
          sub="Two products, owned end to end."
        />

        <div className="bg-panel border border-seam rounded-md p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-1">
            <h3 className="text-2xl font-semibold text-bone">Full Stack Developer</h3>
            <p className="font-mono text-xs md:text-sm text-copper tracking-widest uppercase">
              Dec 2025 — Present
            </p>
          </div>
          <p className="text-ash mb-6">JMKC GROUP · Pune, Maharashtra</p>

          <div className="border-t border-seam pt-6">
            <p className="text-bone mb-1">
              <a
                href="https://swachetna.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:text-copper-bright underline underline-offset-4"
              >
                Swachetna
              </a>{" "}
              — production platform for a Pune-based nonprofit foundation
            </p>
            <p className="font-mono text-xs text-ash mb-6">Live in production</p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 text-ash leading-relaxed">
                  <span className="text-copper mt-2 w-1.5 h-1.5 rounded-[1px] bg-copper shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-7">
              {stack.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-bone/80 border border-seam bg-ink px-2 py-1 rounded-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="text-ash leading-relaxed mt-7 pt-6 border-t border-seam">
              Also sole developer on{" "}
              <a
                href="https://getsitego.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:text-copper-bright underline underline-offset-4"
              >
                GetSiteGo
              </a>
              , a full-stack business management platform built end to end on
              Next.js, Node.js, Express.js and PostgreSQL — RESTful APIs, a
              quotation-to-invoice workflow, and integrated payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
