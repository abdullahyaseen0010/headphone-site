import React from 'react'
import Headphone4 from '../../assets/Headphone4.png'
import { motion } from 'framer-motion'
import { UpdateFollower } from 'react-mouse-follower'
import { FadeUp } from '../Services/Services'

const slideInFromRight = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 100,
            scale: 0.8,
        },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                delay: delay,
                duration: 0.8,
                ease: "easeInOut",
            },
        }
    }
}

const floatAnimation = {
    y: [0, -20, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const Banner = () => {
    return (
        <>
            <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 font-varela py-16 relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                        animate={floatAnimation}
                        className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-red-100 to-pink-100 opacity-20"
                    />
                    <motion.div 
                        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 1.5 } }}
                        className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 opacity-15"
                    />
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/3 right-1/4 w-64 h-64 border border-gray-200 rounded-full opacity-10"
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-red-200 rounded-full opacity-10"
                    />
                </div>

                <div className="container py-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Image Section */}
                    <div className="relative flex justify-center md:justify-start">
                        {/* Glowing Background */}
                        <motion.div
                            animate={floatAnimation}
                            className="absolute inset-0 bg-gradient-to-br from-red-200/30 to-pink-200/30 rounded-full blur-3xl"
                        />
                        
                        {/* Decorative Elements */}
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-10 right-10 w-16 h-16 border-2 border-red-200 rounded-full opacity-30"
                        />
                        <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-10 left-10 w-8 h-8 bg-red-300 rounded-full opacity-20"
                        />

                        <motion.div
                            initial={{ opacity: 0, x: -100, rotate: -180, scale: 0.5 }} 
                            whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }} 
                            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }} 
                            viewport={{ once: false, amount: 0.3 }}
                            className="relative z-10"
                        >
                            <motion.img 
                                animate={floatAnimation}
                                src={Headphone4} 
                                alt="Headphone" 
                                className="w-[300px] md:w-[400px] lg:w-[450px] relative z-10"
                            />
                        </motion.div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                        <div className="text-center md:text-left space-y-6 lg:max-w-[500px]">
                            {/* Badge */}
                            <motion.div
                                variants={FadeUp(0.3)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full border border-red-200 w-fit mx-auto md:mx-0"
                            >
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-red-700">Latest Technology</span>
                            </motion.div>

                            {/* Title */}
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "#e33343",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    rotate: -360,
                                    mixBlendMode: "difference",
                                    scale: 10,
                                }}
                            >
                                <motion.h1 
                                    variants={FadeUp(0.5)} 
                                    initial="hidden" 
                                    whileInView="show"
                                    viewport={{ once: true }}
                                    className="text-3xl lg:text-5xl font-bold font-varela leading-tight"
                                >
                                    The Latest{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
                                        Headphone
                                    </span>{" "}
                                    With The Latest Technology
                                </motion.h1>
                            </UpdateFollower>

                            {/* Description */}
                            <motion.p 
                                variants={FadeUp(0.7)} 
                                initial="hidden" 
                                whileInView="show"
                                viewport={{ once: true }}
                                className="text-lg text-gray-600 leading-relaxed"
                            >
                                Experience revolutionary sound quality with our cutting-edge audio technology. 
                                Engineered for perfection, designed for comfort, and built to deliver an 
                                unparalleled listening experience that transforms how you hear music.
                            </motion.p>

                            {/* Features List */}
                            <motion.div
                                variants={FadeUp(0.9)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-wrap gap-4 justify-center md:justify-start"
                            >
                                {['Wireless', 'Noise Cancelling', 'HD Audio'].map((feature, index) => (
                                    <motion.div
                                        key={feature}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 text-sm font-medium text-gray-700"
                                    >
                                        {feature}
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                variants={FadeUp(1.2)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-col sm:flex-row gap-4 !mt-8"
                            >
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "#e33343",
                                        zIndex: 9999, 
                                        followSpeed: 0.5,
                                        mixBlendMode: "difference",
                                        scale: 6,
                                    }}
                                >
                                    <motion.button 
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="group relative px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                        <span className="relative z-10">Shop Now</span>
                                    </motion.button>
                                </UpdateFollower>
                                
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
                                        className="px-8 py-3 border-2 border-red-500 text-red-500 font-semibold rounded-full hover:bg-red-50 transition-all duration-300"
                                    >
                                        View Details
                                    </motion.button>
                                </UpdateFollower>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                variants={FadeUp(1.5)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex items-center justify-center md:justify-start gap-8 pt-8 border-t border-gray-200"
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-500">50+</div>
                                    <div className="text-sm text-gray-600">Hours Battery</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-500">Hi-Res</div>
                                    <div className="text-sm text-gray-600">Audio Quality</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-red-500">ANC</div>
                                    <div className="text-sm text-gray-600">Technology</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner