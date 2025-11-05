import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter antialiased text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <section id="ueber-uns" className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Warum AlpenSoft?</h2>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Wir arbeiten eng mit Ihren Fachbereichen zusammen und liefern in iterativen Zyklen
                  messbaren Nutzen. Unsere Teams kombinieren Produkt, Design und Engineering – für
                  Lösungen, die in Produktion bestehen.
                </p>
                <ul className="mt-6 space-y-3 text-neutral-700">
                  <li>• Transparente Zusammenarbeit und klare Roadmaps</li>
                  <li>• Fokus auf Security, Datenschutz und Compliance</li>
                  <li>• Moderne Architektur und saubere Code‑Qualität</li>
                </ul>
              </div>
              <div>
                <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-red-50 to-white p-6">
                  <h3 className="text-lg font-semibold">Engagement‑Modelle</h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                      <p className="font-medium">Product Squad</p>
                      <p className="mt-1 text-sm text-neutral-600">Interdisziplinäres Team für End‑to‑End Ownership.</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                      <p className="font-medium">Projektfix</p>
                      <p className="mt-1 text-sm text-neutral-600">Klarer Scope, Timeline und Budget – planbar und effizient.</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                      <p className="font-medium">Advisory</p>
                      <p className="mt-1 text-sm text-neutral-600">Architektur‑Reviews, Audits und Trainings für Ihr Team.</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 ring-1 ring-neutral-200">
                      <p className="font-medium">Staff Augmentation</p>
                      <p className="mt-1 text-sm text-neutral-600">Senior Engineers als Verstärkung für Ihre Roadmap.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
