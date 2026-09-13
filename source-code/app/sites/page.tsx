import Link from "next/link";
import { pangasinanCategories } from "@/app/data/pangasinanData";

export default function SitesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Top Navigation */}
      <nav className="w-full px-8 py-5 flex justify-between items-center border-b border-emerald-100 bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center gap-2 group py-1">
          <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-xs text-white font-bold shadow-sm">✦</div>
          <span className="font-semibold text-sm tracking-wide text-emerald-900">Pangasinan Heritage</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-xs font-medium">
          <Link href="/" className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-all">Home</Link>
          <Link href="/sites" className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold transition-all">Sites</Link>
          <Link href="/plan" className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-all">Plan a visit</Link>
          <Link href="/story" className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-all">The story</Link>
        </div>
      </nav>

      {/* Header Section */}
      <header className="max-w-7xl mx-auto px-6 pt-16 pb-12 w-full text-center md:text-left">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold tracking-wider uppercase mb-3">
          Comprehensive Directory
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-3">Explore All Heritage & Nature Sites</h1>
        <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
          From the emerald cluster of the Hundred Islands to centuries-old coral-stone architecture, discover the sacred sanctuaries, pristine beaches, and historical landmarks that define Pangasinan.
        </p>
      </header>

      {/* Categorized Landmark Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-24 w-full space-y-16">
        {pangasinanCategories.map((cat) => (
          <section key={cat.id} className="space-y-6">
            <div className="border-b border-emerald-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                {cat.name}
              </h2>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                {cat.items.length} Destinations
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.items.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-emerald-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-emerald-800 uppercase tracking-wider shadow-sm">
                      {item.location}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-emerald-700 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Discover location <span>→</span>
                      </span>
                      <span className="text-slate-400 font-medium">Pangasinan</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}