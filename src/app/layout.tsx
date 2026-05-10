import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'nextjs-template-test',
  description: 'Full CI/CD pipeline test application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
