"use client";

import React from 'react';
import styles from '../styles/mart.module.css';
import { MartItem } from '../data/martData';

interface MartCardProps {
  item: MartItem;
  onClick: (item: MartItem) => void;
}

export const MartCard: React.FC<MartCardProps> = ({ item, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(item)}>
      <div className={styles.imageWrapper}>
        <img src={item.image} alt={item.title} className={styles.image} />
        {item.status && <span className={styles.statusTag}>{item.status}</span>}
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardMeta}>
          <span className={styles.cardCategory}>{item.category}</span>
          <span className={styles.cardDate}>{item.date}</span>
        </div>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        {item.price && <div className={styles.cardPrice}>{item.price}</div>}
      </div>
    </div>
  );
};
