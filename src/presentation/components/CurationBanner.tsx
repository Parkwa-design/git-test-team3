import styles from "./CurationBanner.module.css";
import Link from "next/link";

export default function CurationBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.imageColumn}>
          <img 
            src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=1200" 
            alt="New Issue"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.textColumn}>
          <div className="fade-in">
            <h1 className={styles.title}>Achim Vol.35 Choice</h1>
            <p className={styles.description}>
              35번째 매거진 &lt;Achim&gt;의 주제는 'Choice'입니다. 나다운 선택을 통해 나만의 삶을 만들어가는 사람들의 이야기를 담았습니다.
            </p>
            <Link href="/mart" className={styles.shopLink}>Shop Now</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
