'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Actual locations from the graph
const traversalOrder = [
    'KLE Tech', 'Lingaraj Nagar', 'Keshwapur', 'Raj Nagar', 'Keshwapur',
    'Lingaraj Nagar', 'KLE Tech', 'Urban Oasis', 'KLE Tech',
    'KIMS Hospital', 'Vijay Nagar', 'Deshpande Nagar', 'Vijay Nagar',
    'KIMS Hospital', 'KLE Tech'
];

// Short names for display
const shortNames: Record<string, string> = {
    'KLE Tech': 'KLE',
    'Lingaraj Nagar': 'Lingaraj',
    'Keshwapur': 'Keshwapur',
    'Raj Nagar': 'Raj Nagar',
    'Urban Oasis': 'Urban',
    'KIMS Hospital': 'KIMS',
    'Vijay Nagar': 'Vijay',
    'Deshpande Nagar': 'Deshpande'
};

export default function TreeToPath() {
    const [traversalStep, setTraversalStep] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying && traversalStep < traversalOrder.length) {
            const timer = setTimeout(() => {
                setTraversalStep(prev => prev + 1);
            }, 600);
            return () => clearTimeout(timer);
        }
        if (traversalStep >= traversalOrder.length) {
            setIsPlaying(false);
        }
    }, [traversalStep, isPlaying]);

    const resetAnimation = () => {
        setTraversalStep(0);
        setIsPlaying(true);
    };

    return (
        <section id="tree-to-path" className="relative py-32 bg-bg-secondary overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
                        DFS Traversal
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        From Tree to <span className="gradient-text">Travel Itinerary</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Converting the MST into an actual visiting sequence
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* SVG Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl glass-strong border border-primary/20"
                    >
                        <h3 className="text-xl font-bold mb-6">DFS Traversal of MST</h3>

                        <div className="relative">
                            <svg viewBox="0 0 700 500" className="w-full h-auto">
                                <defs>
                                    <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#8b5cf6" />
                                        <stop offset="100%" stopColor="#06b6d4" />
                                    </linearGradient>
                                </defs>

                                {/* MST Edges */}
                                {/* KLE Tech -> Lingaraj Nagar */}
                                <line x1="350" y1="100" x2="180" y2="180" stroke="url(#edgeGradient)" strokeWidth="3" />
                                {/* Lingaraj -> Keshwapur */}
                                <line x1="180" y1="180" x2="100" y2="300" stroke="url(#edgeGradient)" strokeWidth="3" />
                                {/* Keshwapur -> Raj Nagar */}
                                <line x1="100" y1="300" x2="120" y2="420" stroke="url(#edgeGradient)" strokeWidth="3" />
                                {/* KLE Tech -> Urban Oasis */}
                                <line x1="350" y1="100" x2="520" y2="150" stroke="url(#edgeGradient)" strokeWidth="3" />
                                {/* KLE Tech -> KIMS Hospital */}
                                <line x1="350" y1="100" x2="280" y2="350" stroke="url(#edgeGradient)" strokeWidth="3" />
                                {/* KIMS -> Vijay Nagar */}
                                <line x1="280" y1="350" x2="420" y2="400" stroke="url(#edgeGradient)" strokeWidth="3" />
                                {/* Vijay -> Deshpande */}
                                <line x1="420" y1="400" x2="550" y2="320" stroke="url(#edgeGradient)" strokeWidth="3" />

                                {/* Backtracking paths (dashed) */}
                                <line x1="120" y1="420" x2="100" y2="300" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                                <line x1="100" y1="300" x2="180" y2="180" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                                <line x1="180" y1="180" x2="350" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                                <line x1="520" y1="150" x2="350" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                                <line x1="550" y1="320" x2="420" y2="400" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                                <line x1="420" y1="400" x2="280" y2="350" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                                <line x1="280" y1="350" x2="350" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />

                                {/* Nodes */}
                                <g>
                                    <circle cx="350" cy="100" r="32" fill="#8b5cf6" stroke="white" strokeWidth="2" />
                                    <text x="350" y="105" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">KLE Tech</text>
                                    <text x="350" y="60" textAnchor="middle" fill="#a78bfa" fontSize="12">Start</text>
                                </g>

                                <g>
                                    <circle cx="180" cy="180" r="28" fill="#06b6d4" stroke="white" strokeWidth="2" />
                                    <text x="180" y="176" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Lingaraj</text>
                                    <text x="180" y="189" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Nagar</text>
                                </g>

                                <g>
                                    <circle cx="100" cy="300" r="28" fill="#06b6d4" stroke="white" strokeWidth="2" />
                                    <text x="100" y="305" textAnchor="middle" fill="white" fontSize="10" fontWeight="700">Keshwapur</text>
                                </g>

                                <g>
                                    <circle cx="120" cy="420" r="28" fill="#06b6d4" stroke="white" strokeWidth="2" />
                                    <text x="120" y="416" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Raj</text>
                                    <text x="120" y="429" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Nagar</text>
                                </g>

                                <g>
                                    <circle cx="520" cy="150" r="28" fill="#06b6d4" stroke="white" strokeWidth="2" />
                                    <text x="520" y="146" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Urban</text>
                                    <text x="520" y="159" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Oasis</text>
                                </g>

                                <g>
                                    <circle cx="280" cy="350" r="28" fill="#06b6d4" stroke="white" strokeWidth="2" />
                                    <text x="280" y="346" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">KIMS</text>
                                    <text x="280" y="359" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Hospital</text>
                                </g>

                                <g>
                                    <circle cx="420" cy="400" r="28" fill="#06b6d4" stroke="white" strokeWidth="2" />
                                    <text x="420" y="396" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Vijay</text>
                                    <text x="420" y="409" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Nagar</text>
                                </g>

                                <g>
                                    <circle cx="550" cy="320" r="28" fill="#06b6d4" stroke="white" strokeWidth="2" />
                                    <text x="550" y="316" textAnchor="middle" fill="white" fontSize="8" fontWeight="700">Deshpande</text>
                                    <text x="550" y="329" textAnchor="middle" fill="white" fontSize="9" fontWeight="700">Nagar</text>
                                </g>
                            </svg>
                        </div>

                        {/* Legend */}
                        <div className="flex gap-6 mt-6 justify-center">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                                <span className="text-sm text-text-secondary">MST Edges</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-0.5 border-t-2 border-dashed border-red-400" />
                                <span className="text-sm text-text-secondary">Backtracking</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Explanation */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* How DFS Works */}
                        <div className="p-6 rounded-2xl glass border border-secondary/20">
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="text-secondary">⚙️</span> How DFS Works
                            </h4>
                            <ol className="space-y-3 text-text-secondary">
                                {[
                                    'Start at KLE Tech (root)',
                                    'Visit deepest unvisited child',
                                    'Backtrack when reaching leaf node',
                                    'Continue until all nodes visited'
                                ].map((step, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 text-secondary text-sm flex items-center justify-center font-bold">
                                            {i + 1}
                                        </span>
                                        {step}
                                    </motion.li>
                                ))}
                            </ol>
                        </div>

                        {/* Traversal Sequence */}
                        <div className="p-6 rounded-2xl glass border border-primary/20">
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="font-bold text-lg flex items-center gap-2">
                                    <span className="text-primary">📍</span> Traversal Sequence
                                </h4>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={resetAnimation}
                                    className="px-3 py-1 text-sm rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition"
                                >
                                    {isPlaying ? 'Playing...' : 'Replay'}
                                </motion.button>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {traversalOrder.map((node, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ scale: 0.8, opacity: 0.3 }}
                                        animate={{
                                            scale: idx < traversalStep ? 1 : 0.8,
                                            opacity: idx < traversalStep ? 1 : 0.3,
                                        }}
                                        className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium transition-all ${idx < traversalStep
                                                ? 'bg-accent/20 text-accent border border-accent/40'
                                                : 'bg-bg-secondary/50 text-text-tertiary border border-border-subtle'
                                            }`}
                                    >
                                        <span className="opacity-60">{idx + 1}.</span>
                                        <span>{shortNames[node]}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Key Insight */}
                        <div className="p-6 rounded-2xl bg-accent/10 border border-accent/20">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">💡</span>
                                <div>
                                    <h4 className="font-bold mb-2">Key Insight</h4>
                                    <p className="text-text-secondary text-sm">
                                        DFS traversal of the MST gives us the actual visiting order.
                                        Revisits are allowed and costs accumulate accordingly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
