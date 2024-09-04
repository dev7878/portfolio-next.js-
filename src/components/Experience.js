import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <Details
          position="Network Engineer Intern"
          company="Toronto Stock Exchange"
          time="Summer 2024"
          address="Toronto, ON"
          work="Developed automated report generation systems and data pipelines, improving network monitoring and increasing throughput by 30%. Deployed Docker containers for scaling, enhancing operational stability.
        "
        />
        <Details
          position="Cloud DevOps Intern"
          company="Savi Finance"
          time="Winter 2024"
          address=" Remote"
          work="Engineered a cloud vault solution for API key and AWS secrets management, improving system security and deployment efficiency by 25%. Documented processes to enhance cross-team collaboration."
        />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position="Full Stack Software Developer"
            company="SignAgent"
            time="Fall 2023"
            address="Burlington,ON"
            work="Full Stack Software Developer Intern | September 2023 – December 2023
Integrated Stripe API with Django/Vue.js, boosting payment processing speed by 33%. Optimized system performance, enhancing responsiveness and user experience."
          />

          <Details
            position="Software Developer Intern"
            company="Brandon Consulting"
            // companyLink="https://facebook.com"
            time="Summer 2023"
            address="Remote"
            work="Software Developer Intern | May 2023 – September 2023
            Developed a job posting web app with ReactJS, Python, and MongoDB, increasing user engagement by 50%. Enhanced backend performance and scalability through infrastructure optimization."
          />

          <Details
            position="Data Analytics Intern"
            company="Manpasand Beverages"
            // companyLink="https://amazon.com"
            time="Summer 2022"
            address="Vadodara, IN"
            work="Leveraged Python, SQL, and Power BI for insightful e-commerce data analysis, streamlined data accuracy for enhanced decision-making, and innovated in data visualization, significantly boosting platform efficiency and operational strategies."
          />

          <Details
            position="Web Co-ordinator"
            company="Wilfrid Laurier University"
            time="March 2022 - present"
            address="Waterloo, ON"
            work="Led a dynamic team of student developers in maintaining and enhancing university websites for various research institutes. Spearheaded initiatives to ensure the continuous functionality and up-to-date content of these websites, contributing to a seamless online presence for the university."
          />

          <Details
            position="Teaching Assistant"
            company="Wilfrid Laurier University"
            // companyLink="https://mit.edu"
            time="September 2022 - Present"
            address="Waterloo, ON"
            work="Assisted in teaching  courses on intro computer programming, Data Structures and Algorithms, OOPS concepts and physics "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
