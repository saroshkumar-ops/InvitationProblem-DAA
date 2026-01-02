'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
    const [nodes, setNodes] = useState<{ x: number; y: number; size: number }[]>([]);

    useEffect(() => {
        // Generate random node positions
        const generateNodes = () => {
            return Array.from({ length: 15 }, () => ({
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 3 + 1,
            }));
        };
        setNodes(generateNodes());
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Deep gradient base */}
            <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />

            {/* Radial gradient accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-radial-gradient opacity-30"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)'
                }}
            />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(168, 85, 247, 0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(168, 85, 247, 0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Floating particles */}
            {nodes.map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: node.size,
                        height: node.size,
                        background: i % 2 === 0 ? 'rgba(168, 85, 247, 0.4)' : 'rgba(34, 211, 238, 0.4)',
                        boxShadow: i % 2 === 0
                            ? '0 0 10px rgba(168, 85, 247, 0.3)'
                            : '0 0 10px rgba(34, 211, 238, 0.3)'
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Connection lines - subtle data flow effect */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(168, 85, 247, 0)" />
                        <stop offset="50%" stopColor="rgba(34, 211, 238, 0.5)" />
                        <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />
                    </linearGradient>
                </defs>
                <motion.line
                    x1="0%" y1="30%" x2="100%" y2="35%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.line
                    x1="0%" y1="70%" x2="100%" y2="65%"
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                />
            </svg>

            {/* Corner accent glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>
    );
}
