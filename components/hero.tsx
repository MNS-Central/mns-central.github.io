import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-4">
        <div className="inline-flex items-center gap-2 text-sm text-slate-400">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: "#00b3ff", // electric blue
              boxShadow: "0 0 24px rgba(0,179,255,0.35)",
            }}
          />
          Performance-first design
        </div>

        <h1 className="text-pretty font-sans text-3xl font-bold leading-tight text-white md:text-5xl">
          Lightning-fast solutions with a sleek, modern look.
        </h1>

        <p className="max-w-2xl text-balance text-slate-400">
          We ship focused, scalable experiences powered by clean architecture and crisp, neon-edged visuals.
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button
            asChild
            className="border-0 text-black shadow-none"
            style={{
              backgroundColor: "#00b3ff",
              boxShadow: "0 0 32px rgba(0,179,255,0.25)",
            }}
          >
            <a href="#solutions">Explore Solutions</a>
          </Button>

          <Button asChild variant="outline" className="border-white/25 text-white hover:bg-white/10 bg-transparent">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
