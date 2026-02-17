import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SustainTable Dashboard',
  description: 'Restaurant sustainability and supplier traceability dashboard'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
