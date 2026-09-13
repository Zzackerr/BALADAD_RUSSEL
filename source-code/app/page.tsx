"use client";
import Link from "next/link";
import { useState } from "react";
import { pangasinanCategories } from "@/app/data/pangasinanData";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = pangasinanCategories.find(cat => cat.id === activeTab);
  const displayedItems = activeTab === "all"
    ? pangasinanCategories.flatMap(cat => cat.items)
    : (activeCategory ? activeCategory.items : []);

  const filteredItems = displayedItems.filter(item => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      item.title.toLowerCase().includes(query) ||
      item.location.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans relative overflow-hidden">
      {/* Ambient Background Glows (Adds modern depth so it's not boring grey) */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Navigation Bar */}
      <nav className="w-full px-8 py-5 flex justify-between items-center border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center gap-2 group py-1 cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-xs text-slate-950 font-bold shadow-md shadow-emerald-500/20">✦</div>
          <span className="font-semibold text-sm tracking-wide text-slate-100 group-hover:text-emerald-400 transition-colors">Pangasinan Heritage</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-xs font-medium">
          <Link href="/" className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 cursor-pointer">Home</Link>
          <Link href="/sites" className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 transition-all cursor-pointer">Sites</Link>
          <Link href="/plan" className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 transition-all cursor-pointer">Plan a visit</Link>
          <Link href="/story" className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-800/60 transition-all cursor-pointer">The story</Link>
        </div>
      </nav>

      {/* Hero & Search Section */}
      <section className="px-6 pt-16 pb-10 text-center max-w-3xl mx-auto flex flex-col items-center w-full relative z-10">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 mb-3 font-semibold">
          <span>—</span> Featured destinations <span>—</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-8">Where to go in Pangasinan</h1>

        {/* Search Bar */}
        <div className="w-full max-w-xl bg-slate-800/80 border border-slate-700/80 rounded-full p-1.5 flex items-center shadow-lg backdrop-blur-sm focus-within:border-emerald-500 transition-all">
          <div className="pl-4 text-emerald-400">🔍</div>
          <input
            type="text"
            placeholder="Search town, landmark, or feature..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          {searchQuery && (
            <button 
              type="button" 
              onClick={() => setSearchQuery("")} 
              className="text-xs text-slate-400 hover:text-slate-200 px-3 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-8 relative z-20">
          <button 
            type="button" 
            onClick={() => setActiveTab("all")} 
            className={`px-5 py-2 rounded-full text-xs font-medium cursor-pointer transition-all ${
              activeTab === "all" 
                ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20" 
                : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700"
            }`}
          >
            All
          </button>
          
          {pangasinanCategories.map((cat) => (
            <button 
              key={cat.id} 
              type="button" 
              onClick={() => setActiveTab(cat.id)} 
              className={`px-5 py-2 rounded-full text-xs font-medium cursor-pointer transition-all ${
                activeTab === cat.id 
                  ? "bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20" 
                  : "bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="px-6 pb-24 max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-slate-800/50 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col group backdrop-blur-sm">
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img src={item.image} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">{item.location}</span>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">{item.description}</p>
                <div className="mt-auto">
                  <Link href="/sites" className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer">
                    Explore <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-slate-800/50 border border-slate-700/60 rounded-3xl max-w-md mx-auto shadow-sm backdrop-blur-sm">
            <p className="text-slate-300 text-sm font-medium mb-2">No matching items found</p>
            <p className="text-slate-500 text-xs mb-6">Try clearing your search query or choosing another category.</p>
            <button 
              type="button"
              onClick={() => { setSearchQuery(""); setActiveTab("all"); }}
              className="bg-emerald-500 text-slate-950 px-5 py-2 rounded-full text-xs font-bold hover:bg-emerald-400 transition-colors cursor-pointer shadow-lg shadow-emerald-500/20"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}