import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants/constants';
import Pagination from '@/components/Pagination/pagination';
import ArticleList from '@/components/ArticleList/articleList';
import { SiVirustotal } from "react-icons/si";
import styles from './page.module.css';

export const revalidate = 0;

export default async function Home() {
  const data = await getList({
    limit: LIMIT,
  });
  const countData = data.totalCount;

  return (
    <>
      <div className={styles.countData}>
        <SiVirustotal />
        <p className={styles.total}>{countData} posts so far. Stay tuned for more!</p>
      </div>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
