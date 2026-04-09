"use client";

import React from 'react';
import styles from '../styles/mart.module.css';

interface MartTagsProps {
  tags: string[];
  selectedTag: string;
  onTagClick: (tag: string) => void;
}

export const MartTags: React.FC<MartTagsProps> = ({ tags, selectedTag, onTagClick }) => {
  return (
    <div className={styles.tagsContainer}>
      {tags.map((tag) => (
        <button
          key={tag}
          className={`${styles.tagButton} ${selectedTag === tag ? styles.activeTag : ''}`}
          onClick={() => onTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};
