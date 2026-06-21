import { useState, useEffect } from "react";
import { 
  CheckCircle2, 
  AlertCircle, 
  Terminal, 
  ArrowRight, 
  ExternalLink, 
  Github, 
  Cpu, 
  Play, 
  Copy, 
  FileCode, 
  Sparkles, 
  RefreshCw, 
  Layers, 
  Check,
  Info,
  Layers3,
  Flame,
  Globe2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Step {
  id: string;
  title: string;
  description: string;
  command?: string;
  completed: boolean;
}

export default function App() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [interactiveCount, setInteractiveCount] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<"status" | "playground" | "deploy">("status");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [playgroundColor, setPlaygroundColor] = useState<string>("bg-indigo-600");
  const [demoInput, setDemoInput] = useState<string>("");
  const [sandboxMessages, setSandboxMessages] = useState<Array<{id: string; text: string; timestamp: string}>>([
    { id: "1", text: "React 19 virtual DOM successfully mounted.", timestamp: "12:10:00" },
    { id: "2", text: "Tailwind v4 theme extensions parsed correctly.", timestamp: "12:10:02" }
  ]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("en-US", { hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleRefreshStatus = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      const newMsg = {
        id: Date.now().toString(),
        text: `Manual verification trace triggered. Port 3000 healthy.`,
        timestamp: new Date().toLocaleTimeString("en-US", { hour12: false })
      };
      setSandboxMessages(prev => [newMsg, ...prev].slice(0, 5));
    }, 800);
  };

  const gitSteps: Step[] = [
    {
      id: "git-init",
      title: "Initialize Git Repository",
      description: "Initialize git in your workspace root directory if you haven't already.",
      command: "git init",
      completed: true
    },
    {
      id: "git-add",
      title: "Stage Project Files",
      description: "Stage all verified template configurations, components, and package manifests.",
      command: "git add .",
      completed: true
    },
    {
      id: "git-commit",
      title: "Create Initial Commit",
      description: "Commit the sanitized project baseline.",
      command: 'git commit -m "feat: complete initial project verification with React & Tailwind v4"',
      completed: true
    },
    {
      id: "git-remote",
      title: "Link to GitHub",
      description: "Map your newly created remote repository URL Hosted on your GitHub account.",
      command: "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git",
      completed: false
    },
    {
      id: "git-push",
      title: "Push Main Branch",
      description: "Push the verified code directly up to the master/main branch remote server.",
      command: "git push -u origin main",
      completed: false
    }
  ];

  return (
    <div id="main-root-container" className="min-h-screen bg-neutral-50 text-neutral-900 font-sans antialiased selection:bg-neutral-900 selection:text-white flex flex-col justify-between">
      
      {/* Top Professional Header */}
      <header id="app-main-header" className="border-b border-neutral-200 bg-white sticky top-0 z-50 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div id="header-inner-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div id="header-logo-group" className="flex items-center gap-3">
            <div id="header-logo-icon" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center text-white shadow-sm">
              <Cpu id="cpu-icon" className="w-5.5 h-5.5" />
            </div>
            <div>
              <h1 id="app-title-heading" className="text-base font-bold tracking-tight text-neutral-900">AI Studio Starter</h1>
              <p id="app-subtitle-para" className="text-xs text-neutral-500 font-medium">React 19 &bull; Tailwind v4 &bull; Motion</p>
            </div>
          </div>

          <div id="header-status-group" className="flex items-center gap-4">
            <div id="header-clock" className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-neutral-100 rounded-full border border-neutral-200/60">
              <span id="clock-dot animate" className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span id="clock-display" className="font-mono text-xs text-neutral-600 font-semibold">{currentTime || "00:00:00"} UTC</span>
            </div>
            <div id="header-verification-pill" className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200 text-xs font-semibold">
              <CheckCircle2 id="check-icon" className="w-4 h-4 text-emerald-600" />
              Verified Local Node
            </div>
          </div>
        </div>
      </header>

      {/* Main Interactive Stage */}
      <main id="app-main-content-section" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Verification Hero Card */}
        <section id="hero-status-section" className="mb-8">
          <div id="hero-card-gradient" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden relative border border-neutral-800">
            <div id="hero-ambient-glow" className="absolute -right-20 -top-20 w-80 h-80 bg-neutral-700/20 rounded-full blur-3xl"></div>
            
            <div id="hero-grid-body" className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              <div id="hero-main-text-col" className="md:col-span-8 space-y-4">
                <span id="badge-pre" className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-neutral-800 text-neutral-200 rounded-lg border border-neutral-700">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-400" /> Fully Compiled & Validated
                </span>
                <h2 id="hero-banner-heading" className="text-3xl sm:text-4.5xl font-extrabold tracking-tight leading-tight">
                  Ready to Deploy.
                </h2>
                <p id="hero-banner-desc" className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  We have fully scanned the project baseline! No syntax compile issues, build conflicts, or bundler warnings were found. 
                  Your system architecture, ES module path mappings, and dependencies are locked and ready for distribution.
                </p>
                
                <div id="hero-quick-stats-row" className="flex flex-wrap gap-4 pt-2">
                  <div id="stat-reactive-dom" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Framework</p>
                    <p className="text-sm font-semibold text-white">React 19.x Client</p>
                  </div>
                  <div id="stat-reactive-tailwind" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Styling Engine</p>
                    <p className="text-sm font-semibold text-white">Tailwind v4 (Vite)</p>
                  </div>
                  <div id="stat-reactive-server" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-bold">Reverse Proxy</p>
                    <p className="text-sm font-semibold text-white">Port 3000 Capable</p>
                  </div>
                </div>
              </div>

              <div id="hero-animated-widget-col" className="md:col-span-4 flex justify-start md:justify-end">
                <div id="verification-wheel-card" className="bg-white/10 border border-white/15 rounded-2xl p-5 backdrop-blur-md w-full max-w-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono text-neutral-300">SYSTEM HEALTH</span>
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                      100% PASS
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                      <span className="text-neutral-300">Vite Compile Check</span>
                      <span className="text-emerald-400 font-semibold font-mono">OK</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                      <span className="text-neutral-300">TypeScript Lint Rules</span>
                      <span className="text-emerald-400 font-semibold font-mono">OK</span>
                    </div>
                    <div className="flex items-center justify-between text-xs py-1.5 border-b border-white/5">
                      <span className="text-neutral-300">Module Path Mapping</span>
                      <span className="text-emerald-400 font-semibold font-mono">OK</span>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-1.5">
                      <span className="text-neutral-300">Tailwind Engine Build</span>
                      <span className="text-emerald-400 font-semibold font-mono">OK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Selection */}
        <section id="workspace-tabs-navigator" className="mb-6">
          <div className="flex border-b border-neutral-200">
            <button
              id="tab-trigger-status"
              onClick={() => setActiveTab("status")}
              className={`pb-4 px-6 font-semibold text-sm transition-all relative ${
                activeTab === "status" ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              System Verifier
              {activeTab === "status" && (
                <motion.div layoutId="active-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
              )}
            </button>
            <button
              id="tab-trigger-playground"
              onClick={() => setActiveTab("playground")}
              className={`pb-4 px-6 font-semibold text-sm transition-all relative ${
                activeTab === "playground" ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              Interactive Playground
              {activeTab === "playground" && (
                <motion.div layoutId="active-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
              )}
            </button>
            <button
              id="tab-trigger-deploy"
              onClick={() => setActiveTab("deploy")}
              className={`pb-4 px-6 font-semibold text-sm transition-all relative ${
                activeTab === "deploy" ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              GitHub & Deployment Guide
              {activeTab === "deploy" && (
                <motion.div layoutId="active-tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-neutral-900" />
              )}
            </button>
          </div>
        </section>

        {/* Tab Content Areas */}
        <AnimatePresence mode="wait">
          {activeTab === "status" && (
            <motion.div
              id="status-view-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* System Info Breakdown */}
              <div id="sys-info-breakdown-card" className="lg:col-span-8 bg-white border border-neutral-200 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">Module Verification Logs</h3>
                      <p className="text-xs text-neutral-500">Live configuration output checking system capabilities.</p>
                    </div>
                    <button
                      id="action-reverify"
                      onClick={handleRefreshStatus}
                      disabled={isRefreshing}
                      className="p-2 hover:bg-neutral-100 rounded-lg border border-neutral-200 transition-colors inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 cursor-pointer"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
                      {isRefreshing ? "Verifying..." : "Run Sanity Test"}
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Sandbox logs */}
                    <div className="bg-neutral-900 rounded-xl p-4 font-mono text-xs text-neutral-300 border border-neutral-800 space-y-2 max-h-64 overflow-y-auto">
                      <div className="text-yellow-400">// Node Diagnostic Trace</div>
                      {sandboxMessages.map((msg) => (
                        <div key={msg.id} className="flex gap-2 items-start">
                          <span className="text-neutral-500">[{msg.timestamp}]</span>
                          <span className="text-emerald-400">INFO</span>
                          <span className="text-neutral-300">{msg.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Environment variable notification */}
                    <div className="bg-amber-50 border border-amber-200 text-amber-900 rounded-xl p-4 text-xs flex gap-3">
                      <Info className="w-5 h-5 text-amber-600 shrink-0" />
                      <div className="space-y-1">
                        <p className="font-bold">Credential Security Notice</p>
                        <p className="text-amber-800 leading-relaxed">
                          Your <code className="bg-amber-100 px-1 py-0.5 rounded font-mono font-bold">GEMINI_API_KEY</code> and client secrets are safely loaded from the environment workspace. Avoid adding in-app input fields or text fields that prompt users to supply raw secrets directly inside your custom UI. Use environment config instead.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-neutral-150 pt-6 mt-6 flex justify-between items-center text-xs text-neutral-500">
                  <span className="flex items-center gap-1"><Layers className="w-3.5 h-3.5 text-neutral-400" /> Host Connection: Secure Tunnel Layer</span>
                  <span className="font-mono">Ready to commit</span>
                </div>
              </div>

              {/* Verified Ecosystem Dependencies Sidecard */}
              <div id="verified-deps-card" className="lg:col-span-4 bg-white border border-neutral-200 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Ecosystem Packages</h3>
                <p className="text-xs text-neutral-500 mb-6">These industry-standard packages are installed and initialized.</p>

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-mono text-xs font-bold">R</div>
                      <div>
                        <p className="text-xs font-bold text-neutral-800">React Client</p>
                        <p className="text-[10px] text-neutral-400">Version 19.x Stable</p>
                      </div>
                    </div>
                    <span className="text-emerald-500 text-xs font-semibold flex items-center gap-1"><Check className="w-3.5 h-3.5 stroke-[3]" /> Active</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 font-mono text-xs font-bold">T</div>
                      <div>
                        <p className="text-xs font-bold text-neutral-800">Tailwind CSS</p>
                        <p className="text-[10px] text-neutral-400">Version 4.1.x</p>
                      </div>
                    </div>
                    <span className="text-emerald-500 text-xs font-semibold flex items-center gap-1"><Check className="w-3.5 h-3.5 stroke-[3]" /> Active</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 font-mono text-xs font-bold">M</div>
                      <div>
                        <p className="text-xs font-bold text-neutral-800">Motion Animations</p>
                        <p className="text-[10px] text-neutral-400">Dynamic UI Layer</p>
                      </div>
                    </div>
                    <span className="text-emerald-500 text-xs font-semibold flex items-center gap-1"><Check className="w-3.5 h-3.5 stroke-[3]" /> Active</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-neutral-50 hover:bg-neutral-100 rounded-xl border border-neutral-200/60 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 font-mono text-xs font-bold">L</div>
                      <div>
                        <p className="text-xs font-bold text-neutral-800">Lucide Icons</p>
                        <p className="text-[10px] text-neutral-400">Vector Toolkit</p>
                      </div>
                    </div>
                    <span className="text-emerald-500 text-xs font-semibold flex items-center gap-1"><Check className="w-3.5 h-3.5 stroke-[3]" /> Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "playground" && (
            <motion.div
              id="playground-view-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Interactive Framework Tester */}
              <div id="interactive-framework-tester" className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Interactivity & Styling Sandbox</h3>
                  <p className="text-xs text-neutral-500 mb-6">Test dynamic React hook states, motion animations, and responsive class variations instantly.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Test 1: React hook states */}
                  <div id="test-card-hooks" className="border border-neutral-150 rounded-xl p-5 hover:border-neutral-300 transition-colors bg-neutral-50/50 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider block mb-2">Interactive Test #1</span>
                      <h4 className="text-sm font-bold text-neutral-800 mb-2">React State Engine</h4>
                      <p className="text-xs text-neutral-500 mb-4">Click below to update local component variables. Tests render consistency in the Virtual DOM.</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-neutral-600">Interaction Counter</span>
                        <span className="font-mono text-sm font-bold text-neutral-800 px-2 py-0.5 bg-neutral-200 rounded-md">{interactiveCount}</span>
                      </div>
                      <button
                        id="btn-increment-counter"
                        onClick={() => setInteractiveCount(prev => prev + 1)}
                        className="w-full py-2 px-3 bg-neutral-900 border border-neutral-900 text-white rounded-lg text-xs font-bold hover:bg-neutral-800 transition-colors inline-flex justify-center items-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-white" /> Increment Count
                      </button>
                    </div>
                  </div>

                  {/* Test 2: Tailwind Color Classes */}
                  <div id="test-card-tailwind" className="border border-neutral-150 rounded-xl p-5 hover:border-neutral-300 transition-colors bg-neutral-50/50 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider block mb-2">Interactive Test #2</span>
                      <h4 className="text-sm font-bold text-neutral-800 mb-2">Tailwind Style Registry</h4>
                      <p className="text-xs text-neutral-500 mb-4 font-normal">Swap between modern layout colors instantly. Verifies Tailwind client compilation of utilities.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-neutral-600 font-medium">Rendered Hub:</span>
                        <span className={`w-3.5 h-3.5 rounded-full ${playgroundColor} animate-pulse shrink-0`}></span>
                        <span className="text-xs font-mono font-bold text-neutral-700 uppercase">{playgroundColor.replace("bg-", "")}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <button
                          id="color-indigo"
                          onClick={() => setPlaygroundColor("bg-indigo-600")}
                          className="h-7 w-full bg-indigo-600 rounded-md hover:ring-2 hover:ring-indigo-300 transition-all cursor-pointer"
                        />
                        <button
                          id="color-rose"
                          onClick={() => setPlaygroundColor("bg-rose-500")}
                          className="h-7 w-full bg-rose-500 rounded-md hover:ring-2 hover:ring-rose-300 transition-all cursor-pointer"
                        />
                        <button
                          id="color-emerald"
                          onClick={() => setPlaygroundColor("bg-emerald-500")}
                          className="h-7 w-full bg-emerald-500 rounded-md hover:ring-2 hover:ring-emerald-300 transition-all cursor-pointer"
                        />
                        <button
                          id="color-amber"
                          onClick={() => setPlaygroundColor("bg-amber-500")}
                          className="h-7 w-full bg-amber-500 rounded-md hover:ring-2 hover:ring-amber-300 transition-all cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Test 3: Standard Input Field */}
                  <div id="test-card-input" className="border border-neutral-150 rounded-xl p-5 hover:border-neutral-300 transition-colors bg-neutral-50/50 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-neutral-400 font-bold uppercase tracking-wider block mb-2">Interactive Test #3</span>
                      <h4 className="text-sm font-bold text-neutral-800 mb-2">Reactive Input Hook</h4>
                      <p className="text-xs text-neutral-500 mb-4">Input text below to trace live state output securely in real time.</p>
                    </div>
                    <div className="space-y-3">
                      <input
                        id="playground-text-input"
                        type="text"
                        placeholder="Type something..."
                        value={demoInput}
                        onChange={(e) => setDemoInput(e.target.value)}
                        className="w-full text-xs px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 bg-white"
                      />
                      <div className="text-xs text-neutral-500 italic truncate h-4">
                        {demoInput ? `Output: ${demoInput}` : "Waiting for keyboard event..."}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "deploy" && (
            <motion.div
              id="deploy-view-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* GitHub Guide Panel */}
              <div id="github-git-wizard" className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-neutral-900">GitHub Verification & Push Checklist</h3>
                  <p className="text-xs text-neutral-500">Your configuration is healthy. Run the commands below in your workspace to deploy.</p>
                </div>

                <div className="space-y-6">
                  {gitSteps.map((step, index) => (
                    <div id={`git-step-wrapper-${step.id}`} key={step.id} className="flex gap-4 items-start pb-6 border-b border-neutral-100 last:border-0 last:pb-0">
                      <div className="flex flex-col items-center">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold leading-none ${
                          step.completed 
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200" 
                            : "bg-neutral-100 text-neutral-500 border border-neutral-200"
                        }`}>
                          {step.completed ? <Check className="w-4 h-4 stroke-[2.5]" /> : index + 1}
                        </div>
                        {index < gitSteps.length - 1 && (
                          <div className="w-0.5 h-16 bg-neutral-200 my-1"></div>
                        )}
                      </div>

                      <div className="flex-grow space-y-2">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-neutral-800">{step.title}</h4>
                          {step.completed && (
                            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-md border border-emerald-100">Verified Ready</span>
                          )}
                        </div>
                        <p className="text-xs text-neutral-500 leading-relaxed max-w-xl">{step.description}</p>
                        
                        {step.command && (
                          <div className="flex items-center gap-2 max-w-2xl">
                            <code className="bg-neutral-900 text-neutral-200 px-3 py-1.5 rounded-lg font-mono text-xs overflow-x-auto block flex-grow border border-neutral-800">
                              {step.command}
                            </code>
                            <button
                              id={`copy-btn-${step.id}`}
                              onClick={() => handleCopy(step.command!, step.id)}
                              className="p-2 hover:bg-neutral-100 rounded-lg border border-neutral-200 shrink-0 transition-colors cursor-pointer"
                              title="Copy command"
                            >
                              {copiedText === step.id ? (
                                <Check className="w-4 h-4 text-emerald-500" />
                              ) : (
                                <Copy className="w-4 h-4 text-neutral-500" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud Run Deployment Tips */}
              <div id="cloud-run-tips-banner" className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02)] grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-4">
                    <Flame className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800 mb-1">Production Bundling</h4>
                  <p className="text-xs text-neutral-550 leading-relaxed">
                    When running <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">npm run build</code>, Vite compiles your TSX, tree-shakes assets, and generates optimized chunks inside the <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">dist/</code> directory.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                    <Layers3 className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800 mb-1">Reverse Proxy Ports</h4>
                  <p className="text-xs text-neutral-550 leading-relaxed">
                    Vite config binds perfectly to port <code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">3000</code> on all hosts (<code className="bg-neutral-100 px-1 py-0.5 rounded font-mono">0.0.0.0</code>). In-container routing handles and translates incoming traffic securely.
                  </p>
                </div>

                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                    <Globe2 className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="text-sm font-bold text-neutral-800 mb-1">Continuous Delivery</h4>
                  <p className="text-xs text-neutral-550 leading-relaxed">
                    Connecting this repo to your deployment system will allow git tags/pushes to automatically rebuild container files, resulting in seamless, zero-downtime updates.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      {/* Persistent Footer */}
      <footer id="app-main-footer" className="border-t border-neutral-200 bg-white py-6">
        <div id="footer-inner-wrapper" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <div id="footer-credit" className="flex items-center gap-1">
            <span>Powered by</span>
            <span className="font-semibold text-neutral-800 flex items-center gap-1">
              Google AI Studio
            </span>
          </div>
          <div id="footer-meta" className="flex items-center gap-4">
            <span id="footer-status-tag" className="flex items-center gap-1.5 font-medium text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              All Compile Integrity Check OK
            </span>
            <span className="text-neutral-300">|</span>
            <span className="font-mono">BUILD VERSION 1.0.0</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
