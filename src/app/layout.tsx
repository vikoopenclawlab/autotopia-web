import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'nextjs-template-test',
  description: 'CI/CD pipeline test',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}