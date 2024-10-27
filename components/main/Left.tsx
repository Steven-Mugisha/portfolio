import React from "react";
import Nav from "../sub/Nav";
import Links from "../sub/Links";

const Left = () => {
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
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-200">
          Steven Mugisha
        </div>
        <a
          className="flex text-gray-400 group"
          href="https://foodfromthought.ca/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="font-medium tracking-tight text-gray-200 sm:text-xl text-nowrap mt-4 sm:group-hover:text-[#af8d19]">
            Software Engineer @ Food From Thought
            <span className="">
              {/* <svg
                                className="h-4 w-4 ml-3 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition duration-500 ease-in-out"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                />
                                <path
                                    fillRule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                />
                            </svg> */}
              <LinkSquare02Icon className="inline h-5 w-5 ml-2 -mt-1.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-500 ease-in-out text-gray-400 sm:group-hover:text-[#af8d19]" />
            </span>
          </div>
        </a>

        <div className="mt-4 max-w-xs leading-normal text-gray-200">
          engineer & more
        </div>
        <div className="lg:mr-[70px] mt-4 md:mt-8 leading-relaxed">
          <div className="mb-4">
            With a passion for building innovative products, I thrive on solving
            complex problems and crafting seamless user experiences.
          </div>
          <div className="mb-4">
            Currently exploring the field of sports analytics and applying
            ML/AI to transform the sporting industry, combining my passion for
            data with cutting-edge technology.
          </div>
          <div>
            Always looking for an opportunity to learn and grow.
          </div>
        </div>
        <Nav />
      </div>
      <Links />
    </div>
  );
};

export default Left;
