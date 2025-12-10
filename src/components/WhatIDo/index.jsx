import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/image";
import mySvg from "../../assets/my.svg";

const WhatIDo = () => {
  const techStack = [
    { name: "HTML5", icon: images.htmlLogo, label: "html-5" },
    { name: "CSS3", icon: images.cssLogo, label: "css3" },
    { name: "Sass", icon: images.sassLogo, label: "sass" },
    { name: "JavaScript", icon: images.javascriptLogo, label: "JavaScript" },
    { name: "React.js", icon: images.reactLogo, label: "react.js" },
    { name: "Node.js", icon: images.nodejsLogo, label: "node.js" },
    { name: "NPM", icon: images.npmLogo, label: "npm" },
    { name: "SQL Database", icon: images.postgresqlLogo, label: "sql-database" },
    { name: "AWS", icon: images.awsLogo, label: "aws" },
    { name: "Firebase", icon: images.firebaseLogo, label: "firebase" },
    { name: "Python", icon: images.pythonLogo, label: "python" },
    { name: "Docker", icon: images.dockerLogo, label: "docker" },
  ];

  const features = [
    {
      icon: "⚡",
      text: "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    },
    {
      icon: "⚡",
      text: "Progressive Web Applications (PWA) in normal and SPA Stacks",
    },
    {
      icon: "⚡",
      text: "Integration of third party services such as Firebase/ AWS / Digital Ocean",
    },
  ];

  return (
    <div className="w-full py-16 sm:py-20 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - SVG illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start relative"
          >
            <div className="w-full max-w-xl" style={{ filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.3))' }}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 1600 1200" 
                width="100%" 
                height="100%" 
                preserveAspectRatio="xMidYMid meet" 
                style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}
              >
                <defs>
                  <clipPath id="__lottie_element_84">
                    <rect width="1600" height="1200" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clipPath="url(#__lottie_element_84)">
                  <g style={{ display: 'block' }} transform="matrix(1,0,0,1,176.25,247.3489990234375)" opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,1152.10400390625,165.35000610351562)">
                      <motion.g
                        animate={{ x: [0, -2, 2, -2, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path fill="rgb(7,0,57)" fillOpacity="1" d="M0,17.5 C9.664999961853027,17.5 17.5,9.664999961853027 17.5,0 C17.5,-9.664999961853027 9.664999961853027,-17.5 0,-17.5 C-9.664999961853027,-17.5 -17.5,-9.664999961853027 -17.5,0 C-17.5,9.664999961853027 -9.664999961853027,17.5 0,17.5z"></path>
                      </motion.g>
                    </g>
                    <motion.g
                      animate={{ rotate: [0, 5, -5, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      style={{ transformOrigin: '1075px 195px' }}
                    >
                      <g opacity="1" transform="matrix(1,0,0,1,1075.510986328125,195.0500030517578)">
                        <g opacity="1" transform="matrix(1,0,0,1,43.9900016784668,32.25)">
                          <path fill="rgb(255,204,82)" fillOpacity="1" d="M37.599998474121094,-14.399999618530273 C42.099998474121094,-2.700000047683716 36.20000076293945,10.5 24.499000549316406,15 C24.499000549316406,15 -8.201000213623047,27.5 -8.201000213623047,27.5 C-19.899999618530273,32 -33.099998474121094,26.100000381469727 -37.599998474121094,14.399999618530273 C-42.099998474121094,2.700000047683716 -36.20100021362305,-10.5 -24.500999450683594,-15 C-24.500999450683594,-15 8.199999809265137,-27.5 8.199999809265137,-27.5 C19.999000549316406,-32 33.099998474121094,-26.200000762939453 37.599998474121094,-14.399999618530273z"></path>
                        </g>
                      </g>
                    </motion.g>
                  </g>
                  <image 
                    href={mySvg}
                    width="100%" 
                    height="100%" 
                    preserveAspectRatio="xMidYMid meet"
                  />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-6">
                What I do
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
              </p>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-4 mb-8"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.4 + index * 0.05,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-[10px] text-gray-600 dark:text-gray-400 mt-2 text-center">
                    {tech.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                  <p className="text-base text-gray-700 dark:text-gray-300">
                    {feature.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
