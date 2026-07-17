import React, { useState } from 'react'
import { MdMenu, MdClose } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from 'react-mouse-follower';
import { motion, AnimatePresence } from 'framer-motion';

const NavbarMenu = [
    {
        id: 1,
        title: "Home",
        link: "#",
    },
    {
        id: 2,
        title: "Categories",
        link: "#",
    },
    {
        id: 3,
        title: "Blog",
        link: "#",
    },
    {
        id: 4,
        title: "About",
        link: "#",
    },
    {
        id: 5,
        title: "Contact",
        link: "#",
    },
]

const floatAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="text-white bg-brandDark font-varela relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div 
                        animate={floatAnimation}
                        className="absolute top-4 right-20 w-16 h-16 rounded-full bg-white/5"
                    />
                    <motion.div 
                        animate={{ ...floatAnimation, transition: { ...floatAnimation.transition, delay: 2 } }}
                        className="absolute top-2 left-1/3 w-8 h-8 rounded-full bg-white/3"
                    />
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute top-6 right-1/3 w-24 h-24 border border-white/5 rounded-full"
                    />
                </div>

                <motion.nav 
                    initial={{ opacity: 0, y: -20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="container relative z-10"
                >
                    <div className="flex justify-between items-center py-6">
                        {/* Logo */}
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "#007383",
                                zIndex: 9999,
                                followSpeed: 0.5,
                                scale: 8,
                                mixBlendMode: "difference",
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <a href="#" className="text-xl font-bold uppercase tracking-wide">
                                    Playing / <span className="font-light text-white/70">Market</span>
                                </a>
                            </motion.div>
                        </UpdateFollower>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="flex items-center gap-2 px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                                <ul className="flex items-center gap-1">
                                    {NavbarMenu.map((item, index) => (
                                        <motion.li 
                                            key={item.id}
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <UpdateFollower 
                                                mouseOptions={{
                                                    followSpeed: 1.5,
                                                    zIndex: 999,
                                                    backgroundColor: "white",
                                                    scale: 6,
                                                    mixBlendMode: "difference",
                                                }}
                                            >
                                                <motion.a 
                                                    href={item.link} 
                                                    className="inline-block text-sm py-2 px-4 uppercase tracking-wide font-medium hover:text-white/80 transition-colors duration-300 rounded-full"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    {item.title}
                                                </motion.a>
                                            </UpdateFollower>
                                        </motion.li>
                                    ))}
                                </ul>
                                
                                {/* Separator */}
                                <div className="w-px h-6 bg-white/20 mx-2"></div>
                                
                                {/* Headphones Icon */}
                                <UpdateFollower 
                                    mouseOptions={{
                                        followSpeed: 1.5,
                                        zIndex: 999,
                                        backgroundColor: "#8b5958",
                                        scale: 8,
                                        mixBlendMode: "difference",
                                    }}
                                >
                                    <motion.button 
                                        className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 15 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <SlEarphones className="text-xl" />
                                    </motion.button>
                                </UpdateFollower>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.div 
                            className="md:hidden"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <UpdateFollower
                                mouseOptions={{
                                    backgroundColor: "#007383",
                                    zIndex: 9999,
                                    followSpeed: 0.5,
                                    scale: 6,
                                    mixBlendMode: "difference",
                                }}
                            >
                                <button 
                                    onClick={toggleMenu}
                                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <AnimatePresence mode="wait">
                                        {isMenuOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <MdClose className="text-2xl" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <MdMenu className="text-2xl" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </UpdateFollower>
                        </motion.div>
                    </div>
                </motion.nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-white/5 backdrop-blur-md border-t border-white/10"
                        >
                            <div className="container py-6">
                                <ul className="space-y-4">
                                    {NavbarMenu.map((item, index) => (
                                        <motion.li 
                                            key={item.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <UpdateFollower
                                                mouseOptions={{
                                                    backgroundColor: "#8b5958",
                                                    zIndex: 999,
                                                    followSpeed: 0.5,
                                                    scale: 6,
                                                    mixBlendMode: "difference",
                                                }}
                                            >
                                                <motion.a 
                                                    href={item.link} 
                                                    className="block text-lg font-medium uppercase tracking-wide py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                                                    whileHover={{ scale: 1.02, x: 10 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    {item.title}
                                                </motion.a>
                                            </UpdateFollower>
                                        </motion.li>
                                    ))}
                                </ul>
                                
                                {/* Mobile Headphones Button */}
                                <motion.div 
                                    className="mt-6 pt-4 border-t border-white/10"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.4 }}
                                >
                                    <UpdateFollower
                                        mouseOptions={{
                                            backgroundColor: "#8b5958",
                                            zIndex: 999,
                                            followSpeed: 0.5,
                                            scale: 8,
                                            mixBlendMode: "difference",
                                        }}
                                    >
                                        <motion.button 
                                            className="flex items-center gap-3 w-full py-3 px-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <SlEarphones className="text-xl" />
                                            <span className="font-medium">Shop Headphones</span>
                                        </motion.button>
                                    </UpdateFollower>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Navbar