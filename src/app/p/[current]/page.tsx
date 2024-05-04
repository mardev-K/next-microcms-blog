import { getList } from '@/libs/microcms';
import { LIMIT } from '@/constants/constants';
import Pagination from '@/components/Pagination/pagination';
import ArticleList from '@/components/ArticleList/articleList';
import { SiVirustotal } from "react-icons/si";
import styles from './page.module.css';

type Props = {
  params: {
    current: string;
  };
};

export const revalidate = 60;

export default async function Page({ params }: Props) {
  const current = parseInt(params.current as string, 10);
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
  });
  const countData = data.totalCount;

  return (
    <>
      <div className={styles.countData}>
        <SiVirustotal />
        <p className={styles.total}>{countData} posts so far. Stay tuned for more!</p>
      </div>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} current={current} />
    </>
  );
}
