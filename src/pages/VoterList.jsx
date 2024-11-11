import React, { useState, useEffect } from 'react';
import { ArrowLeft, Users, Search, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const initialVoterData = [
    { hashId: 'ABC123', status: 'VOTED' },
    { hashId: 'BEC344', status: 'NOT VOTED' },
    { hashId: 'HSJB223', status: 'NOT VOTED' },
    { hashId: 'DEF223', status: 'VOTED' }
];

function VoterRow({ hashId, status }) {
    return (
        <motion.div
            className="flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-300 hover:bg-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            whileHover={{ scale: 1.02 }}
        >
            <p className="text-white text-lg font-medium">{hashId}</p>
            <motion.p
                className={`px-4 py-2 rounded-full text-sm font-bold ${status === 'VOTED' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-gray-900'}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                {status}
            </motion.p>
        </motion.div>
    );
}

function VoterList() {
    const [voterData, setVoterData] = useState(initialVoterData);
    const [searchTerm, setSearchTerm] = useState('');
    const [isRefreshing, setIsRefreshing] = useState(false);

    const filteredVoterData = voterData.filter(voter =>
        voter.hashId.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const refreshData = () => {
        setIsRefreshing(true);
        // Simulating an API call
        setTimeout(() => {
            setVoterData(prevData => [...prevData].sort(() => Math.random() - 0.5));
            setIsRefreshing(false);
        }, 1000);
    };

    useEffect(() => {
        const interval = setInterval(refreshData, 30000); // Refresh every 30 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-950 via-purple-800 to-pink-700 overflow-hidden px-4 py-12">
            <motion.div
                className="w-full max-w-5xl bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <header className="text-center mb-12">
                    <motion.h1
                        className="text-5xl md:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white to-pink-300 text-transparent bg-clip-text"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        ELECTION NAME
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-white/90 font-light"
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Real-time voter data from the database
                    </motion.p>
                </header>

                <section className="w-full mb-12">
                    <div className="flex justify-between items-center px-8 py-5 bg-white/20 backdrop-blur-sm rounded-xl mb-6">
                        <h2 className="text-xl font-semibold text-white flex items-center">
                            <Users className="mr-2" /> HASH-ID
                        </h2>
                        <div className="flex items-center">
                            <div className="relative mr-4">
                                <input
                                    type="text"
                                    placeholder="Search Hash-ID"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 pr-4 py-2 rounded-full bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                            </div>
                            <motion.button
                                onClick={refreshData}
                                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <RefreshCw className={isRefreshing ? 'animate-spin' : ''} />
                            </motion.button>
                        </div>
                    </div>

                    <AnimatePresence>
                        <div className="space-y-4">
                            {filteredVoterData.map((voter) => (
                                <VoterRow
                                    key={voter.hashId}
                                    hashId={voter.hashId}
                                    status={voter.status}
                                />
                            ))}
                        </div>
                    </AnimatePresence>
                </section>

                <nav className="flex justify-center">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/"
                            className="px-8 py-4 text-lg font-semibold text-purple-900 bg-white rounded-full hover:bg-purple-100 focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600 transition-all duration-300 flex items-center"
                        >
                            <ArrowLeft className="mr-2" /> BACK TO HOME
                        </Link>
                    </motion.div>
                </nav>
            </motion.div>
        </main>
    );
}

export default VoterList;