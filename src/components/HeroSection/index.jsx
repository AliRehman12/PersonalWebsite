import React from "react";
import images from "../../constants/image";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import './HeroSection.css'; // Assuming you have a CSS file for HeroSection styles

const socials = [
  {
    logo: images.linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/mian-ali-rehman-a36b38316/",
  },
  {
    logo: images.githubIcon,
    alt: "Github Icon",
    link: "https://github.com/AliRehman12",
  },
  {
    logo: images.instagramicon,
    alt: "Instagram Icon",
    link: "https://www.instagram.com/alii_rehman/",
  },
];

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-primary dark:via-primary-600 dark:to-primary-400 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
      
      {/* Floating code elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 dark:opacity-20 font-mono text-secondary animate-float">{'{ }'}</div>
      <div className="absolute bottom-40 right-20 text-5xl opacity-10 dark:opacity-20 font-mono text-secondary animate-float-delayed">{'< />'}</div>
      <div className="absolute top-1/3 right-10 text-4xl opacity-10 dark:opacity-20 font-mono text-secondary animate-pulse">λ</div>
      
      <div className="container relative">
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen">
            {/* Terminal-style welcome box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12 bg-gray-900 dark:bg-black rounded-3xl shadow-2xl p-12 md:p-16 lg:p-20 border-2 border-gray-700 dark:border-gray-600 max-w-5xl w-full backdrop-blur-lg bg-opacity-95 hover:shadow-3xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-5 h-5 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="w-5 h-5 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer"></div>
              </div>
              <div className="font-mono text-xl md:text-2xl lg:text-3xl space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-green-400 text-2xl md:text-3xl lg:text-4xl">$</span>
                  <span className="text-gray-300">whoami</span>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-blue-400 ml-10 md:ml-14 lg:ml-16 text-2xl md:text-3xl lg:text-4xl font-semibold"
                >
                  Ali Rehman
                </motion.div>
                <div className="flex items-center gap-4 mt-8">
                  <span className="text-green-400 text-2xl md:text-3xl lg:text-4xl">$</span>
                  <span className="text-gray-300">cat role.txt</span>
                </div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-purple-400 ml-10 md:ml-14 lg:ml-16 text-xl md:text-2xl lg:text-3xl"
                >
                  Backend Developer | Full Stack Engineer
                </motion.div>
              </div>
            </motion.div>
            
            {/* Tech Stack Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="max-w-4xl w-full text-center"
            >
              <div className="inline-block bg-gradient-to-r from-secondary/10 via-primary/10 to-secondary/10 dark:from-secondary/20 dark:via-primary/20 dark:to-secondary/20 rounded-2xl px-8 py-6 backdrop-blur-sm border border-secondary/20 dark:border-secondary/30">
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="text-lg md:text-xl lg:text-2xl font-mono text-gray-700 dark:text-gray-300"
                >
                  <span className="text-secondary font-semibold">&lt;</span>
                  <span className="mx-2">Building scalable projects using</span>
                  <span className="text-secondary font-semibold">/&gt;</span>
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                  className="mt-4 flex flex-wrap justify-center gap-3 text-sm md:text-base lg:text-lg font-semibold"
                >
                  {['Elixir', 'Phoenix', 'NEXT.js', 'MERN', 'TypeScript'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 + (index * 0.1), duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
            
            <motion.h1
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "linear", duration: 0.5 }}
              className="hero__heading bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary dark:from-white dark:via-secondary dark:to-white"
            >
              
            </motion.h1>
          </div>
        </div>
        <div className="w-full relative bottom-20 md:w-auto md:absolute md:top-[70%]">
          <ul className="flex flex-row justify-center items-center w-full gap-6 md:flex-col">
            {socials.map((social, index) => (
              <motion.li
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.15 }}
                key={index}
                className="bg-neutral w-max rounded-full hover:bg-neutral-300 dark:bg-primary-400 dark:hover:bg-primary-300"
              >
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="h-14 w-14 p-4 transition-all dark:invert social-icon"
                    src={social.logo}
                    alt={social.alt}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
