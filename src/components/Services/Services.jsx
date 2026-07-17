import React from 'react'
import Icon1 from '../../assets/Icon1.png'
import Icon2 from '../../assets/Icon2.png'
import Icon3 from '../../assets/Icon3.png'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion'

export const FadeUp = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: delay,
                duration: 0.6,
                ease: "easeInOut",
            },
        }
    }
}

const slideInFromLeft = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: -60,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                delay: delay,
                duration: 0.8,
                ease: "easeInOut",
            },
        }
    }
}

const floatAnimation = {
    y: [0, -15, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const ServicesData = [
    {
        id: 1,
        title: "Security",
        Icon: Icon1,
        desc: "Secure Bluetooth pairing and encrypted audio transmission keep your conversations confidential",
        delay: 0.3,
        color: "#8b5958",
        accent: "#a67c7c",
    },
    {
        id: 2,
        title: "Guarantee",
        Icon: Icon2,
        desc: "30-day money-back guarantee - love your headphones or return them, no questions asked.",
        delay: 0.6,
        color: "#7B9416",
        accent: "#9bb41f",
    },
    {
        id: 3,
        title: "Affordability",
        Icon: Icon3,
        desc: "Premium sound quality at an affordable price - luxury audio that won't break the bank.",
        delay: 0.9,
        color: "#007383",
        accent: "#00a0b5",
    },
]

const Services = () => {
    return (
        <>
            <section className='bg-gradient-to-b from-gray-50 to-white font-varela py-16 relative overflow-hidden'>
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                        animate={floatAnimation}
                        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-30"
                    />
                    <motion.div 
                        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
                        className="absolute bottom-40 left-10 w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-blue-100 opacity-20"
                    />
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/3 left-1/4 w-48 h-48 border border-gray-200 rounded-full opacity-30"
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-1/3 right-1/4 w-32 h-32 border border-gray-150 rounded-full opacity-20"
                    />
                </div>

                <div className='container py-14 relative z-10'>
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <motion.div
                            variants={slideInFromLeft(0.1)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 rounded-full backdrop-blur-sm border border-gray-200 shadow-sm mb-6"
                        >
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-600">Why Choose Us</span>
                        </motion.div>
                        
                        <motion.h1 
                            variants={FadeUp(0.2)} 
                            initial="hidden" 
                            whileInView="show"
                            viewport={{ once: true }}
                            className='text-4xl lg:text-5xl font-bold text-gray-800 mb-4'
                        >
                            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
                        </motion.h1>
                        
                        <motion.p
                            variants={FadeUp(0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Experience the perfect blend of innovation, quality, and customer satisfaction with our comprehensive service offerings.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {ServicesData.map((data, index) => (
                            <UpdateFollower
                                key={data.id}
                                mouseOptions={{
                                    backgroundColor: data.color,
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    scale: 8,
                                    rotate: 360,
                                    mixBlendMode: "difference",
                                    backgroundElement: (
                                        <motion.div className="flex items-center justify-center">
                                            <img src={data.Icon} alt="" className="w-8 h-8 invert" />
                                        </motion.div>
                                    )
                                }}
                            >
                                <motion.div 
                                    variants={FadeUp(data.delay)} 
                                    initial="hidden" 
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    whileHover={{ 
                                        scale: 1.05,
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className='group relative flex flex-col items-center justify-center p-8 max-w-[350px] mx-auto rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500'
                                >
                                    {/* Gradient Background on Hover */}
                                    <div 
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                                        style={{ 
                                            background: `linear-gradient(135deg, ${data.color}20, ${data.accent}20)`
                                        }}
                                    />
                                    
                                    {/* Animated Icon Container */}
                                    <motion.div 
                                        className="relative mb-6"
                                        animate={floatAnimation}
                                    >
                                        <div 
                                            className="absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                                            style={{ backgroundColor: data.color }}
                                        />
                                        <div 
                                            className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                            style={{ backgroundColor: data.color }}
                                        >
                                            <motion.img 
                                                className='w-10 h-10 invert' 
                                                src={data.Icon} 
                                                alt=""
                                                whileHover={{ 
                                                    scale: 1.2,
                                                    rotate: 360,
                                                    transition: { duration: 0.5 }
                                                }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Content */}
                                    <div className='text-center space-y-4 relative z-10'>
                                        <motion.h2 
                                            className='text-2xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300'
                                            style={{ color: data.color }}
                                        >
                                            {data.title}
                                        </motion.h2>
                                        
                                        <p className='text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                                            {data.desc}
                                        </p>
                                        
                                        {/* Learn More Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="mt-4 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                                            style={{ 
                                                backgroundColor: data.color,
                                                color: 'white'
                                            }}
                                        >
                                            Learn More
                                        </motion.button>
                                    </div>

                                    {/* Decorative Elements */}
                                    <div className="absolute top-4 right-4 w-3 h-3 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                                         style={{ backgroundColor: data.accent }}
                                    />
                                    <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full opacity-15 group-hover:opacity-30 transition-opacity duration-300"
                                         style={{ backgroundColor: data.color }}
                                    />
                                </motion.div>
                            </UpdateFollower>
                        ))}
                    </div>

                    {/* Bottom CTA Section */}
                    <motion.div
                        variants={FadeUp(1.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="text-center mt-16"
                    >
                        <div className="inline-flex items-center gap-4">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: 60 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                                className="h-[2px] bg-gradient-to-r from-transparent to-gray-400"
                            />
                            <p className="text-gray-600 font-medium">Experience the difference today</p>
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: 60 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 1.6 }}
                                className="h-[2px] bg-gradient-to-l from-transparent to-gray-400"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Services