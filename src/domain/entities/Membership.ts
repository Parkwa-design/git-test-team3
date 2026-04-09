export interface MembershipPlan {
  id: string;
  name: string;
  nameKr: string;
  price: number;
  period: string;
  originalPrice?: number;
  features: string[];
  isRecommended: boolean;
  periodOptions?: { label: string; months: number; price: number; originalPrice?: number }[];
}

export interface MembershipBenefit {
  id: number;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
  illustration: string;
  direction: 'left' | 'right';
}

export interface MembershipArticle {
  id: string;
  title: string;
  subtitle: string;
  excerpt: string;
  coverImage: string;
  tags: string[];
  author: string;
  publishedAt: string;
  readTime: string;
  content: string;
}

export interface MembershipTag {
  id: string;
  label: string;
  slug: string;
}
