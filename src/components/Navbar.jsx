import { Menu } from "lucide-react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 grid place-items-center text-white font-bold">M</div>
          <div className="text-sm leading-tight">
            <div className="font-semibold tracking-wide uppercase">Männer Coaching</div>
            <div className="text-xs text-gray-600">Schweiz</div>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <button onClick={() => scrollTo('programm')} className="hover:text-gray-900">Programm</button>
          <button onClick={() => scrollTo('prozess')} className="hover:text-gray-900">Ablauf</button>
          <button onClick={() => scrollTo('stimmen')} className="hover:text-gray-900">Erfolge</button>
          <button onClick={() => scrollTo('faq')} className="hover:text-gray-900">FAQ</button>
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={() => scrollTo('anfrage')} className="hidden sm:inline-flex bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-black transition">Kostenloses Erstgespräch</button>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Menü">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
