# 📋 메인 홈 및 공통 레이아웃 상세 기획안

이 문서는 Achim 매거진 클론 프로젝트의 팀장(Project Leader)이 담당하는 메인 홈(`/`) 및 전체 공통 레이아웃에 대한 기획안입니다.

---

## 1. 공통 레이아웃 (Global Layout)
모든 페이지에서 유지될 일관된 사용자 경험(UX)과 브랜드 아이덴티티를 구축합니다.

### **Header (상단 네비게이션)**
- **로고**: 'Achim' 브랜드 고유 로고. 중앙 배치를 원칙으로 하며 클릭 시 홈으로 이동.
- **주요 메뉴**:
  - `Journal`: 매거진 콘텐츠
  - `Mart`: 상품 판매 커머스
  - `Membership`: 멤버십 안내
  - `Provision`: 오프라인 공간 정보
- **기능**: 
  - 스크롤 시 상단 고정(Sticky) 및 배경 변화(Glassmorphism 효과).
  - 모바일 대응을 위한 햄버거 메뉴 및 검색/마이페이지 유틸리티 아이콘.

### **Footer (하단 정보)**
- **브랜드 정보**: 회사명, 사업자 번호, 고객센터 등 법적 필수 정보.
- **소셜 채널**: 브랜드 인스타그램, 유튜브, 뉴스레터 바로가기.
- **네비게이션**: 개인정보처리방침, 이용약관 등 2차 링크.
- **디자인**: 텍스트 가독성을 고려한 차분한 무채색 계열 배경 사용.

---

## 2. 메인 홈 (`/`) 주요 섹션 구성
아침매거진 특유의 감성적이고 여유로운 분위기를 시각적으로 전달합니다.

### **Section 1: Hero Curation Banner**
- **목적**: 방문자에게 가장 먼저 브랜드의 현재 무드를 전달.
- **요소**: 고품질 와이드 이미지, 감성적인 메인 타이틀(Copy), 바로가기 버튼.
- **효과**: 페이지 진입 시 이미지 페이드인 및 텍스트 슬라이딩 애니메이션.

### **Section 2: Brand Story**
- **목적**: 아침매거진의 정체성(Identity) 설명.
- **요소**: 브랜드 가치를 담은 짧은 에세이 형태의 글귀와 상징적 오브제 이미지.
- **디자인**: 넓은 여백(Whitespace)을 활용하여 독서하는 듯한 고요한 경험 제공.

### **Section 3: Journal & Mart Preview**
- **목적**: 서비스의 핵심 기능을 탐색하도록 유도.
- **요소**: 
  - 최신 아티클 썸네일 카드 (Journal 연동용)
  - 추천 상품 카드 (Mart 연동용)
- **디자인**: 균형 잡힌 그리드 시스템(Grid System) 적용.

### **Section 4: Newsletter Subscription**
- **목적**: 재방문 유도 및 충성 고객 확보.
- **요소**: "매주 일요일 아침" 문구와 이메일 구독 입력 폼.

---

## 3. 디자인 시스템 (Design Tokens)
다른 팀원들이 공통으로 사용할 스타일의 기준을 정의합니다.

- **Colors**:
  - `Background`: #FDFDFD (Off-white)
  - `Text`: #222222 (Deep Charcoal)
  - `Point`: 각 서비스별 상징 컬러 (Soft Tone 권장)
- **Typography**:
  - `Title`: Serif 계열 (Classic & Premium)
  - `Body`: Sans-serif (Modern & Readable)
- **Grid & Spacing**: 8px 배수 시스템을 기본으로 하며, 과감한 여백 활용.

---

## 🏗️ 구현 전략 (Architecture)
1. **Presentation Layer**: `Layout` 컴포넌트를 만들어 전역 Header/Footer 관리.
2. **Infrastructure Layer**: 메인 배너 및 미리보기 카드에 사용될 Mockup 데이터 정의.
3. **Vanilla CSS**: CSS Variable을 활용한 전역 테마 설정 (`globals.css`).

---
*Last Updated: 2026-04-08*
