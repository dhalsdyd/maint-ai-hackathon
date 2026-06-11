import { useState } from 'react';
import { wikiEquipment } from '../data/mockData';

export default function WikiScreen({ onBack }) {
  const [view, setView] = useState('list'); // list | scan | detail
  const [selected, setSelected] = useState(null);
  const [scanning, setScanning] = useState(false);
  const [filter, setFilter] = useState('전체');
  const [newTip, setNewTip] = useState('');
  const [localTips, setLocalTips] = useState({});

  const categories = ['전체', ...new Set(wikiEquipment.map((e) => e.category))];

  const filtered = wikiEquipment.filter(
    (e) => filter === '전체' || e.category === filter,
  );

  const getTips = (equipment) => [
    ...(equipment.tips || []),
    ...(localTips[equipment.id] || []),
  ];

  const simulateScan = async () => {
    setScanning(true);
    await new Promise((r) => setTimeout(r, 1200));
    setScanning(false);
    const target = wikiEquipment[0];
    setSelected(target);
    setView('detail');
  };

  const openDetail = (equipment) => {
    setSelected(equipment);
    setView('detail');
  };

  const addTip = () => {
    if (!newTip.trim() || !selected) return;
    const tip = {
      id: Date.now(),
      author: '나 (정비사)',
      date: new Date().toISOString().slice(0, 10),
      content: newTip.trim(),
      likes: 0,
      isNew: true,
    };
    setLocalTips((prev) => ({
      ...prev,
      [selected.id]: [...(prev[selected.id] || []), tip],
    }));
    setNewTip('');
  };

  if (view === 'detail' && selected) {
    const tips = getTips(selected);
    return (
      <>
        <header className="app-header colored" style={{ background: '#7c3aed' }}>
          <button className="back-btn" onClick={() => setView('list')}>← 목록</button>
          <div>
            <h1>{selected.name}</h1>
            <p>{selected.tag} · {selected.location}</p>
          </div>
        </header>
        <main className="app-body">
          <div className="wiki-tag-banner">
            <span className="wiki-qr">📱</span>
            <div>
              <div style={{ fontWeight: 700 }}>장비 태그 인식됨</div>
              <div style={{ fontSize: 12, opacity: 0.9 }}>{selected.tag} — NFC/QR 연동</div>
            </div>
          </div>

          <p className="section-title">선임 정비 팁 ({tips.length}건)</p>
          <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 12 }}>
            TO에 없는 현장 노하우 · 전출 시에도 보존
          </p>

          {tips.map((tip) => (
            <div key={tip.id} className={`wiki-tip-card ${tip.isNew ? 'wiki-tip-new' : ''}`}>
              <div className="wiki-tip-header">
                <span className="wiki-tip-author">{tip.author}</span>
                <span className="wiki-tip-date">{tip.date}</span>
              </div>
              <p className="wiki-tip-content">{tip.content}</p>
              <div className="wiki-tip-footer">
                <span>👍 {tip.likes}</span>
                {tip.isNew && <span className="wiki-badge-new">방금 등록</span>}
              </div>
            </div>
          ))}

          <div className="card" style={{ marginTop: 16 }}>
            <p className="section-title" style={{ fontSize: 14 }}>팁 추가하기</p>
            <textarea
              value={newTip}
              onChange={(e) => setNewTip(e.target.value)}
              placeholder="다음 후임을 위한 현장 노하우를 짧게 남겨주세요..."
              rows={3}
              style={{ marginTop: 8, marginBottom: 10 }}
            />
            <button
              className="btn-primary"
              style={{ background: '#7c3aed' }}
              onClick={addTip}
              disabled={!newTip.trim()}
            >
              📝 팁 등록
            </button>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <header className="app-header colored" style={{ background: '#7c3aed' }}>
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div>
          <h1>정비 Wiki</h1>
          <p>현장 노하우 · QR/NFC 장비 태그</p>
        </div>
      </header>
      <main className="app-body">
        <div className="wiki-scan-box">
          {scanning ? (
            <div className="wiki-scanning">
              <span className="spinner" style={{ borderColor: 'rgba(124,58,237,0.3)', borderTopColor: '#7c3aed' }} />
              <p>QR/NFC 태그 스캔 중...</p>
            </div>
          ) : (
            <>
              <span style={{ fontSize: 40 }}>📷</span>
              <p style={{ fontWeight: 600, marginTop: 8 }}>장비 태그 스캔</p>
              <p style={{ fontSize: 12, color: 'var(--muted)' }}>LAU-128 런처 태그 시뮬레이션</p>
              <button className="btn-primary wiki-scan-btn" onClick={simulateScan}>
                QR/NFC 스캔
              </button>
            </>
          )}
        </div>

        <div className="wiki-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`wiki-filter-chip ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="section-title">장비 목록</p>
        {filtered.map((eq) => (
          <button key={eq.id} className="wiki-equip-card" onClick={() => openDetail(eq)}>
            <div className="wiki-equip-icon">🏷️</div>
            <div className="wiki-equip-info">
              <h4>{eq.name}</h4>
              <p>{eq.location} · {eq.category}</p>
              <span className="wiki-tip-count">💡 팁 {getTips(eq).length}개</span>
            </div>
            <span className="wiki-arrow">›</span>
          </button>
        ))}
      </main>
    </>
  );
}
