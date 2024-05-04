import { getTag, getTagList } from '@/libs/microcms';
import TagListItem from '@/components/TagListItem/tagListItem';
import styles from './layout.module.css';
import Nav from '@/components/Nav/nav';
import { LIMIT } from '@/constants/constants';

type Props = {
  children: React.ReactNode;
  params: {
    tagId: string;
  };
};

export default async function TagsLayout({ children, params }: Props) {
  const { tagId } = params;
  const tag = await getTag(tagId);
  const tags = await getTagList({
    limit: LIMIT,
  });

  return (
    <div>
      <Nav tags={tags.contents} />
      <p className={styles.title}>
        Tag: <TagListItem tag={tag} hasLink={false} />
      </p>
      <div>{children}</div>
    </div>
  );
}
