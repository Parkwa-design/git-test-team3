"use client";

import type { MembershipTag } from "@/domain/entities/Membership";

interface Props {
  tags: MembershipTag[];
  selectedTag: string;
  onTagClick: (slug: string) => void;
}

export default function TagFilter({ tags, selectedTag, onTagClick }: Props) {
  return (
    <div className="tag-filter">
      {tags.map((tag) => (
        <button
          key={tag.id}
          className={`tag-filter__btn ${selectedTag === tag.slug ? "tag-filter__btn--active" : ""}`}
          onClick={() => onTagClick(tag.slug)}
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}
