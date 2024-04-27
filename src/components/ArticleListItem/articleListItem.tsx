import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/libs/microcms';
import styles from './articleListItem.module.css';
import TagList from '../TagList/tagList';
import PublishedDate from '../Date/PublishDate/date';
import UpdatedDate from '../Date/UpdateDate/updateDate';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={styles.list}>
      <Link href={`/blogs/${article.id}`} className={styles.link}>
        {article.thumbnail ? (
          <picture>
            <source
              type="image/webp"
              media="(max-width: 640px)"
              srcSet={`${article.thumbnail?.url}?fm=webp&w=414 1x, ${article.thumbnail?.url}?fm=webp&w=414&dpr=2 2x`}
            />
            <source
              type="image/webp"
              srcSet={`${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126 1x, ${article.thumbnail?.url}?fm=webp&fit=crop&w=240&h=126&dpr=2 2x`}
            />
            <Image
              src={article.thumbnail?.url || `/no-image.png`}
              alt="No Image"
              className={styles.image}
              width={article.thumbnail?.width || '1200'}
              height={article.thumbnail?.height || '630'}
              priority
            />
          </picture>
        ) : (
          <Image
            className={styles.image}
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
            priority
          />
        )}
        <dl className={styles.content}>
          <dt className={styles.title}>{article.title}</dt>
          <dd>
            <TagList tags={article.tags} hasLink={false} />
          </dd>
          <dd className={styles.date}>
            <PublishedDate date={article.publishedAt || article.createdAt} />
            <UpdatedDate date={article.updatedAt} />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
