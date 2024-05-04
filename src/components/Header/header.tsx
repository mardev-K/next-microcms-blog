import Link from 'next/link';
import { IoSearchSharp } from "react-icons/io5";
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='/' className={styles.logo}>
        MARDEV
      </Link>

      <ul className={styles.link}>
        <li>
          <Link href='/' className={styles.about}>
            BLOG
          </Link>
        </li>
        <li>
          <Link href='/about' className={styles.about}>
            ABOUT
          </Link>
        </li>
        <li>
          <Link href='/search' className={styles.about}>
            <IoSearchSharp />
          </Link>
        </li>
      </ul>
    </header>
  );
}
