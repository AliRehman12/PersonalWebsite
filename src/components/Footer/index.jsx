import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white py-16 dark:bg-primary">
      <div className="text-center">
        <p className="text-primary font-normal text-base mb-2 dark:text-white">
          © {currentYear} Ali Rehman. All rights reserved.
        </p>
        <p className="text-primary font-semibold text-base dark:text-white">
<<<<<<< HEAD
          © Coded By {"Ali Rehman"}
=======
          Made with {"<3"}
>>>>>>> 7e20dd6a919ea36f13becff10e09dc82cd09ef03
        </p>
      </div>
    </div>
  );
};

export default Footer;
