'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        num: 1,
        title: "Prim's Algorithm constructs the MST",
        desc: "Starting from KLE Tech, the algorithm greedily selects minimum-weight edges connecting visited to unvisited nodes, building a tree that spans all locations with minimum total cost.",
        color: "primary"
    },
    {
        num: 2,
        title: "DFS generates the travel itinerary",
        desc: "Depth-first traversal of the MST produces the visit order. Backtracking is allowed, which means revisiting nodes to explore all branches—this is acceptable since revisits don't violate our constraints.",
        color: "secondary"
    },
    {
        num: 3,
        title: "Optimized path minimizes cost",
        desc: "The resulting path ensures all locations are visited with the minimum total traversal cost. The MST guarantees this optimality for connected graphs.",
        color: "accent"
    }
];

export default function SolutionFlow() {
    return (
        <section className="relative py-32 bg-bg-primary overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-secondary/5 blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-8 relative z-10">
                {/* Container with border */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 md:p-12 rounded-3xl glass-strong border border-border-subtle"
                >
                    {/* Header */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl font-bold text-center mb-12"
                    >
                        <span className="text-text-primary">Code</span>
                        <span className="text-secondary mx-3 opacity-50">→</span>
                        <span className="text-text-primary">Graph</span>
                        <span className="text-secondary mx-3 opacity-50">→</span>
                        <span className="gradient-text">Solution</span>
                    </motion.h2>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.5 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`relative p-6 rounded-2xl bg-bg-secondary/50 border ${step.color === 'primary' ? 'border-primary/20 hover:border-primary/40' :
                                        step.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/40' :
                                            'border-accent/20 hover:border-accent/40'
                                    } transition-all`}
                            >
                                {/* Step number */}
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold font-mono mb-4 ${step.color === 'primary' ? 'bg-primary/20 text-primary border border-primary/40' :
                                        step.color === 'secondary' ? 'bg-secondary/20 text-secondary border border-secondary/40' :
                                            'bg-accent/20 text-accent border border-accent/40'
                                    }`}>
                                    {step.num}
                                </div>

                                {/* Content */}
                                <h3 className="text-base font-bold mb-3 leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
