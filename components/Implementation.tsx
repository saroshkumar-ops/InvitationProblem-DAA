'use client';

import { motion } from 'framer-motion';

export default function Implementation() {
    return (
        <section id="implementation" className="relative py-32 bg-bg-primary overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-bg-secondary to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-accent mb-6">
                        Code Implementation
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        <span className="gradient-text">The Solution</span>
                    </h2>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Prim's Algorithm in C++ with visualization of the computed solution
                    </p>
                </motion.div>

                {/* Code + Visualization Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Code Block */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-lg opacity-20" />
                        <div className="relative rounded-2xl bg-bg-secondary border border-border-subtle overflow-hidden">
                            {/* File Header */}
                            <div className="flex items-center justify-between px-6 py-4 bg-bg-card border-b border-border-subtle">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <span className="text-sm text-text-tertiary font-mono">prims_mst.cpp</span>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="text-xs px-3 py-1 rounded-lg bg-primary/20 text-primary hover:bg-primary/30 transition"
                                >
                                    Copy
                                </motion.button>
                            </div>

                            {/* Code */}
                            <pre className="p-6 overflow-x-auto text-xs leading-relaxed max-h-[600px]">
                                <code className="text-text-secondary">
                                    <span className="text-primary">#include</span> <span className="text-accent">&lt;bits/stdc++.h&gt;</span>{"\n"}
                                    <span className="text-primary">using namespace</span> std;{"\n\n"}
                                    <span className="text-primary">typedef</span> <span className="text-secondary">pair</span>&lt;<span className="text-secondary">int</span>, <span className="text-secondary">int</span>&gt; pii;{"\n\n"}
                                    <span className="text-primary">vector</span>&lt;<span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt;&gt; buildMST(<span className="text-secondary">int</span> n, <span className="text-primary">vector</span>&lt;<span className="text-primary">vector</span>&lt;pii&gt;&gt;&amp; graph) {"{"}{"\n"}
                                    {"    "}<span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt; key(n, INT_MAX);{"\n"}
                                    {"    "}<span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt; parent(n, <span className="text-accent">-1</span>);{"\n"}
                                    {"    "}<span className="text-primary">vector</span>&lt;<span className="text-secondary">bool</span>&gt; inMST(n, <span className="text-accent">false</span>);{"\n\n"}
                                    {"    "}<span className="text-primary">priority_queue</span>&lt;pii, <span className="text-primary">vector</span>&lt;pii&gt;, greater&lt;pii&gt;&gt; pq;{"\n\n"}
                                    {"    "}key[<span className="text-accent">0</span>] = <span className="text-accent">0</span>;{"\n"}
                                    {"    "}pq.push({"{"}<span className="text-accent">0</span>, <span className="text-accent">0</span>{"}"});{"\n\n"}
                                    {"    "}<span className="text-primary">while</span> (!pq.empty()) {"{"}{"\n"}
                                    {"        "}<span className="text-secondary">int</span> u = pq.top().second;{"\n"}
                                    {"        "}pq.pop();{"\n\n"}
                                    {"        "}<span className="text-primary">if</span> (inMST[u]) <span className="text-primary">continue</span>;{"\n"}
                                    {"        "}inMST[u] = <span className="text-accent">true</span>;{"\n\n"}
                                    {"        "}<span className="text-primary">for</span> (<span className="text-primary">auto</span> [w, v] : graph[u]) {"{"}{"\n"}
                                    {"            "}<span className="text-primary">if</span> (!inMST[v] && w &lt; key[v]) {"{"}{"\n"}
                                    {"                "}key[v] = w;{"\n"}
                                    {"                "}parent[v] = u;{"\n"}
                                    {"                "}pq.push({"{"}w, v{"}"});{"\n"}
                                    {"            "}{"}"}{"\n"}
                                    {"        "}{"}"}{"\n"}
                                    {"    "}{"}"}{"\n\n"}
                                    {"    "}<span className="text-primary">vector</span>&lt;<span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt;&gt; mst(n);{"\n"}
                                    {"    "}<span className="text-primary">for</span> (<span className="text-secondary">int</span> i = <span className="text-accent">1</span>; i &lt; n; i++) {"{"}{"\n"}
                                    {"        "}mst[parent[i]].push_back(i);{"\n"}
                                    {"        "}mst[i].push_back(parent[i]);{"\n"}
                                    {"    "}{"}"}{"\n\n"}
                                    {"    "}<span className="text-primary">return</span> mst;{"\n"}
                                    {"}"}{"\n\n"}
                                    <span className="text-primary">void</span> dfs(<span className="text-secondary">int</span> u, <span className="text-secondary">int</span> parent, <span className="text-primary">vector</span>&lt;<span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt;&gt;&amp; mst, <span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt;&amp; path) {"{"}{"\n"}
                                    {"    "}path.push_back(u);{"\n"}
                                    {"    "}<span className="text-primary">for</span> (<span className="text-secondary">int</span> v : mst[u]) {"{"}{"\n"}
                                    {"        "}<span className="text-primary">if</span> (v != parent) {"{"}{"\n"}
                                    {"            "}dfs(v, u, mst, path);{"\n"}
                                    {"            "}path.push_back(u);{"\n"}
                                    {"        "}{"}"}{"\n"}
                                    {"    "}{"}"}{"\n"}
                                    {"}"}{"\n\n"}
                                    <span className="text-secondary">int</span> main() {"{"}{"\n"}
                                    {"    "}<span className="text-secondary">int</span> n = <span className="text-accent">11</span>;{"\n\n"}
                                    {"    "}<span className="text-primary">vector</span>&lt;<span className="text-primary">vector</span>&lt;pii&gt;&gt; graph(n);{"\n\n"}
                                    {"    "}graph[<span className="text-accent">0</span>].push_back({"{"}<span className="text-accent">4</span>, <span className="text-accent">1</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">1</span>].push_back({"{"}<span className="text-accent">4</span>, <span className="text-accent">0</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">0</span>].push_back({"{"}<span className="text-accent">6</span>, <span className="text-accent">2</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">2</span>].push_back({"{"}<span className="text-accent">6</span>, <span className="text-accent">0</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">1</span>].push_back({"{"}<span className="text-accent">3</span>, <span className="text-accent">3</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">3</span>].push_back({"{"}<span className="text-accent">3</span>, <span className="text-accent">1</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">2</span>].push_back({"{"}<span className="text-accent">5</span>, <span className="text-accent">3</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">3</span>].push_back({"{"}<span className="text-accent">5</span>, <span className="text-accent">2</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">3</span>].push_back({"{"}<span className="text-accent">2</span>, <span className="text-accent">4</span>{"}"});{"\n"}
                                    {"    "}graph[<span className="text-accent">4</span>].push_back({"{"}<span className="text-accent">2</span>, <span className="text-accent">3</span>{"}"});{"\n\n"}
                                    {"    "}<span className="text-primary">vector</span>&lt;<span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt;&gt; mst = buildMST(n, graph);{"\n\n"}
                                    {"    "}<span className="text-primary">vector</span>&lt;<span className="text-secondary">int</span>&gt; path;{"\n"}
                                    {"    "}dfs(<span className="text-accent">0</span>, <span className="text-accent">-1</span>, mst, path);{"\n\n"}
                                    {"    "}cout &lt;&lt; <span className="text-accent">"Optimal visiting order:\\n"</span>;{"\n"}
                                    {"    "}<span className="text-primary">for</span> (<span className="text-secondary">int</span> node : path){"\n"}
                                    {"        "}cout &lt;&lt; node &lt;&lt; <span className="text-accent">" "</span>;{"\n\n"}
                                    {"    "}<span className="text-primary">return</span> <span className="text-accent">0</span>;{"\n"}
                                    {"}"}
                                </code>
                            </pre>
                        </div>
                    </motion.div>

                    {/* Solution Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Execution Results */}
                        <div className="p-8 rounded-2xl glass border border-accent/20">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">✅</span>
                                <h3 className="text-xl font-bold">Execution Results</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 rounded-xl bg-bg-secondary/50">
                                    <span className="text-text-secondary">Total MST Cost</span>
                                    <span className="text-3xl font-bold text-accent">23</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-xl bg-bg-secondary/50">
                                    <span className="text-text-secondary">Nodes Connected</span>
                                    <span className="text-xl font-bold text-secondary">8 / 8</span>
                                </div>
                                <div className="flex justify-between items-center p-4 rounded-xl bg-bg-secondary/50">
                                    <span className="text-text-secondary">Time Complexity</span>
                                    <span className="text-lg font-mono text-primary">O(E log V)</span>
                                </div>
                            </div>
                        </div>

                        {/* MST Edges */}
                        <div className="p-8 rounded-2xl glass border border-primary/20">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-2xl">🌳</span>
                                <h3 className="text-xl font-bold">MST Edges</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                {[
                                    { from: 'KLE Tech', to: 'Lingaraj Nagar', cost: 3 },
                                    { from: 'Lingaraj Nagar', to: 'Keshwapur', cost: 5 },
                                    { from: 'Keshwapur', to: 'Raj Nagar', cost: 4 },
                                    { from: 'KLE Tech', to: 'Urban Oasis', cost: 6 },
                                    { from: 'KLE Tech', to: 'KIMS Hospital', cost: 5 },
                                    { from: 'KIMS Hospital', to: 'Vijay Nagar', cost: 6 },
                                    { from: 'Vijay Nagar', to: 'Deshpande Nagar', cost: 3 },
                                ].map((edge, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-center gap-2 p-3 rounded-lg bg-bg-secondary/50 text-xs"
                                    >
                                        <span className="text-primary font-semibold truncate">{edge.from}</span>
                                        <span className="text-text-tertiary">→</span>
                                        <span className="text-secondary font-semibold truncate">{edge.to}</span>
                                        <span className="ml-auto text-accent font-mono flex-shrink-0">{edge.cost}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Key Insight */}
                        <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                            <div className="flex items-start gap-4">
                                <span className="text-3xl">💡</span>
                                <div>
                                    <h4 className="font-bold mb-2">Algorithm Insight</h4>
                                    <p className="text-text-secondary text-sm">
                                        The priority queue ensures we always pick the minimum weight edge,
                                        guaranteeing the optimal MST construction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
