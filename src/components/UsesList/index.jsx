import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const usesData = [
  {
    section: "Hardware",
    items: [
      
      {
        name: "Laptop - Lenovo Ideapad Flex 5 && MacBook Pro 16 M1 Pro",
        link: "https://www.lenovo.com/pk/en/p/laptops/ideapad/ideapad-flex-series/ideapad-flex-5-gen-8-16-inch-amd/len101i0065?orgRef=https%253A%252F%252Fwww.google.com%252F&srsltid=AfmBOoqBlJgrimZf6qbbPT9C9_8W67ATawthxHYnWHQXpws7K7iVr58E",
      },
      {
        name: "Mouse - Razer DeathAdder",
        link: "https://www.czone.com.pk/mouse-razer-mouse-razer-deathadder-essential-wired-gaming-mouse-black-rz01-03850100-pakistan-p.12064.aspx",
      },
     {
        name: "Keyboard - Teezare Tk63 pro Mechanical Keyboard",
        link: "https://www.amazon.com/Tezarre-Wireless-Bluetooth-Mechanical-Hot-Swappable/dp/B09Q8XDNP1/ref=sr_1_4?crid=1D11AD7XUAX8T&dib=eyJ2IjoiMSJ9.9QrlLYjdObNRKusmLNV1hVYfPfmXFGji2ttBesXstlW4o-mFRfoCE4v__KhNewkikqrj3Z2ElqzUkn9G2JZ8CUFGLyf81Kv-zICavrbWdkKuEIyjTn7N427P2mAOtZvH.DJs7dt9LhLWSfAPqwGW1GWMxuvrdyWRcvVB1udm_rYg&dib_tag=se&keywords=tezarre+tk63+pro&qid=1763287442&sprefix=tezarre+tk63+pro+%2Caps%2C406&sr=8-4",
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
