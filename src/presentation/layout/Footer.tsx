import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandCol}>
          <h2 className={styles.brandTitle}>All About Your Morning<br/>Since 2015</h2>
          <img 
            src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&q=80&w=300" 
            alt="Achim Character" 
            className={styles.illustration}
          />
        </div>
        
        <div className={styles.ctaCol}>
          <div className={styles.ctaBox}>
            <p className={styles.ctaDesc}>카카오톡 채널을 추가해 10% 할인 쿠폰을 받아 보세요!</p>
            <button className={styles.ctaBtn}>Add Kakao Channel</button>
          </div>
          <div className={styles.ctaBox}>
            <p className={styles.ctaDesc}>수요일 아침 8시, Achim 뉴스레터 '새소식'을 받아 보세요!</p>
            <button className={styles.ctaBtn}>Subscribe</button>
          </div>
        </div>
        
        <div className={styles.linksCol}>
           <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Menu</h3>
              <ul>
                 <li><Link href="/about">About</Link></li>
                 <li><Link href="/provision">Provision</Link></li>
                 <li><Link href="/journal">Journal</Link></li>
                 <li><Link href="/mart">Mart</Link></li>
                 <li><Link href="/membership">Membership</Link></li>
              </ul>
           </div>
           <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Follow Us</h3>
              <ul>
                 <li><a href="#">Instagram</a></li>
                 <li><a href="#">Youtube</a></li>
              </ul>
              
              <h3 className={styles.linkTitle} style={{marginTop: '24px'}}>Brand Consulting</h3>
              <ul>
                 <li><a href="#">QQAA</a></li>
              </ul>
           </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className={styles.companyInfo}>
          <p>아침컴퍼니주식회사 CEO Jin Youn | ADDRESS 8, Wiryeseong-daero 2-gil, Songpa-gu, Seoul | BUSINESS NUMBER 891-17-00215 | ONLINE SALES NUMBER 2017-수원팔달-0264 | hello@have-achim.com | Privacy Policy | Terms of Service</p>
          <p className={styles.copyright}>&copy; 2026 Achim. All rights reserved. | site by FACTO</p>
        </div>
      </div>
    </footer>
  );
}
