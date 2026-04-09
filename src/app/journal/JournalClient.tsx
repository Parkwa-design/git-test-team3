"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useJournal } from './hooks/useJournal';
import { TagNavigation } from './components/TagNavigation';
import { JournalCard } from './components/JournalCard';
import { ReaderFrame } from './components/ReaderFrame';
import './styles/journal.css';

export default function JournalClient() {
  const {
    tags,
    selectedTag,
    journals,
    selectedArticle,
    handleTagClick,
    handleArticleClick,
    handleBackToList,
  } = useJournal();

  return (
    <div className="journal-page">
      <AnimatePresence mode="wait">
        {!selectedArticle ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <header className="journal-header">
              <TagNavigation
                tags={tags}
                selectedTag={selectedTag}
                onTagClick={handleTagClick}
              />
            </header>
            
            <main className="journal-grid">
              {journals.map((journal) => (
                <JournalCard
                  key={journal.id}
                  journal={journal}
                  onClick={handleArticleClick}
                />
              ))}
            </main>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ReaderFrame
              article={selectedArticle}
              onBack={handleBackToList}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
