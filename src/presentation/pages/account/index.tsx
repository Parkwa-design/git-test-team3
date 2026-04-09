"use client";

import React, { useState } from 'react';
import { accountMockData } from '@/infrastructure/mocks/accountMock';
import styles from './account.module.css';

type MenuKey =
  | 'orders'
  | 'wishlist'
  | 'subscription'
  | 'coupon'
  | 'points'
  | 'restock'
  | 'inquiry'
  | 'edit'
  | 'withdraw';

const navItems: { name: string; key: MenuKey }[] = [
  { name: '주문/예약 조회', key: 'orders' },
  { name: '위시리스트', key: 'wishlist' },
  { name: '정기구독관리', key: 'subscription' },
  { name: '쿠폰', key: 'coupon' },
  { name: '포인트', key: 'points' },
  { name: '재입고 알림', key: 'restock' },
  { name: '1:1 문의', key: 'inquiry' },
  { name: '정보 수정', key: 'edit' },
  { name: '회원탈퇴', key: 'withdraw' },
];

const AccountPage: React.FC = () => {
  const data = accountMockData;
  const user = data.user;
  const [activeMenu, setActiveMenu] = useState<MenuKey>('orders');

  return (
    <div className={styles.accountWrapper}>
      <main className={styles.accountMain}>
        <div className={styles.accountLayout}>

          {/* Left: Sidebar Navigation */}
          <aside className={styles.sidebar}>
            <nav className={styles.sidebarNav}>
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveMenu(item.key)}
                  className={activeMenu === item.key ? styles.sidebarLinkActive : styles.sidebarLink}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right: Main Content Area */}
          <div className={styles.content}>

            {/* Profile Card (항상 표시) */}
            <div className={styles.profileCard}>
              <div className={styles.profileInfo}>
                <div className={styles.profileAvatar} />
                <div className={styles.profileText}>
                  <h1><strong>{user.name}</strong> 님 안녕하세요.</h1>
                  <p>누적 구매금액: ₩{user.accumulatedAmount.toLocaleString()}</p>
                </div>
              </div>
              <div className={styles.profileStats}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>포인트</span>
                  <span className={styles.statValue}>{user.points.toLocaleString()}</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>쿠폰</span>
                  <span className={styles.statValue}>{user.coupons}</span>
                </div>
              </div>
            </div>

            {/* 메뉴별 콘텐츠 */}
            {activeMenu === 'orders' && <OrdersContent />}
            {activeMenu === 'wishlist' && <WishlistContent />}
            {activeMenu === 'subscription' && <SubscriptionContent />}
            {activeMenu === 'coupon' && <CouponContent />}
            {activeMenu === 'points' && <PointsContent />}
            {activeMenu === 'restock' && <RestockContent />}
            {activeMenu === 'inquiry' && <InquiryContent />}
            {activeMenu === 'edit' && <EditContent />}
            {activeMenu === 'withdraw' && <WithdrawContent />}

          </div>
        </div>
      </main>
    </div>
  );
};

/* ===================== 각 메뉴별 콘텐츠 컴포넌트 ===================== */

/** 주문/예약 조회 */
function OrdersContent() {
  const orders = accountMockData.orders;
  return (
    <section className={styles.orderSection}>
      <h2 className={styles.sectionTitle}>주문 조회</h2>
      {orders.length === 0 ? (
        <div className={styles.emptyState}>
          <p>주문 내역이 없습니다.</p>
        </div>
      ) : (
        <div>{/* order items */}</div>
      )}
    </section>
  );
}

/** 위시리스트 */
function WishlistContent() {
  return (
    <section className={styles.wishlistSection}>
      <h2 className={styles.sectionTitle}>위시리스트</h2>
      <div className={styles.emptyState}>
        <p>위시리스트에 담긴 상품이 없습니다.</p>
      </div>
    </section>
  );
}

/** 정기구독 관리 */
function SubscriptionContent() {
  const membership = accountMockData.membership;
  return (
    <section className={styles.subscriptionSection}>
      <h2 className={styles.sectionTitle}>정기구독 관리</h2>

      <div className={styles.subCard}>
        <div className={styles.subCardHeader}>
          <span className={styles.subPlanName}>{membership.planName}</span>
          <span className={styles.subStatus}>구독 중</span>
        </div>

        <div className={styles.subDetailRow}>
          <span className={styles.subDetailLabel}>다음 결제일</span>
          <span className={styles.subDetailValue}>{membership.nextRenewalDate} (D-{membership.dDay})</span>
        </div>
        <div className={styles.subDetailRow}>
          <span className={styles.subDetailLabel}>구독 시작일</span>
          <span className={styles.subDetailValue}>2024. 03. 15</span>
        </div>
        <div className={styles.subDetailRow}>
          <span className={styles.subDetailLabel}>결제 금액</span>
          <span className={styles.subDetailValue}>월 29,900원</span>
        </div>
        <div className={styles.subDetailRow}>
          <span className={styles.subDetailLabel}>배송 주기</span>
          <span className={styles.subDetailValue}>매월 1회</span>
        </div>

        <div className={styles.subBenefits}>
          <p className={styles.subBenefitsTitle}>이번 달 구독 혜택</p>
          {membership.benefits.map((b, i) => (
            <div key={i} className={styles.subBenefitItem}>{b}</div>
          ))}
        </div>

        <div className={styles.subActionRow}>
          <button className={styles.subBtn}>배송지 변경</button>
          <button className={styles.subBtn}>결제 수단 변경</button>
          <button className={styles.subBtn}>구독 일시정지</button>
        </div>
      </div>
    </section>
  );
}

/** 쿠폰 */
function CouponContent() {
  const coupons = [
    { name: '신규 가입 축하 쿠폰', discount: '10%', expiry: '2026. 06. 30' },
    { name: '봄맞이 시즌 쿠폰', discount: '5,000원', expiry: '2026. 04. 30' },
  ];
  return (
    <section className={styles.couponSection}>
      <h2 className={styles.sectionTitle}>쿠폰 ({coupons.length})</h2>
      {coupons.length === 0 ? (
        <div className={styles.emptyState}>
          <p>사용 가능한 쿠폰이 없습니다.</p>
        </div>
      ) : (
        coupons.map((c, i) => (
          <div key={i} className={styles.couponCard}>
            <div className={styles.couponInfo}>
              <h3>{c.name}</h3>
              <p>유효기간: {c.expiry}까지</p>
            </div>
            <span className={styles.couponDiscount}>{c.discount}</span>
          </div>
        ))
      )}
    </section>
  );
}

/** 포인트 */
function PointsContent() {
  const user = accountMockData.user;
  const pointHistory = [
    { date: '2026. 04. 01', desc: '회원가입 축하 적립', change: '+1,000', balance: '1,000', type: 'plus' },
    { date: '2026. 03. 28', desc: '상품 구매 적립 (콜드브루 디카페인)', change: '+500', balance: '500', type: 'plus' },
    { date: '2026. 03. 15', desc: '상품 구매 사용', change: '-200', balance: '0', type: 'minus' },
  ];

  return (
    <section className={styles.pointsSection}>
      <h2 className={styles.sectionTitle}>포인트</h2>

      <div className={styles.pointsSummary}>
        <div className={styles.pointsTotal}>
          <span className={styles.pointsTotalLabel}>사용 가능 포인트</span>
          <span className={styles.pointsTotalValue}>
            {user.points.toLocaleString()}<span className={styles.pointsTotalUnit}>P</span>
          </span>
        </div>
        <div className={styles.pointsBreakdown}>
          <div className={styles.pointsBreakdownItem}>
            <span className={styles.pointsBreakdownLabel}>적립 예정</span>
            <span className={styles.pointsBreakdownValue}>0 P</span>
          </div>
          <div className={styles.pointsBreakdownItem}>
            <span className={styles.pointsBreakdownLabel}>소멸 예정 (30일 내)</span>
            <span className={styles.pointsBreakdownValue}>0 P</span>
          </div>
        </div>
      </div>

      <div className={styles.pointsTable}>
        <div className={styles.pointsTableHeader}>
          <span className={styles.pointsCol1}>날짜</span>
          <span className={styles.pointsCol2}>내용</span>
          <span className={styles.pointsCol3}>변동</span>
          <span className={styles.pointsCol4}>잔액</span>
        </div>
        {pointHistory.map((item, i) => (
          <div key={i} className={styles.pointsTableRow}>
            <span className={styles.pointsCol1}>{item.date}</span>
            <span className={styles.pointsCol2}>{item.desc}</span>
            <span className={`${styles.pointsCol3} ${item.type === 'plus' ? styles.pointsPlus : styles.pointsMinus}`}>
              {item.change}
            </span>
            <span className={styles.pointsCol4}>{item.balance}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/** 재입고 알림 */
function RestockContent() {
  return (
    <section className={styles.restockSection}>
      <h2 className={styles.sectionTitle}>재입고 알림</h2>
      <div className={styles.emptyState}>
        <p>재입고 알림 신청 내역이 없습니다.</p>
      </div>
    </section>
  );
}

/** 1:1 문의 */
function InquiryContent() {
  const inquiries = [
    { title: '배송 지연 관련 문의', date: '2026. 03. 20', status: 'done' },
    { title: '상품 교환 요청', date: '2026. 04. 05', status: 'pending' },
  ];

  return (
    <section className={styles.inquirySection}>
      <h2 className={styles.sectionTitle}>1:1 문의</h2>
      <button className={styles.inquiryBtn}>문의 작성하기</button>
      {inquiries.length === 0 ? (
        <div className={styles.emptyState}>
          <p>문의 내역이 없습니다.</p>
        </div>
      ) : (
        inquiries.map((item, i) => (
          <div key={i} className={styles.inquiryCard}>
            <div className={styles.inquiryCardLeft}>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
            <span className={item.status === 'done' ? styles.inquiryStatusDone : styles.inquiryStatusPending}>
              {item.status === 'done' ? '답변 완료' : '답변 대기'}
            </span>
          </div>
        ))
      )}
    </section>
  );
}

/** 정보 수정 */
function EditContent() {
  const user = accountMockData.user;
  return (
    <section className={styles.editSection}>
      <h2 className={styles.sectionTitle}>정보 수정</h2>
      <div className={styles.editCard}>
        <div className={styles.editRow}>
          <span className={styles.editLabel}>이름</span>
          <span className={styles.editValue}>{user.name}</span>
          <button className={styles.editBtn}>변경</button>
        </div>
        <div className={styles.editRow}>
          <span className={styles.editLabel}>이메일</span>
          <span className={styles.editValue}>{user.email}</span>
          <button className={styles.editBtn}>변경</button>
        </div>
        <div className={styles.editRow}>
          <span className={styles.editLabel}>비밀번호</span>
          <span className={styles.editValue}>••••••••</span>
          <button className={styles.editBtn}>변경</button>
        </div>
        <div className={styles.editRow}>
          <span className={styles.editLabel}>연락처</span>
          <span className={styles.editValue}>010-****-1234</span>
          <button className={styles.editBtn}>변경</button>
        </div>
        <div className={styles.editRow}>
          <span className={styles.editLabel}>배송지</span>
          <span className={styles.editValue}>서울특별시 송파구 위례성대로 2길 8</span>
          <button className={styles.editBtn}>변경</button>
        </div>
        <div className={styles.editRow}>
          <span className={styles.editLabel}>회원등급</span>
          <span className={styles.editValue}>{user.membershipLevel}</span>
        </div>
        <div className={styles.editRow}>
          <span className={styles.editLabel}>가입일</span>
          <span className={styles.editValue}>{user.joinedAt}</span>
        </div>
      </div>
    </section>
  );
}

/** 회원탈퇴 */
function WithdrawContent() {
  return (
    <section className={styles.withdrawSection}>
      <h2 className={styles.sectionTitle}>회원탈퇴</h2>
      <div className={styles.withdrawCard}>
        <p>
          회원 탈퇴 시 모든 개인 정보와 서비스 이용 기록이 삭제됩니다.<br />
          보유 중인 포인트 및 쿠폰은 모두 소멸되며, 복구할 수 없습니다.<br />
          정기구독 중인 상품이 있을 경우, 탈퇴 전 구독 해지를 먼저 진행해 주세요.<br />
          탈퇴 후 동일 이메일로 재가입은 30일 이후 가능합니다.
        </p>
        <button className={styles.withdrawBtn}>회원 탈퇴 신청</button>
      </div>
    </section>
  );
}

export default AccountPage;
