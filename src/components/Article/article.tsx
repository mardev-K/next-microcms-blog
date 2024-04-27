'use client'

import React, { useEffect } from 'react';
import { formatRichText } from '@/libs/utils';
import { type Article } from '@/libs/microcms';
import PublishedDate from '../Date/PublishDate/date';
import styles from './article.module.css';
import TagList from '../TagList/tagList';
import UpdatedDate from '../Date/UpdateDate/updateDate';
import Image from 'next/image';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//cdn.iframe.ly/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.top}>
      {data.thumbnail ? (
        <picture>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={`${data.thumbnail?.url}?fm=webp&w=414 1x, ${data.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
          />
          <source
            type="image/webp"
            srcSet={`${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504 1x, ${data.thumbnail?.url}?fm=webp&fit=crop&w=960&h=504&dpr=2 2x`}
          />
          <Image
            className={styles.thumbnail}
            src={data.thumbnail?.url || `/no-image.png`}
            alt=""
            width={data.thumbnail?.width || '1200'}
            height={data.thumbnail?.height || '630'}
            priority
          />
        </picture>
        ) : (
          <Image
            className={styles.thumbnail}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
            priority
          />
        )}
        <h1 className={styles.title}>{data.title}</h1>
      </div>
      <TagList tags={data.tags} />
      <p className={styles.description}>{data.description}</p>
      <div className={styles.meta}>
        <PublishedDate date={data.publishedAt || data.createdAt} />
        <UpdatedDate date={data.updatedAt} />
      </div>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(data.content)}`,
        }}
      />
    </main>
  );
}
