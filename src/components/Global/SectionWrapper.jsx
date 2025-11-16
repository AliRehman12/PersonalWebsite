import React from "react";
import classnames from "classnames";
import { motion } from "framer-motion";

const SectionWrapper = ({
  heading,
  fullWidth,
  id,
  className,
  textCenter,
  ...props
}) => {
  const sectionClassNames = classnames(
    className, 
    "bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-primary dark:via-primary-500 dark:to-primary-400 py-16 relative lg:py-32 overflow-hidden"
  );

  return (
    <section id={id} className={sectionClassNames}>
      {/* Decorative code elements */}
      <div className="absolute top-10 right-10 text-4xl opacity-5 dark:opacity-10 font-mono text-secondary">{'{}'}</div>
      <div className="absolute bottom-10 left-10 text-3xl opacity-5 dark:opacity-10 font-mono text-secondary">{'</>'}</div>
      
      <div className={`container ${fullWidth && "max-w-full px-0"}`}>
        <div className="mb-8 lg:mb-16 relative">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-secondary font-mono text-lg md:text-xl mb-2 block">&lt;section&gt;</span>
            <h1 className={`${
              textCenter && "xl:text-center"
            } font-display uppercase text-primary text-3xl text-center xl:text-left lg:text-5xl dark:text-white bg-clip-text`}>
              {heading}
            </h1>
          </motion.div>
        </div>
        {props.children}
      </div>
    </section>
  );
};

export default SectionWrapper;
