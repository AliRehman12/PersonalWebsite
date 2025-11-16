import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const usesData = [
  {
    section: "Hardware",
    items: [
      
      {
        name: "Laptop - Lenovo Ideapad Flex 5 && MacBook Pro 16 M1 pro",
        link: "https://www.apple.com/macbook-pro/",
      },
      {
        name: "Mouse - Razer DeathAdder V4 Pro",
        link: "https://www.razer.com/gaming-mice/razer-deathadder-v4-pro",
      },
       {
        name: "Keytboard - Tezaree TK63 Pro ",
        link: "https://www.amazon.com/Tezarre-Wireless-Bluetooth-Mechanical-Hot-Swappable/dp/B09Q8XDNP1/ref=sr_1_3?crid=CFN369QKVRU1&dib=eyJ2IjoiMSJ9.9QrlLYjdObNRKusmLNV1hVYfPfmXFGji2ttBesXstlW4o-mFRfoCE4v__KhNewkikqrj3Z2ElqzUkn9G2JZ8CUFGLyf81Kv-zICavrbWdkKuEIyjTn7N427P2mAOtZvH.DJs7dt9LhLWSfAPqwGW1GWMxuvrdyWRcvVB1udm_rYg&dib_tag=se&keywords=tezarre+tk63+pro&qid=1763294260&sprefix=tezarre+tk63+pro%2Caps%2C319&sr=8-3",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {usesData.map((section, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-secondary text-2xl font-mono">//</span>
              <h2 className="text-2xl font-bold text-primary dark:text-white font-mono">
                {section.section}
              </h2>
            </div>
            <ul className="space-y-3">
              {section.items.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="flex items-start gap-2 group"
                >
                  <span className="text-secondary mt-1 group-hover:scale-125 transition-transform">▹</span>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 text-neutral-700 dark:text-neutral-300 hover:text-secondary dark:hover:text-secondary transition-colors leading-relaxed"
                  >
                    {item.name}
                    {item.link && (
                      <span className="ml-2 inline-flex align-middle opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLinkIcon className="h-4 w-4" />
                      </span>
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsesList;
