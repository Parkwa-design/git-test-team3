# 📋 [Approval Request] Journal Page Restoration & App Router Migration

**To: Team Leader (박화진)**
**From: 오하임 (Oh Ha-im)**

안녕하세요 팀장님, 저널 페이지 복구 및 최신 프로젝트 아키텍처 반영 작업을 완료하여 승인 요청 드립니다. 

본 작업은 기존 `dev.hi` 브랜치의 작업물을 유실 없이 최신 `dev` 브랜치의 Next.js App Router 구조로 이식하는 데 중점을 두었습니다.

---

## 1. 주요 변경 내용 (Summary of Changes)
- **라우팅 이식**: 기존 `src/presentation/pages/journal` 로직을 `src/app/journal`로 이동하여 App Router 아키텍처를 준수했습니다.
*   **엔티티 및 데이터 복구**: `Journal`, `Tag` 데이터 인터페이스와 모의(Mock) 데이터를 원상복구했습니다.
*   **UI 컴포넌트 복원**: `TagNavigation`, `JournalCard`, `ReaderFrame` 등 기존의 모든 핵심 컴포넌트를 이식했습니다.
*   **인터랙션 구현**: `framer-motion`을 활용한 태그 필터링 및 아티클 상세 전환 기능을 재구축했습니다.

## 2. 디자인 시스템 준수 (Design System Compliance)
- [x] **Typography**: 제목 `Cardo` (Serif), 본문 `Inter/Pretendard` (Sans) 혼용.
- [x] **Spacing**: 본문 행간 `1.9` 확보 및 섹션 간 넉넉한 여백 적용.
- [x] **Colors**: 전역 CSS 변수(`--background`, `--foreground`)를 활용하여 스타일 일관성 유지.
- [x] **No Shadows**: `box-shadow`를 배제하고 면과 선 위주의 2D 스타일을 고수했습니다.

## 3. 기술적 특이사항 (Technical Overview)
*   **Client Component**: 인터랙티브한 특성을 고려하여 `JournalClient.tsx`를 클라이언트 컴포넌트로 분리하여 구현했습니다.
*   **CSS 전역 변수**: 기존 스타일 가이드의 개별 변수를 프로젝트 통합 변수와 동기화했습니다.

---

## 🚀 향후 계획 (Next Steps)
팀장님의 승인 가이드에 따라 `feature/journal` 브랜치로 커밋 및 푸시를 진행할 준비가 되어 있습니다. 확인 후 피드백 부탁드립니다!
