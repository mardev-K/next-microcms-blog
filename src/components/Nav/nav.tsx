import { Tag } from '@/libs/microcms';
import TagList from '@/components/TagList/tagList';
import SearchField from '@/components/SearchField/searchField';
import styles from './nav.module.css';

type Props = {
  tags: Tag[];
};

export default function Nav({ tags }: Props) {
  return (
    <nav className={styles.nav}>
      <SearchField />
      <TagList tags={tags} />
    </nav>
  );
}
