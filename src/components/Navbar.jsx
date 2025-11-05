import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#projekte', label: 'Projekte' },
    { href: '#ueber-uns', label: 'Über uns' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-neutral-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-2 text-neutral-900">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-red-600 text-white">
              <Rocket size={18} />
            </span>
            <span className="font-semibold tracking-tight">AlpenSoft</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition-colors"
            >
              Angebot anfragen
            </a>
          </nav>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
            aria-label="Menü öffnen"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-neutral-800 hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
              >
                Angebot anfragen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
