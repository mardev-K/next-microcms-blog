import Image from 'next/image';
import { formatDate } from '@/libs/utils';
import styles from './date.module.css';

type Props = {
  date: string;
};

export default function PublishedDate({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/publish-date.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
}
