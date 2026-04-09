"use client";

import { motion } from "framer-motion";

export default function MembershipHero() {
  const scrollToPlans = () => {
    document
      .getElementById("membership-plans")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="membership-hero">
      <motion.div
        className="membership-hero__inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="membership-hero__title">Membership</h1>
        <p className="membership-hero__desc">
          Achim 멤버십에 가입하시면 '모닝 오너(Morning Owner)'로서
          <br />
          다양한 혜택을 누리고 커뮤니티 프로그램에 참여하실 수 있습니다.
        </p>
        <button className="membership-hero__cta" onClick={scrollToPlans}>
          멤버십 둘러보기
        </button>
      </motion.div>
    </section>
  );
}
