import React from "react";
import { BriefcaseIcon, CalendarIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

const TwoColumnCard = () => {
  return (
    <>
      {/* DevnTech Current Position */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-10 items-center md:grid-cols-2 mb-16"
      >
        <motion.div
          variants={{
            offscreen: {
              y: 150,
            },
            onscreen: {
              y: 0,
              rotate: [0, 10, -10, 0],
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1,
              },
            },
          }}
          className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
        >
          <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
            DevnTech Islamabad
            <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
              <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
              JULY, 2025 - PRESENT
            </span>
            <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
              <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
              FULL STACK SOFTWARE DEVELOPER
            </span>
          </h6>
          <div className="relative mb-4">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
                duties & responsibilities
              </span>
            </div>
          </div>

          <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
            <li>
              Developing full-stack web applications using modern technologies including React, Node.js, and database management systems.
            </li>
            <li>
              Collaborating with cross-functional teams to design, develop, and deploy scalable software solutions.
            </li>
            <li>
              Implementing responsive user interfaces and optimizing application performance for enhanced user experience.
            </li>
            <li>
              Participating in code reviews, testing, and maintaining high-quality code standards throughout the development lifecycle.
            </li>
          </ul>
        </motion.div>
        <motion.div
          variants={{
            offscreen: {
              y: 300,
            },
            onscreen: {
              y: 0,
              rotate: [0, 10, -10, 0],
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.5,
              },
            },
          }}
          className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
        >
          <div className="text-center">
            <h3 className="text-3xl font-bold text-primary dark:text-white mb-4">
              Current Role
            </h3>
            <p className="text-lg text-primary-400 dark:text-neutral-200 mb-6">
              Full Stack Development at DevnTechs
            </p>
            <div className="bg-primary-100 dark:bg-primary-600 rounded-lg p-6">
              <p className="text-primary-600 dark:text-primary-200 font-medium mb-4">
                "Building end-to-end web applications with a focus on performance, scalability, and user experience."
              </p>
              
              <div className="text-left">
                <h4 className="text-white dark:text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Technical Skills
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <h5 className="text-white dark:text-white font-medium mb-1">Frontend:</h5>
                    <ul className="text-white dark:text-white list-disc list-inside pl-2 space-y-1">
                      <li>HTML5, CSS3, JavaScript (ES6+)</li>
                      <li>React.js, Redux, Bootstrap, Tailwind CSS</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-white dark:text-white font-medium mb-1">Backend:</h5>
                    <ul className="text-white dark:text-white list-disc list-inside pl-2 space-y-1">
                      <li>Node.js, Express.js</li>
                      <li>RESTful APIs</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-white dark:text-white font-medium mb-1">Database:</h5>
                    <ul className="text-white dark:text-white list-disc list-inside pl-2">
                      <li>MongoDB, PostgreSQL, MySQL</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-white dark:text-white font-medium mb-1">DevOps & Deployment:</h5>
                    <ul className="text-white dark:text-white list-disc list-inside pl-2">
                      <li>Docker, AWS, Netlify, Vercel</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-white dark:text-white font-medium mb-1">Tools & Others:</h5>
                    <ul className="text-white dark:text-white list-disc list-inside pl-2 space-y-1">
                      <li>Git, GitHub</li>
                      <li>Agile/Scrum, Jira, Slack, Asana</li>
                      <li>Figma</li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Previous Experience Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-10 items-center md:grid-cols-2"
      >
      <motion.div
        variants={{
          offscreen: {
            y: 150,
          },
          onscreen: {
            y: 0,
            rotate: [0, 10, -10, 0],
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="cursor-pointer bg-gray-50 px-6 py-16 rounded-3xl h-full filter shadow-md relative md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
        
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            JUNE, 2024 - SEPTEMBER, 2024
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="h-4 mr-2 text-neutral-600 dark:text-neutral-300" />
            JUNIOR BACK-END ENGINEER At INVOZONE
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>

        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed web applications using JavaScript, React, Tailwind, and
            NextJS.
          </li>
          <li>
            Created and developed websites, landing pages, and email templates
            using Emailjs
          </li>
          <li>
            Assisted in the maintenance and troubleshooting of client's websites
            to ensure smooth performance and user satisfaction.
          </li>
          <li>
            Collabrated in development of Mobile Application at *INVOZONE* in React Native.
          </li>

        </ul>
      </motion.div>
      <motion.div
        variants={{
          offscreen: {
            y: 300,
          },
          onscreen: {
            y: 0,
             rotate: [0, 10, -10, 0],
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.5,
            },
          },
        }}
        whileHover={{ scale: 1.02 }}
        className="bg-gray-50 px-6 py-16 rounded-3xl h-full relative filter shadow-md md:px-10 dark:bg-primary-500"
      >
        <h6 className="text-2xl font-bold text-primary mb-4 dark:text-white">
          <a
            href="https://www.upwork.com/freelancers/~01f9379003e416d3aa"
            target="_blank"
            className="hover:underline"
          >
            Upwork
          </a>
          <span className="mt-4 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <CalendarIcon className=" text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            DECEMBER, 2024 - APRIL 2025
          </span>
          <span className="mt-2 text-xs flex items-center justify-start uppercase text-neutral-600 dark:text-neutral-300">
            <BriefcaseIcon className="text-neutral-600 h-4 mr-2 dark:text-neutral-300" />
            FREELANCE BACK-END ENGINEER
          </span>
        </h6>
        <div className="relative mb-4">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="uppercase px-2 bg-gray-50 text-sm text-gray-500 dark:bg-primary-500">
              duties & responsibilities
            </span>
          </div>
        </div>
        <ul className="text-base text-primary-400 list-inside list-disc dark:text-neutral-200">
          <li>
            Developed and implemented CMS websites utilizing the HubSpot
            platform, resulting in an efficient and user-friendly experience for
            clients
          </li>
          <li>
            Successfully resolved various technical issues for clients,
            contributing to a positive and productive project experience
          </li>
          <li>
            Started as a freelancer, demonstrating exceptional performance and
            customer satisfaction in delivering high-quality back-end
            development services.
          </li>
        </ul>
      </motion.div>
      </motion.div>
    </>
  );
};

export default TwoColumnCard;
