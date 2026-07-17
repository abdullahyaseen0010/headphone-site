import React from 'react'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import { FadeUp } from '../Services/Services'

const Features = () => {
  const features = [
    {
      id: 1,
      icon: "🎵",
      title: "Hi-Fi Audio Quality",
      description: "Experience crystal clear sound with our premium drivers and advanced acoustic engineering.",
      delay: 0.2
    },
    {
      id: 2,
      icon: "🔋",
      title: "40H Battery Life",
      description: "Enjoy uninterrupted music for up to 40 hours with fast charging technology.",
      delay: 0.4
    },
    {
      id: 3,
      icon: "🎧",
      title: "Active Noise Cancellation",
      description: "Block out distractions with our industry-leading noise cancellation technology.",
      delay: 0.6
    },
    {
      id: 4,
      icon: "📱",
      title: "Wireless Connectivity",
      description: "Seamless Bluetooth 5.0 connection with multi-device pairing support.",
      delay: 0.8
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            variants={FadeUp(0.2)} 
            initial="hidden" 
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl lg:text-5xl font-bold font-poppins mb-4"
          >
            Why Choose Our <span className="text-[#e33343]">Headphones</span>?
          </motion.h2>
          <motion.p 
            variants={FadeUp(0.4)} 
            initial="hidden" 
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Discover the perfect blend of premium sound quality, cutting-edge technology, and exceptional comfort.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <UpdateFollower
              key={feature.id}
              mouseOptions={{
                backgroundColor: "#e33343",
                zIndex: 9999,
                followSpeed: 0.5,
                mixBlendMode: "difference",
                scale: 3,
              }}
            >
              <motion.div 
                variants={FadeUp(feature.delay)} 
                initial="hidden" 
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4 text-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </UpdateFollower>
          ))}
        </div>

        <div className="text-center mt-16">
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
              variants={FadeUp(1.0)} 
              initial="hidden" 
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e33343] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#c22d3a] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Features
            </motion.button>
          </UpdateFollower>
        </div>
      </div>
    </section>
  )
}

export default Features