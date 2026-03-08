import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/course', label: 'Course' },
  { href: '/dashboard', label: 'Dashboard' }
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight text-slate-900">
          AI Course App
        </Link>
        <nav className="flex items-center gap-5 text-sm text-slate-600">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-900">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
