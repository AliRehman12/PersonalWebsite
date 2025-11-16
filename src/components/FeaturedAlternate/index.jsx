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
      "<p>A simple personal portfolio website built with HTML, CSS, and JavaScript showcases an individual's skills, projects, and contact details. It includes sections like Home, About, Portfolio, and Contact, with responsive design and basic interactive features for an engaging user experience.</p>",
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
      "<p>Through Edge-Mind Users can train their own custom AI models and then use them for the Image and Live Video Inferencing. It is built with Next.js, TypeScript, and PostgreSQL as the database, featuring many integrations including RunPod Integration, Cloudflare Worker Integration, Minio S3 bucket, Cloudflare KV Database for storing the RunPod Pods ID and information, and Python containers built to train images and data into trained models.</p>",
      websiteLink: "https://trainflow.devlab.techndev.com/",
    // techno
    typescript: true,
    nextjs: true,
    postgresql: true,
    cloudflare: true,
    runpod: true,
    minio: true,
    tailwind: true,
  

   
  },
  {
    id: 6,
    image: images.agencyImage,
    heading: "AutoLink",
    description:
      "<p>AutoLink is a comprehensive car rental platform built for a client from Kenya, revolutionizing vehicle trading with multi-broker commission tracking, secure transactions, and trusted networks across emerging markets. The platform enables customers to browse available vehicles, make reservations, manage bookings, and process payments seamlessly. Built with Elixir/Erlang for high concurrency and fault tolerance, it features real-time inventory management, automated booking confirmations, flexible rental periods, customer profile management, and integration with payment gateways. The SQL database ensures reliable data persistence for vehicle listings, customer information, booking records, and transaction history.</p>",
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
      "<p>ClinicPro is a comprehensive Clinic Management software system providing real-time clinic efficiency for medical clinics of all sizes. Built with Phoenix Framework (Elixir/Erlang) backend and Next.js frontend, it manages day-to-day clinic operations including patient appointments, comprehensive patient records, prescription management, and automated communications. The system features role-based access for Administrators, Doctors, Clinic Staff, and Patients. Key features include real-time appointment scheduling with clear availability, centralized patient histories and medical records, prescription tools for doctors, automated reminders and notifications, user management across different roles, and comprehensive analytics for administrators. The platform enables patients to book appointments online without requiring an account, while staff can manage walk-ins and check-ins efficiently. Currently in development and seeking feedback from independent doctors as design partners.</p>",
      websiteLink: "http://34.79.228.82:8081/",
    // techno
    elixir: true,
    erlang: true,
    phoenix: true,
    react: true,
    next: true,
    javascript: true,
    postgresql: true,
  },
];

const CardGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-20 mt-32 md:gap-40 lg:gap-60">
        {projects.map((proj, index) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.1,
              duration: 0.6
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            key={proj.id}
            className="featured-alt flex even:flex-col-reverse odd:flex-col-reverse gap-10 items-start relative md:gap-20 md:even:flex-row md:odd:flex-row-reverse backdrop-blur-sm bg-white/5 dark:bg-primary/5 p-6 rounded-2xl"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="featured-no absolute text-[10rem] text-primary-300 -top-32 opacity-10 hidden xl:block font-bold"
            >
              0{proj.id}
            </motion.span>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-full z-10 md:w-1/2"
            >
              <motion.h3 
                whileHover={{ scale: 1.05, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-primary text-4xl font-bold mb-4 dark:text-white bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent dark:from-white dark:to-secondary-400"
              >
                {proj.heading}
              </motion.h3>
              <RichText
                className="text-primary-400 text-base dark:text-neutral-300"
                content={proj.description}
              />
              <div className="flex flex-row relative">
                <div className="flex flex-row justify-center gap-4 py-10">
                  {proj.websiteLink && (
                    <motion.a
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
                      href={proj.websiteLink}
                      target="_blank"
                    >
                      <span className="absolute inset-0 border border-secondary group-active:border-secondary animate-pulse"></span>
                      <span className="flex items-center gap-3 px-6 py-3 transition-all bg-gradient-to-r from-secondary to-secondary-600 border border-secondary active:border-secondary group-hover:-translate-x-2 group-hover:-translate-y-2 shadow-lg group-hover:shadow-secondary/50">
                        <GlobeAltIcon className="w-6 h-6 animate-pulse" />
                        Visit Site
                      </span>
                    </motion.a>
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
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, staggerChildren: 0.05 }}
                className="flex flex-wrap items-center gap-4 py-6"
              >
                {proj.html && (
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-orange-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-orange-400/50 border-2 border-transparent hover:border-orange-500"
                  >
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
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-blue-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-blue-400/50 border-2 border-transparent hover:border-blue-500"
                  >
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
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-yellow-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-yellow-400/50 border-2 border-transparent hover:border-yellow-500"
                  >
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
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-cyan-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-cyan-400/50 border-2 border-transparent hover:border-cyan-500"
                  >
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
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-black/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-white/50 border-2 border-transparent hover:border-black dark:hover:border-white"
                  >
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
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-orange-600/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-orange-400/50 border-2 border-transparent hover:border-orange-600"
                  >
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
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-cyan-400/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-cyan-300/50 border-2 border-transparent hover:border-cyan-400"
                  >
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
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-blue-700/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-blue-400/50 border-2 border-transparent hover:border-blue-700"
                  >
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
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-green-600/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-green-400/50 border-2 border-transparent hover:border-green-600"
                  >
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
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-purple-600/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-purple-400/50 border-2 border-transparent hover:border-purple-600"
                  >
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
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-red-600/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-red-400/50 border-2 border-transparent hover:border-red-600"
                  >
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
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-orange-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-orange-300/50 border-2 border-transparent hover:border-orange-500"
                  >
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
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-blue-600/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-blue-400/50 border-2 border-transparent hover:border-blue-600"
                  >
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.typescriptLogo}
                      alt="typescript logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.nextjs && (
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-gray-800/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-white/50 border-2 border-transparent hover:border-gray-800 dark:hover:border-white"
                  >
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.nextjsLogo}
                      alt="nextjs logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.cloudflare && (
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-orange-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-orange-400/50 border-2 border-transparent hover:border-orange-500"
                  >
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.cloudflareLogo}
                      alt="cloudflare logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.runpod && (
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-purple-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-purple-400/50 border-2 border-transparent hover:border-purple-500"
                  >
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.runpodLogo}
                      alt="runpod logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
                   {proj.minio && (
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: -5, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="flex flex-col justify-center items-center gap-4 py-4 px-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full filter shadow-lg cursor-pointer hover:shadow-red-500/50 dark:from-primary-400 dark:to-primary-500 dark:hover:shadow-red-400/50 border-2 border-transparent hover:border-red-500"
                  >
                    <img
                      className="h-8 object-contain dark:filter dark:invert"
                      src={images.minioLogo}
                      alt="minio logo"
                      width={32}
                      height={32}
                    />
                  </motion.div>
                   )}
              </motion.div>
            </motion.div>
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
