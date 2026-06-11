# MAINT-AI Lite — 공군 해커톤 (지정공모 군수①)

제8회 공군 창의·혁신 아이디어 공모 해커톤 지정공모 **(군수①) AI 기반 항공기 정비관리업무 자율화·자동화** 출전 자료 및 **웹 PoC**.

## 프로젝트 구조

```
maint-ai-hackathon/
├── docs/
│   ├── 01-concept-decision.md    # 컨셉 확정 (MAINT-AI Lite, 데모 시나리오)
│   ├── 02-idea-classification.md # 아이디어 분류 (핵심/부가/제외)
│   ├── 03-executive-summary.md   # 아이디어 요약서 (1페이지)
│   ├── 04-proposal.md            # 아이디어 기획서 (3 Pillar × 3단계 프레임)
│   ├── 05-differentiation.md     # 차별점·중복 검토
│   └── 06-dev-spec.md            # 개발/구축내용 · 기술요구사항
├── web/                          # 웹 PoC (Vite + React) ★ 메인
│   └── dist/                     # 빌드 결과물 (배포·데모용)
├── prototype/                    # Flutter PoC (레거시)
└── README.md
```

## 웹 PoC 실행

```bash
cd web
npm install
npm run dev      # 개발 서버 (http://localhost:5173)
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 미리보기
```

빌드 후 `web/dist/index.html`을 브라우저에서 바로 열거나, 정적 호스팅에 업로드하면 됩니다.

### PoC 화면

| 화면 | Pillar | 시연 |
|------|--------|------|
| 홈 | — | F-15K 기체 선택, 4기능 메뉴 |
| Write-up Copilot | 2 (메인) | "HUD 타겟팅 기호 간헐적 흔들림" → AI 가이드 |
| OCR 서식 맵퍼 | 1 | 촬영 → DELIIS 격자 매핑 |
| 시한품목 알람 | 3 | CAD/PAD D-Day 대시보드 |

## 접수 서류 매핑

| 공모 요구 서류 | 파일 |
|---------------|------|
| 아이디어 요약서 | `docs/03-executive-summary.md` |
| 아이디어 기획서 | `docs/04-proposal.md` |
| (실증) | `web/` 웹 PoC (`dist/` 빌드) |

## 참고

- [행사안내](https://rokaf.airforce.mil.kr/hackathon/1677/subview.do)
- 접수: www.공군해커톤.kr (5/26 ~ 6/27)
- 문의: 031-720-4291
