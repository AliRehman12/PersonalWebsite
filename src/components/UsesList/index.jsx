import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const usesData = [
  {
    section: "Hardware",
    items: [
      
      {
        name: "Laptop - Lenovo Ideapad Flex 5",
        link: "https://www.lenovo.com/pk/en/p/laptops/ideapad/ideapad-flex-series/ideapad-flex-5-gen-8-16-inch-amd/len101i0065?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoqBlJgrimZf6qbbPT9C9_8W67ATawthxHYnWHQXpws7K7iVr58E",
      },
      {
        name: "Mouse - Glorious Model O Wireless",
        link: "https://www.gloriousgaming.com/products/glorious-model-o-wireless-matte-white",
      },
     
     
    ],
  },
  {
    section: "Editor",
    items: [
      {
        name: "Visual Studio Code",
        link: "https://code.visualstudio.com/download",
      },
      { name: "Font - MonoLisa", link: "https://www.monolisa.dev/" },
    ],
  },
  
  {
    section: "Other Software",
    items: [
      { name: "Notion", link: "https://www.notion.so/1db2ac43dc2f469a8d40ba9afc36d92a" },
      { name: "Jira", link: "https://home.atlassian.com/o/8156957c-8k74-1ac8-6j8k-6kj9451288d0/?cloudId=5478679e-5b92-4ce5-8a5b-8ba6274055f3" },
  
    ],
  },
];

const UsesList = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "linear", duration: 0.5 }}
      className="container relative"
    >
      <div className="flex flex-col items-start">
        {usesData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4 dark:text-white">
              {section.section}
            </h2>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="list-inside list-disc leading-loose text-neutral-700 dark:text-neutral-300"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    {item.link && (
                      <span className="ml-1 inline-flex align-middle">
                        <ExternalLinkIcon className="h-5 w-5" />
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsesList;
