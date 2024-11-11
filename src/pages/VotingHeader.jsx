import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, BookOpen, LogIn, Phone, Mail, User, ChevronDown } from 'lucide-react';

function ActionButton({ icon: Icon, children, to }) {
    const navigate = useNavigate();

    return (
        <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,105,180,0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(to)}
            className="group flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600
        px-8 py-4 rounded-xl text-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
            <Icon className="w-6 h-6" />
            {children}
        </motion.button>
    );
}

function ContactItem({ icon: Icon, title, details }) {
    return (
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,105,180,0.3)" }}
            className="flex items-center gap-4 bg-purple-600/30 p-4 rounded-xl backdrop-blur-sm"
        >
            <div className="bg-pink-500 p-3 rounded-full">
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-pink-300">{title}</h3>
                {details.map((detail, index) => (
                    <p key={index} className="text-white/90">{detail}</p>
                ))}
            </div>
        </motion.div>
    );
}

export function VotingHeader() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        // Check if user is logged in (replace with your actual auth check)
        const checkLoginStatus = () => {
            const token = localStorage.getItem('authToken');
            setIsLoggedIn(!!token);
        };

        checkLoginStatus();
    }, []);

    const navButtonVariants = {
        hover: {
            scale: 1.1,
            textShadow: "0 0 8px rgb(255,105,180)",
            boxShadow: "0 0 8px rgb(255,105,180)",
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.95 }
    };

    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-purple-950 via-purple-700 to-pink-800 overflow-hidden">
            <div className="max-w-[2500px] mx-auto px-30 sm:px-6 lg:px-28 py-38 flex flex-col min-h-screen">
                <motion.nav
                    className="flex flex-col sm:flex-row justify-between items-center mb-16"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-4xl font-bold mb-4 sm:mb-0"
                    >
                        <span className="text-white">SecUr</span>
                        <span className="text-pink-400">Vote</span>
                    </motion.h1>

                    <div className="flex gap-4 mt-4 sm:mt-0 items-center">
                        {[
                            { name: 'About', path: '/about' },
                            { name: 'Features', path: '/features' },
                            { name: 'Steps', path: '/voting-steps' }
                        ].map((item, index) => (
                            <motion.button
                                key={item.name}
                                variants={navButtonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => navigate(item.path)}
                                className="text-lg text-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg bg-purple-700/50 hover:bg-purple-600/50"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * index }}
                            >
                                {item.name}
                            </motion.button>
                        ))}
                        <div className="relative">
                            <motion.button
                                variants={navButtonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="text-lg text-pink-200 hover:text-white transition-colors duration-300 px-4 py-2 rounded-lg bg-purple-700/50 hover:bg-purple-600/50 flex items-center gap-2"
                            >
                                <User className="w-5 h-5" />
                                <ChevronDown className="w-4 h-4" />
                            </motion.button>
                            <AnimatePresence>
                                {showDropdown && (
                                    <motion.div
                                        variants={dropdownVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        className="absolute right-0 mt-2 w-48 bg-purple-800 rounded-md shadow-lg py-1 z-10"
                                    >
                                        {isLoggedIn ? (
                                            <button
                                                onClick={() => navigate('/personal-info')}
                                                className="block px-4 py-2 text-sm text-pink-200 hover:bg-purple-700 w-full text-left"
                                            >
                                                Go to Dashboard
                                            </button>
                                        ) : (
                                            <>
                                                <button
                                                    onClick={() => navigate('/login')}
                                                    className="block px-4 py-2 text-sm text-pink-200 hover:bg-purple-700 w-full text-left"
                                                >
                                                    Login
                                                </button>
                                                <button
                                                    onClick={() => navigate('/registration')}
                                                    className="block px-4 py-2 text-sm text-pink-200 hover:bg-purple-700 w-full text-left"
                                                >
                                                    Register
                                                </button>
                                            </>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.nav>

                <div className="flex-1 grid lg:grid-cols-2 gap-12 items-center py-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="order-2 lg:order-1 flex justify-center"
                    >
                        <motion.img
                            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OPDZwYi3GzZWa0bpTh8kJFWyMj7CdM.png"
                            alt="Voter placing ballot in voting box"
                            className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: 5,
                                transition: { duration: 0.3 },
                                filter: "hue-rotate(60deg)"
                            }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="order-1 lg:order-2 text-center lg:text-left"
                    >
                        <motion.h2
                            className="text-5xl lg:text-6xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Be a part of the{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-200">
                                decision
                            </span>
                        </motion.h2>

                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="text-6xl lg:text-7xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-white"
                        >
                            Vote Today
                        </motion.h3>

                        <motion.div
                            className="flex flex-wrap gap-6 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        >
                            <ActionButton to="/voting-instructionss" icon={BookOpen}>
                                Instructions
                            </ActionButton>
                            <ActionButton to="/login" icon={LogIn}>
                                Login
                            </ActionButton>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-auto grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >
                    <ContactItem
                        icon={Phone}
                        title="Contact Us"
                        details={["1800 9090 32", "1800 9000 64"]}
                    />
                    <ContactItem
                        icon={Mail}
                        title="Email Us"
                        details={[
                            "complaint@electionindia.gov.in",
                            "info@electionindia.gov.in"
                        ]}
                    />
                </motion.div>

                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                    className="text-center py-8 mt-8"
                >
                    <motion.p
                        whileHover={{ scale: 1.1 }}
                        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-200 mb-2"
                    >
                        SSN COLLEGE OF ENGINEERING, KALAVAKKAM
                    </motion.p>
                    <motion.p
                        whileHover={{ scale: 1.1 }}
                        className="text-lg text-pink-300"
                    >
                        Made with ❣️ by Saipranav M, Rahul V S and Pragadish
                    </motion.p>
                </motion.footer>
            </div>
        </div>
    );
}