import React from "react";

const achievements = [
  { label: "Advanced Java Full Stack Training (AJFT)", detail: "Completed with a score of 90%", year: "2025" },
];

const education = [
  { course: "B.E. Computer Science & Engineering", school: "BSIOTR, JSPM, Wagholi", period: "2022 — 2026", note: null },
];

const Credentials = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
      <div className="bg-panel border border-seam rounded-md p-6">
        <p className="font-mono text-xs text-copper tracking-[0.25em] uppercase mb-5">
          Achievements
        </p>
        <ul className="space-y-4">
          {achievements.map(({ label, detail, year }) => (
            <li key={label} className="border-l-2 border-seam pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <p className="text-bone font-medium">{label}</p>
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
    </div>
  );
};

export default Credentials;
