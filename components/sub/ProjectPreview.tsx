"use client";
import React, { useState } from "react";
import { projectsData } from "../../lib/data";
import Image from "next/image";

type ProjectProps = (typeof projectsData)[number];

function ProjectReview({
  title,
  description,
  tags,
  imageUrl,
  link,
  isLink,
  alt,
  achievement,
  hasAchievement,
}: ProjectProps) {
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
    <div className="sm:mb-8 last:mb-0 sm:h-64 work-content_container">
      <a
        href={link}
        target={isLink ? "_blank" : "_self"}
        rel="noreferrer noopener"
        className="group"
      >
        <div className="h-full rounded-xl relative flex flex-col-reverse sm:flex-row group">
          <div className="pt-4 pb-7 px-5 sm:w-[50%] sm:px-0 sm:py-0 sm:my-auto sm:flex sm:flex-col group">
            <div className="flex text-lg text-gray-200 font-semibold group">
              <div className="sm:group-hover:text-[#af8d19] transition ease-in-out duration-500">
                {title}
              </div>
              <LinkSquare02Icon className="inline h-4 w-4 ml-2 mt-[5px] text-gray-200 sm:group-hover:text-[#af8d19] transition ease-in-out duration-500 group-hover:shadow-md group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </div>
            <div
              className={
                hasAchievement
                  ? "text-gray-200 text-sm font-bold sm:group-hover:text-[#af8d19] transition ease-in-out duration-500"
                  : "hidden"
              }
            >
              {achievement}
            </div>
            <div className="text-sm mt-2 text-gray-400 sm:mr-5 sm:group-hover:text-[#af8d19]">
              {description}
            </div>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-[#b9b9ba]/15 px-3 py-1 text-[0.65rem] font-medium tracking-wider text-[#af8d19] rounded-md"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-10 sm:p-0 sm:w-[calc(50%-8px)] group aspect-[5/3] sm:aspect-[4/3] relative my-auto rounded-lg">
            <Image
              src={imageUrl}
              alt={alt}
              className="object-cover aspect-[4/3] rounded-lg sm:group-hover:scale-105 transition ease-in-out duration-500"
              style={{ filter: 'grayscale(100%) brightness(60%)' }}
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectReview;
