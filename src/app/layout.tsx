import { getTagList } from '@/libs/microcms';
import { LIMIT } from '@/constants/constants';
import Header from '@/components/Header/header';
import Footer from '@/components/Footer/footer';
import Nav from '@/components/Nav/nav';
import './globals.css';
import styles from './layout.module.css';
import React, { Suspense } from 'react';
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Mardev',
  description: "Hi! It's tech blog of a Japanese engineer living in Cebu:)",
  openGraph: {
    title: 'Mardev',
    description: "Hi! It's tech blog of a Japanese engineer living in Cebu:)",
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
          <main className={styles.main}>{children}</main>
          <Footer />
        </Suspense>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
    </html>
  );
}
