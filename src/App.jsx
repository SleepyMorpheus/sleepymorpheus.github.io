import React, { useState, useEffect } from 'react';
import { 
  Map, 
  Train, 
  Clock, 
  Shield, 
  Skull, 
  Coins, 
  AlertTriangle, 
  Flag, 
  Mountain, 
  Users, 
  Menu, 
  X,
  ChevronDown
} from 'lucide-react';

const CantonShowdown = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('rules');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white font-bold text-lg">
              +
            </div>
            <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
              CANTON SHOWDOWN
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {['Mission', 'Economy', 'Rules', 'Strategy'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium hover:text-red-500 transition-colors ${scrolled ? 'text-slate-600' : 'text-slate-200'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4 md:hidden">
            {['Mission', 'Economy', 'Rules', 'Strategy'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left font-medium text-slate-700 py-2 border-b border-slate-50"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative bg-slate-900 text-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-wider">
            Swiss Edition
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            CONQUER THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
              26 CANTONS
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            3 Days. 2 Teams. 1 Home Base. <br/>
            Use your GA Travelcard to dominate the map before time runs out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => scrollToSection('mission')}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-1"
            >
              Start Briefing
            </button>
            <button 
              onClick={() => scrollToSection('economy')}
              className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-lg border border-slate-700 transition-all"
            >
              View Prices
            </button>
          </div>
        </div>
      </header>

      {/* The Mission / Basics */}
      <section id="mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Mission</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-red-600" />}
              title="2 Teams"
              desc="Red vs. Yellow. Total dominance is the only option."
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-red-600" />}
              title="3 Days"
              desc="08:00 to 22:00 daily. Endurance is key."
            />
            <FeatureCard 
              icon={<Map className="w-8 h-8 text-red-600" />}
              title="Base: Zürich HB"
              desc="Start and end every single day under the big clock."
            />
            <FeatureCard 
              icon={<Flag className="w-8 h-8 text-red-600" />}
              title="Goal: Territory"
              desc="Control the most Cantons when the final whistle blows."
            />
          </div>
        </div>
      </section>

      {/* Economy Section - Dark */}
      <section id="economy" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-slate-700 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">The Virtual Economy</h2>
              <p className="text-slate-400 text-lg">Budget: <span className="text-green-400 font-mono font-bold">150 vCHF</span> per team</p>
            </div>
            <div className="mt-4 md:mt-0 bg-red-900/30 border border-red-500/30 p-4 rounded-lg">
              <p className="text-red-400 font-bold text-sm uppercase flex items-center gap-2">
                <AlertTriangle size={16} /> Bankruptcy Risk
              </p>
              <p className="text-xs text-slate-300 mt-1">Hit 0 vCHF? You are banned from Tier 1 & 2 trains.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Costs */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-sm">-</span>
                Spending Money
              </h3>
              <div className="space-y-4">
                <CostRow 
                  tier="TIER 1" 
                  cost="20" 
                  title="High Speed" 
                  examples="IC, EC, ICE, TGV, RJ"
                  desc="Fastest way to the corners. Essential for Outer Rim."
                />
                <CostRow 
                  tier="TIER 2" 
                  cost="12" 
                  title="Fast Regional" 
                  examples="IR, RE, PE"
                  desc="The backbone of your strategy. Connects mid-sized hubs."
                />
                <CostRow 
                  tier="TIER 3" 
                  cost="5" 
                  title="Local" 
                  examples="S-Bahn, Regio, R"
                  desc="Slow, stops everywhere. Use for short hops."
                />
                <CostRow 
                  tier="TIER 4" 
                  cost="2" 
                  title="Last Mile" 
                  examples="Tram, Bus, Boat, PostAuto"
                  desc="Getting from station to specific challenge locations."
                />
              </div>
            </div>

            {/* Earnings */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm">+</span>
                Earning Money
              </h3>
              <div className="grid gap-4">
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Lock a Canton</h4>
                    <span className="text-green-400 font-mono font-bold text-xl">+20 vCHF</span>
                  </div>
                  <p className="text-slate-400 text-sm">Permanently secure territory by completing a challenge.</p>
                </div>
                
                <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">Steal a Canton</h4>
                    <span className="text-green-400 font-mono font-bold text-xl">+10 vCHF</span>
                  </div>
                  <p className="text-slate-400 text-sm">Take an unlocked Canton from the enemy team.</p>
                </div>
              </div>

              {/* Calculator Teaser */}
              <div className="mt-8 bg-slate-800/50 p-6 rounded-xl border border-dashed border-slate-600 text-center">
                <Coins className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                <p className="text-slate-300">Keep track of your budget carefully. <br/>Every transfer counts towards the limit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules & Mechanics */}
      <section id="rules" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Territory Mechanics</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">How to capture, hold, and steal the 26 Cantons.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Flag size={80} />
              </div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
              <h3 className="text-xl font-bold mb-3">Claiming</h3>
              <p className="text-slate-600 mb-4">You must physically step foot in the Canton.</p>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex gap-2"><span className="text-blue-500">✓</span> Exit train to platform</li>
                <li className="flex gap-2"><span className="text-red-500">✗</span> Passing through doesn't count</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Shield size={80} />
              </div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
              <h3 className="text-xl font-bold mb-3">Locking</h3>
              <p className="text-slate-600 mb-4">Secure it forever (+20 vCHF).</p>
              <ol className="text-sm text-slate-500 space-y-2 list-decimal list-inside">
                <li>Draw a random Challenge</li>
                <li><strong>Commit:</strong> One attempt only!</li>
                <li><strong>Success:</strong> Locked forever.</li>
                <li><strong>Fail:</strong> Remains Unlocked & vulnerable.</li>
              </ol>
            </div>

             {/* Step 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative overflow-hidden group hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Skull size={80} />
              </div>
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
              <h3 className="text-xl font-bold mb-3">Stealing</h3>
              <p className="text-slate-600 mb-4">Taking enemy territory.</p>
              <p className="text-sm text-slate-600 mb-4">
                If a Canton is claimed but <strong>not locked</strong>, the enemy can simply travel there and step off the train to steal it instantly.
              </p>
              <div className="inline-block bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                Reward: +10 vCHF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Schedule & Pumpkin Penalty */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-3xl font-bold text-white mb-6">The Daily Grind</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 p-2 rounded text-slate-900">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="text-green-400 font-bold text-lg">08:00 - Start</h4>
                      <p className="text-slate-400">Meet under the Big Clock at Zürich HB.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 p-2 rounded text-white">
                      <AlertTriangle size={24} />
                    </div>
                    <div>
                      <h4 className="text-red-400 font-bold text-lg">22:00 - Hard Stop</h4>
                      <p className="text-slate-400">You must be physically back at Zürich HB.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-600 p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-3xl">🎃</span> The Pumpkin Penalty
                  </h3>
                  <p className="text-white/90 font-medium mb-6">
                    Don't be late. It costs you time tomorrow.
                  </p>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
                    <p className="text-white font-bold text-lg mb-2">The Ratio: 1:2</p>
                    <p className="text-white/80 text-sm">
                      For every <strong>1 minute</strong> you are late, your team is banned from moving for <strong>2 minutes</strong> the next morning.
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/20 text-sm text-white/70 italic">
                      "Arrive at 22:15? You sit at HB until 08:30 tomorrow."
                    </div>
                  </div>
                </div>
                {/* Decoration */}
                <div className="absolute -bottom-10 -right-10 opacity-20 transform rotate-12">
                  <Clock size={200} className="text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Strategic Map</h2>
            <p className="text-slate-600">Balance easy wins with high-value targets.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-green-500">
              <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
                The Inner Circle
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase">Low Risk</span>
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                Zurich, Aargau, Schaffhausen, Thurgau, Zug, Schwyz.
              </p>
              <ul className="text-sm space-y-2 text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Cheap to access (Tier 2/3)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Easy to steal back and forth</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>Good for quick vCHF farming</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-500">
              <h3 className="text-xl font-bold mb-4 flex justify-between items-center">
                The Outer Rim
                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full uppercase">High Reward</span>
              </h3>
              <p className="text-slate-600 mb-4 text-sm">
                Geneva, Valais, Ticino, Graubünden.
              </p>
              <ul className="text-sm space-y-2 text-slate-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>Requires Tier 1 Trains (-20 vCHF)</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>High travel time commitment</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500"></div><strong>Priority:</strong> LOCK IMMEDIATELY</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-2 mb-6">
             <Mountain className="text-slate-600" />
          </div>
          <p className="mb-2">May the best scheduler win.</p>
          <p className="text-sm opacity-50">Remember to bring your charger.</p>
        </div>
      </footer>
    </div>
  );
};

// Helper Components

const FeatureCard = ({ icon, title, desc }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-slate-50 transition-colors">
    <div className="mb-4 bg-red-50 p-4 rounded-full">
      {icon}
    </div>
    <h3 className="font-bold text-lg mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const CostRow = ({ tier, cost, title, examples, desc }) => (
  <div className="bg-slate-800 rounded-lg p-4 flex items-center gap-4">
    <div className="bg-red-600 w-16 h-16 rounded flex flex-col items-center justify-center shrink-0">
      <span className="text-xs font-bold text-red-200">COST</span>
      <span className="text-xl font-bold text-white">{cost}</span>
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-baseline">
        <h4 className="font-bold text-white">{tier}: {title}</h4>
      </div>
      <p className="text-xs text-slate-400 font-mono mb-1">{examples}</p>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
  </div>
);

export default CantonShowdown;