import React from "react";
import Headphone1 from "../../assets/Headphone1.png";
import Headphone2 from "../../assets/Headphone2.png";
import Headphone3 from "../../assets/Headphone3.png";
import WhatsAppIcon from "../../assets/Fawhatsapp.png"; 
import { UpdateFollower } from "react-mouse-follower";
import { motion, AnimatePresence } from "framer-motion"; 

const slideInFromLeft = (delay) => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      x: 0,
      scale: 1, 
      transition: {
        duration: 0.6,
        delay: delay,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
};

const floatAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

const HeadphoneData = [
  {
    id: 1,
    image: Headphone1,
    title: "Premium Wireless",
    subtitle:
      "Experience unmatched audio clarity with our flagship wireless headphones. Engineered for audiophiles who demand perfection.",
    price: "$149.99",
    model: "Mocha Brown",
    bgcolor: "#8b5958",
    accent: "#a67c7c"
  },
  {
    id: 2,
    image: Headphone2,
    title: "Eco-Friendly Wireless",
    subtitle:
      "Sustainable sound meets premium quality. Made from recycled materials without compromising on audio excellence.",
    price: "$129.99",
    model: "Forest Green",
    bgcolor: "#7B9416",
    accent: "#9bb41f"
  },
  {
    id: 3,
    image: Headphone3,
    title: "Ocean Deep Wireless",
    subtitle:
      "Dive into immersive soundscapes with our marine-inspired design. Crystal clear highs and deep, resonant bass.",
    price: "$139.99",
    model: "Deep Ocean",
    bgcolor: "#007383",
    accent: "#00a0b5"
  },
];

const Hero = () => {
  const [activeData, setActiveData] = React.useState(HeadphoneData[0]);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  
  const handleActiveData = (data) => {
    if (data.id !== activeData.id) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveData(data);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <>
      <section className="bg-brandDark text-white font-varela relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={floatAnimation}
            className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-10"
            style={{ backgroundColor: activeData.bgcolor }}
          />
          <motion.div 
            animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 } }}
            className="absolute bottom-40 left-10 w-24 h-24 rounded-full opacity-5"
            style={{ backgroundColor: activeData.accent }}
          />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/4 w-48 h-48 border border-white/5 rounded-full"
          />
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px] relative z-10">
          <div className="flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]">
            <div className="space-y-6 text-center md:text-left">
              
              {/* Brand Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 w-fit mx-auto md:mx-0"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">New Collection 2024</span>
              </motion.div>

              <AnimatePresence mode="wait">
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: activeData.bgcolor,
                    zIndex: 9999,
                    followSpeed: 0.5,
                    rotate: -360,
                    mixBlendMode: "difference",
                    scale: 12,
                  }}
                >
                  <motion.h1
                    key={activeData.id}
                    variants={slideInFromLeft(0.1)} 
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="text-3xl lg:text-6xl font-bold font-varela leading-tight"
                  >
                    {activeData.title}
                  </motion.h1>
                </UpdateFollower>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeData.id}
                  variants={slideInFromLeft(0.2)} 
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="text-base leading-relaxed text-white/80 max-w-md"
                >
                  {activeData.subtitle}
                </motion.p>
              </AnimatePresence>

              {/* Price Display */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  variants={slideInFromLeft(0.3)} 
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex items-center gap-4"
                >
                  <span className="text-3xl font-bold" style={{ color: activeData.accent }}>
                    {activeData.price}
                  </span>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: activeData.bgcolor,
                      zIndex: 9999,
                      followSpeed: 0.5,
                      scale: 6,
                      backgroundElement: (
                        <div>
                          <img src={activeData.image} alt="Headphone" />
                        </div>
                      ),
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ backgroundColor: activeData.bgcolor }}
                      className="px-6 py-3 rounded-full font-medium text-sm hover:shadow-lg transition-all duration-300"
                    >
                      {activeData.model}
                    </motion.button>
                  </UpdateFollower>
                </motion.div>
              </AnimatePresence>

              {/* Action Buttons */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  variants={slideInFromLeft(0.4)} 
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="flex flex-col sm:flex-row gap-4 !mt-8"
                >
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      mixBlendMode: "difference",
                      scale: 5,
                    }}
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-white text-brandDark font-semibold rounded-full hover:shadow-xl transition-all duration-300"
                    >
                      Buy Now
                    </motion.button>
                  </UpdateFollower>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </AnimatePresence>

              {/* Separator */}
              <div className="flex items-center justify-center md:justify-start gap-4 !mt-16">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-[2px] bg-gradient-to-r from-transparent to-white"
                />
                <p className="uppercase text-sm font-medium tracking-wider">Choose Your Style</p>
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: 80 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="h-[2px] bg-gradient-to-l from-transparent to-white"
                />
              </div>
              
              {/* Product Selection */}
              <div className="grid grid-cols-3 gap-6 !mt-8">
                {HeadphoneData.map((item, index) => {
                  const isActive = item.id === activeData.id;
                  return (
                    <UpdateFollower
                      key={item.id}
                      mouseOptions={{
                        backgroundColor: item.bgcolor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        scale: 6,
                        text: "Select",
                        textFontSize: "12px",
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => handleActiveData(item)}
                        className={`relative p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 border-2 border-white/40 shadow-lg' 
                            : 'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex flex-col items-center space-y-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="relative"
                          >
                            <img
                              src={item.image}
                              alt="Headphone"
                              className="w-16 h-16 object-contain"
                            />
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full border-2 border-white"
                              />
                            )}
                          </motion.div>
                          <div className="text-center space-y-1">
                            <p className="text-sm font-bold">{item.price}</p>
                            <p className="text-xs text-white/70">{item.model}</p>
                          </div>
                        </div>
                      </motion.div>
                    </UpdateFollower>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Hero Image - Fixed to prevent unnecessary re-renders */}
          <div className="flex flex-col justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: "easeInOut"
                }
              }}
              className="relative"
            >
              {/* Background glow effect that changes color */}
              <motion.div
                animate={floatAnimation}
                className="absolute inset-0 rounded-full blur-3xl opacity-20 transition-colors duration-500"
                style={{ backgroundColor: activeData.bgcolor }}
              />
              
              {/* Main headphone image - stable, no re-render */}
              <motion.img
                animate={floatAnimation}
                src={activeData.image}
                alt="Headphone"
                className="w-[300px] md:w-[400px] xl:w-[550px] relative z-10 transition-opacity duration-300"
                style={{ 
                  filter: isTransitioning ? 'blur(2px)' : 'blur(0px)',
                  opacity: isTransitioning ? 0.7 : 1
                }}
              />
            </motion.div>
          </div>
          
          {/* WhatsApp Floating Button */}
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "#25D366",
              zIndex: 9999,
              followSpeed: 0.5,
              scale: 4,
              text: "Chat",
              textFontSize: "12px",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-6 right-6 z-[99999]"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                <a href="" className="relative block">
                  <img
                    className="w-14 h-14 invert rounded-full bg-green-500 p-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    src={WhatsAppIcon}
                    alt="Whatsapp"
                  />
                </a>
              </div>
            </motion.div>
          </UpdateFollower>
        </div>
      </section>
    </>
  );
};

export default Hero;