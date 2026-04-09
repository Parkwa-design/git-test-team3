export interface UserProfile {
  id: string;
  name: string;
  email: string;
  membershipLevel: string; // e.g., 'Morning Owner', 'Basic'
  joinedAt: string;
  accumulatedAmount: number;
  points: number;
  coupons: number;
}

export interface MembershipInfo {
  planName: string;
  nextRenewalDate: string;
  dDay: number;
  benefits: string[];
}

export interface OrderItem {
  id: string;
  date: string;
  productName: string;
  imageUrl: string;
  status: string; // e.g., '배송 완료', '배송 중'
}

export interface UnreadMagazine {
  id: string;
  vol: string;
  title: string;
}

export interface AccountData {
  user: UserProfile;
  membership: MembershipInfo;
  orders: OrderItem[];
  unreadMagazines: UnreadMagazine[];
}
