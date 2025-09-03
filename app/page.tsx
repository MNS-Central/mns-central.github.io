import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import Hero from "@/components/hero"
import SolutionsSection from "@/components/sections/solutions-section"
import ProductSection from "@/components/sections/product-section"
import AboutSection from "@/components/sections/about-section"
import ContactSection from "@/components/sections/contact-section"

export default function Page() {
  // The wrapper sets our neon theme via inline styles (5-color system).
  return (
    <div
      style={{
        backgroundColor: "#0b0f14", // near-black bg (neutral)
        color: "#ffffff", // white fg (neutral)
      }}
      className="min-h-dvh"
    >
      {/* Skip link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-[#00b3ff] focus:px-3 focus:py-2 focus:text-black"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="content" className="relative">
        <Hero />
        <SolutionsSection />
        <ProductSection />
        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  )
}
