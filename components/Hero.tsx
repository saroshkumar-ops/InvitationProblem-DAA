'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set((clientX - innerWidth / 2) / 25);
            mouseY.set((clientY - innerHeight / 2) / 25);
            setMousePosition({ x: clientX, y: clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Deep gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Animated gradient orbs */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
            />
            <motion.div
                style={{ x: useTransform(springX, v => -v * 1.5), y: useTransform(springY, v => -v * 1.5) }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-secondary/15 to-transparent blur-3xl"
            />
            <motion.div
                style={{ x: useTransform(springX, v => v * 0.5), y: useTransform(springY, v => v * 0.5) }}
                className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-accent/10 to-transparent blur-2xl"
            />

            {/* Floating nodes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 8 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute w-2 h-2 rounded-full bg-secondary/50"
                    style={{
                        left: `${15 + i * 15}%`,
                        top: `${20 + (i % 3) * 25}%`,
                        boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-3 px-5 py-2 rounded glass border border-secondary/30 mb-10"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                    </span>
                    <span className="text-sm font-mono text-secondary tracking-wider uppercase">Graph Optimization System</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
                >
                    <span className="block text-text-primary">The</span>
                    <span className="block gradient-text">Invitation</span>
                    <span className="block text-text-primary">Problem</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-sans"
                >
                    Optimizing delivery routes using <span className="text-secondary font-semibold">graph algorithms</span> and{' '}
                    <span className="text-primary font-semibold">minimum spanning trees</span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    <motion.a
                        href="#problem"
                        whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(168, 85, 247, 0.5)' }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-cyber"
                    >
                        Explore Solution
                    </motion.a>
                    <motion.a
                        href="#implementation"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 rounded glass border border-secondary/30 text-secondary font-display font-semibold tracking-wider uppercase hover:bg-secondary/10 transition"
                    >
                        View Code
                    </motion.a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-20 flex flex-wrap justify-center gap-12"
                >
                    {[
                        { value: '8', label: 'Nodes' },
                        { value: 'O(E log V)', label: 'Complexity' },
                        { value: '23', label: 'Min Cost' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold font-mono text-primary mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs uppercase tracking-widest text-text-tertiary">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-secondary/30 flex justify-center pt-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                </motion.div>
            </motion.div>
        </section>
    );
}
