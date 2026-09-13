import Link from "next/link";

export default function PlanPage() {
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
          <Link href="/sites" className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-all">Sites</Link>
          <Link href="/plan" className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold transition-all">Plan a visit</Link>
          <Link href="/story" className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-all">The story</Link>
        </div>
      </nav>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold tracking-wider uppercase mb-3">
            Travel Guide & Itinerary
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Planning Your Journey to Pangasinan</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about getting around, seasonal weather patterns, and recommended multi-day itineraries for an unforgettable northern getaway.
          </p>
        </div>

        {/* Grid Cards for Planning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-emerald-100 p-8 rounded-3xl shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">🚌</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Getting There & Around</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pangasinan is roughly a 3 to 4-hour drive from Metro Manila via the North Luzon Expressway (NLEX) and Tarlac–Pangasinan–La Union Expressway (TPLEX). Regular air-conditioned buses (Victory Liner, Five Star) operate 24/7 to Dagupan, Alaminos, and Bolinao. Tricycles and local jeeps provide easy town-to-town transit.
            </p>
          </div>

          <div className="bg-white border border-emerald-100 p-8 rounded-3xl shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-4">☀️</div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Best Time to Visit</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The ideal window for island hopping and beach excursions runs from **November to May** during the dry season. If you wish to witness major religious events, plan your trip during Holy Week or coordinate with local festivals like the *Bangus Festival* in April.
            </p>
          </div>
        </div>

        {/* Suggested 3-Day Itinerary Box */}
        <div className="bg-white border border-emerald-100 p-8 rounded-3xl shadow-sm mb-12">
          <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
            Suggested 3-Day Highlights Itinerary
          </h3>
          <div className="space-y-6 text-xs">
            <div className="border-l-2 border-emerald-500 pl-4 space-y-1">
              <span className="font-bold text-emerald-800 uppercase tracking-wide">Day 1: Western Coast & History</span>
              <p className="text-slate-600 leading-relaxed">Explore the historic Cape Bolinao Lighthouse, relax on the pristine white sands of Patar Beach, and visit the ancient coral-stone St. James the Great Parish Church.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4 space-y-1">
              <span className="font-bold text-emerald-800 uppercase tracking-wide">Day 2: Island Adventures</span>
              <p className="text-slate-600 leading-relaxed">Head to Alaminos City for a full day of island hopping across the Hundred Islands National Park (Governor&apos;s Island, Quezon Island, and Children&apos;s Island). Enjoy snorkeling, kayaking, and panoramic viewpoints.</p>
            </div>
            <div className="border-l-2 border-emerald-500 pl-4 space-y-1">
              <span className="font-bold text-emerald-800 uppercase tracking-wide">Day 3: Spiritual Devotion & Culture</span>
              <p className="text-slate-600 leading-relaxed">Make a pilgrimage to the Minor Basilica of Our Lady of Manaoag, taste authentic Calasiao puto, and shop for local sea salt and bagoong in Lingayen.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-xs font-semibold shadow-md transition-colors">
            Back to Destinations Home
          </Link>
        </div>
      </div>
    </main>
  );
}