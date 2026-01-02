'use client';

import { motion } from 'framer-motion';

const primsFeatures = [
    {
        icon: '📍',
        title: 'Fixed Start Node',
        desc: 'Starts from KLE Tech — perfect for our use case',
        color: 'primary'
    },
    {
        icon: '🌱',
        title: 'Greedy Local Growth',
        desc: 'Grows the tree gradually by selecting minimum weight edges',
        color: 'accent'
    },
    {
        icon: '⚡',
        title: 'Efficient for Dense Graphs',
        desc: 'O(E log V) with priority queue — optimal for our scenario',
        color: 'secondary'
    },
    {
        icon: '🎯',
        title: 'Intuitive & Reliable',
        desc: 'Simple to implement and guaranteed to find MST',
        color: 'primary'
    },
];

const kruskalFeatures = [
    {
        icon: '🔀',
        title: 'Edge-Based Approach',
        desc: 'Sorts all edges globally — no specific start point'
    },
    {
        icon: '🔗',
        title: 'Union-Find Structure',
        desc: 'Requires additional data structure (disjoint sets)'
    },
    {
        icon: '📊',
        title: 'Better for Sparse Graphs',
        desc: 'More efficient when edges are fewer'
    },
    {
        icon: '⚙️',
        title: 'Different Use Case',
        desc: 'Not ideal when start location matters'
    },
];

export default function AlgorithmComparison() {
    return (
        <section className="relative py-32 bg-bg-primary overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-text-primary">Why </span>
                        <span className="gradient-text">Prim's Algorithm</span>
                        <span className="text-text-primary">?</span>
                    </h2>
                </motion.div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Prim's Algorithm - Selected */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-8 rounded-3xl glass-strong border-2 border-accent/40 overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />

                        {/* Header */}
                        <div className="relative flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold">Prim's Algorithm</h3>
                            <span className="px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-mono uppercase tracking-wider border border-accent/40">
                                ✓ Selected
                            </span>
                        </div>

                        {/* Features */}
                        <div className="relative space-y-4">
                            {primsFeatures.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ x: 4 }}
                                    className={`p-4 rounded-xl bg-bg-secondary/50 border-l-4 ${feature.color === 'accent' ? 'border-accent' :
                                            feature.color === 'secondary' ? 'border-secondary' :
                                                'border-primary'
                                        }`}
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-xl flex-shrink-0">{feature.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                                            <p className="text-xs text-text-secondary font-sans leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Kruskal's Algorithm - Alternative */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl glass border border-border-subtle"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-text-secondary">Kruskal's Algorithm</h3>
                            <span className="px-4 py-1.5 rounded-full bg-bg-secondary text-text-tertiary text-xs font-mono uppercase tracking-wider border border-border-subtle">
                                Alternative
                            </span>
                        </div>

                        {/* Features */}
                        <div className="space-y-4">
                            {kruskalFeatures.map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-4 rounded-xl bg-bg-secondary/30 border border-border-subtle opacity-80"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-xl flex-shrink-0 opacity-60">{feature.icon}</span>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1 text-text-secondary">{feature.title}</h4>
                                            <p className="text-xs text-text-tertiary font-sans leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 rounded-2xl bg-accent/10 border border-accent/20 text-center"
                >
                    <p className="text-text-secondary font-sans">
                        <span className="text-accent font-semibold">Prim's Algorithm</span> is the optimal choice when you have a
                        <span className="text-primary font-semibold"> fixed starting point</span> and need to
                        <span className="text-secondary font-semibold"> grow the tree incrementally</span> from that location.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
