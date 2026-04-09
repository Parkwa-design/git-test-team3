"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <nav className={styles.leftNav}>
          <Link href="/provision">Provision</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/mart">Mart</Link>
        </nav>
        
        <div className={styles.logo}>
          <Link href="/">Achim</Link>
        </div>
        
        <nav className={styles.rightNav}>
          <Link href="/membership">Membership</Link>
          <Link href="/login">Mypage</Link>
          <div className={styles.icons}>
            <button aria-label="Cart" className={styles.iconButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                <path d="M3 6h18"></path>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
            <button aria-label="Search" className={styles.iconButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
