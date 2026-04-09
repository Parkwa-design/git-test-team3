import React from 'react';
import Link from 'next/link';

// -------------------------------------------------------------
// Component: Sidebar Navigation
// -------------------------------------------------------------
const SidebarNav = () => {
  const navItems = [
    { name: 'My Profile', active: true },
    { name: 'Dashboard', active: false },
    { name: 'Subscription', active: false },
    { name: 'Order History', active: false },
    { name: 'Settings', active: false },
  ];

  return (
    <nav className="flex flex-col space-y-6 pt-4">
      {navItems.map((item, idx) => (
        <Link
          key={idx}
          href="#"
          className={`text-sm uppercase tracking-widest ${
            item.active ? 'font-bold text-textMain' : 'text-gray-400 hover:text-textMain'
          } transition-colors`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

// -------------------------------------------------------------
// Component: Section 1 - Profile & Membership Header
// -------------------------------------------------------------
const ProfileHeader = () => {
  return (
    <section className="border-b border-borderLight pb-16 mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs tracking-widest uppercase border border-textMain px-2 py-1">
              Morning Owner ✦
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-textMain mb-4">
            Good morning, 지민님.
          </h1>
          <p className="text-gray-500 font-sans font-light text-lg">
            오늘도 고요하고 아름다운 아침을 맞이하셨나요?
          </p>
        </div>
        
        <div className="text-left md:text-right">
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-2">Next Renewal</p>
          <p className="font-serif text-4xl">D-14</p>
          <p className="text-xs text-gray-400 mt-2">2026. 04. 22 갱신 예정</p>
        </div>
      </div>
    </section>
  );
};

// -------------------------------------------------------------
// Component: Section 2 - Morning Owner Dashboard
// -------------------------------------------------------------
const Dashboard = () => {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-serif mb-8 border-b border-borderLight pb-4">Membership Dashboard</h2>
      
      {/* Grid Layout using thin lines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-borderLight">
        
        {/* Cell 1: Benefits */}
        <div className="p-8 lg:p-12 border-b border-r border-borderLight flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">This Month's Benefits</h3>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start">
                <span className="mr-3 text-gray-300">—</span>
                스페셜 에디션 원두 10% 프리오더 (4.15 오픈)
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-300">—</span>
                시크릿 샵 '오포잇(Opoet)' 무료 배송 쿠폰 2매
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-gray-300">—</span>
                프라이빗 온라인 북토크 우선 예약권
              </li>
            </ul>
          </div>
        </div>

        {/* Cell 2: Unread Notifications */}
        <div className="p-8 lg:p-12 border-b border-r border-borderLight flex flex-col justify-between h-full">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Unread Magazines</h3>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-xs text-gray-400 mb-1">Vol 42. 봄의 침묵</p>
                <p className="font-serif text-lg group-hover:underline underline-offset-4 decoration-1">
                  아침을 여는 소리에 관하여
                </p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-xs text-gray-400 mb-1">Weekly Letter</p>
                <p className="font-serif text-lg group-hover:underline underline-offset-4 decoration-1">
                  당신의 세 번째 봄을 맞이하며
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cell 3: Secret Shop Access */}
        <div className="p-8 lg:p-12 border-b border-r border-borderLight flex flex-col justify-between bg-gray-50 h-full md:col-span-2 lg:col-span-1">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Secret Shop</h3>
            <p className="font-serif text-2xl mb-4 leading-tight">
              회원 전용<br/>시크릿 샵 입장
            </p>
            <p className="text-sm font-light text-gray-500 mb-12">
              정기구독 멤버십들만 접근 가능한 한정 굿즈와 도서를 만나보세요.
            </p>
          </div>
          <button className="w-full uppercase tracking-widest text-xs border border-textMain py-4 hover:bg-textMain hover:text-white transition-colors duration-300">
            Enter Shop
          </button>
        </div>

      </div>
    </section>
  );
};

// -------------------------------------------------------------
// Component: Section 3 - Order & Subscription
// -------------------------------------------------------------
const OrderSubscription = () => {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-serif mb-12 border-b border-borderLight pb-4">Subscription & Orders</h2>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Subscription Info */}
        <div className="flex-1">
          <h3 className="text-sm tracking-widest uppercase text-gray-400 mb-8">Current Subscription</h3>
          
          <div className="bg-textMain text-white p-10 lg:p-14">
            <h4 className="font-serif text-2xl mb-8">스탠다드 매거진 & 커피 플랜</h4>
            
            <div className="grid grid-cols-2 gap-8 mb-12 font-light text-sm">
              <div>
                <p className="text-gray-400 mb-2">다음 결제일</p>
                <p>2026. 04. 22</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">배송 예정일</p>
                <p>2026. 04. 25</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">결제 수단</p>
                <p>현대카드 (끝자리 1234)</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">배송지</p>
                <p>서울시 강남구 테헤란로</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm">
              <button className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                구독 변경
              </button>
              <button className="underline underline-offset-4 decoration-1 hover:text-gray-300 transition-colors">
                쉬어가기
              </button>
            </div>
          </div>
        </div>

        {/* Order History */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm tracking-widest uppercase text-gray-400">Order History</h3>
            <button className="text-xs uppercase tracking-widest hover:underline underline-offset-4">View All</button>
          </div>
          
          <div className="space-y-0 border-t border-borderLight">
            {/* Order Item 1 */}
            <div className="py-8 flex gap-6 border-b border-borderLight">
              <div className="w-24 h-32 bg-gray-200 grayscale opacity-80 overflow-hidden relative">
                {/* Placeholder Image using CSS gradient fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <span className="text-xs text-gray-400 mb-2">2026. 03. 15</span>
                <p className="font-serif text-lg mb-4">리넨 패브릭 포스터 - 새벽의 안개</p>
                <p className="text-sm text-textMain tracking-widest uppercase">배송 완료</p>
              </div>
            </div>

            {/* Order Item 2 */}
            <div className="py-8 flex gap-6 border-b border-borderLight">
              <div className="w-24 h-32 bg-gray-200 grayscale opacity-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <span className="text-xs text-gray-400 mb-2">2026. 02. 28</span>
                <p className="font-serif text-lg mb-4">콜드브루 디카페인 (500ml)</p>
                <p className="text-sm text-textMain tracking-widest uppercase">배송 완료</p>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

const AccountPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-textMain selection:bg-black selection:text-white pb-32">
      {/* Top Header Placeholder (Logo, etc) */}
      <header className="border-b border-borderLight px-6 lg:px-16 py-8 flex justify-between items-center bg-white sticky top-0 z-10">
        <div className="font-serif text-2xl font-bold tracking-tighter">OPOET.</div>
        <div className="text-xs tracking-widest uppercase space-x-8 hidden md:block">
          <Link href="/journal" className="hover:text-gray-500">Magazine</Link>
          <Link href="/mart" className="hover:text-gray-500">Shop</Link>
          <Link href="/about" className="hover:text-gray-500">About</Link>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="max-w-screen-2xl mx-auto px-6 lg:px-16 mt-16 md:mt-24">
        <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
          
          {/* Left Column: Navigation */}
          <aside className="w-full md:w-48 lg:w-64 flex-shrink-0">
            <div className="sticky top-40">
              <h2 className="text-xl font-serif mb-8 border-b border-borderLight pb-4">My Account</h2>
              <SidebarNav />
            </div>
          </aside>

          {/* Right Column: Content */}
          <div className="flex-1 w-full max-w-4xl">
            <ProfileHeader />
            <Dashboard />
            <OrderSubscription />
          </div>

        </div>
      </main>
    </div>
  );
};

export default AccountPage;
