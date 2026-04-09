<!-- BEGIN:nextjs-agent-rules -->
# 🌊 Achim Project Standards (Next.js 14 App Router)

이미 학습된 Next.js 지식보다 아래의 **프로젝트 전용 룰**을 최우선으로 따릅니다.

## 1. 🛠 Technical Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: TailwindCSS (Utility) + CSS Variables (`globals.css`)
- **Animation/Icons**: Framer Motion, Lucide React

## 2. 🎨 Design System (MANDATORY)
- **Typography**: 
  - 제목/영문: **Serif** (`Cardo`, `serif`)
  - 본문/탭: **Sans-serif** (`Pretendard`, `Inter`, `sans-serif`)
  - **Line Height**: 본문 최소 **1.9** 이상 유지
- **UI Rules**:
  - **No Shadows**: `box-shadow` 사용 금지 (플랫한 이미지 지향)
  - **Linear Aesthetic**: 모든 경계면 `border-radius: 0px` (CTA 버튼/Pill 제외)
  - **Pill Buttons**: 주요 버튼에는 `border-radius: 50px` 적용
- **Colors**: `src/app/globals.css`의 CSS 변수(`--background`, `--primary`, `--foreground`)만 사용

## 3. 🌿 Architecture (Clean Architecture)
코드는 반드시 다음 계층 구조에 따라 분리하여 작성합니다:
- `domain`: 엔티티 및 비즈니스 로직
- `infrastructure`: 외부 API 호출, DB(Supabase) 연동, Mocks
- `presentation`: UI 컴포넌트, 페이지 레이아웃, 스타일
- `application`: 계층 간 조율 (필요 시)

## 4. 📝 Workflow
- 모든 새로운 기능은 `dev` 브랜치에서 분기합니다.
- 변경 사항은 반드시 `ACHIM_WORKFLOW.md` 체크리스트를 통해 자가 검토합니다.

<!-- END:nextjs-agent-rules -->

