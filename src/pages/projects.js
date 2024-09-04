// import AnimatedText from "@/components/AnimatedText";
// import { GithubIcon } from "@/components/Icons";
// import Layout from "@/components/Layout";
// import { motion } from "framer-motion";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import proj1 from "../../public/images/projects/helping-hands.jpg";
// import proj2 from "../../public/images/projects/soccer-score.png";
// import proj3 from "../../public/images/projects/images.jpeg";
// import proj4 from "../../public/images/projects/weather-app.png";
// import proj5 from "../../public/images/projects/cab-data.jpg";
// import proj6 from "../../public/images/projects/machine-learning.jpeg";
// import proj7 from "../../public/images/projects/stock-exchange.jpg";
// import proj8 from "../../public/images/projects/forex.jpg";

// import TransitionEffect from "@/components/TransitionEffect";

// const FramerImage = motion(Image);

// const FeaturedProject = ({ type, title, summary, img, link, github }) => {
//   return (
//     <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl rounded-br-2xl border-dark bg-light dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 ">
//       <div
//         className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
//          dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
//         xs:rounded-[1.5rem] "
//       />

//       <Link
//         href={link}
//         target={"_blank"}
//         className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
//       >
//         <FramerImage
//           src={img}
//           className="w-full h-auto"
//           alt={title}
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//           sizes="(max-width: 768px) 100vw,
//               (max-width: 1200px) 50vw,
//               33vw"
//           priority
//         />
//       </Link>
//       <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
//         <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
//           {type}
//         </span>
//         <Link
//           href={link}
//           target={"_blank"}
//           className="underline-offset-2 hover:underline"
//         >
//           <h2 className="w-full my-2 text-4xl font-bold text-left lg:text-3xl xs:text-2xl">
//             {title}
//           </h2>
//         </Link>
//         <p className="my-2 font-medium rounded-md text-dark dark:text-light sm:text-sm">
//           {summary}
//         </p>
//         <div className="flex items-center mt-2">
//           <Link
//             href={github}
//             target={"_blank"}
//             className="w-10"
//             aria-label="Crypto Screener Application github link"
//           >
//             <GithubIcon />
//           </Link>
//           <Link
//             href={link}
//             target={"_blank"}
//             className="p-2 px-6 ml-4 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base "
//             aria-label="Crypto Screener Application"
//           >
//             Visit Project
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

// const Project = ({ title, type, img, link, github }) => {
//   return (
//     <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid shadow-2xl rounded-2xl rounded-br-2xl border-dark bg-light dark:border-light dark:bg-dark xs:p-4 ">
//       <div
//         className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
//          dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
//         xs:rounded-[1.5rem]  "
//       />

//       <Link
//         href={link}
//         target={"_blank"}
//         className="w-full overflow-hidden rounded-lg cursor-pointer"
//       >
//         <FramerImage
//           src={img}
//           alt={title}
//           className="w-full h-auto"
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.2 }}
//           sizes="(max-width: 768px) 100vw,
//               (max-width: 1200px) 50vw,
//               33vw"
//         />
//       </Link>
//       <div className="flex flex-col items-start justify-between w-full mt-4">
//         <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
//           {type}
//         </span>

//         <Link
//           href={link}
//           target={"_blank"}
//           className="underline-offset-2 hover:underline"
//         >
//           <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl ">
//             {title}
//           </h2>
//         </Link>
//         <div className="flex items-center justify-between w-full">
//           <Link
//             href={link}
//             target={"_blank"}
//             className="text-lg font-medium underline rounded md:text-base "
//             aria-label={title}
//           >
//             Visit
//           </Link>
//           <Link
//             href={github}
//             target={"_blank"}
//             className="w-8 md:w-6"
//             aria-label={title}
//           >
//             <GithubIcon />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default function Projects() {
//   return (
//     <>
//       <Head>
//         <title> Dev's Portfolio | Projects Page</title>
//         <meta
//           name="description"
//           content="Discover the latest webapp projects created by Dev, a developer with
//         expertise  full-stack development. "
//         />
//       </Head>

//       <TransitionEffect />
//       <main
//         className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
//       >
//         <Layout className="pt-16">
//           <AnimatedText
//             text="Imagination Trumps Knowledge!"
//             className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
//           />
//           <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
//             <div className="col-span-12">
//               <FeaturedProject
//                 type="Web app"
//                 title="Stock Exchange Application"
//                 img={proj7}
//                 link="https://github.com/dev7878/Stock-Trading-Application"
//                 github="https://github.com/dev7878/Stock-Trading-Application"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Featured Project"
//                 title="Dalle 3 Image Generator"
//                 summary="The increasing crime rate and the unpredictable nature of daily routines have led to a growing concern for personal safety, particularly for individuals living alone or away from their families. To address this issue, Helping Hands is a mobile application designed to connect users with strangers who are willing to provide assistance in times of need. The application offers various features to ensure user safety and enable mutual support among community members."
//                 img={proj1}
//                 link="https://github.com/dev7878/AI-Image-Generator-using-DALL-E-3"
//                 github="https://github.com/dev7878/AI-Image-Generator-using-DALL-E-3"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Featured Project"
//                 title="Sign Action Detector"
//                 summary="The increasing crime rate and the unpredictable nature of daily routines have led to a growing concern for personal safety, particularly for individuals living alone or away from their families. To address this issue, Helping Hands is a mobile application designed to connect users with strangers who are willing to provide assistance in times of need. The application offers various features to ensure user safety and enable mutual support among community members."
//                 img={proj1}
//                 link="https://github.com/dev7878/Sign-Language-Action-Detection"
//                 github="https://github.com/dev7878/Sign-Language-Action-Detection"
//               />
//             </div>

//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Featured Project"
//                 title="Data Platform for Retail Analysis"
//                 Summary=""
//                 img={proj1}
//                 link="https://github.com/dev7878/data-platform-retail-analysis"
//                 github="https://github.com/dev7878/data-platform-retail-analysis"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Featured Project"
//                 title="Smart City Simulator"
//                 Summary=""
//                 img={proj1}
//                 link="https://github.com/dev7878/smart-city-data-pipeline"
//                 github="https://github.com/dev7878/smart-city-data-pipeline"
//               />
//             </div>
//             {/* heling hands project  */}
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Featured Project"
//                 title="Helping Hands"
//                 summary="The increasing crime rate and the unpredictable nature of daily routines have led to a growing concern for personal safety, particularly for individuals living alone or away from their families. To address this issue, Helping Hands is a mobile application designed to connect users with strangers who are willing to provide assistance in times of need. The application offers various features to ensure user safety and enable mutual support among community members."
//                 img={proj1}
//                 link="https://github.com/malayvp28/HelpingHands"
//                 github="https://github.com/malayvp28/HelpingHands"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Data Tool"
//                 title=""
//                 img={proj8}
//                 link="https://github.com/dev7878/Forex-Trading-Signal-Generator"
//                 github="https://github.com/dev7878/Forex-Trading-Signal-Generator"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Web app"
//                 title="Scoccer League Scoring Application"
//                 img={proj2}
//                 link="https://github.com/vp2305/soccer-league"
//                 github="https://github.com/vp2305/soccer-league"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Web Application"
//                 title="Image Editing Tool"
//                 img={proj3}
//                 link="https://github.com/malayvp28/ImageEditTool"
//                 github="https://github.com/malayvp28/ImageEditTool"
//               />
//             </div>
//             <div className="col-span-12">
//               <FeaturedProject
//                 type="Web Application"
//                 title="Weather App"
//                 summary="This is a weather app built with React that provides up-to-date weather information for any location in the world. It uses the OpenWeatherMap API to fetch weather data and displays the information in a clean and easy-to-read format."
//                 img={proj4}
//                 link="https://dev7878.github.io/weather-react/"
//                 github="https://github.com/dev7878/weather-react"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Data Pipeline"
//                 img={proj5}
//                 title="NYC Cab Data Pipeline"
//                 link="https://github.com/dev7878/Nyc-Cab-Data-Model"
//                 github="https://github.com/dev7878/Nyc-Cab-Data-Model"
//               />
//             </div>
//             <div className="col-span-6 sm:col-span-12">
//               <Project
//                 type="Machine Learning Project"
//                 img={proj6}
//                 title="Student Learner"
//                 link="https://github.com/dev7878/Student-Learner---ML"
//                 github="https://github.com/dev7878/Student-Learner---ML"
//               />
//             </div>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// }

// ----------------------------------------------- Altered code -----------------------------------------

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

// Project images
import proj1 from "../../public/images/projects/helping-hands.jpg";
import proj2 from "../../public/images/projects/soccer-score.png";
import proj3 from "../../public/images/projects/images.jpeg";
import proj4 from "../../public/images/projects/weather-app.png";
import proj5 from "../../public/images/projects/cab-data.jpg";
import proj6 from "../../public/images/projects/machine-learning.jpeg";
import proj7 from "../../public/images/projects/stock-exchange.jpg";
import proj8 from "../../public/images/projects/forex.jpg";

const FramerImage = motion(Image);

const ProjectCard = ({ type, title, summary, img, link, github }) => (
  <article className="flex flex-col overflow-hidden rounded-lg shadow-lg">
    <Link href={link} target="_blank">
      <a className="relative block w-full h-48">
        <FramerImage
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </a>
    </Link>
    <div className="p-4">
      <span className="block text-sm font-medium text-primary">{type}</span>
      <h2 className="mt-1 text-lg font-semibold">{title}</h2>
      <p className="my-2 text-sm">{summary}</p>
      <div className="flex items-center justify-between">
        <Link href={link} target="_blank">
          <a className="text-blue-500 hover:underline">Visit Project</a>
        </Link>
        <Link href={github} target="_blank">
          <a aria-label={`${title} GitHub`}><GithubIcon /></a>
        </Link>
      </div>
    </div>
  </article>
);

export default function Projects() {
  return (
    <>
      <Head>
        <title>Dev's Portfolio | Projects Page</title>
        <meta name="description" content="Discover the latest webapp projects created by Dev, a developer with expertise in full-stack development." />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 text-light">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 text-6xl leading-tight sm:text-4xl"
          />
          <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project cards */}
            <ProjectCard
              type="Web app"
              title="Stock Exchange Application"
              img={proj7}
              link="https://github.com/dev7878/Stock-Trading-Application"
              github="https://github.com/dev7878/Stock-Trading-Application"
            />
            {/* Repeat for other projects */}
          </div>
        </Layout>
      </main>
    </>
  );
}


export default function Projects() {
  return (
    <>
      <Head>
        <title>Dev's Portfolio | Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Dev, a developer with expertise in full-stack development."
        />
      </Head>
      <TransitionEffect />
      <main className="flex flex-col items-center justify-center w-full mb-16 text-light">
        <Layout>
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 text-6xl leading-tight sm:text-4xl"
          />
          <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project cards */}
            <ProjectCard
              type="Web App"
              title="Stock Exchange Application"
              summary="A web application for real-time stock market data and trading simulation."
              img={proj7}
              link="https://github.com/dev7878/Stock-Trading-Application"
              github="https://github.com/dev7878/Stock-Trading-Application"
            />
            <ProjectCard
              type="Mobile App"
              title="Helping Hands"
              summary="A mobile app designed to connect people in need with volunteers for assistance."
              img={proj1}
              link="https://github.com/malayvp28/HelpingHands"
              github="https://github.com/malayvp28/HelpingHands"
            />
            <ProjectCard
              type="Web App"
              title="Soccer League Scoring Application"
              summary="An application to manage scores and fixtures for soccer leagues."
              img={proj2}
              link="https://github.com/vp2305/soccer-league"
              github="https://github.com/vp2305/soccer-league"
            />
            <ProjectCard
              type="Tool"
              title="Image Editing Tool"
              summary="A web-based tool for editing and manipulating images."
              img={proj3}
              link="https://github.com/malayvp28/ImageEditTool"
              github="https://github.com/malayvp28/ImageEditTool"
            />
            <ProjectCard
              type="Web App"
              title="Weather App"
              summary="A weather forecasting application providing real-time weather updates."
              img={proj4}
              link="https://dev7878.github.io/weather-react/"
              github="https://github.com/dev7878/weather-react"
            />
            <ProjectCard
              type="Data Pipeline"
              title="NYC Cab Data Pipeline"
              summary="A data pipeline processing and analyzing NYC cab data."
              img={proj5}
              link="https://github.com/dev7878/Nyc-Cab-Data-Model"
              github="https://github.com/dev7878/Nyc-Cab-Data-Model"
            />
            <ProjectCard
              type="Machine Learning"
              title="Student Learner"
              summary="A machine learning project to predict student performance."
              img={proj6}
              link="https://github.com/dev7878/Student-Learner---ML"
              github="https://github.com/dev7878/Student-Learner---ML"
            />
            <ProjectCard
              type="Data Tool"
              title="Forex Trading Signal Generator"
              summary="A tool generating trading signals for the forex market."
              img={proj8}
              link="https://github.com/dev7878/Forex-Trading-Signal-Generator"
              github="https://github.com/dev7878/Forex-Trading-Signal-Generator"
            />
          </div>
        </Layout>
      </main>
    </>
  );
}
