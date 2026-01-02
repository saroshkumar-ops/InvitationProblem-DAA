'use client';

import { motion } from 'framer-motion';

const algorithms = [
    {
        name: 'Brute Force',
        complexity: 'O(n!)',
        verdict: 'infeasible',
        desc: 'Tries every possible route permutation. Factorial growth makes it computationally impossible for our problem size.',
        icon: '⚠️'
    },
    {
        name: 'Greedy',
        complexity: 'O(n²)',
        verdict: 'suboptimal',
        desc: 'Always picks nearest unvisited node. Fast but misses global optimization—can lead to dead ends.',
        icon: '⚡'
    },
    {
        name: "Prim's MST",
        complexity: 'O(E log V)',
        verdict: 'optimal',
        desc: 'Builds minimum spanning tree incrementally. Guarantees optimal connectivity with minimum total edge weight.',
        icon: '✓'
    }
];

const verdictStyles: Record<string, { bg: string; text: string; border: string }> = {
    optimal: { bg: 'bg-accent/20', text: 'text-accent', border: 'border-accent/40' },
    suboptimal: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/40' },
    infeasible: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/40' }
};

export default function AlgorithmBrainstorm() {
    return (
        <section id="algorithms" className="relative py-32 bg-bg-secondary overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded glass text-sm font-mono text-secondary tracking-wider uppercase mb-6">
                        Algorithm Analysis
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">Algorithm</span>
                        <span className="text-text-primary"> Exploration</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-sans">
                        Comparing approaches to find the optimal solution
                    </p>
                </motion.div>

                {/* Algorithm Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {algorithms.map((algo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6, scale: 1.02 }}
                            className={`relative p-6 rounded-2xl glass card-hover border ${algo.verdict === 'optimal' ? 'border-accent/30' : 'border-border-subtle'
                                }`}
                        >
                            {/* Verdict badge */}
                            <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${verdictStyles[algo.verdict].bg} ${verdictStyles[algo.verdict].text} border ${verdictStyles[algo.verdict].border}`}>
                                {algo.verdict}
                            </div>

                            {/* Icon */}
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="text-3xl mb-4"
                            >
                                {algo.icon}
                            </motion.div>

                            {/* Name & Complexity */}
                            <h3 className="text-xl font-bold mb-2">{algo.name}</h3>
                            <div className="inline-block px-2 py-1 rounded bg-bg-secondary/50 text-sm font-mono text-primary mb-4">
                                {algo.complexity}
                            </div>

                            {/* Description */}
                            <p className="text-sm text-text-secondary leading-relaxed font-sans">
                                {algo.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Why MST Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl glass-strong border border-accent/20"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-xl">
                            🏆
                        </div>
                        <h3 className="text-2xl font-bold">Why MST Wins</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: '🔗', title: 'Full Coverage', desc: 'Connects all nodes' },
                            { icon: '⚡', title: 'Efficient', desc: 'O(E log V) runtime' },
                            { icon: '✓', title: 'Optimal', desc: 'Minimum total cost' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-bg-secondary/50"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <div>
                                    <div className="font-bold text-sm">{item.title}</div>
                                    <div className="text-xs text-text-tertiary">{item.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
