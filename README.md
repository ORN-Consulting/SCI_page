# 과학기술인협동조합 웹사이트

과학기술인협동조합의 공식 웹사이트입니다. React + Vite + Tailwind CSS v4 + Supabase로 구성되어 있습니다.

---

## 기술 스택

- **React 19** — UI 컴포넌트
- **Vite** — 빌드 도구
- **Tailwind CSS v4** — 스타일링
- **Supabase** — 인증 및 데이터베이스
- **React Router v7** — 페이지 라우팅
- **gh-pages** — 배포

---

## 시작하기

### 1. 레포지토리 클론
```bash
git clone https://github.com/1swipe1/SCI_page.git
cd SCI_page
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 환경변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 아래 내용을 입력합니다.
```
VITE_SUPABASE_URL=본인의_supabase_url
VITE_SUPABASE_ANON_KEY=본인의_anon_key
```
> `.env` 파일은 보안상 레포지토리에 포함되지 않습니다. 프로젝트 관리자에게 별도로 전달받으세요.

### 4. 개발 서버 실행
```bash
npm run dev
```

### 5. 배포
```bash
npm run deploy
```
GitHub Pages에 자동으로 빌드 및 배포됩니다.

---

## 페이지 구성

### 메인 (/)
- 히어로 배너 (풀스크린 슬라이드)
- 섹션 2: 조합 소개 텍스트
- 섹션 3: 사업 분야 카드 3종
- 섹션 4: 조합활동 소개 (이미지 + 텍스트)

### 조합 소개 (/about)
- 히어로 배너
- 탭바 (인사말 / 소개 / 조직도) — 스크롤 연동
- 인사말: 조합 설립 취지 및 소개문
- 소개: 이미지 + 본문
- 조직도: 대표 1인 + 하위 5인 카드

### 조합원 소개 (/members)
- 히어로 배너
- 조합원 카드 그리드 (3열) — 증명사진 비율 이미지, 이름/직책/경력/전문분야

### 갤러리 (/gallery)
- 히어로 배너
- 탭바 (사업 분야 소개 / 조합 활동)
- **사업 분야 소개**: 카테고리+구분선+제목 / 본문+VIEW MORE 카드 목록 (짝수 행 배경색 구분)
- **조합 활동**: 대표 활동 소개 카드 3종 (호버 슬라이드 효과) + 지난 활동 그리드

### 사업 분야 상세 (/business)
- 갤러리 VIEW MORE 버튼으로 진입
- 히어로 배너
- 서브 탭바 6종 (기술창업 및 사업화 등)
- 인용 카드 + 본문 상세 내용

### 공지사항 (/notice)
- 히어로 배너
- 게시판 테이블 (번호 / 제목 / 날짜 / 조회수)
- 중요 공지 상단 고정
- Supabase `notices` 테이블에서 데이터 로드
- 페이지네이션

### 공지사항 상세 (/notice/:id)
- 히어로 배너
- 제목 / 작성일 / 조회수
- 본문 내용 + 첨부파일 영역
- 이전글 / 다음글 내비게이션

### 문의하기 (/inquiry)
- 히어로 배너 (검정 단색 배경)
- 문의 폼

### 로그인 (/login)
- 이메일 / 비밀번호 입력
- 로그인 유지 토글
- 회원가입 / 비밀번호 찾기 링크
- Supabase Auth 연동

### 회원가입 (/signup)
- 이름 / 이메일 / 비밀번호 입력
- Supabase Auth 연동

---

## Supabase 테이블 구조

### notices
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | int8 | 기본키 |
| title | text | 공지 제목 |
| date | text | 작성일 (YYYY-MM-DD) |
| views | int4 | 조회수 |
| important | bool | 중요 공지 여부 |

더미 데이터 삽입 예시:
```sql
INSERT INTO notices (title, date, views, important) VALUES
  ('[공지] 2026년 정기총회 개최 안내', '2026-04-01', 0, true),
  ('4월 조합원 네트워킹 행사 안내', '2026-04-02', 0, false),
  ('기술창업 컨설팅 신청 접수 안내', '2026-04-03', 0, false),
  ('2026년 상반기 교육 프로그램 일정 공개', '2026-04-04', 0, false);
```

---

## 프로젝트 구조

```
src/
├── assets/          # 로고 이미지 등 정적 파일
├── components/
│   ├── Header.jsx   # 고정 헤더 (드롭다운 메뉴, 스크롤 감지)
│   └── Footer.jsx   # 푸터 (네비게이션 + 연락처)
├── layouts/
│   └── Layout.jsx   # Header + Outlet + Footer 레이아웃
├── lib/
│   └── supabase.js  # Supabase 클라이언트 초기화
└── pages/
    ├── Main.jsx
    ├── About.jsx
    ├── Members.jsx
    ├── Gallery.jsx
    ├── BusinessDetail.jsx
    ├── Notice.jsx
    ├── NoticeDetail.jsx
    ├── Inquiry.jsx
    ├── Login.jsx
    └── Signup.jsx
```
