import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2 className="font-sans text-2xl font-bold text-white">Contact Us</h2>
          <a
            className="inline-flex rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            href="#contact"
          >
            Contact Page
          </a>
        </div>

        <p className="mb-4 text-slate-400">Ready to move fast? Let’s talk.</p>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="border-0 text-black"
            style={{
              backgroundColor: "#00b3ff",
              boxShadow: "0 0 32px rgba(0,179,255,0.25)",
            }}
          >
            <a href="mailto:hello@example.com">Email Us</a>
          </Button>

          <a
            className="inline-flex items-center rounded-lg border border-white/25 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
