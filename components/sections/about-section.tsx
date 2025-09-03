export default function AboutSection() {
  return (
    <section id="about" className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="font-sans text-2xl font-bold text-white">About Us</h2>
          <a
            className="inline-flex rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            href="#about"
          >
            Learn More
          </a>
        </div>
        <p className="max-w-prose text-slate-400">
          We’re a compact team that ships confidently: clean code, crisp design, and clear communication. Every decision
          earns its place—no bloat, just results.
        </p>
      </div>
    </section>
  )
}
