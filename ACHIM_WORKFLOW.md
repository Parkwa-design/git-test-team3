# 🌊 Achim Project Workflow & Coding Standards

This workflow defines the mandatory standards for the **Achim Magazine Clone Project**. All tasks must be cross-checked against this list to prevent technical debt and design inconsistency.

## 1. 🛠 Technical Stack
- **Framework**: Next.js 14.2+ (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: 
  - **Tailwind CSS v3** for utility classes.
  - **CSS Variables** defined in `src/app/globals.css` for theme colors.
  - **Vanilla CSS** for complex custom overrides.
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 2. 🎨 Design System Checklist
- [ ] **Background**: Use `--background` (`#faf8f5`) or `--secondary` (`#f5f2ee`).
- [ ] **Text**: Use `--foreground` (`#1a1a1a`) for main text, `--muted` (`#737373`) for secondary.
- [ ] **Point Color**: Use `--primary` (`#e65c00`).
- [ ] **Typography**:
  - Titles/Hero: **Serif** (`Cardo`, `serif`)
  - Body/Tabs: **Sans-serif** (`Pretendard`, `Inter`, `sans-serif`)
  - Line Height: Minimum **1.9** for body text.
- [ ] **UI Rules**:
  - **No Shadows**: `box-shadow` is strictly prohibited (except for certain popups).
  - **Linear Aesthetic**: All borders should be 0px radius (except buttons/pills).
  - **Pill Buttons**: `border-radius: 50px` for CTA buttons.
  - **Image Aspect Ratio**: Vertical **3:4** or **4:5** preferred.
  - **Hover Effects**: Suble scale (1.05) or color transition (0.4s+).

## 3. 🌿 Git & Collaboration
- [ ] **Branching**: Always branch off from `dev`.
- [ ] **Naming**: `feature/[page-name]` (e.g., `feature/journal`, `feature/mart`).
- [ ] **Commit Messages**:
  - `feat:` for new features.
  - `fix:` for bug fixes.
  - `style:` for design/formatting changes.
- [ ] **Merge**: Create a Pull Request (PR) to `dev` for review; do not push directly to `main`.

## 4. 📝 Pre-flight Check (Run before every command)
Before implementing any feature or fix, verify:
1. Is this the right branch?
2. Are all colors using CSS variables?
3. Is typography following the Serif/Sans-serif hybrid rules?
4. Is any shadow being used? (Remove if so).
5. Does the code follow the Next.js App Router pattern?

---
*Created per user request to maintain consistency.*
