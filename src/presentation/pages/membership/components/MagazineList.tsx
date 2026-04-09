"use client";

import { motion, AnimatePresence } from "framer-motion";
import type {
  MembershipArticle,
  MembershipTag,
} from "@/domain/entities/Membership";
import TagFilter from "./TagFilter";
import MagazineCard from "./MagazineCard";
import ArticleDetail from "./ArticleDetail";

interface Props {
  tags: MembershipTag[];
  selectedTag: string;
  articles: MembershipArticle[];
  selectedArticle: MembershipArticle | null;
  onTagClick: (slug: string) => void;
  onArticleClick: (article: MembershipArticle) => void;
  onBackToList: () => void;
}

export default function MagazineList({
  tags,
  selectedTag,
  articles,
  selectedArticle,
  onTagClick,
  onArticleClick,
  onBackToList,
}: Props) {
  return (
    <section className="membership-magazine">
      <div className="membership-magazine__inner">
        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            <motion.div
              key="magazine-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="membership-magazine__header"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="membership-magazine__divider" />
                <h2 className="membership-magazine__title">
                  Members&apos; Magazine
                </h2>
                <p className="membership-magazine__subtitle">
                  모닝 오너만을 위한 큐레이션 콘텐츠
                </p>
              </motion.div>

              <TagFilter
                tags={tags}
                selectedTag={selectedTag}
                onTagClick={onTagClick}
              />

              <motion.div className="magazine-grid" layout>
                <AnimatePresence>
                  {articles.map((article) => (
                    <MagazineCard
                      key={article.id}
                      article={article}
                      onClick={onArticleClick}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ) : (
            <ArticleDetail
              key="article-detail"
              article={selectedArticle}
              onBack={onBackToList}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
