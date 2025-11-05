export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h5 className="font-semibold text-neutral-900">AlpenSoft</h5>
            <p className="mt-2 text-sm text-neutral-600 max-w-sm">
              Ihr Partner für hochwertige Softwareentwicklung in der Schweiz. Transparent, sicher und
              zuverlässig.
            </p>
          </div>
          <div>
            <h6 className="text-sm font-medium text-neutral-900">Kontakt</h6>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>Badenerstrasse 00, 8000 Zürich</li>
              <li>
                <a href="mailto:hello@alpensoft.ch" className="hover:text-neutral-900">hello@alpensoft.ch</a>
              </li>
              <li>
                <a href="tel:+41440000000" className="hover:text-neutral-900">+41 44 000 00 00</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-sm font-medium text-neutral-900">Rechtliches</h6>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600">
              <li>
                <a href="#" className="hover:text-neutral-900">Impressum</a>
              </li>
              <li>
                <a href="#" className="hover:text-neutral-900">Datenschutz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} AlpenSoft GmbH. Alle Rechte vorbehalten.</p>
          <div className="text-sm text-neutral-500">Made with ❤️ in Switzerland</div>
        </div>
      </div>
    </footer>
  );
}
