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
    heading: "Edge-Mind",
    description:
      "<p>A web-based interface for dataset upload, data type selection (image, audio, tabular), and training settings configuration. - Edge Node: Local web server for initial data preprocessing and temporary storage. - Cloud Infrastructure: Centralized or private cloud for intensive model training and results storage. - Database: Stores datasets, trained model weights, and performance metrics. - Edge Device Deployment: Enables model deployment and inference near the data source.</p>",
      websiteLink: "https://trainflow.devlab.techndev.com/",
 
    // techno
    javascript: true,
    nodejs:true,
    mongodb: true,
    postgresql: true,
    YOLO:true,
    next: true,
    tailwind: true,
  },
  {
    id: 6,
    image: images.AutolinkImage,
    heading: "AutoLink",
    description:
      "<p>AutoLink is a robust automotive marketplace platform built for the Kenyan market, enabling seamless buying and selling of vehicles. Developed using Elixir Phoenix framework with Erlang VM for exceptional scalability and fault tolerance. The application leverages PostgreSQL for reliable data management and real-time features powered by Phoenix LiveView. <br><br>Key features include advanced vehicle listings with detailed specifications, secure user authentication, real-time search and filtering, image galleries, seller verification system, and integrated messaging between buyers and sellers. The platform handles high concurrent user traffic efficiently while maintaining data integrity and transaction security.</p>",
      websiteLink: "https://autolink.today/",
    // techno
    elixir: true,
    erlang: true,
    phoenix: true,
    postgresql: true,
  },
  {
    id: 7,
    image: images.ClinicProImage,
    heading: "ClinicPro",
    description:
      "<p>ClinicPro is a comprehensive Clinic Management System designed to deliver realtime clinic efficiency for medical clinics of all sizes. Built with Elixir Phoenix backend and Next.js frontend, the system provides robust real-time capabilities for managing day-to-day clinic operations. <br><br>The platform features advanced appointment management with real-time scheduling, comprehensive patient records management, prescription handling, and automated communications. It implements role-based access control for Administrators, Doctors, Clinic Staff, and Patients, each with tailored functionality. Key features include: real-time appointment scheduling with clear availability, centralized patient histories and medical records, integrated prescription management during appointments, detailed analytics and reporting for administrators, patient check-in systems for clinic staff, and a patient portal for online booking without requiring an account. The application is currently in development phase, seeking feedback from independent doctors as design partners.</p>",
      websiteLink: "http://34.79.228.82:8081/",
    // techno
    elixir: true,
    erlang: true,
    phoenix: true,
    typescript: true,
    next: true,
    postgresql: true,
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
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.htmlLogo}
                      alt="html logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}
                {proj.css && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.15 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.cssLogo}
                      alt="css logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}
                {proj.javascript && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.javascriptLogo}
                      alt="javascript logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}
                {proj.react && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.25 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.reactLogo}
                      alt="react logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}
                {proj.next && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.htmlLogo}
                      alt="nextJS logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}
                {proj.hubspot && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.hubspotLogo}
                      alt="hubspot logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}
                {proj.tailwind && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.tailwindLogo}
                      alt="tailwind logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}
                     {proj.postgresql && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.45 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.postgresqlLogo}
                      alt="postgres logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                )}

                   {proj.mongodb && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.mongodbLogo}
                      alt="mongodb logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.elixir && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.55 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.elixirLogo}
                      alt="elixir logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.erlang && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.erlangLogo}
                      alt="erlang logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.phoenix && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.65 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.phoenixLogo}
                      alt="phoenix logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.typescript && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gray-50 rounded-full filter shadow-md cursor-pointer hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300">
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.typescriptLogo}
                      alt="typescript logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
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
