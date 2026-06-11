import { useState } from 'react';
import { ocrMappedFields } from '../data/mockData';

export default function OcrScreen({ onBack }) {
  const [scanned, setScanned] = useState(false);
  const [scanning, setScanning] = useState(false);

  const scan = async () => {
    setScanning(true);
    setScanned(false);
    await new Promise((r) => setTimeout(r, 1500));
    setScanning(false);
    setScanned(true);
  };

  return (
    <>
      <header className="app-header colored" style={{ background: '#059669' }}>
        <button className="back-btn" onClick={onBack}>← 뒤로</button>
        <div>
          <h1>OCR 서식 맵퍼</h1>
          <p>Pillar 1 · LayoutLM + DELIIS</p>
        </div>
      </header>
      <main className="app-body">
        {!scanned ? (
          <div className="ocr-preview">
            <span className="icon">📋</span>
            <div>수기 정비기록지 미리보기</div>
            <div style={{ fontSize: 12, marginTop: 4 }}>촬영 버튼을 눌러 OCR을 시작하세요</div>
          </div>
        ) : (
          <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 16 }}>
            <div style={{ background: '#059669', color: 'white', padding: 14, fontWeight: 700 }}>
              ✅ DELIIS 매핑 완료
            </div>
            <div style={{ padding: 14 }}>
              {Object.entries(ocrMappedFields).map(([key, val]) => (
                <div key={key} className="info-row">
                  <span className="info-label">{key}</span>
                  <span className="info-value">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          className="btn-primary"
          style={{ background: '#059669' }}
          onClick={scan}
          disabled={scanning}
        >
          {scanning ? (
            <>
              <span className="spinner" />
              LayoutLM 인식 중...
            </>
          ) : scanned ? (
            <>🔄 다시 촬영</>
          ) : (
            <>📷 정비기록지 촬영</>
          )}
        </button>
      </main>
    </>
  );
}
