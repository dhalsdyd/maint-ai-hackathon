# MAINT-AI Lite 웹 PoC 배포 가이드

## 1. 로컬에서 빌드만 (가장 빠름)

```bash
cd web
npm install
npm run build
```

`web/dist/` 폴더가 생성됩니다.

- `dist/index.html` 더블클릭 → 브라우저에서 바로 실행
- 또는 `npm run preview` → http://localhost:4173

해커톤 제출 시 `dist` 폴더를 ZIP으로 묶어 첨부해도 됩니다.

---

## 2. GitHub Pages (추천 — URL 공유)

GitHub에 푸시한 뒤 **무료 HTTPS URL**로 데모 링크를 만들 수 있습니다.

### 최초 1회 설정

1. GitHub에 저장소 푸시 (예: `maint-ai-hackathon`)
2. 저장소 **Settings → Pages**
3. **Build and deployment → Source** 를 **GitHub Actions** 로 선택
4. `main` 브랜치에 push 하면 `.github/workflows/deploy-web.yml` 이 자동 빌드·배포

### 배포 URL

```
https://<GitHub아이디>.github.io/<저장소이름>/
```

예: `https://honggildong.github.io/maint-ai-hackathon/`

### 수동 재배포

GitHub 저장소 → **Actions** → **Deploy Web PoC** → **Run workflow**

---

## 3. Netlify (드래그 앤 드롭)

1. https://app.netlify.com 접속
2. `web/dist` 폴더를 사이트 영역에 드래그
3. 즉시 `https://xxxx.netlify.app` URL 발급

또는 CLI:

```bash
cd web
npm run build
npx netlify deploy --prod --dir=dist
```

---

## 4. Vercel

```bash
cd web
npm i -g vercel
vercel --prod
```

Root directory를 `web`으로 지정하면 됩니다.

---

## 참고

- `vite.config.js`의 `base: './'` 설정으로 **서브경로 배포**(GitHub Pages `/repo-name/`)에도 경로 문제 없음
- 폐쇄망 데모는 `dist` 폴더를 USB/내부망 정적 서버에 복사하면 됨
