import React from 'react'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import { FadeUp } from '../Services/Services'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" }
    ],
    products: [
      { name: "Headphones", href: "#" },
      { name: "Earbuds", href: "#" },
      { name: "Speakers", href: "#" },
      { name: "Accessories", href: "#" }
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Shipping", href: "#" }
    ],
    social: [
      { name: "Facebook", href: "#", icon: "📘" },
      { name: "Twitter", href: "#", icon: "🐦" },
      { name: "Instagram", href: "#", icon: "📸" },
      { name: "YouTube", href: "#", icon: "📺" }
    ]
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e33343] via-[#c22d3a] to-[#8b1538]">
        {/* Floating Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-48 h-48 bg-white/5 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-white/8 rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-64 h-64 border-2 border-white/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-white/15 rotate-45 animate-pulse"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              variants={FadeUp(0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <h3 className="text-3xl font-bold font-poppins text-white mb-4">
                Audio<span className="text-white/80">Tech</span>
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Experience the future of audio technology with our premium headphones. 
                Crafted for audiophiles who demand perfection in every note.
              </p>
              <div className="flex space-x-4">
                {footerLinks.social.map((social, index) => (
                  <UpdateFollower
                    key={social.name}
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      mixBlendMode: "difference",
                      scale: 3,
                    }}
                  >
                    <motion.a
                      href={social.href}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                    >
                      <span className="text-xl">{social.icon}</span>
                    </motion.a>
                  </UpdateFollower>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <motion.div
            variants={FadeUp(0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="text-xl font-semibold font-poppins text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      mixBlendMode: "difference",
                      scale: 2,
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            variants={FadeUp(0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="text-xl font-semibold font-poppins text-white mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      mixBlendMode: "difference",
                      scale: 2,
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            variants={FadeUp(0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="text-xl font-semibold font-poppins text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "white",
                      zIndex: 9999,
                      followSpeed: 0.5,
                      mixBlendMode: "difference",
                      scale: 2,
                    }}
                  >
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </a>
                  </UpdateFollower>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={FadeUp(1.0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <div className="text-center">
            <h4 className="text-2xl font-semibold font-poppins text-white mb-4">
              Stay Updated
            </h4>
            <p className="text-white/80 mb-6">
              Subscribe to get the latest news about our products and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  mixBlendMode: "difference",
                  scale: 4,
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-[#e33343] rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={FadeUp(1.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mt-16 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white/70">
            © 2024 AudioTech. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer