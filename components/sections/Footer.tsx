import React from "react";

const Footer = () => {
  return (
    <div className="max-w-md text-sm text-gray-400 lg:pb-20">
      <div>
        Steven Mugisha{" "}
        <span className="mx-1 font-bold text-md text-gray-400">|</span> 2024
      </div>
      <div className="text-pretty">
        <div className="mt-1">
          Built with{" "}
          <a
            className="font-medium text-gray-300"
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Next.js{" "}
          </a>
          and{" "}
          <a
            className="font-medium text-gray-300"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Tailwind
          </a>{" "}
          <span className="mx-1 font-bold text-md">|</span> Deployed with{" "}
          <a
            href="https://developers.cloudflare.com/pages/framework-guides/nextjs/"
            className="font-medium text-gray-300"
            target="_blank"
            rel="noreferrer noopener"
          >
            Cloudflare
          </a>
        </div>
      </div>
      <div className="mt-1">
        Inspired by{" "}
        <a
          className="font-medium text-gray-300"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang
        </a>
      </div>
    </div>
  );
};

export default Footer;
