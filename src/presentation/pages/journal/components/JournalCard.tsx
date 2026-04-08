import React from 'react';
import type { Journal } from '../../../../domain/entities/Journal';

interface JournalCardProps {
  journal: Journal;
  onClick: (id: string) => void;
}

export const JournalCard: React.FC<JournalCardProps> = ({ journal, onClick }) => {
  return (
    <article className="journal-card" onClick={() => onClick(journal.id)}>
      <div className="cover-wrapper">
        <img src={journal.coverImage} alt={journal.title} loading="lazy" />
      </div>
      <div className="info">
        <span className="date serif">{journal.publishedAt}</span>
        <h3 className="title">{journal.title}</h3>
        <p className="subtitle">{journal.subTitle}</p>
      </div>
    </article>
  );
};
