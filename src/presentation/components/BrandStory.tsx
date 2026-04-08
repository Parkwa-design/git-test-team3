import styles from "./BrandStory.module.css";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&q=80&w=1000" 
            alt="Brand Story Image" 
            className={styles.mainImage}
          />
        </div>
        <div className={`${styles.content} fade-in`}>
          <span className={styles.tag}>BRAND IDENTITY</span>
          <h2 className={styles.title}>아침을 잘 시작하는 사람들을 위한 브랜드</h2>
          <p className={styles.description}>
            매일 아침, 우리에게는 새로운 하루를 디자인할 짧고도 소중한 시간이 주어집니다. 
            바쁜 일상의 소음 속에서도 나만의 고유한 리듬을 찾는 일, 그것이 아침매거진이 추구하는 가치입니다.
          </p>
          <p className={styles.description}>
            우리는 당신의 아침을 더 풍요롭게 할 수 있는 영감을 주는 콘텐츠와 
            정성스럽게 선별된 상품들을 큐레이션하여 매일 새로운 아침을 선사합니다.
          </p>
          <div className={styles.signature}>All About Your Morning / Since 2025</div>
        </div>
      </div>
    </section>
  );
}
