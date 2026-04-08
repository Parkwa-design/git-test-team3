import type { Journal, Tag } from '../../domain/entities/Journal';

export const TAGS: Tag[] = [
  { id: '1', label: 'All', slug: 'all' },
  { id: '2', label: 'Interview', slug: 'interview' },
  { id: '3', label: 'Life', slug: 'life' },
  { id: '4', label: 'Morning', slug: 'morning' },
  { id: '5', label: 'Essay', slug: 'essay' },
];

export const JOURNALS: Journal[] = [
  {
    id: 'vol-24',
    title: 'Vol.24 Morning Routine',
    subTitle: '일상의 온도를 높이는 아침의 기록',
    coverImage: '/images/cover-24.png',
    tags: ['morning', 'life'],
    publishedAt: '2026.04.01',
    relatedArticleIds: ['vol-23', 'vol-21'],
  },
  {
    id: 'vol-23',
    title: 'Vol.23 Coffee & Book',
    subTitle: '향기로운 시작과 활자의 만남',
    coverImage: '/images/cover-23.png',
    tags: ['life', 'essay'],
    publishedAt: '2026.03.15',
    relatedArticleIds: ['vol-24', 'vol-21'],
  },
  {
    id: 'vol-22',
    title: 'Vol.22 Interview: Artist Han',
    subTitle: '예술가와 나누는 고요한 대화',
    coverImage: '/images/cover-22.png',
    tags: ['interview'],
    publishedAt: '2026.02.28',
    relatedArticleIds: ['vol-24', 'vol-23'],
  },
  {
    id: 'vol-21',
    title: 'Vol.21 Spring Awakening',
    subTitle: '다시 깨어나는 계절의 소리',
    coverImage: '/images/cover-21.png',
    tags: ['morning', 'essay'],
    publishedAt: '2026.02.10',
    relatedArticleIds: ['vol-24', 'vol-22'],
  },
];
