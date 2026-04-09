import { AccountData } from "@/domain/entities/Account";

export const accountMockData: AccountData = {
  user: {
    id: "user_01",
    name: "아침해가 빛나는",
    email: "jongho@example.com",
    membershipLevel: "Morning Owner ✦",
    joinedAt: "2024. 03. 15",
    accumulatedAmount: 0,
    points: 1000,
    coupons: 0,
  },
  membership: {
    planName: "스탠다드 매거진 & 커피 플랜",
    nextRenewalDate: "2026. 04. 22",
    dDay: 14,
    benefits: [
      "스페셜 에디션 원두 10% 프리오더 (4.15 오픈)",
      "시크릿 샵 '오포잇(Opoet)' 무료 배송 쿠폰 2매",
      "프라이빗 온라인 북토크 우선 예약권",
    ],
  },
  orders: [],
  unreadMagazines: [
    {
      id: "mag_42",
      vol: "Vol 42. 봄의 침묵",
      title: "아침을 여는 소리에 관하여",
    },
    {
      id: "mag_weekly",
      vol: "Weekly Letter",
      title: "당신의 세 번째 봄을 맞이하며",
    },
  ],
};
