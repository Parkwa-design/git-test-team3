export interface Tag {
  id: string;
  label: string;
  slug: string;
}

export interface Journal {
  id: string;
  title: string;
  subTitle: string;
  coverImage: string;
  tags: string[]; // Tag slugs
  publishedAt: string;
  relatedArticleIds: string[];
}

export interface JournalDetail extends Journal {
  content: string;
  author: string;
}
