import type React from "react"
function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/30 bg-white/10 px-2 py-0.5 text-xs text-white">{children}</span>
  )
}

export default function ProductSection() {
  return (
    <section id="product" className="border-t border-white/10 py-10">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-sm text-slate-400">
            <span
              aria-hidden
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: "#00b3ff",
                boxShadow: "0 0 24px rgba(0,179,255,0.35)",
              }}
            />
            Product
          </div>
          <h2 className="font-sans text-2xl font-bold text-white md:text-3xl">Edge‑ready, modular architecture.</h2>
          <p className="mt-2 max-w-prose text-slate-400">
            Our product blueprint prioritizes clarity, speed, and maintainability. Compose features like blocks, keep
            payloads lean, and ship with confidence.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Kbd>Fast</Kbd>
            <Kbd>Accessible</Kbd>
            <Kbd>Secure</Kbd>
            <Kbd>Scalable</Kbd>
          </div>
        </div>

        <div
          className="grid min-h-[220px] place-items-center rounded-xl border border-white/20 p-4"
          role="img"
          aria-label="Abstract neon representation of product modules"
          style={{
            boxShadow: "inset 0 0 0 1px rgba(0,179,255,0.08), 0 0 24px rgba(0,179,255,0.12)",
          }}
        >
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-18 w-18 rounded-lg border border-white/20 md:h-18 md:w-18"
                style={{
                  width: 72,
                  height: 72,
                  boxShadow: "0 0 24px rgba(0,179,255,0.12)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
