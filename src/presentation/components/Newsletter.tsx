"use client";

import styles from "./Newsletter.module.css";

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className="fade-in">
            <h2 className={styles.title}>NEWSLETTER</h2>
            <p className={styles.subtitle}>
              매주 수요일 아침 8시,<br />당신의 하루를 여는 이야기를 보내드립니다.
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="EMAIL ADDRESS" className={styles.input} />
              <button type="submit" className={styles.button}>뉴스레터 구독하기 →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
