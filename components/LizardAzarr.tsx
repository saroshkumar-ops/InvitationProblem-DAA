'use client';

import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const ALGORITHM_FACTS = [
    "Prim's algorithm was rediscovered three times by different mathematicians.",
    "The word 'algorithm' comes from Persian mathematician Al-Khwarizmi.",
    "Greedy algorithms make locally optimal choices hoping for a global optimum.",
    "MST algorithms are used in network design, from computer to power grids.",
    "DFS uses a stack (recursion), while BFS uses a queue for traversal.",
    "Graph theory was invented by Euler solving the Seven Bridges problem.",
    "Trees are graphs with exactly V-1 edges, where V is vertices.",
];

const REACTION_MESSAGES = [
    "Ouch! That hurt!",
    "Hey! Don't beat me!",
    "Stop poking me!",
    "I'm sensitive you know!",
    "Gentle please!",
    "Why so aggressive?!",
    "That tickles... NOT!",
    "I said GENTLE!",
    "I'm a delicate lizard!",
    "Ow ow ow!",
];

const TEAM_APPRECIATIONS = [
    "These legends turned complex algorithms into art!",
    "The brilliant minds behind this optimization masterpiece!",
    "Give it up for the graph theory wizards!",
    "The team that made Prim proud!",
    "Absolute units of algorithmic excellence!",
];



export default function LizardAzarr() {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipMessage, setTooltipMessage] = useState('');
    const [tooltipType, setTooltipType] = useState<'welcome' | 'fact' | 'hurt' | 'team'>('welcome');
    const [isBlinking, setIsBlinking] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isAtTeam, setIsAtTeam] = useState(false);
    const [isThinking, setIsThinking] = useState(false);

    const containerRef = useRef<HTMLDivElement>(null);
    const lastClickTime = useRef(0);
    const clickTimeout = useRef<NodeJS.Timeout | null>(null);
    const hasShownWelcome = useRef(false);
    const hasShownTeamAppreciation = useRef(false);

    // Smooth eye tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 80, damping: 20, mass: 0.5 };
    const eyeX = useSpring(mouseX, springConfig);
    const eyeY = useSpring(mouseY, springConfig);

    const pupilX = useTransform(eyeX, [-300, 300], [-5, 5]);
    const pupilY = useTransform(eyeY, [-300, 300], [-4, 4]);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            mouseX.set(e.clientX - (rect.left + rect.width / 2));
            mouseY.set(e.clientY - (rect.top + rect.height / 2));
        };

        const handleMouseLeave = () => {
            mouseX.set(0);
            mouseY.set(0);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mouseX, mouseY]);

    // Natural blinking
    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 100);
        }, 2800 + Math.random() * 2500);
        return () => clearInterval(interval);
    }, []);

    // Welcome message
    useEffect(() => {
        if (hasShownWelcome.current) return;
        hasShownWelcome.current = true;

        const timer = setTimeout(() => {
            setTooltipMessage("Hey there! I'm LizardAzarr, your algorithm buddy! Click me for cool facts!");
            setTooltipType('welcome');
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 6000);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Detect team section
    useEffect(() => {
        // Small delay to ensure DOM is ready
        const timeout = setTimeout(() => {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsAtTeam(true);
                            if (!hasShownTeamAppreciation.current) {
                                hasShownTeamAppreciation.current = true;
                                const appreciation = TEAM_APPRECIATIONS[Math.floor(Math.random() * TEAM_APPRECIATIONS.length)];
                                setTooltipMessage(appreciation);
                                setTooltipType('team');
                                setShowTooltip(true);
                                setTimeout(() => setShowTooltip(false), 7000);
                            }
                        } else {
                            setIsAtTeam(false);
                        }
                    });
                },
                { threshold: 0.1, rootMargin: '0px' }
            );

            const teamSection = document.getElementById('team');
            if (teamSection) {
                observer.observe(teamSection);
            }

            return () => observer.disconnect();
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    // Detect code/theory sections for thinking state
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isInCodeSection = entries.some((entry) => entry.isIntersecting);
                setIsThinking(isInCodeSection);
            },
            { threshold: 0.3 }
        );

        const codeSections = ['prims', 'implementation', 'algorithms', 'breakthrough'];
        codeSections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = () => {
        const now = Date.now();
        const timeSinceLastClick = now - lastClickTime.current;

        if (timeSinceLastClick < 350 && timeSinceLastClick > 0) {
            // Double click - show hurt reaction
            if (clickTimeout.current) clearTimeout(clickTimeout.current);

            const reaction = REACTION_MESSAGES[Math.floor(Math.random() * REACTION_MESSAGES.length)];
            setTooltipMessage(reaction);
            setTooltipType('hurt');
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 3000);
            lastClickTime.current = 0;
        } else {
            lastClickTime.current = now;

            clickTimeout.current = setTimeout(() => {
                if (isAtTeam) {
                    const messages = [
                        "Sarosh: The mastermind orchestrating this whole operation!",
                        "Shrihari: Graph theory genius with impeccable logic!",
                        "Sudhanva: Algorithm optimization extraordinaire!",
                        "Abhishek: The code architect who makes it all work!",
                        "This team is literally 10/10, no cap!",
                    ];
                    setTooltipMessage(messages[Math.floor(Math.random() * messages.length)]);
                    setTooltipType('team');
                } else {
                    setTooltipMessage(ALGORITHM_FACTS[Math.floor(Math.random() * ALGORITHM_FACTS.length)]);
                    setTooltipType('fact');
                }
                setShowTooltip(true);
                setTimeout(() => setShowTooltip(false), 7000);
            }, 350);
        }
    };

    // Get tooltip styles based on type
    const getTooltipStyles = () => {
        switch (tooltipType) {
            case 'hurt':
                return {
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.25) 0%, rgba(185, 28, 28, 0.2) 100%)',
                    border: '1px solid rgba(239, 68, 68, 0.6)',
                    boxShadow: '0 0 30px rgba(239, 68, 68, 0.4), 0 8px 32px rgba(0, 0, 0, 0.4)',
                    color: '#fecaca',
                };
            case 'team':
                return {
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)',
                    border: '1px solid rgba(168, 85, 247, 0.6)',
                    boxShadow: '0 0 30px rgba(168, 85, 247, 0.4), 0 8px 32px rgba(0, 0, 0, 0.4)',
                    color: '#e9d5ff',
                };
            case 'welcome':
                return {
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.25) 0%, rgba(22, 163, 74, 0.2) 100%)',
                    border: '1px solid rgba(34, 197, 94, 0.6)',
                    boxShadow: '0 0 30px rgba(34, 197, 94, 0.4), 0 8px 32px rgba(0, 0, 0, 0.4)',
                    color: '#bbf7d0',
                };
            default:
                return {
                    background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.25) 0%, rgba(6, 182, 212, 0.2) 100%)',
                    border: '1px solid rgba(34, 211, 238, 0.6)',
                    boxShadow: '0 0 30px rgba(34, 211, 238, 0.4), 0 8px 32px rgba(0, 0, 0, 0.4)',
                    color: '#cffafe',
                };
        }
    };

    const tooltipStyles = getTooltipStyles();

    return (
        <motion.div
            ref={containerRef}
            className="fixed top-16 left-4 z-50 cursor-pointer select-none"
            onClick={handleClick}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            drag
            dragConstraints={{ left: 0, right: typeof window !== 'undefined' ? window.innerWidth - 100 : 1000, top: 0, bottom: typeof window !== 'undefined' ? window.innerHeight - 100 : 800 }}
            dragElastic={0.08}
        >
            {/* Tooltip */}
            {showTooltip && (
                <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.9 }}
                    className="absolute left-[90px] top-1/2 -translate-y-1/2 px-5 py-4 rounded-2xl min-w-[220px] max-w-[300px]"
                    style={{
                        ...tooltipStyles,
                        backdropFilter: 'blur(20px)',
                    }}
                >
                    <p className="text-sm font-medium leading-relaxed" style={{ color: tooltipStyles.color }}>
                        {tooltipMessage}
                    </p>
                    <div
                        className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2"
                        style={{
                            width: 0,
                            height: 0,
                            borderTop: '8px solid transparent',
                            borderBottom: '8px solid transparent',
                            borderRight: `8px solid ${tooltipStyles.border.split(' ')[2]}`,
                        }}
                    />
                </motion.div>
            )}

            {/* AI Companion */}
            <svg width="80" height="80" viewBox="0 0 80 80" className="overflow-visible">
                <defs>
                    <radialGradient id="faceGrad" cx="35%" cy="30%" r="65%">
                        <stop offset="0%" stopColor={tooltipType === 'hurt' ? "#5c1a1a" : isAtTeam ? "#3b1a5e" : "#1a3a5c"} />
                        <stop offset="60%" stopColor={tooltipType === 'hurt' ? "#3a0f0f" : isAtTeam ? "#1f0f3a" : "#0f2744"} />
                        <stop offset="100%" stopColor={tooltipType === 'hurt' ? "#200707" : isAtTeam ? "#0f0720" : "#081828"} />
                    </radialGradient>
                    <radialGradient id="eyeGlowGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor={tooltipType === 'hurt' ? "#ef4444" : isAtTeam ? "#a855f7" : "#22d3ee"} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={tooltipType === 'hurt' ? "#ef4444" : isAtTeam ? "#a855f7" : "#22d3ee"} stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Ambient glow */}
                <motion.circle
                    cx="40" cy="40" r="42"
                    fill="none"
                    stroke={tooltipType === 'hurt' ? "rgba(239, 68, 68, 0.3)" : isAtTeam ? "rgba(168, 85, 247, 0.2)" : "rgba(34, 211, 238, 0.15)"}
                    strokeWidth="1.5"
                    animate={{ r: isHovered ? 44 : 42, opacity: [0.5, 0.8, 0.5] }}
                    transition={{ r: { duration: 0.2 }, opacity: { duration: 2, repeat: Infinity } }}
                />

                {/* Main face */}
                <circle cx="40" cy="40" r="36" fill="url(#faceGrad)" />
                <circle cx="40" cy="40" r="35" fill="none" stroke={tooltipType === 'hurt' ? "rgba(239, 68, 68, 0.3)" : isAtTeam ? "rgba(168, 85, 247, 0.25)" : "rgba(34, 211, 238, 0.15)"} strokeWidth="1" />
                <ellipse cx="32" cy="20" rx="14" ry="8" fill="rgba(255, 255, 255, 0.06)" />

                {/* LEFT EYE */}
                <g>
                    <ellipse cx="28" cy="36" rx="10" ry={isBlinking ? 1.5 : 10} fill="#e8f4f8" style={{ transition: 'ry 80ms ease' }} />
                    <motion.ellipse cx="28" cy="36" rx="6" ry={isBlinking ? 0.8 : 6} fill={tooltipType === 'hurt' ? "#ef4444" : isAtTeam ? "#a855f7" : "#0891b2"} style={{ x: pupilX, y: pupilY, transition: 'ry 80ms ease' }} />
                    <motion.ellipse cx="28" cy="36" rx="3" ry={isBlinking ? 0.4 : 3} fill="#0a192f" style={{ x: pupilX, y: pupilY, transition: 'ry 80ms ease' }} />
                    {!isBlinking && <motion.circle cx="31" cy="33" r="2" fill="rgba(255, 255, 255, 0.9)" style={{ x: pupilX, y: pupilY }} />}
                    <ellipse cx="28" cy="36" rx="12" ry="12" fill="url(#eyeGlowGrad)" />
                </g>

                {/* RIGHT EYE */}
                <g>
                    <ellipse cx="52" cy="36" rx="10" ry={isBlinking ? 1.5 : 10} fill="#e8f4f8" style={{ transition: 'ry 80ms ease' }} />
                    <motion.ellipse cx="52" cy="36" rx="6" ry={isBlinking ? 0.8 : 6} fill={tooltipType === 'hurt' ? "#ef4444" : isAtTeam ? "#a855f7" : "#0891b2"} style={{ x: pupilX, y: pupilY, transition: 'ry 80ms ease' }} />
                    <motion.ellipse cx="52" cy="36" rx="3" ry={isBlinking ? 0.4 : 3} fill="#0a192f" style={{ x: pupilX, y: pupilY, transition: 'ry 80ms ease' }} />
                    {!isBlinking && <motion.circle cx="55" cy="33" r="2" fill="rgba(255, 255, 255, 0.9)" style={{ x: pupilX, y: pupilY }} />}
                    <ellipse cx="52" cy="36" rx="12" ry="12" fill="url(#eyeGlowGrad)" />
                </g>

                {/* MOUTH */}
                <g>
                    {tooltipType === 'hurt' ? (
                        // Sad mouth when hurt
                        <path d="M 30 58 Q 40 52 50 58" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="2" strokeLinecap="round" />
                    ) : (
                        // Happy smile with teeth
                        <>
                            <path d="M 28 54 Q 40 64 52 54" fill="none" stroke="#0a192f" strokeWidth="4" strokeLinecap="round" />
                            <path d="M 30 54 Q 40 60 50 54" fill="rgba(255, 255, 255, 0.95)" stroke="none" />
                            <path d="M 28 54 Q 40 62 52 54" fill="none" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" strokeLinecap="round" />
                            <line x1="36" y1="54" x2="36" y2="57" stroke="rgba(200, 220, 230, 0.3)" strokeWidth="0.5" />
                            <line x1="40" y1="54" x2="40" y2="58" stroke="rgba(200, 220, 230, 0.3)" strokeWidth="0.5" />
                            <line x1="44" y1="54" x2="44" y2="57" stroke="rgba(200, 220, 230, 0.3)" strokeWidth="0.5" />
                        </>
                    )}
                </g>

                {/* Side accents */}
                <motion.circle cx="12" cy="40" r="2" fill={isAtTeam ? "rgba(168, 85, 247, 0.4)" : "rgba(34, 211, 238, 0.3)"} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }} />
                <motion.circle cx="68" cy="40" r="2" fill={isAtTeam ? "rgba(168, 85, 247, 0.4)" : "rgba(34, 211, 238, 0.3)"} animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1.2 }} />

                {/* Thinking question marks */}
                {isThinking && !isAtTeam && (
                    <>
                        <motion.text
                            x="65"
                            y="10"
                            fontSize="14"
                            fontWeight="bold"
                            fill="#22d3ee"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: [0.4, 1, 0.4], y: [5, -2, 5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            ?
                        </motion.text>
                        <motion.text
                            x="72"
                            y="25"
                            fontSize="10"
                            fontWeight="bold"
                            fill="#a855f7"
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: [0.3, 0.8, 0.3], y: [3, -3, 3] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        >
                            ?
                        </motion.text>
                        <motion.text
                            x="0"
                            y="15"
                            fontSize="12"
                            fontWeight="bold"
                            fill="#06b6d4"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: [0.3, 0.9, 0.3], y: [4, -2, 4] }}
                            transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }}
                        >
                            ?
                        </motion.text>
                    </>
                )}
            </svg>
        </motion.div>
    );
}
