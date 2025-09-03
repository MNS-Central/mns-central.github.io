export default function SiteFooter() {
  return (
    <footer role="contentinfo" className="border-t border-white/10 py-6 text-sm text-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <p>© {new Date().getFullYear()} NeonEdge. All rights reserved.</p>
        <ul className="flex gap-4">
          <li>
            <a href="#solutions" className="hover:text-white">
              Solutions
            </a>
          </li>
          <li>
            <a href="#product" className="hover:text-white">
              Product
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-white">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
