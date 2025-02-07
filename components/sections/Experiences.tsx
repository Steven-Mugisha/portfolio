import React from "react";
import { experienceData } from "../../lib/data";
import ExperiencePreview from "../sub/ExperiencePreview";

const Projects = () => {
  const ArrowRight02Icon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#000000"}
      fill={"none"}
      {...props}
    >
      <path
        d="M20.0001 11.9998L4.00012 11.9998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="justify-items-center">
      <p className="text-gray-200 font-bold item-center">EXPERIENCE</p>
      <div>
        {experienceData.map((experience) => (
          <>{<ExperiencePreview {...experience} />}</>
        ))}
      </div>
      <div>
        <a
          href="/resume.pdf"
          className="inline-flex items-center font-bold leading-tight text-gray-200 group"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="border-b-2 border-transparent pb-px transition group-hover:border-[#af8d19] ease-in-out duration-200 hover:text-[#af8d19]">
            Click here for resume
          </span>
          <span>
            <ArrowRight02Icon className="h-5 w-5 ml-2 -mt-0.5 text-gray-400 group-hover:text-[#af8d19] group-hover:translate-x-2 ease-in-out duration-200" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
