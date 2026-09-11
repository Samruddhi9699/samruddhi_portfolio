import React from "react";

import SectionHeading from "../SectionHeading";
import StackDiagram from "./StackDiagram";

const Introduction = () => {
  return (
    <div className="border-t border-seam px-6 md:px-16 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-3/5 w-full">
          <SectionHeading label="Introduction" title="What I actually build" />
          <div className="text-lg text-bone/90 leading-relaxed space-y-5">
            <p>
              I&apos;m a Full-Stack Developer at{" "}
              <b className="text-copper">JMKC GROUP</b> in Pune, where I&apos;m the
              sole developer on two live products —{" "}
              <b className="text-copper">Swachetna</b>, a nonprofit platform, and{" "}
              <b className="text-copper">GetSiteGo</b>, a digital-solutions studio
              site — owning both end to end, from database to deployment.
            </p>
            <p>
              I like building things people actually use: responsive web apps with
              React and Next.js on the front, Node.js and Express APIs behind them,
              and data sitting in PostgreSQL, MySQL or Firebase depending on what the
              product needs. I also work comfortably in Java, and reach for Strapi
              when a project needs a content layer without writing one from scratch.
            </p>
            <p>
              I finished the Advanced Java Full Stack Training in 2025 with a 90%
              score, and I keep pushing that further — new frameworks, cleaner
              backend design, and real production practice on every project I ship.
            </p>
            <p>
              What I care about is the whole chain holding together: a clean
              interface, a backend that doesn&apos;t fall over, and a database
              that scales with the product instead of against it.
            </p>
          </div>
        </div>
        <div className="md:w-2/5 w-full flex justify-center">
          <StackDiagram />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
