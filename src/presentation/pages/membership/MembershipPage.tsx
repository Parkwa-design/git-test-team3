"use client";

import { useMembership } from "./hooks/useMembership";
import MembershipHero from "./components/MembershipHero";
import PlanComparison from "./components/PlanComparison";
import BenefitSection from "./components/BenefitSection";
import MagazineList from "./components/MagazineList";
import "./styles/membership.css";

export default function MembershipPage() {
  const {
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
  } = useMembership();

  return (
    <div className="achim-membership-scope">
      <MembershipHero />
      <PlanComparison
        plans={plans}
        selectedPeriodIndex={selectedPeriodIndex}
        onPeriodChange={handlePeriodChange}
      />
      <BenefitSection benefits={benefits} />
      <MagazineList
        tags={tags}
        selectedTag={selectedTag}
        articles={articles}
        selectedArticle={selectedArticle}
        onTagClick={handleTagClick}
        onArticleClick={handleArticleClick}
        onBackToList={handleBackToList}
      />
    </div>
  );
}
