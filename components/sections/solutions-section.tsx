function Card({
  title,
  desc,
  badge,
}: {
  title: string
  desc: string
  badge?: string
}) {
  return (
    <article
      className="relative rounded-xl border border-white/20 p-4"
      style={{
        boxShadow: "inset 0 0 0 1px rgba(0,179,255,0.08), 0 0 24px rgba(0,179,255,0.12)",
      }}
    >
      {badge ? (
        <span
          className="absolute right-3 top-3 rounded-full px-2 py-0.5 text-xs font-semibold text-black"
          style={{
            backgroundColor: "#b6ff00", // neon lime
            boxShadow: "0 0 28px rgba(182,255,0,0.25)",
            letterSpacing: "0.2px",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </span>
      ) : null}
      <h3 className="mb-1 font-semibold text-white">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </article>
  )
}

export default function SolutionsSection() {
  return (
    <section id="solutions" className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="font-sans text-2xl font-bold text-white">Solutions</h2>
          <a
            className="inline-flex rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            href="#solutions"
          >
            View All
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            badge="New"
            title="Real‑time Dashboards"
            desc="Actionable insights with near‑zero latency and high‑contrast visuals."
          />
          <Card title="Jamstack Sites" desc="Blazing‑fast static sites with modern tooling and resilient delivery." />
          <Card title="API Integration" desc="Secure, scalable APIs integrated with clean, predictable interfaces." />
          <Card title="eCommerce Experiences" desc="Conversion‑focused UX with precise performance budgets." />
          <Card title="Design Systems" desc="Consistent, accessible components with neon‑sharp accents." />
          <Card title="Automation & Tooling" desc="Streamlined workflows with robust CI/CD and observability." />
        </div>
      </div>
    </section>
  )
}
