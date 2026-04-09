"use client";

import { useState, useMemo, useCallback } from "react";
import {
  MEMBERSHIP_PLANS,
  MEMBERSHIP_BENEFITS,
  MEMBERSHIP_TAGS,
  MEMBERSHIP_ARTICLES,
} from "@/infrastructure/mocks/membershipData";
import type { MembershipArticle } from "@/domain/entities/Membership";

export function useMembership() {
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedArticle, setSelectedArticle] =
    useState<MembershipArticle | null>(null);
  const [selectedPeriodIndex, setSelectedPeriodIndex] = useState(0);

  const plans = MEMBERSHIP_PLANS;
  const benefits = MEMBERSHIP_BENEFITS;
  const tags = MEMBERSHIP_TAGS;

  const articles = useMemo(() => {
    if (selectedTag === "all") return MEMBERSHIP_ARTICLES;
    return MEMBERSHIP_ARTICLES.filter((a) => a.tags.includes(selectedTag));
  }, [selectedTag]);

  const handleTagClick = useCallback((slug: string) => {
    setSelectedTag(slug);
    setSelectedArticle(null);
  }, []);

  const handleArticleClick = useCallback((article: MembershipArticle) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBackToList = useCallback(() => {
    setSelectedArticle(null);
  }, []);

  const handlePeriodChange = useCallback((index: number) => {
    setSelectedPeriodIndex(index);
  }, []);

  return {
    plans,
    benefits,
    tags,
    articles,
    selectedTag,
    selectedArticle,
    selectedPeriodIndex,
    handleTagClick,
    handleArticleClick,
    handleBackToList,
    handlePeriodChange,
  };
}
