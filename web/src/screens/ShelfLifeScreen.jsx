import { shelfLifeItems } from '../data/mockData';

export default function ShelfLifeScreen({ onBack }) {
  const urgent = shelfLifeItems.filter((i) => i.daysRemaining <= 7);
  const upcoming = shelfLifeItems.filter((i) => i.daysRemaining > 7);

  return (
    <>
      <header className="app-header colored" style={{ background: '#d97706' }}>
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div>
          <h1>시한품목 알람</h1>
          <p>Pillar 3 · CAD/PAD 수명 관리</p>
        </div>
      </header>
      <main className="app-body">
        <div className="summary-stats">
          <Stat num={urgent.length} label="긴급" color="#dc2626" />
          <Stat num={upcoming.length} label="예정" color="#d97706" />
          <Stat num={shelfLifeItems.length} label="전체" color="#1b3a5c" />
        </div>

        {urgent.length > 0 && (
          <>
            <p className="section-title urgent">긴급 교체 (7일 이내)</p>
            {urgent.map((item) => (
              <ShelfCard key={item.partName} item={item} urgent />
            ))}
          </>
        )}

        <p className="section-title" style={{ marginTop: 16 }}>예정 교체</p>
        {upcoming.map((item) => (
          <ShelfCard key={item.partName} item={item} urgent={false} />
        ))}
      </main>
    </>
  );
}

function Stat({ num, label, color }) {
  return (
    <div className="stat-item">
      <div className="num" style={{ color }}>{num}</div>
      <div className="lbl" style={{ color }}>{label}</div>
    </div>
  );
}

function ShelfCard({ item, urgent }) {
  const bg = urgent ? '#dc2626' : '#d97706';
  return (
    <div className="shelf-card">
      <div className="shelf-badge" style={{ background: bg }}>
        D-{item.daysRemaining}
      </div>
      <div className="shelf-info" style={{ flex: 1 }}>
        <h4>{item.partName}</h4>
        <p>{item.aircraftId} · {item.category}</p>
      </div>
      <span>{urgent ? '⚠️' : '🕐'}</span>
    </div>
  );
}
