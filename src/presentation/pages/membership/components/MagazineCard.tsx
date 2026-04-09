"use client";

import { motion } from "framer-motion";
import type { MembershipArticle } from "@/domain/entities/Membership";

interface Props {
  article: MembershipArticle;
  onClick: (article: MembershipArticle) => void;
}

export default function MagazineCard({ article, onClick }: Props) {
  return (
    <motion.article
      className="magazine-card"
      onClick={() => onClick(article)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      layout
    >
      <div className="magazine-card__image-wrapper">
        <img
          src={article.coverImage}
          alt={article.title}
          className="magazine-card__image"
          loading="lazy"
        />
        <div className="magazine-card__overlay">
          <span className="magazine-card__read-more">읽어보기</span>
        </div>
      </div>
      <div className="magazine-card__body">
        <div className="magazine-card__tags">
          {article.tags.map((tag) => (
            <span key={tag} className="magazine-card__tag">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="magazine-card__title">{article.title}</h3>
        <p className="magazine-card__excerpt">{article.excerpt}</p>
        <div className="magazine-card__meta">
          <span>{article.author}</span>
          <span className="magazine-card__dot">·</span>
          <span>{article.publishedAt}</span>
          <span className="magazine-card__dot">·</span>
          <span>{article.readTime} 읽기</span>
        </div>
      </div>
    </motion.article>
  );
}
