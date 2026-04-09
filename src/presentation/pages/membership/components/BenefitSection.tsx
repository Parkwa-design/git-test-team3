"use client";

import { motion } from "framer-motion";
import type { MembershipBenefit } from "@/domain/entities/Membership";

interface Props {
  benefits: MembershipBenefit[];
}

export default function BenefitSection({ benefits }: Props) {
  return (
    <section className="membership-benefits">
      <div className="membership-benefits__inner">
        <motion.div
          className="membership-benefits__header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="membership-benefits__divider" />
          <h2 className="membership-benefits__title">Benefits</h2>
          <p className="membership-benefits__subtitle">
            모닝 오너가 된다면 다음과 같은 혜택을 누리실 수 있어요!
          </p>
        </motion.div>

        <div className="membership-benefits__list">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              className={`benefit-item ${benefit.direction === "right" ? "benefit-item--reverse" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="benefit-item__illustration">
                <div className="benefit-item__illustration-placeholder">
                  <span className="benefit-item__illustration-number">
                    {benefit.id}
                  </span>
                </div>
              </div>
              <div className="benefit-item__content">
                <span className="benefit-item__number">{benefit.id}.</span>
                <h3 className="benefit-item__title">{benefit.title}</h3>
                <p className="benefit-item__desc">{benefit.description}</p>
                {benefit.linkText && (
                  <a href={benefit.linkUrl} className="benefit-item__link">
                    {benefit.linkText}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
