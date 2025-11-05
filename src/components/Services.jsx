import { Code, Shield, Workflow, Globe } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Individuelle Softwareentwicklung',
    desc:
      'Maßgeschneiderte Web‑ und Cloud‑Lösungen mit modernen Stacks. Von MVP bis Enterprise‑Plattform.',
  },
  {
    icon: Shield,
    title: 'Security & Datenschutz',
    desc:
      'Swiss‑Grade Security, Datenschutz nach DSG/DSGVO und saubere Compliance – von Beginn an integriert.',
  },
  {
    icon: Workflow,
    title: 'Cloud & DevOps',
    desc:
      'Automatisierte CI/CD‑Pipelines, Infrastruktur als Code und Observability für skalierbare Systeme.',
  },
  {
    icon: Globe,
    title: 'UX, Frontend & Accessibility',
    desc:
      'Schnelle, barrierearme Interfaces mit Fokus auf Business Value und messbares Nutzererlebnis.',
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="py-20 md:py-28 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Was wir für Sie bauen
          </h2>
          <p className="mt-4 text-neutral-600">
            Wir kombinieren Produktdenken, Engineering‑Exzellenz und Schweizer Zuverlässigkeit – für
            Ergebnisse, die zählen.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-700 ring-1 ring-red-200">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</p>
            </div>
          ))}
        </div>

        <div id="projekte" className="mt-16 rounded-2xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Case Study</p>
              <h4 className="mt-1 font-semibold text-neutral-900">FinTech Plattform</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Migration zu Cloud‑Native Microservices, Reduktion der Deploy‑Zeit von 60 auf 5 Minuten.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Case Study</p>
              <h4 className="mt-1 font-semibold text-neutral-900">Healthcare Portal</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Sichere Patienten‑Onboarding‑Strecke, DSG/DSGVO‑konform mit granularem Rollenmodell.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-neutral-500">Case Study</p>
              <h4 className="mt-1 font-semibold text-neutral-900">E‑Commerce B2B</h4>
              <p className="mt-2 text-sm text-neutral-600">
                Headless‑Architektur, +38% Conversion und <span className="whitespace-nowrap">Sub‑Second</span> LCP.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
