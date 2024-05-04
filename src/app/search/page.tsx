import { getList, getTagList } from '@/libs/microcms';
import ArticleList from '@/components/ArticleList/articleList';
import Pagination from '@/components/Pagination/pagination';
import Nav from '@/components/Nav/nav';
import { LIMIT } from '@/constants/constants';

type Props = {
  searchParams: {
    q?: string;
  };
};

export const revalidate = 60;

export default async function Page({ searchParams }: Props) {
  const data = await getList({
    q: searchParams.q,
  });

  const tags = await getTagList({
    limit: LIMIT,
  });

  return (
    <>
      <Nav tags={tags.contents} />
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} basePath="/search" q={searchParams.q} />
    </>
  );
}
