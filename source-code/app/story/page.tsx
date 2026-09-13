import Link from "next/link";

export default function StoryPage() {
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
          <Link href="/plan" className="px-3 py-1.5 rounded-lg text-slate-600 hover:text-emerald-700 hover:bg-slate-100 transition-all">Plan a visit</Link>
          <Link href="/story" className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 font-bold transition-all">The story</Link>
        </div>
      </nav>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-semibold tracking-wider uppercase mb-3">
            Heritage & Lore
          </div>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">The Chronicle & Soul of Pangasinan</h1>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Uncovering centuries of salt-making traditions, pre-Hispanic kingdoms, and the enduring maritime identity of Lingayen Gulf.
          </p>
        </div>

        {/* Narrative Blocks */}
        <div className="space-y-8 mb-16">
          <div className="bg-white border border-emerald-100 p-8 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              Origin of the Name: The Land of Salt
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              The word *Pangasinan* literally means **&quot;land of salt&quot;** or **&quot;where salt is made.&quot;** Long before Spanish colonization, the coastal inhabitants thrived on evaporating sea salt in vast shallow beds along the Lingayen Gulf. This precious commodity became a primary currency and trade item exported across Southeast Asian kingdoms, shaping the economy and lifestyle of the early settlers.
            </p>
          </div>

          <div className="bg-white border border-emerald-100 p-8 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              Pre-Spanish Kingdom & Maritime Trade
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Historical records indicate that an ancient polity known as **Luyag na Caboloan** flourished in the region. Mentioned in early Chinese trade chronicles under the name *Feng-chia-hsi-lan*, the kingdom maintained active commercial ties with Ming dynasty merchants, trading local products like gold, beeswax, and cotton for porcelain, silk, and metalware.
            </p>
          </div>

          <div className="bg-white border border-emerald-100 p-8 rounded-3xl shadow-sm">
            <h3 className="text-lg font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              Colonial Era Architecture & Devotion
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              With the arrival of Augustinian and Dominican missionaries in the late 16th century, magnificent coral-stone fortresses of faith were erected. Structures like the St. James the Great Church in Bolinao and the spiritual sanctuary of the Minor Basilica of Our Lady of Manaoag stand today as enduring symbols of the province&apos;s deep spiritual devotion and resilient architectural heritage.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full text-xs font-semibold shadow-md transition-colors">
            Explore Destinations
          </Link>
        </div>
      </div>
    </main>
  );
}