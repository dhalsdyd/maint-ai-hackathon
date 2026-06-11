import { useState } from 'react';
import { DEMO_SYMPTOM } from '../data/mockData';

export default function WriteupScreen({ aircraft, onBack, onResult }) {
  const [symptom, setSymptom] = useState(DEMO_SYMPTOM);
  const [hapticMode, setHapticMode] = useState(false);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    if (!symptom.trim()) return;
    setLoading(true);
    if (hapticMode && navigator.vibrate) navigator.vibrate(50);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    onResult(symptom.trim(), hapticMode);
  };

  return (
    <>
      <header className="app-header colored" style={{ background: '#2563eb' }}>
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div>
          <h1>Write-up 정비 Copilot</h1>
          <p>Pillar 2 · RAG + 로컬 sLLM</p>
        </div>
      </header>
      <main className="app-body">
        <span className="chip" style={{ background: 'rgba(37,99,235,0.1)', color: '#2563eb', marginBottom: 20 }}>
          ✈️ {aircraft.name} ({aircraft.id})
        </span>

        <p className="section-title" style={{ marginBottom: 8 }}>조종사 결함 보고 (Write-up)</p>
        <textarea
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="증상을 입력하세요..."
        />

        <div className="toggle-row">
          <div>
            <div style={{ fontWeight: 600 }}>햅틱 모드 (현장 작업)</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>Eyes-free 진동 알림</div>
          </div>
          <button
            className={`toggle ${hapticMode ? 'on' : ''}`}
            onClick={() => setHapticMode(!hapticMode)}
            aria-label="햅틱 모드"
          >
            <span className="toggle-knob" />
          </button>
        </div>

        <button
          className="btn-primary"
          style={{ background: '#2563eb', marginTop: 24 }}
          onClick={analyze}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner" />
              RAG 분석 중...
            </>
          ) : (
            <>✨ AI 정비 가이드 생성</>
          )}
        </button>
      </main>
    </>
  );
}
