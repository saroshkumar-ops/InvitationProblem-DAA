'use client';

import { motion } from 'framer-motion';

const steps = [
    { num: 1, title: 'Initialize', desc: 'Start with KLE Tech, mark as visited', icon: '🎯', color: 'primary' },
    { num: 2, title: 'Find Minimum', desc: 'Select lowest-weight edge to unvisited node', icon: '🔍', color: 'secondary' },
    { num: 3, title: 'Add to MST', desc: 'Include the edge in spanning tree', icon: '➕', color: 'accent' },
    { num: 4, title: 'Repeat', desc: 'Continue until all nodes visited', icon: '🔄', color: 'primary' },
];

export default function PrimsAlgorithm() {
    return (
        <section id="prims" className="relative py-32 bg-bg-secondary overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-2 rounded glass text-sm font-mono text-secondary tracking-wider uppercase mb-6">
                        Step-by-Step Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Prim's Algorithm</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-sans">
                        Building the MST incrementally with greedy edge selection
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="p-6 rounded-2xl glass card-hover border border-border-subtle"
                        >
                            <div className="flex items-start gap-5">
                                {/* Step number */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold font-mono ${step.color === 'primary' ? 'bg-primary/20 text-primary border border-primary/40' :
                                        step.color === 'secondary' ? 'bg-secondary/20 text-secondary border border-secondary/40' :
                                            'bg-accent/20 text-accent border border-accent/40'
                                    }`}>
                                    {step.num}
                                </div>

                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xl">{step.icon}</span>
                                        <h3 className="text-lg font-bold">{step.title}</h3>
                                    </div>
                                    <p className="text-sm text-text-secondary font-sans">{step.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Complexity Analysis */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl glass-strong border border-primary/20"
                >
                    <h3 className="text-2xl font-bold mb-8 text-center">Time Complexity</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-bg-secondary/50 border border-primary/20 text-center">
                            <div className="text-sm text-text-tertiary uppercase tracking-wider mb-2 font-mono">Binary Heap</div>
                            <div className="text-3xl font-mono font-bold text-primary">O((V + E) log V)</div>
                            <p className="text-sm text-text-secondary mt-2 font-sans">Optimal for dense graphs</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-bg-secondary/50 border border-secondary/20 text-center">
                            <div className="text-sm text-text-tertiary uppercase tracking-wider mb-2 font-mono">Fibonacci Heap</div>
                            <div className="text-3xl font-mono font-bold text-secondary">O(E + V log V)</div>
                            <p className="text-sm text-text-secondary mt-2 font-sans">Best theoretical bound</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
