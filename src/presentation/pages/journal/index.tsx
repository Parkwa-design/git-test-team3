import React from 'react';
import { useJournal } from './hooks/useJournal';
import { TagNavigation } from './components/TagNavigation';
import { JournalCard } from './components/JournalCard';
import { ReaderFrame } from './components/ReaderFrame';
import './styles/journal.css';

const JournalPage: React.FC = () => {
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
      {!selectedArticle ? (
        <>
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
        </>
      ) : (
        <ReaderFrame
          article={selectedArticle}
          onBack={handleBackToList}
        />
      )}
    </div>
  );
};

export default JournalPage;
