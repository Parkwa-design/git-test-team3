"use client";

import { motion } from "framer-motion";
import type { MembershipArticle } from "@/domain/entities/Membership";

interface Props {
  article: MembershipArticle;
  onBack: () => void;
}

export default function ArticleDetail({ article, onBack }: Props) {
  return (
    <motion.div
      className="article-detail"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <button className="article-detail__back" onClick={onBack}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M13 4L7 10L13 16"
            stroke="#111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>목록으로 돌아가기</span>
      </button>

      <div className="article-detail__hero">
        <img
          src={article.coverImage}
          alt={article.title}
          className="article-detail__cover"
        />
      </div>

      <div className="article-detail__header">
        <div className="article-detail__tags">
          {article.tags.map((tag) => (
            <span key={tag} className="article-detail__tag">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="article-detail__title">{article.title}</h1>
        <p className="article-detail__subtitle">{article.subtitle}</p>
        <div className="article-detail__meta">
          <span>{article.author}</span>
          <span className="article-detail__dot">·</span>
          <span>{article.publishedAt}</span>
          <span className="article-detail__dot">·</span>
          <span>{article.readTime} 읽기</span>
        </div>
      </div>

      <div className="article-detail__divider" />

      <div
        className="article-detail__content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <div className="article-detail__footer">
        <div className="article-detail__divider" />
        <p className="article-detail__footer-text">
          이 콘텐츠는 Achim 멤버십 회원 전용입니다.
        </p>
        <button
          className="article-detail__join-cta"
          onClick={() => {
            document
              .getElementById("membership-plans")
              ?.scrollIntoView({ behavior: "smooth" });
            onBack();
          }}
        >
          멤버십 가입하고 더 많은 콘텐츠 읽기
        </button>
      </div>
    </motion.div>
  );
}
