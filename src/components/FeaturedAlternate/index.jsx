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
    docker: true,

   
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
    docker: true,
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
    docker: true,
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
    docker: true,
  },
];

const CardGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <>
      <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-40 xl:gap-60 mt-16 sm:mt-20 md:mt-32 px-4 sm:px-6 md:px-0">
        {projects.map((proj, projectIndex) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.6,
              delay: projectIndex * 0.1
            }}
            key={proj.id}
            onHoverStart={() => setHoveredProject(proj.id)}
            onHoverEnd={() => setHoveredProject(null)}
            className="featured-alt flex even:flex-col-reverse odd:flex-col-reverse gap-6 sm:gap-8 md:gap-10 lg:gap-20 items-start relative md:even:flex-row md:odd:flex-row-reverse group"
          >
            {/* Animated gradient background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredProject === proj.id ? 0.1 : 0 }}
              className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-purple-600 rounded-3xl blur-3xl -z-10"
            />
            
            {/* Project number with enhanced styling */}
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="featured-no absolute text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold bg-gradient-to-br from-secondary to-primary bg-clip-text text-transparent -top-12 sm:-top-16 md:-top-24 lg:-top-32 hidden md:block"
            >
              0{proj.id}
            </motion.span>
            
            <div className="w-full z-10 md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
              {/* Title with gradient and animation */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.h3 
                  whileHover={{ scale: 1.02 }}
                  className="text-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 dark:text-white bg-gradient-to-r from-primary via-secondary to-primary dark:from-white dark:via-secondary dark:to-white bg-clip-text hover:text-transparent transition-all duration-300 cursor-default"
                >
                  {proj.heading}
                </motion.h3>
              </motion.div>
              
              {/* Description card with glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="backdrop-blur-md bg-white/30 dark:bg-gray-900/50 p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <RichText
                  className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed"
                  content={proj.description}
                />
              </motion.div>
              
              {/* Link button with modern design */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-row relative pt-2 sm:pt-3 md:pt-4"
              >
                {proj.websiteLink && (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-secondary via-primary to-secondary rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                    href={proj.websiteLink}
                    target="_blank"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <GlobeAltIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 z-10 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="z-10">Visit Project</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="z-10 hidden sm:inline"
                    >
                      →
                    </motion.span>
                  </motion.a>
                )}
              </motion.div>
              
              {/* Technologies section with modern styling */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative pt-4 sm:pt-6 md:pt-8"
              >
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
                  />
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="uppercase px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-secondary/10 to-primary/10 dark:from-secondary/20 dark:to-primary/20 rounded-full text-[10px] sm:text-xs font-bold text-secondary dark:text-white whitespace-nowrap backdrop-blur-sm border border-secondary/20"
                  >
                    💻 Tech Stack
                  </motion.span>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent"
                  />
                </div>
              </motion.div>
              
              {/* Technology icons grid with enhanced animations */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 md:gap-3 py-4 sm:py-5 md:py-6">
                {proj.html && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.9
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.htmlLogo}
                        alt="html logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">HTML</span>
                    </div>
                  </motion.div>
                )}
                {proj.css && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.95
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.cssLogo}
                        alt="css logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">CSS</span>
                    </div>
                  </motion.div>
                )}
                {proj.javascript && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.0
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.javascriptLogo}
                        alt="javascript logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">JavaScript</span>
                    </div>
                  </motion.div>
                )}
                {proj.react && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.05
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.reactLogo}
                        alt="react logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">React</span>
                    </div>
                  </motion.div>
                )}
                {proj.next && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.1
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.htmlLogo}
                        alt="nextJS logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">Next.js</span>
                    </div>
                  </motion.div>
                )}
                {proj.hubspot && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.15
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.hubspotLogo}
                        alt="hubspot logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">HubSpot</span>
                    </div>
                  </motion.div>
                )}
                {proj.tailwind && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.2
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.tailwindLogo}
                        alt="tailwind logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">Tailwind</span>
                    </div>
                  </motion.div>
                )}
                {proj.postgresql && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.25
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.postgresqlLogo}
                        alt="postgres logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">PostgreSQL</span>
                    </div>
                  </motion.div>
                )}
                {proj.mongodb && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.3
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.mongodbLogo}
                        alt="mongodb logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">MongoDB</span>
                    </div>
                  </motion.div>
                )}
                {proj.elixir && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.35
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.elixirLogo}
                        alt="elixir logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">Elixir</span>
                    </div>
                  </motion.div>
                )}
                {proj.erlang && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.4
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.erlangLogo}
                        alt="erlang logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">Erlang</span>
                    </div>
                  </motion.div>
                )}
                {proj.phoenix && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.45
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.phoenixLogo}
                        alt="phoenix logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">Phoenix</span>
                    </div>
                  </motion.div>
                )}
                {proj.typescript && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.5
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.typescriptLogo}
                        alt="typescript logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">TypeScript</span>
                    </div>
                  </motion.div>
                )}
                {proj.docker && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 1.55
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, 0],
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    className="relative group/tech">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/tech:opacity-75 transition-opacity duration-300" />
                    <div className="relative flex flex-col justify-center items-center p-3 sm:p-4 md:p-5 bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm cursor-pointer">
                      <img
                        className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 object-contain transition-all duration-300 group-hover/tech:scale-110"
                        src={images.dockerLogo}
                        alt="docker logo"
                      />
                      <span className="absolute -bottom-6 sm:-bottom-8 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg whitespace-nowrap">Docker</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Project image with enhanced styling */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.3
              }}
              className="w-full z-10 relative md:w-1/2"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative group/img"
                style={{ perspective: "1000px" }}
              >
                {/* Animated glow effect */}
                <motion.div
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-secondary via-primary to-purple-600 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30 group-hover/img:opacity-60 transition-opacity duration-500"
                />
                
                {/* Loading skeleton */}
                {!isLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 animate-pulse rounded-xl sm:rounded-2xl" />
                )}
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 sm:border-2 dark:border-gray-700 shadow-xl sm:shadow-2xl">
                  <img
                    className="w-full h-auto object-cover transition-all duration-500 group-hover/img:scale-110"
                    loading="lazy"
                    width={684}
                    height={355}
                    src={proj.image}
                    alt={proj.heading}
                    onLoad={() => setIsLoaded(true)}
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-4 sm:p-6"
                  >
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white font-bold text-sm sm:text-base md:text-lg"
                    >
                      View Project →
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardGrid;
