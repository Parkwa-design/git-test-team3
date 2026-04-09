"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/mart.module.css';
import { MART_ITEMS, MartItem } from './data/martData';
import { MartTags } from './components/MartTags';
import { MartCard } from './components/MartCard';
import { MartDetail } from './components/MartDetail';

export default function MartClient() {
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState<MartItem | null>(null);

  const tags = useMemo(() => {
    const allTags = MART_ITEMS.flatMap(item => item.tags);
    return ['ALL', ...Array.from(new Set(allTags))];
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedTag === 'ALL') return MART_ITEMS;
    return MART_ITEMS.filter(item => item.tags.includes(selectedTag));
  }, [selectedTag]);

  const handleItemClick = (item: MartItem) => {
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedItem(null);
  };

  return (
    <div className={styles.martPage}>
      <AnimatePresence mode="wait">
        {!selectedItem ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.header}>
              <h1 className={styles.title}>Mart</h1>
              <MartTags
                tags={tags}
                selectedTag={selectedTag}
                onTagClick={setSelectedTag}
              />
            </div>
            
            <div className={styles.grid}>
              {filteredItems.map((item) => (
                <MartCard
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <MartDetail
              item={selectedItem}
              onBack={handleBackToList}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
