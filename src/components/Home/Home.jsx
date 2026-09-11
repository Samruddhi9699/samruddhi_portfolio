import React from "react";
import { Link } from "react-router-dom";
import HoverPortrait from "./HoverPortrait";
import Introduction from "./Introduction";
import Experience from "./Experience";
import Elsewhere from "./Elsewhere";

const Home = () => {
    return (
        <div className="flex flex-col">
            <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 px-6 md:px-16 pt-28 pb-16">
                <div className="max-w-xl">
                    <p className="font-mono text-copper text-sm md:text-base tracking-[0.2em] uppercase mb-6">
                        Samruddhi Sonwane · Pune, IN
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-bone leading-tight">
                        I build products from{" "}
                        <span className="text-copper">backend</span> to{" "}
                        <span className="text-copper">frontend</span>.
                    </h1>
                    <p className="text-ash text-lg md:text-xl mt-6">
                        I own products end to end — from REST APIs and React
                        applications to Android deployments and the systems underneath.
                        Currently, I'm the sole developer working on Swachetna and
                        GetSiteGo at JMKC GROUP, building, integrating, and deploying
                        both products from backend to frontend.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <Link
                            to="/Project"
                            className="bg-copper hover:bg-copper-bright text-ink font-semibold px-6 py-3 rounded-sm transition-colors"
                        >
                            View work →
                        </Link>
                        <Link
                            to="/Resume"
                            className="border border-seam hover:border-copper text-bone font-semibold px-6 py-3 rounded-sm transition-colors"
                        >
                            Resume
                        </Link>
                    </div>
                </div>

                <HoverPortrait />
            </div>
            <Introduction />
            <Experience />
            <Elsewhere />
        </div>
    );
}

export default Home;
