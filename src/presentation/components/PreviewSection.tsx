import Link from "next/link";
import styles from "./PreviewSection.module.css";

const PREVIEW_DATA = [
  {
    category: "FEATURED",
    title: "아침의 균형: 매일의 루틴을 찾아서",
    description: "무너진 일상을 다시 세우는 첫 번째 습관에 대하여. 우리는 왜 아침에 집중해야 하는가?",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8a9b749f5?auto=format&fit=crop&q=80&w=1200",
    date: "2026.04.08",
    featured: true
  },
  {
    category: "JOURNAL",
    title: "봄의 다시 태어남: 성장의 계절",
    image: "https://images.unsplash.com/photo-1466750023020-70bc8604ba3b?auto=format&fit=crop&q=80&w=800",
    date: "2026.04.05"
  },
  {
    category: "MART",
    title: "유기농 그래놀라: 아침을 위한 식탁",
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&q=80&w=800",
    date: "2026.03.28"
  }
];

export default function PreviewSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>LATEST ARTICLES</h2>
          <Link href="/journal" className={styles.viewAll}>EXPLORE ALL →</Link>
        </div>
        
        <div className={styles.grid}>
          {PREVIEW_DATA.map((item, index) => (
            <div key={index} className={`${styles.card} ${item.featured ? styles.featured : ""}`}>
              <div className={styles.imageBox}>
                <img src={item.image} alt={item.title} className={styles.cardImage} />
              </div>
              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.date}>{item.date}</span>
                </div>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                {item.featured && <p className={styles.itemDesc}>{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

