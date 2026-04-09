import React from 'react';
import type { Tag } from '@/domain/entities/journal';

interface TagNavigationProps {
  tags: Tag[];
  selectedTag: string;
  onTagClick: (slug: string) => void;
}

export const TagNavigation: React.FC<TagNavigationProps> = ({ tags, selectedTag, onTagClick }) => {
  return (
    <nav className="tag-navigation">
      <ul className="tag-list">
        {tags.map((tag) => (
          <li key={tag.id}>
            <button
              className={`tag-button ${selectedTag === tag.slug ? 'active' : ''}`}
              onClick={() => onTagClick(tag.slug)}
            >
              {tag.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
