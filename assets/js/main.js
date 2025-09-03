;(() => {
  const navToggle = document.querySelector(".nav-toggle")
  const siteNav = document.querySelector(".site-nav")
  const links = document.querySelectorAll('.site-nav a[href^="#"], a[href^="#"].hero-cta')
  const year = document.getElementById("year")

  // Year
  if (year) year.textContent = new Date().getFullYear()

  // Mobile toggle
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const open = siteNav.classList.toggle("open")
      navToggle.setAttribute("aria-expanded", String(open))
    })
  }

  // Smooth scroll
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href")
      if (id && id.startsWith("#")) {
        e.preventDefault()
        const el = document.querySelector(id)
        if (!el) return
        const headerOffset = 64
        const rect = el.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const top = rect.top + scrollTop - headerOffset
        window.scrollTo({ top, behavior: "smooth" })
        // Close mobile menu
        siteNav?.classList.remove("open")
        navToggle?.setAttribute("aria-expanded", "false")
        history.replaceState(null, "", id)
      }
    })
  })

  // Active section highlight on scroll (basic)
  const sectionIds = ["#solutions", "#product", "#about", "#contact"]
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = "#" + entry.target.id
        if (entry.isIntersecting) {
          document.querySelectorAll(".site-nav a").forEach((a) => a.classList.remove("is-active"))
          const active = document.querySelector(`.site-nav a[href="${id}"]`)
          active?.classList.add("is-active")
        }
      })
    },
    { rootMargin: "-40% 0px -40% 0px", threshold: 0.01 },
  )

  sectionIds.forEach((id) => {
    const el = document.querySelector(id)
    if (el) observer.observe(el)
  })
})()
