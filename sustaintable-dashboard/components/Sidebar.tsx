import Link from 'next/link';

const navItems = ['Dashboard', 'Suppliers', 'Analytics', 'Reports', 'Settings'];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 border-r border-slate-200 bg-white p-6 lg:block">
      <div className="text-2xl font-semibold text-brand">SustainTable</div>
      <nav className="mt-10 space-y-2">
        {navItems.map((item, index) => (
          <Link
            key={item}
            href="#"
            className={`block rounded-lg px-4 py-2 text-sm font-medium transition ${
              index === 0
                ? 'bg-emerald-50 text-brand'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            {item}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
