import React, { useState } from "react";
import images from "../../constants/image";
import { GlobeAltIcon } from "@heroicons/react/outline";
import RichText from "../RichText";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    image: images.personalportfoliodashboard,
    heading: "Ali Rehman's Website Social Portfolio",
    description:
      "<p>A simple personal portfolio website built with HTML, CSS, and JavaScript showcases an individual’s skills, projects, and contact details. It includes sections like Home, About, Portfolio, and Contact, with responsive design and basic interactive features for an engaging user experience.</p>",
      githubLink: "https://github.com/alirehman765/Personal-Portfolio-Web",
    // techno
    html: true,
    css: true,
    javascript: true,
  },
  {
    id: 2,
    image: images.slothImage,
    heading: "ClassicalArabicPoem",
    description:
      "<p>I would say this is the first projet that I collaborated with an online friend (who is responsible for the backend development) for the backend we used node js with a combination of the  auth. <br> <br> Initially the plan was to implement this using react but due to some time conflict we agreed to just use node js + basic HTML & TailwindCSS.</p>",
      githubLink: "https://github.com/SoftwareConstructionAndDev/project-se3001-bugbusters/tree/master/ClassicalArabicPoems%20Setup",
    // techno
   html: true,
   css: true,
   javascript: true,
  },
  {
    id: 3,
    image: images.pixiedustImage,
    heading: "PixieDust",
    description:
      "PixieDust is a bakery management system built with the MERN stack, streamlining order processing, inventory tracking, and customer management. It features a user-friendly interface, real-time updates, and secure payment integration for a seamless bakery experience.",
      websiteLink: "https://pixie-dust-mern-web-based-bakery.vercel.app/",
    githubLink: "https://github.com/alirehman765/Pixie-Dust-MERN-Web-Based-Bakery",
    // techno
    react: true,
    html: true,
    javascript: true,
    css: true,
    next: true,
  
  },
  {
    id: 4,
    image: images.EmpowerHerImage,
    heading: "Empower-Her",
    description:
      "<p>Advance PERN Stack Final Year Project! Also had a lot of fun working with the UI of this project.EmpowerHer is a marketplace built with React, Vite, TailwindCSS, Next.js, PostgreSQL,Sockets io, and JavaScript. It supports women entrepreneurs by providing tools for business management, mentorship, and a platform to sell sustainable products along with the customers to use Visual Try-on to try the products</p>",
      websiteLink: "https://ali-rehman.com/",
      githubLink: "https://github.com/MominaFaisal/EmpowerHer",
    // techno
    javascript: true,
    react: true,
    nodejs:true,
    mongodb: true,
    next: true,
    tailwind: true,
    postgresql: true,

   
  },
 {
    id: 5,
    image: images.TrainflowAI,
    heading: "Trainflow AI",
    description:
      "<p>A web-based interface for dataset upload, data type selection (image, audio, tabular), and training settings configuration. - Edge Node: Local web server for initial data preprocessing and temporary storage. - Cloud Infrastructure: Centralized or private cloud for intensive model training and results storage. - Database: Stores datasets, trained model weights, and performance metrics. - Edge Device Deployment: Enables model deployment and inference near the data source.</p>",
      websiteLink: "https://ali-rehman.com/",
      githubLink: "https://github.com/AliRehman12/Trainflow-AI",
    // techno
    javascript: true,
    nodejs:true,
    mongodb: true,
    postgresql: true,
    YOLO:true,
    next: true,
    tailwind: true,
  

   
  },
];

const CardGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-20 mt-32 md:gap-40 lg:gap-60">
        {projects.map((proj) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            key={proj.id}
            className="featured-alt flex even:flex-col-reverse odd:flex-col-reverse gap-10 items-start relative md:gap-20 md:even:flex-row md:odd:flex-row-reverse"
          >
            <span className="featured-no absolute text-[10rem] text-primary-300 -top-32 opacity-20 hidden xl:block">
              0{proj.id}
            </span>
            <div className="w-full z-10 md:w-1/2">
              <h3 className="text-primary text-4xl font-semibold mb-4 dark:text-white">
                {proj.heading}
              </h3>
              <RichText
                className="text-primary-400 text-base dark:text-neutral-300"
                content={proj.description}
              />
              <div className="flex flex-row relative">
                <div className="flex flex-row justify-center gap-4 py-10">
                  {proj.websiteLink && (
                    <a
                      className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
                      href={proj.websiteLink}
                      target="_blank"
                    >
                      <span className="absolute inset-0 border border-secondary group-active:border-secondary"></span>
                      <span className="flex items-center gap-3 px-4 py-3 transition-transform bg-secondary border border-secondary active:border-secondary active:bg-secondary group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <GlobeAltIcon className="w-6 h-6" />
                        Link
                      </span>
                    </a>
                  )}
                  {proj.githubLink && (
                    <a
                      className="relative inline-block text-sm font-medium text-secondary dark:text-secondary-50 active:text-secondary group focus:outline-none focus:ring"
                      href={proj.githubLink}
                      target="_blank"
                    >
                      <span className="absolute inset-0 border border-current"></span>
                      <span className="flex flex-row gap-3 items-center px-4 py-3 transition-transform bg-transparent border border-current group-hover:-translate-x-1 group-hover:-translate-y-1">
                        <svg
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-secondary dark:text-secondary-50 fill-current"
                        >
                          <path
                            d="M10.2397 0.517241C4.86796 0.517241 0.51709 4.86811 0.51709 10.2399C0.51709 14.5421 3.30019 18.1759 7.16493 19.4642C7.65106 19.5493 7.83336 19.2576 7.83336 19.0024C7.83336 18.7714 7.8212 18.0058 7.8212 17.1915C5.3784 17.6412 4.74643 16.596 4.55197 16.0491C4.4426 15.7696 3.96862 14.9067 3.55541 14.6758C3.21512 14.4935 2.72898 14.0438 3.54325 14.0317C4.30891 14.0195 4.85581 14.7366 5.03811 15.0282C5.91314 16.4988 7.31077 16.0856 7.86982 15.8304C7.95489 15.1984 8.21011 14.773 8.48963 14.53C6.32635 14.2869 4.06584 13.4483 4.06584 9.72942C4.06584 8.67208 4.4426 7.79705 5.06241 7.11647C4.96519 6.8734 4.62489 5.87683 5.15964 4.53997C5.15964 4.53997 5.97391 4.28475 7.83336 5.53654C8.61117 5.31778 9.43759 5.2084 10.264 5.2084C11.0904 5.2084 11.9169 5.31778 12.6947 5.53654C14.5541 4.2726 15.3684 4.53997 15.3684 4.53997C15.9031 5.87683 15.5628 6.8734 15.4656 7.11647C16.0854 7.79705 16.4622 8.65993 16.4622 9.72942C16.4622 13.4605 14.1895 14.2869 12.0262 14.53C12.3787 14.8338 12.6825 15.4171 12.6825 16.3286C12.6825 17.629 12.6704 18.6742 12.6704 19.0024C12.6704 19.2576 12.8527 19.5614 13.3388 19.4642C15.2689 18.8125 16.946 17.5721 18.1342 15.9173C19.3224 14.2626 19.9617 12.277 19.9623 10.2399C19.9623 4.86811 15.6114 0.517241 10.2397 0.517241Z"
                            fill="current"
                          />
                        </svg>
                        Github
                      </span>
                    </a>
                  )}
                </div>
              </div>
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center">
                  <span className="uppercase px-2 bg-white text-sm text-gray-500 dark:bg-primary">
                    TECHNOLOGIES USED
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 py-6">
                {proj.html && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.htmlLogo}
                      alt="html logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.css && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.cssLogo}
                      alt="css logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.javascript && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.javascriptLogo}
                      alt="javascript logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.react && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.reactLogo}
                      alt="react logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.next && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.htmlLogo}
                      alt="nextJS logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.hubspot && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.hubspotLogo}
                      alt="hubspot logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                {proj.tailwind && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.tailwindLogo}
                      alt="tailwind logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}
                     {proj.postgresql && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.postgresqlLogo}
                      alt="postgres logo"
                      width={32}
                      height={32}
                    />
                  </div>
                )}

                   {proj.mongodb && (
                  <div className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.mongodbLogo}
                      alt="mongodb logo"
                      width={32}
                      height={32}
                    />
                  </div>
                   )}
              </div>
            </div>
            <div className="w-full z-10 relative md:w-1/2">
              {!isLoaded && (
                <div className="absolute bg-primary-400 animate-pulse w-full rounded-lg filter shadow-lg object-cover h-[340px]" />
              )}
              <img
                className="w-full rounded-lg filter shadow-lg object-contain h-auto"
                loading="lazy"
                width={684}
                height={355}
                src={proj.image}
                alt={proj.heading}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardGrid;
