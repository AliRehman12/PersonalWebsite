import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon, AcademicCapIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import pic1 from "../../assets/pic .jpeg";
import pic2 from "../../assets/pic 1.jpeg";
import pic3 from "../../assets/pic 2.jpeg";
import pic4 from "../../assets/my_pic.png";
const logos = [
  {
    image: images.htmlLogo,
    title: "HTML5",
  },
  {
    image: images.cssLogo,
    title: "CSS3",
  },
  {
    image: images.javascriptLogo,
    title: "JavaScript",
  },
  {
    image: images.typescriptLogo,
    title: "TypeScript",
  },
  {
    image: images.gitLogo,
    title: "Git",
  },
  {
    image: images.githubLogo,
    title: "Github",
  },
  {
    image: images.reactLogo,
    title: "React",
  },
  {
    image: images.nextLogo,
    title: "NextJS",
  },
  {
    image: images.hubspotLogo,
    title: "HubSpot",
  },
  {
    image: images.mongodbLogo,
    title: "MongoDB",
  },
  {
    image: images.nodejsLogo,
    title: "Node.js",
  },
  {
    image: images.postgresqlLogo,
    title: "PostgreSQL",
  },
  {
    image: images.elixirLogo,
    title: "Elixir",
  },
  {
    image: images.erlangLogo,
    title: "Erlang",
  },
  {
    image: images.phoenixLogo,
    title: "Phoenix",
  },
  {
    image: images.kotlinLogo,
    title: "Kotlin",
  },
];

const carouselImages = [pic1, pic2, pic3, pic4];

const TabSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Tabs defaultIndex={0}>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "linear", duration: 0.5 }}
        >
          <TabList className="bg-white flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-gray-800 md:w-max md:flex-row shadow-lg border border-gray-200 dark:border-gray-700">
            <Tab className="text-black bg-transparent w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 focus-within:text-white md:w-max dark:text-white dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none transition-all">
              Know me more
            </Tab>
            <Tab className="text-black bg-transparent w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 focus-within:text-white md:w-max dark:text-white dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl transition-all">
              Technical Skills
            </Tab>
          </TabList>
        </motion.div>
        <TabPanel className="flex gap-20 items-center flex-col-reverse md:flex-row-reverse transition-all">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full text-primary md:w-1/2 dark:text-white"
          >
            <h2 className="text-2xl font-semibold mb-2">
               Developer | Backend Developer
            </h2>
            <p className="text-base font-normal text-neutral-700 dark:text-neutral-300">
             Software Engineer specializing in scalable backend architecture and cloud deployment. Expertise spans Node.js, TypeScript, and Elixir, with deep experience in building real-time applications via Socket.io. Proven ability to manage the full software lifecycle—from developing RESTful microservices and Next.js frontends to containerizing applications with Docker and deploying on AWS, GCP, and Contabo. Strong background in database management (PostgreSQL/MongoDB) and query optimization.
            </p>
            
            <div className="flex items-center gap-3 mt-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border-l-4 border-yellow-500">
              <div className="flex items-center gap-2">
                <AcademicCapIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                <span className="text-2xl">🏅</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Graduated from FAST NUCES (2021-2025)</p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">🥇 Gold Medalist</p>
              </div>
            </div>
            <br />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative md:w-1/2 md:h-[450px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full md:h-[450px]" />
            )}
            <div className="relative w-full h-full">
              {carouselImages.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  className="absolute inset-0 h-full w-full z-10 object-contain rounded-lg filter shadow-lg"
                  alt={`Ali Rehman ${index + 1}`}
                  loading="lazy"
                  width={604}
                  height={450}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                  onLoad={() => setIsLoaded(true)}
                />
              ))}
            </div>
          </motion.div>
        </TabPanel>
        <TabPanel className="flex gap-20 items-center flex-col md:flex-row-reverse transition-all">
          <div className="w-full text-center text-white max-w-5xl mx-auto">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 lg:mt-8"
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="flex flex-col justify-center items-center gap-4 py-8 px-8 bg-white rounded-xl filter shadow-lg hover:shadow-2xl dark:bg-gray-900 border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 transition-all duration-300"
                >
                  <img
                    className="h-14 object-contain grayscale"
                    src={logo.image}
                    alt={logo.title}
                    loading="lazy"
                    width={56}
                    height={56}
                  />
                  <h6 className="text-xl font-semibold text-primary dark:text-white">
                    {logo.title}
                  </h6>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default TabSection;
