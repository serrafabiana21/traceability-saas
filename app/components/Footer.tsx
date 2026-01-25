const footerLinks = [
  {
    title: "Platform",
    links: ["Overview", "Security", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Guides", "Status"],
  },
];

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="grid gap-10 border-t border-slate-200/70 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-900">Traceability Suite</p>
          <p className="text-xs text-slate-500">
            Minimal tools for modern compliance and supplier visibility.
          </p>
        </div>
        {footerLinks.map((group) => (
          <div key={group.title} className="space-y-3 text-xs">
            <p className="font-semibold uppercase tracking-[0.2em] text-slate-400">
              {group.title}
            </p>
            <ul className="space-y-2 text-slate-500">
              {group.links.map((link) => (
                <li key={link}>
                  <a className="transition hover:text-slate-900" href="#">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col gap-2 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2025 Traceability Suite</span>
        <div className="flex gap-4">
          <a className="transition hover:text-slate-900" href="#">
            Privacy
          </a>
          <a className="transition hover:text-slate-900" href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
