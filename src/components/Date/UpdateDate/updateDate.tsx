import Image from 'next/image';
import { formatDate } from '@/libs/utils';
import styles from './updateDate.module.css';

type Props = {
  date: string;
};

export default function UpdatedDate({ date }: Props) {
  return (
    <span className={styles.date}>
      <Image src="/update-date.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
}
