import Link from "next/link";
import Image from 'next/image';
import styles from './page.module.css';
import { SiZenn } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default async function About() {

    const profile = {
        name: "mardev",
        role: "Webアプリケーション開発してます。",
        description: "セブに住んでます。犬好きです。"
    };

    return (
        <div className={styles.about}>
            <div className={styles.info}>
                <div>
                    <Image
                        className={styles.image}
                        src="/profile.jpg"
                        alt="Profile"
                        width={500}
                        height={500}
                        priority
                    />
                </div>
                <div className={styles.intro}>
                    <h1>プロフィール</h1>
                    <p><strong>名前:</strong> {profile.name}</p>
                    <p><strong>役職:</strong> {profile.role}</p>
                    <p><strong>紹介:</strong> {profile.description}</p>
                </div>
            </div>

            <div className={styles.socialLinks}>
                <Link href="https://github.com/mardev-K" rel="noopener noreferrer" target="_blank">
                    <FaGithub
                        className={styles.githubIcon}
                        size={40}
                    />
                </Link>
                <Link href="https://zenn.dev/mardev" rel="noopener noreferrer" target="_blank">
                    <SiZenn
                        className={styles.zennIcon}
                        size={40}
                    />
                </Link>
                <Link href="https://twitter.com/mardev48649" rel="noopener noreferrer" target="_blank">
                    <FaXTwitter
                        className={styles.xIcon}
                        size={40}
                    />
                </Link>
            </div>
        </div>
    );
}


