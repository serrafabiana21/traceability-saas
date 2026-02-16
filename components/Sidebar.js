import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { name: 'Dashboard', href: '/restaurant' },
  { name: 'Suppliers', href: '/restaurant#suppliers' },
  { name: 'Documents', href: '/restaurant#documents' },
  { name: 'Certifications', href: '/restaurant#certifications' },
  { name: 'Reports', href: '/restaurant#reports' },
  { name: 'QR Codes', href: '/restaurant#qrcodes' },
  { name: 'Settings', href: '/restaurant#settings' },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white px-6 py-8 lg:block">
      <div className="mb-10">
        <p className="text-2xl font-semibold tracking-tight text-slate-900">SustainTable</p>
      </div>
      <nav className="space-y-1">
        {links.map((link) => {
          const active = router.pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`block rounded-lg px-4 py-2 text-sm font-medium transition ${
                active
                  ? 'bg-accent-soft text-accent'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
