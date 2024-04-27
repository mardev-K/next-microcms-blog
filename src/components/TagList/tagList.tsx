import { Tag } from '@/libs/microcms';
import TagListItem from '../TagListItem/tagListItem';
import styles from './tagList.module.css';

type Props = {
  tags?: Tag[];
  hasLink?: boolean;
};

export default function TagList({ tags, hasLink = true }: Props) {
  if (!tags) {
    return null;
  }
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <TagListItem tag={tag} hasLink={hasLink} />
        </li>
      ))}
    </ul>
  );
}
