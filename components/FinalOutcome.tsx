'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const duration = 2000;
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            const timer = setInterval(() => {
                current += increment;
                if (current >= value) {
                    setCount(value);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, duration / steps);
            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function FinalOutcome() {
    return (
        <section className="relative py-32 bg-bg-secondary overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded bg-accent/20 text-accent border border-accent/30 mb-8"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-mono text-sm uppercase tracking-wider">System Optimized</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">Optimal Route Found</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto font-sans">
                        Prim's Algorithm delivered a <span className="text-accent font-semibold">minimum-cost spanning tree</span> connecting all locations
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
                >
                    {[
                        { value: 23, label: 'Total Cost', unit: 'units', color: 'accent' },
                        { value: 8, label: 'Locations', unit: 'nodes', color: 'primary' },
                        { value: 100, label: 'Coverage', unit: '%', color: 'secondary' },
                        { value: 0, label: 'Redundancy', unit: 'loops', color: 'accent' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className={`p-6 rounded-2xl glass text-center border ${stat.color === 'accent' ? 'border-accent/20' :
                                    stat.color === 'primary' ? 'border-primary/20' :
                                        'border-secondary/20'
                                }`}
                        >
                            <div className={`text-4xl md:text-5xl font-bold font-mono mb-2 ${stat.color === 'accent' ? 'text-accent' :
                                    stat.color === 'primary' ? 'text-primary' :
                                        'text-secondary'
                                }`}>
                                <AnimatedCounter value={stat.value} suffix={stat.unit === '%' ? '%' : ''} />
                            </div>
                            <div className="text-xs uppercase tracking-wider text-text-tertiary font-mono mb-1">{stat.label}</div>
                            {stat.unit !== '%' && (
                                <div className="text-xs text-text-tertiary opacity-60 font-sans">{stat.unit}</div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Why This Matters */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl glass-strong border border-primary/20"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-2xl border border-primary/40">
                            🎯
                        </div>
                        <h3 className="text-2xl font-bold">Why This Matters</h3>
                    </div>

                    <p className="text-lg text-text-secondary mb-10 leading-relaxed font-sans">
                        This approach demonstrates how graph theory transforms complex real-world logistics into elegant mathematical solutions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { icon: '🌱', title: 'Sustainable', desc: 'Minimizes fuel and travel time', color: 'accent' },
                            { icon: '🔄', title: 'Scalable', desc: 'Works for networks of any size', color: 'secondary' },
                            { icon: '🔬', title: 'Proven', desc: 'Backed by decades of research', color: 'primary' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className={`p-5 rounded-2xl bg-bg-secondary/50 border ${item.color === 'accent' ? 'border-accent/20' :
                                        item.color === 'secondary' ? 'border-secondary/20' :
                                            'border-primary/20'
                                    }`}
                            >
                                <span className="text-2xl mb-3 block">{item.icon}</span>
                                <h4 className="font-bold text-sm mb-1">{item.title}</h4>
                                <p className="text-xs text-text-secondary font-sans">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
