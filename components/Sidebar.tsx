import Link from "next/link";

const links = [
  { name: "Dashboard", href: "/restaurant" },
  { name: "Suppliers", href: "#suppliers" },
  { name: "Documents", href: "#documents" },
  { name: "Certifications", href: "#certifications" },
  { name: "Reports", href: "#reports" },
  { name: "QR Codes", href: "#qrcodes" },
  { name: "Settings", href: "#settings" },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white px-6 py-8 lg:block">
      <div className="mb-10">
        <p className="text-2xl font-semibold tracking-tight text-slate-900">SustainTable</p>
      </div>
      <nav className="space-y-2">
        {links.map((link, idx) => (
          <Link
            key={link.name}
            href={link.href}
            className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition ${
              idx === 0
                ? "bg-emerald-50 text-emerald-700"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
