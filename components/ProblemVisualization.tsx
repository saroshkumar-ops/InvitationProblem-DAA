'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const nodes = [
    { id: 'kle', x: 500, y: 350, label: 'KLE Tech', isStart: true, description: 'Engineering college - starting point', type: 'Educational' },
    { id: 'lingaraj', x: 200, y: 150, label: 'Lingaraj Nagar', description: 'Residential area', type: 'Residential' },
    { id: 'urban', x: 800, y: 120, label: 'Urban Oasis', description: 'Commercial complex', type: 'Commercial' },
    { id: 'kims', x: 350, y: 550, label: 'KIMS Hospital', description: 'Healthcare facility', type: 'Medical' },
    { id: 'deshpande', x: 850, y: 500, label: 'Deshpande Nagar', description: 'Cultural hub', type: 'Cultural' },
    { id: 'keshwapur', x: 150, y: 450, label: 'Keshwapur', description: 'Mixed use district', type: 'Mixed' },
    { id: 'vijay', x: 650, y: 620, label: 'Vijay Nagar', description: 'Residential colony', type: 'Residential' },
    { id: 'raj', x: 120, y: 620, label: 'Raj Nagar', description: 'Market area', type: 'Commercial' },
];

const edges = [
    { from: 'kle', to: 'lingaraj', weight: 4 },
    { from: 'kle', to: 'urban', weight: 6 },
    { from: 'lingaraj', to: 'kims', weight: 3 },
    { from: 'urban', to: 'kims', weight: 5 },
    { from: 'kims', to: 'deshpande', weight: 2 },
    { from: 'lingaraj', to: 'keshwapur', weight: 5 },
    { from: 'keshwapur', to: 'raj', weight: 4 },
    { from: 'kims', to: 'vijay', weight: 6 },
    { from: 'deshpande', to: 'vijay', weight: 3 },
];

export default function ProblemVisualization() {
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const getNodePosition = (id: string) => nodes.find(n => n.id === id);

    return (
        <section id="problem" className="relative py-48 bg-bg-primary overflow-hidden" style={{ paddingTop: '12rem', paddingBottom: '12rem' }}>
            <div className="max-w-4xl mx-auto px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-10">
                        Understanding the <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Problem</span>
                    </h2>

                    <div className="max-w-4xl mx-auto space-y-8 text-lg text-text-secondary">
                        <p className="leading-relaxed">
                            <strong className="text-text-primary">Scenario:</strong> New Year party invitations must be hand-delivered to multiple locations across Hubli, starting from KLE Tech.
                            The challenge is to <strong className="text-secondary">minimize the total travel cost</strong> while ensuring every location is reached.
                        </p>
                        <p className="leading-relaxed">
                            This real-world constraint mapping problem becomes non-trivial due to the large number of possible routes (factorial complexity),
                            the need to balance coverage with cost, and the allowance for revisits.
                        </p>
                    </div>
                </motion.div>

                {/* Graph Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-bg-card/50 backdrop-blur-sm border border-border-subtle rounded-3xl p-12 shadow-2xl"
                >
                    <h3 className="text-3xl font-bold text-center mb-16">
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Graph Representation</span>
                    </h3>

                    <svg viewBox="0 0 1000 700" className="w-full h-auto">
                        <defs>
                            <linearGradient id="edgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(102, 126, 234, 0.6)" />
                                <stop offset="100%" stopColor="rgba(0, 242, 254, 0.6)" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Edges */}
                        {edges.map((edge, i) => {
                            const from = getNodePosition(edge.from);
                            const to = getNodePosition(edge.to);
                            if (!from || !to) return null;

                            return (
                                <g key={i}>
                                    <motion.line
                                        x1={from.x}
                                        y1={from.y}
                                        x2={to.x}
                                        y2={to.y}
                                        stroke="url(#edgeGradient)"
                                        strokeWidth="3"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.8 }}
                                    />
                                    {/* Weight label */}
                                    <text
                                        x={(from.x + to.x) / 2}
                                        y={(from.y + to.y) / 2}
                                        fill="rgba(0, 242, 254, 0.9)"
                                        fontSize="16"
                                        fontWeight="bold"
                                        textAnchor="middle"
                                        className="pointer-events-none"
                                    >
                                        {edge.weight}
                                    </text>
                                </g>
                            );
                        })}

                        {/* Nodes */}
                        {nodes.map((node, i) => (
                            <g
                                key={node.id}
                                onMouseEnter={() => setHoveredNode(node.id)}
                                onMouseLeave={() => setHoveredNode(null)}
                                className="cursor-pointer"
                            >
                                <motion.circle
                                    cx={node.x}
                                    cy={node.y}
                                    r={hoveredNode === node.id ? 32 : 28}
                                    fill={node.isStart ? 'url(#primaryGradient)' : 'rgba(102, 126, 234, 0.8)'}
                                    stroke={hoveredNode === node.id ? 'rgba(0, 242, 254, 1)' : 'rgba(255, 255, 255, 0.3)'}
                                    strokeWidth={hoveredNode === node.id ? 4 : 2}
                                    filter="url(#glow)"
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                                />
                                {node.isStart && (
                                    <circle
                                        cx={node.x}
                                        cy={node.y}
                                        r="34"
                                        fill="none"
                                        stroke="rgba(0, 242, 254, 0.5)"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    >
                                        <animateTransform
                                            attributeName="transform"
                                            type="rotate"
                                            from={`0 ${node.x} ${node.y}`}
                                            to={`360 ${node.x} ${node.y}`}
                                            dur="10s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                )}
                                <text
                                    x={node.x}
                                    y={node.y + 50}
                                    fill="white"
                                    fontSize="14"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    className="pointer-events-none"
                                >
                                    {node.label}
                                </text>
                            </g>
                        ))}

                        <defs>
                            <linearGradient id="primaryGradient">
                                <stop offset="0%" stopColor="#667eea" />
                                <stop offset="100%" stopColor="#00f2fe" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Hovered Node Info */}
                    {hoveredNode && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-8 p-6 bg-gradient-to-r from-primary/20 to-secondary/20 border border-secondary/40 rounded-2xl"
                        >
                            <h4 className="text-xl font-bold mb-2">{nodes.find(n => n.id === hoveredNode)?.label}</h4>
                            <p className="text-text-secondary">{nodes.find(n => n.id === hoveredNode)?.description}</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-accent/20 border border-accent rounded-full text-sm text-accent">
                                {nodes.find(n => n.id === hoveredNode)?.type}
                            </span>
                        </motion.div>
                    )}
                </motion.div>

                {/* Constraints */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-24 space-y-6"
                >
                    {[
                        { icon: '🎯', title: 'Full Coverage', desc: 'All nodes must be visited at least once to deliver invitations.' },
                        { icon: '💰', title: 'Cost Minimization', desc: 'Minimize total edge weights to reduce travel time and resources.' },
                        { icon: '🔄', title: 'Revisit Flexibility', desc: 'Nodes can be revisited if the optimal path requires backtracking.' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-6 p-6 bg-bg-card border border-border-subtle rounded-xl"
                        >
                            <div className="flex-shrink-0 text-4xl">{item.icon}</div>
                            <div>
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
