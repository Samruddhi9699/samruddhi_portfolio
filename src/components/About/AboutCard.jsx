import AboutMe from "../../assets/about.png";
import { ImPointRight } from "react-icons/im";
import SectionHeading from "../SectionHeading";

const interests = [
  "Watching anime",
  "Travelling",
  "Reading — fiction and tech",
  "Learning Japanese (currently N5)",
];

const AboutCard = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-3/5 w-full">
                <SectionHeading label="About" title="Background" />
                <div className="text-base md:text-lg leading-relaxed text-bone/90 space-y-5">
                    <p>
                        I&apos;m Samruddhi, a Full-Stack Developer based in Pune,
                        currently working at{" "}
                        <span className="text-copper">JMKC GROUP</span>. I hold a
                        B.E. in Computer Science &amp; Engineering from BSIOTR, JSPM,
                        Wagholi.
                    </p>
                    <p>
                        I completed the Advanced Java Full Stack Training (AJFT) in
                        2025 with an impressive score of{" "}
                        <span className="text-copper">90%</span>, which strengthened
                        my understanding of full-stack development and modern
                        software engineering practices.
                    </p>
                    <p>
                        I have hands-on experience working with React, Next.js,
                        Node.js, Express, Java, PostgreSQL, MySQL, Firebase, Strapi,
                        and REST APIs. I enjoy developing responsive and
                        user-friendly web applications, designing efficient backend
                        systems, and working with databases and APIs.
                    </p>
                    <p>
                        I&apos;m passionate about building scalable, reliable, and
                        production-ready applications. I continuously work on
                        improving my technical skills, exploring new technologies,
                        and gaining practical experience by working on real-world
                        projects.
                    </p>
                </div>
                <p className="mt-8 font-mono text-sm text-ash tracking-widest uppercase">
                    Away from the keyboard
                </p>
                <ul className="mt-3 text-ash space-y-1">
                    {interests.map((item) => (
                        <li key={item} className="flex items-center">
                            <ImPointRight className="mr-2 text-copper shrink-0" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center items-center md:w-2/5 w-full">
                <img
                    src={AboutMe}
                    alt="About Me"
                    className="border border-seam rounded-md w-full max-w-md h-auto"
                />
            </div>
        </div>
    );
};

export default AboutCard;
