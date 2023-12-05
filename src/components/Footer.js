import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full text-lg font-medium border-t-2 border-solid border-dark dark:text-light dark:border-light sm:text-base "
    >
      <Layout className="flex items-center justify-between py-8 lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

        <div className="flex items-center lg:py-2">
          Built with <span className="px-1 text-2xl text-primary dark:text-primaryDark">&#9825;	</span> by&nbsp;
          <Link
            href="https://devdreaming.com"
            target="_blank"
            className="underline underline-offset-2"
          >
            Dev Patel
          </Link>
        </div>

        {/* <Link
          href="https://devdreaming.com/about"
          target="_blank"
          className="underline underline-offset-2"
        >
          Say Hello
        </Link> */}
      </Layout>
    </footer>
  );
};

export default Footer;
