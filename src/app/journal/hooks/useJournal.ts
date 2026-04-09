import { useState, useMemo } from 'react';
import { JOURNALS, TAGS } from '@/infrastructure/mocks/journal-data';

export const useJournal = () => {
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const filteredJournals = useMemo(() => {
    if (selectedTag === 'all') return JOURNALS;
    return JOURNALS.filter((journal) => journal.tags.includes(selectedTag));
  }, [selectedTag]);

  const selectedArticle = useMemo(() => {
    if (!selectedArticleId) return null;
    return JOURNALS.find((j) => j.id === selectedArticleId) || null;
  }, [selectedArticleId]);

  const handleTagClick = (slug: string) => {
    setSelectedTag(slug);
    setSelectedArticleId(null);
  };

  const handleArticleClick = (id: string) => {
    setSelectedArticleId(id);
  };

  const handleBackToList = () => {
    setSelectedArticleId(null);
  };

  return {
    tags: TAGS,
    selectedTag,
    journals: filteredJournals,
    selectedArticle,
    handleTagClick,
    handleArticleClick,
    handleBackToList,
  };
};
