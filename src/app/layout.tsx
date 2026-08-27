import type { Metadata } from 'next';
import './globals.css';
import LoadingOverlay from '@/components/LoadingOverlay';

export const metadata: Metadata = {
  title: 'RYM — See The World Differently',
  description:
    'RYM is a curated sunglasses label. Weekly drops, imported frames, weekend-only ordering. Limited quantities, first come first serve.',
  openGraph: {
    title: 'RYM — Sunglasses',
    description: 'Curated sunglasses. Weekly drops. Limited quantities.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LoadingOverlay>{children}</LoadingOverlay>
      </body>
    </html>
  );
}
