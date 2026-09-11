import React from "react";

import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () =>{
    return(
        <footer className="border-t border-seam text-ash py-5 px-6 md:px-10 md:flex-row gap-3 md:gap-0 flex-col flex md:justify-between items-center w-full">
        <div>
          <p className="text-sm">Designed and developed by <span className="text-copper">Samruddhi Sonwane</span></p>
        </div>
        <div>
          <p className="font-mono text-xs">© {new Date().getFullYear()} Samruddhi</p>
        </div>
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/Samruddhi9699"
            target="_blank"
            rel="noreferrer"
            className="hover:text-copper transition-colors"
            title="Github"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samruddhisonwane20"
            target="_blank"
            rel="noreferrer"
            className="hover:text-copper transition-colors"
            title="Linkedin"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </footer>
    );
}

export default Footer;
