'use client';

import { motion } from 'framer-motion';

const teamMembers = [
    { name: 'Sarosh', initials: 'S', gradient: 'from-primary to-secondary' },
    { name: 'Shrihari Deshapande', initials: 'SD', gradient: 'from-secondary to-accent' },
    { name: 'Sudhanva S Kulkarni', initials: 'SK', gradient: 'from-accent to-primary' },
    { name: 'Abhishek K', initials: 'AK', gradient: 'from-primary to-accent' },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5 }
    }
};

export default function Team() {
    return (
        <section id="team" className="relative py-32 bg-bg-primary overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
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
                        The Creators
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="text-text-primary">Meet the </span>
                        <span className="gradient-text">Team</span>
                    </h2>
                    <p className="text-xl text-text-secondary font-sans">
                        Students exploring algorithmic optimization
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {teamMembers.map((member, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="p-6 rounded-2xl glass card-hover border border-border-subtle text-center group"
                        >
                            {/* Avatar */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className={`relative w-20 h-20 mx-auto mb-5 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-2xl font-bold font-mono text-white shadow-lg overflow-hidden`}
                            >
                                <span className="relative z-10">{member.initials}</span>
                                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </motion.div>

                            {/* Name */}
                            <h4 className="font-bold text-base mb-1 group-hover:text-primary transition-colors">
                                {member.name}
                            </h4>
                            <p className="text-xs text-text-tertiary uppercase tracking-widest font-mono">
                                Team Member
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <motion.a
                        whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(168, 85, 247, 0.3)' }}
                        whileTap={{ scale: 0.98 }}
                        href="https://github.com/saroshkumar-ops/InvitationProblem-DAA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-lg glass border border-primary/30 text-primary font-mono uppercase tracking-wider text-sm hover:bg-primary/10 transition"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
