import React, { useState } from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import ajftCertificate from "../../assets/projects/c1.png";
import ajftMarksheet from "../../assets/projects/c2.png";

const achievements = [
  {
    label: "Advanced Java Full Stack Training (AJFT)",
    detail: "Completed with a score of 90%",
    year: "2025",
    docs: [
      { src: ajftCertificate, alt: "AJFT Certificate" },
      { src: ajftMarksheet, alt: "AJFT Statement of Marks" },
    ],
  },
];

const education = [
  { course: "B.E. Computer Science & Engineering", school: "BSIOTR, JSPM, Wagholi", period: "2022 — 2026", note: null },
];

const Credentials = () => {
  const [activeDocs, setActiveDocs] = useState(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
      <div className="bg-panel border border-seam rounded-md p-6">
        <p className="font-mono text-xs text-copper tracking-[0.25em] uppercase mb-5">
          Achievements
        </p>
        <ul className="space-y-4">
          {achievements.map(({ label, detail, year, docs }) => (
            <li
              key={label}
              onClick={() => docs && setActiveDocs(docs)}
              className={`border-l-2 border-seam pl-4 ${
                docs ? "cursor-pointer hover:border-copper transition-colors" : ""
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-bone font-medium flex items-center gap-2">
                  {label}
                  {docs && <HiOutlineDocumentText size={18} className="text-copper" />}
                </p>
                <span className="font-mono text-xs text-ash">{year}</span>
              </div>
              <p className="text-ash text-sm mt-0.5">{detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-panel border border-seam rounded-md p-6">
        <p className="font-mono text-xs text-copper tracking-[0.25em] uppercase mb-5">
          Education
        </p>
        <ul className="space-y-4">
          {education.map(({ course, school, period, note }) => (
            <li key={course} className="border-l-2 border-seam pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-bone font-medium">{course}</p>
                <span className="font-mono text-xs text-ash">{period}</span>
              </div>
              <p className="text-ash text-sm mt-0.5">{school}</p>
              {note && <p className="font-mono text-xs text-copper mt-1">{note}</p>}
            </li>
          ))}
        </ul>
      </div>

      {activeDocs && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 md:p-10"
          onClick={() => setActiveDocs(null)}
        >
          <button
            type="button"
            onClick={() => setActiveDocs(null)}
            className="absolute top-4 right-4 text-bone hover:text-copper transition-colors"
            aria-label="Close"
          >
            <IoClose size={32} />
          </button>
          <div
            className="flex flex-col md:flex-row gap-4 max-w-5xl max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {activeDocs.map((doc) => (
              <img
                key={doc.src}
                src={doc.src}
                alt={doc.alt}
                className="max-h-[85vh] w-auto rounded-md border border-seam object-contain"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Credentials;
