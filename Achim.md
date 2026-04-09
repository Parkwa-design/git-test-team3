현재 프로젝트에서 사용 중인 프론트엔드 및 백엔드 언어와 기술 스택은 다음과 같습니다.

1. 프론트엔드 (Frontend)

- 언어: TypeScript (모든 주요 설정 파일과 소스 코드가 .ts, .tsx 확장자를 사용하고 있습니다.)
- 프레임워크: Next.js 14 (React)
     - package.json의 실행 스크립트(dev, build, start)가 Next.js를 기반으로 구성되어 있습니다.
     - src/app 디렉토리를 통해 App Router 방식을 사용 중입니다.
- 스타일링: TailwindCSS
- 기타 라이브러리: Framer Motion (애니메이션), Lucide React (아이콘)

2. 백엔드 (Backend)
- 언어: TypeScript (Node.js 기반)
- 프레임워크: Next.js Full-stack Capability
      - 현재 별도의 백엔드 서버 언어(Java, Python 등) 없이,                    Next.js의 API Routes 및 Server Components를 통해 백엔             드 로직을 처리하는 구조입니다.
- 인프라/DB:
     - 현재 프로젝트에 Supabase MCP 서버가 연결되어 있어, 인 증 및 데이터베이스로 Supabase를 활용할 수 있는 환경입니다.

3. 특이 사항 (Project Structure)
- 혼합 구조: 프로젝트 내부에 Vite 설정(vite.config.ts, main.tsx)과 Next.js 설정(next.config.mjs)이 공존하고 있으나, 현재 주력으로 실행되는 환경은 Next.js입니다.
- Clean Architecture: 사용자 규칙에 따라 domain, application, infrastructure, presentation 계층으로 코드가 분리되어 관리되고 있습니다.