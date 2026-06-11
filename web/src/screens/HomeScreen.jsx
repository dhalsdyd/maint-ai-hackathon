import { aircraftList } from '../data/mockData';

const features = [
  { id: 'writeup', icon: '💬', title: 'Write-up\n정비 Copilot', subtitle: 'Pillar 2 · 데모 메인', color: '#2563eb', bg: 'rgba(37,99,235,0.1)' },
  { id: 'ocr', icon: '📄', title: 'OCR\n서식 맵퍼', subtitle: 'Pillar 1', color: '#059669', bg: 'rgba(5,150,105,0.1)' },
  { id: 'shelf', icon: '⏰', title: '시한품목\n알람', subtitle: 'Pillar 3', color: '#d97706', bg: 'rgba(217,119,6,0.1)' },
  { id: 'wiki', icon: '📖', title: '정비 Wiki', subtitle: '부가 기능', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)' },
];

export default function HomeScreen({ aircraft, onAircraftChange, onNavigate, screens }) {
  const handleFeature = (id) => {
    onNavigate(screens[id]);
  };

  return (
    <>
      <header className="app-header">
        <h1>MAINT-AI Lite</h1>
        <p>지능형 정비 행정·분석 플랫폼</p>
      </header>
      <main className="app-body">
        <div className="card" style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 20 }}>✈️</span>
            <select
              value={aircraft.id}
              onChange={(e) => {
                const a = aircraftList.find((x) => x.id === e.target.value);
                if (a) onAircraftChange(a);
              }}
            >
              {aircraftList.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} ({a.id}) — {a.squadron}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className="section-title">정비 업무</p>
        <div className="feature-grid">
          {features.map((f) => (
            <button key={f.id} className="feature-card" onClick={() => handleFeature(f.id)}>
              <div className="feature-icon" style={{ background: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <h3>{f.title}</h3>
              <span>{f.subtitle}</span>
            </button>
          ))}
        </div>

        <div className="status-bar">
          <span>🛡️</span>
          <span>폐쇄망 모드 · 로컬 sLLM 연결됨</span>
        </div>
      </main>
    </>
  );
}
