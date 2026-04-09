"use client";

import { motion } from "framer-motion";
import type { MembershipPlan } from "@/domain/entities/Membership";

interface Props {
  plans: MembershipPlan[];
  selectedPeriodIndex: number;
  onPeriodChange: (index: number) => void;
}

export default function PlanComparison({
  plans,
  selectedPeriodIndex,
  onPeriodChange,
}: Props) {
  return (
    <section id="membership-plans" className="membership-plans">
      <div className="membership-plans__inner">
        <div className="membership-plans__grid">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              className={`plan-card ${plan.isRecommended ? "plan-card--recommended" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h3 className="plan-card__name">{plan.name}</h3>

              <ul className="plan-card__features">
                {plan.features.map((feat, i) => (
                  <li key={i} className="plan-card__feature">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8L6.5 11.5L13 4.5"
                        stroke={plan.isRecommended ? "#E8742A" : "#111"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {plan.periodOptions && (
                <div className="plan-card__toggle">
                  {plan.periodOptions.map((opt, i) => (
                    <button
                      key={opt.label}
                      className={`plan-card__toggle-btn ${selectedPeriodIndex === i ? "plan-card__toggle-btn--active" : ""}`}
                      onClick={() => onPeriodChange(i)}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              <div className="plan-card__pricing">
                <span className="plan-card__price">
                  {plan.periodOptions
                    ? plan.periodOptions[
                        selectedPeriodIndex
                      ].price.toLocaleString()
                    : plan.price.toLocaleString()}
                  원
                </span>
                <span className="plan-card__period">
                  /{" "}
                  {plan.periodOptions
                    ? plan.periodOptions[selectedPeriodIndex].label
                    : plan.period}
                </span>
              </div>

              {plan.originalPrice && (
                <p className="plan-card__original">
                  (월{" "}
                  {plan.periodOptions
                    ? plan.periodOptions[
                        selectedPeriodIndex
                      ].originalPrice?.toLocaleString()
                    : plan.originalPrice.toLocaleString()}
                  원)
                </p>
              )}

              <button
                className={`plan-card__cta ${plan.isRecommended ? "plan-card__cta--primary" : ""}`}
              >
                멤버십 가입하기
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
