import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants/constants';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Nav from '@/components/Nav/nav';
import './globals.css';
import styles from './layout.module.css';
import React, { Suspense } from 'react';

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Blog',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'Blog',
    description: 'A simple blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  });
  return (
    <html lang="ja">
      <body>
        <Suspense>
          <Header />
          <Nav tags={tags.contents} />
          <main className={styles.main}>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
