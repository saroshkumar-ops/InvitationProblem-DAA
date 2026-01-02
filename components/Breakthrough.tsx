'use client';

import { motion } from 'framer-motion';

export default function Breakthrough() {
    return (
        <section id="breakthrough" className="relative py-32 bg-bg-secondary overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-secondary/20 text-secondary border border-secondary/30 mb-8"
                    >
                        <span className="animate-pulse">💡</span>
                        <span className="font-mono text-sm uppercase tracking-wider">Key Insight</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                        <span className="text-text-primary">What if we shift from</span>
                        <br />
                        <span className="line-through text-text-tertiary opacity-50">shortest path</span>
                        <br />
                        <span className="text-text-primary">to </span>
                        <span className="gradient-text">Minimum Spanning Tree</span>
                        <span className="text-text-primary">?</span>
                    </h2>

                    <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-sans">
                        Our problem constraints—<span className="text-primary font-semibold">full coverage</span>,{' '}
                        <span className="text-secondary font-semibold">cost minimization</span>, and{' '}
                        <span className="text-accent font-semibold">revisit flexibility</span>—map perfectly onto MST properties
                    </p>
                </motion.div>

                {/* Properties */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl glass-strong border border-secondary/20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-secondary/10 text-secondary text-xs font-mono uppercase tracking-wider mb-8">
                        MST: Natural Algorithmic Abstraction
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-10">
                        {[
                            { icon: '🔗', title: 'Complete Connectivity', desc: 'Every location reachable through tree structure', color: 'primary' },
                            { icon: '✂️', title: 'No Redundancy', desc: 'Exactly V-1 edges for minimal cost', color: 'secondary' },
                            { icon: '🌳', title: 'Optimal Structure', desc: 'Complete coverage without cycles', color: 'accent' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -4, scale: 1.02 }}
                                className={`p-5 rounded-2xl bg-bg-secondary/50 border ${item.color === 'primary' ? 'border-primary/20 hover:border-primary/40' :
                                        item.color === 'secondary' ? 'border-secondary/20 hover:border-secondary/40' :
                                            'border-accent/20 hover:border-accent/40'
                                    } transition-all`}
                            >
                                <motion.span
                                    className="text-3xl mb-3 block"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {item.icon}
                                </motion.span>
                                <h4 className="font-bold text-sm mb-2">{item.title}</h4>
                                <p className="text-xs text-text-secondary font-sans">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Formal Definition */}
                    <div className="p-6 rounded-2xl bg-bg-primary/50 border border-primary/20">
                        <div className="text-xs text-text-tertiary uppercase tracking-wider mb-3 font-mono">
                            Formal Definition
                        </div>
                        <div className="text-lg md:text-2xl font-mono text-primary mb-3">
                            MST(G) = argmin<sub className="text-secondary">T∈spanning(G)</sub> Σ<sub className="text-secondary">(u,v)∈E(T)</sub> w(u,v)
                        </div>
                        <p className="text-sm text-text-secondary font-sans">
                            Where T is a spanning tree connecting all vertices with minimum total edge weight
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
