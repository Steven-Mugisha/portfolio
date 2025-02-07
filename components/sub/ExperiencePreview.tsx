"use client";
import React from "react";
import { experienceData } from "../../lib/data";
import Image from "next/image";

type ExpProps = (typeof experienceData)[number];

const ExperiencePreview = ({
  position,
  company,
  date,
  description,
  tags,
  link,
  imageUrl,
  alt,
}: ExpProps) => {
  const LinkSquare02Icon = (props: React.SVGProps<SVGSVGElement>) => (
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
        d="M11.0991 3.00012C7.45013 3.00669 5.53932 3.09629 4.31817 4.31764C3.00034 5.63568 3.00034 7.75704 3.00034 11.9997C3.00034 16.2424 3.00034 18.3638 4.31817 19.6818C5.63599 20.9999 7.75701 20.9999 11.9991 20.9999C16.241 20.9999 18.3621 20.9999 19.6799 19.6818C20.901 18.4605 20.9906 16.5493 20.9972 12.8998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.556 3.49612L11.0487 13.0586M20.556 3.49612C20.062 3.00151 16.7343 3.04761 16.0308 3.05762M20.556 3.49612C21.05 3.99074 21.0039 7.32273 20.9939 8.02714"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="sm:mb-4 mb-4 p-4 sm:p-4 lg:p-8">
      <a href={link} target={"_blank"} rel="noreferrer noopener">
        <div className="-m-6 rounded-xl transition ease-in-out flex flex-col sm:flex-row group p-4 sm:p-6 lg:p-8 hover:bg-[#b9b9ba1c]">
          <Image
            src={imageUrl}
            alt={alt}
            quality={100}
            priority
            className="h-16 w-16 sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px] object-scale-down"
          />

          <div className="flex flex-col ml-0 sm:ml-4 mt-4 sm:mt-0">
            <div className="text-xs font-bold text-gray-400 sm:group-hover:text-[#af8d19]">
              {date}
            </div>
            <div className="text-lg text-gray-200 font-semibold">
              <div className="sm:group-hover:text-[#af8d19] transition ease-in-out duration-500 text-balance">
                {position}
                <span>
                  <LinkSquare02Icon className="inline h-4 w-4 ml-2 -mt-1 text-gray-200 sm:group-hover:text-[#af8d19] transition ease-in-out duration-500 sm:group-hover:shadow-md sm:group-hover:translate-x-1 sm:group-hover:-translate-y-0.5" />
                </span>
              </div>
              <div className="font-normal text-base text-gray-400 sm:group-hover:text-[#af8d19] transition ease-in-out duration-500">
                @ {company}
              </div>
            </div>
            <div className="text-sm mt-2 text-gray-400 sm:group-hover:text-[#af8d19]">
              {description}
            </div>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-[#b9b9ba]/15 px-3 py-1 text-[0.75rem] font-medium tracking-wider text-[#af8d19] rounded-md"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ExperiencePreview;
