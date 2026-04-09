"use client";

import React from 'react';
import styles from '../styles/mart.module.css';
import { MartItem } from '../data/martData';

interface MartDetailProps {
  item: MartItem;
  onBack: () => void;
}

export const MartDetail: React.FC<MartDetailProps> = ({ item, onBack }) => {
  return (
    <div className={styles.detailContainer}>
      <button className={styles.backButton} onClick={onBack}>
        ← BACK TO LIST
      </button>
      
      <div className={styles.detailView}>
        <div className={styles.detailImageWrapper}>
          <img src={item.image} alt={item.title} className={styles.detailImage} />
        </div>
        
        <div className={styles.detailContent}>
          <div className={styles.detailCategory}>{item.category}</div>
          <h2 className={styles.detailTitle}>{item.title}</h2>
          <div className={styles.detailPrice}>{item.price}</div>
          
          <div className={styles.detailDesc}>
            {item.description}
          </div>
          
          <div className={styles.detailLongContent}>
            {item.content}
          </div>
          
          <button className={styles.buyButton}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
