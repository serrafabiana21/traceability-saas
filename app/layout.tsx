import type { ReactNode } from "react";

export const metadata = {
  title: "Traceability SaaS",
  description: "Verified sustainability & provenance claims.",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 text-sm">
            <a className="font-semibold tracking-wide text-slate-100" href="/">
              Traceability SaaS
            </a>
            <div className="flex items-center gap-6 text-slate-300">
              <a className="transition hover:text-white" href="/">
                Home
              </a>
              <a className="transition hover:text-white" href="/restaurant">
                Restaurant
              </a>
              <a className="transition hover:text-white" href="/supplier">
                Supplier
              </a>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-5xl px-6 py-16">{children}</main>
      </body>
    </html>
  );
}
