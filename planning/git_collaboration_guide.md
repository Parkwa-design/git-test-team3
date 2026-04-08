# 🤝 아침매거진 프로젝트 협업 가이드 (Git Workflow)

6명의 팀원이 효율적으로 작업하고 코드 충돌(Conflict)을 최소화하기 위한 **Feature Branch Workflow** 지침입니다.

---

## 1. 브랜치 전략 (Branch Strategy)

- **`main`**: 배포 가능한 상태의 최종 코드만 관리합니다. (직접 Push 금지)
- **`dev` / `develop`**: 팀원들의 작업이 중간에 합쳐지는 브랜치입니다.
- **`feature/기능명`**: 각자 맡은 페이지를 개발하는 브랜치입니다.

### 팀원별 추천 브랜치 네이밍
- **팀장(박화진)**: `feature/home-layout`
- **오하임**: `feature/journal`
- **서정빈**: `feature/mart`
- **정진아**: `feature/membership`
- **최예슬**: `feature/provision`
- **김종호**: `feature/mypage`

---

## 2. 권장 협업 프로세스 (Step-by-Step)

### Step 1: 작업 시작 전 (최신 코드 가져오기)
작업을 시작하기 전 항상 `main` 또는 `dev` 브랜치의 최신 상태를 유지해야 합니다.
```bash
git checkout dev
git pull origin dev
```

### Step 2: 내 브랜치 만들고 작업하기
```bash
git checkout -b feature/journal  # 예시
# ... 코드 수정 및 구현 ...
```

### Step 3: 커밋 및 푸시
작업이 어느 정도 완료되면 자신의 브랜치에 올립니다.
```bash
git add .
git commit -m "feat: 저널 리스트 페이지 레이아웃 구현"
git push origin feature/journal
```

### Step 4: Pull Request (PR) 생성
GitHub 웹사이트 접속 후, `Compare & pull request` 버튼을 눌러 자신의 브랜치(`feature/journal`)에서 상위 브랜치(`dev` 또는 `main`)로 병합해달라는 요청을 보냅니다.

### Step 5: 리뷰 및 병합 (Merge)
팀장님(박화진) 또는 다른 팀원이 코드를 확인한 후 `Merge pull request`를 눌러 합칩니다.

---

## 3. 주의 사항 (Best Practices)

1. **직접 `main`에 Push 하지 않기**: 반드시 PR을 거쳐야 코드가 깨지는 것을 방지할 수 있습니다.
2. **커밋 메시지 규칙**: 
   - `feat:` 새로운 기능 추가
   - `fix:` 버그 수정
   - `docs:` 문서 수정 (README 등)
   - `style:` 코드 포맷팅, 스타일 수정
3. **충돌 시 당황하지 말기**: 만약 같은 파일을 수정해 `Conflict`가 발생하면, 팀원과 상의하여 어느 코드를 남길지 결정하고 병합합니다. (우리 프로젝트는 페이지가 나뉘어 있어 충돌 확률이 낮습니다.)

---

## 4. 팀장님(박화진) 지금 바로 적용하기

현재 `dev.hj` 브랜치에 계시므로, 아래 명령어로 현재 작업을 안전하게 올리신 후 팀원들에게 가이드를 공유해주세요.

```bash
git add .
git commit -m "feat: 메인 홈 레이아웃 및 디자인 시스템 고도화 완료"
git push origin dev.hj
```
*(그 후 GitHub에서 dev.hj -> main 으로 PR을 생성하여 합치는 것을 권장합니다.)*
