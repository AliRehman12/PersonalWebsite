import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import images from "../../constants/image";
import { ExternalLinkIcon } from "@heroicons/react/solid";
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
          <TabList className="bg-primary flex flex-col justify-center items-center mx-auto rounded-xl mb-16 w-full dark:bg-primary-500 md:w-max md:flex-row">
            <Tab className="text-black w-full text-center cursor-pointer px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
              Know me more
            </Tab>
            <Tab className="text-black w-full text-center cursor-pointer  px-8 py-4 font-semibold focus-within:bg-secondary-400 md:w-max dark:focus-within:bg-secondary rounded-t-none rounded-b-xl md:rounded-l-none md:rounded-r-xl">
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
             Backend Engineer doing FYP in robust server-side application.
             Proficient in Node.js, Express.js, PostgreSQL, and MongoDB, with a strong foundation in developing RESTful APIs and microservices architecture.
             Skilled in integrating modern front-end frameworks like React and Vite to create seamless full-stack solutions.
             Experienced in managing databases, optimizing queries, and ensuring system reliability.
             Currently pursuing a Final Year Project at FAST University.
            </p>
            <br />
          </motion.div>

          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "linear", duration: 0.5 }}
            className="w-full relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
          >
            {!isLoaded && (
              <div className="absolute top-0 rounded-lg left-0 z-50 bg-primary-400 animate-pulse w-full h-full" />
            )}
            <div className="relative w-full h-full">
              {carouselImages.map((img, index) => (
                <motion.img
                  key={index}
                  src={img}
                  className="absolute inset-0 h-full w-full z-10 object-cover sm:object-contain rounded-lg filter shadow-lg"
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
