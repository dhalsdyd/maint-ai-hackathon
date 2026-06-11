# 제출 자료 이미지 삽입 가이드

생성된 이미지는 `docs/assets/` 폴더에 있습니다. HWP·PPT·PDF에 아래 위치에 삽입하세요.

---

## 이미지 목록

| 파일 | 용도 | 삽입 위치 |
|------|------|----------|
| `maint-ai-architecture.png` | **시스템 아키텍처** (3 Pillar + 폐쇄망) | 기획서 §9 기술 아키텍처 / 발표 2슬라이드 |
| `maint-ai-as-is-to-be.png` | **As-Is → To-Be** 비교 | 요약서 배경·필요성 / 기획서 §2 |
| `maint-ai-app-mockup.png` | **앱 UI 목업** (데모 화면) | 요약서 실현가능성 / 발표 표지·데모 소개 |

---

## 문서별 삽입 권장

### 아이디어 요약서 (1페이지, HWP)

```
[상단] 아이디어명 + maint-ai-app-mockup.png (작게, 우측)
[중단] 아이디어 개요 텍스트
[하단] maint-ai-as-is-to-be.png (가로 전체)
```

### 아이디어 기획서 (HWP)

| 섹션 | 이미지 |
|------|--------|
| §2 제안 개요 | `maint-ai-as-is-to-be.png` |
| §3 핵심 기능 | `maint-ai-architecture.png` |
| §8 실현 계획 | `maint-ai-app-mockup.png` + 데모 URL |

### 3분 발표 PPT (5장 구성)

1. **표지** — 아이디어명 + `maint-ai-app-mockup.png`
2. **문제** — As-Is pain points (텍스트) + `maint-ai-as-is-to-be.png` 좌측
3. **해결** — `maint-ai-architecture.png`
4. **데모** — 실제 URL 스크린샷 또는 mockup + QR코드
5. **효과·로드맵** — KPI 표

---

## HWP 삽입 방법

1. 한글 → **입력 → 그림 → 그림 파일로부터**
2. `docs/assets/` 에서 PNG 선택
3. 크기 조절: 요약서용 **가로 14cm** 내외, 기획서 **가로 16cm**

## 추가로 넣으면 좋은 이미지

| 종류 | 생성 프롬프트 예시 |
|------|-------------------|
| Write-up 데모 흐름 | "3-step flow: symptom input → AI analysis → checklist output" |
| 시한품목 대시보드 | "CAD PAD countdown dashboard UI mockup" |
| 정비 Wiki | "QR scan equipment tag maintenance tips wiki UI" |

필요 시 같은 방식으로 추가 생성 가능합니다.

---

## 데모 URL (이미지 캡션용)

**PoC:** https://dhalsdyd.github.io/maint-ai-hackathon/
