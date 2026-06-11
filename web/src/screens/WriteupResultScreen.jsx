import { useEffect } from 'react';
import { hudWriteupGuide } from '../data/mockData';

export default function WriteupResultScreen({ aircraft, symptom, hapticMode, onBack }) {
  const guide = hudWriteupGuide;

  useEffect(() => {
    if (hapticMode && navigator.vibrate) navigator.vibrate([100, 50, 100]);
  }, [hapticMode]);

  return (
    <>
      <header className="app-header colored" style={{ background: '#2563eb' }}>
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div>
          <h1>AI 정비 가이드</h1>
          <p>분석 완료 · 1.2초</p>
        </div>
      </header>
      <main className="app-body">
        <div className="summary-banner">
          <span style={{ fontSize: 28 }}>✅</span>
          <div>
            <div style={{ fontWeight: 700 }}>{aircraft.name} ({aircraft.id})</div>
            <div style={{ fontSize: 12, opacity: 0.85 }}>RAG 분석 완료 · 로컬 sLLM</div>
          </div>
        </div>

        <InfoCard label="입력 증상" value={symptom} />
        <InfoCard label="결함 코드" value={guide.defectCode} />
        <InfoCard label="TO 참조" value={guide.toReference} />

        <div className="card" style={{ background: '#f0f9ff', marginTop: 12 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>🧠 AI 분석 요약</div>
          <p style={{ lineHeight: 1.6, fontSize: 14 }}>{guide.summary}</p>
        </div>

        <div className="card" style={{ marginTop: 12 }}>
          <div className="section-title">정비 체크리스트</div>
          {guide.checklist.map((item, i) => (
            <div key={i} className="checklist-item">
              <span className="check-num" style={{ background: 'rgba(37,99,235,0.1)', color: '#2563eb' }}>
                {i + 1}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="metric-row">
          <div className="metric-box" style={{ background: 'rgba(5,150,105,0.1)', border: '1px solid rgba(5,150,105,0.3)' }}>
            <div className="label" style={{ color: '#059669' }}>예상 TAT</div>
            <div className="value" style={{ color: '#059669' }}>{guide.estimatedTime}</div>
          </div>
          <div className="metric-box" style={{ background: 'rgba(217,119,6,0.1)', border: '1px solid rgba(217,119,6,0.3)' }}>
            <div className="label" style={{ color: '#d97706' }}>비행 상태</div>
            <div className="value" style={{ color: '#d97706', fontSize: 13 }}>{guide.priority}</div>
          </div>
        </div>
      </main>
    </>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="card" style={{ marginTop: 12, padding: 14 }}>
      <div style={{ fontSize: 12, color: 'var(--muted)' }}>{label}</div>
      <div style={{ fontWeight: 500, marginTop: 4 }}>{value}</div>
    </div>
  );
}
