export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_50%_0%,rgba(244,63,94,0.15),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-28 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full bg-red-50 text-red-700 ring-1 ring-inset ring-red-200 px-3 py-1 text-xs font-medium">
              Swiss Made Software
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">
              Software, die in der Schweiz entsteht – präzise, sicher, performant.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 leading-relaxed">
              Wir entwickeln digitale Produkte und Plattformen für Unternehmen, die hohe
              Anforderungen an Qualität, Datenschutz und Time‑to‑Market haben. Von der Idee bis zum
              Betrieb – ganzheitlich und verlässlich.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-red-700"
              >
                Mit uns sprechen
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50"
              >
                Unsere Leistungen
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-neutral-500">
              <div>
                <p className="font-semibold text-neutral-900">> 50 Projekte</p>
                <p>in regulierten Branchen</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">ISO‑konform</p>
                <p>Security & Prozesse</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Cloud‑native</p>
                <p>AWS, Azure, GCP</p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Zürich</p>
                <p>und remote in der Schweiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
