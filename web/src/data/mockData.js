export const aircraftList = [
  { id: '15-001', name: 'F-15K', squadron: '11전투비행단' },
  { id: '16-003', name: 'F-16', squadron: '11전투비행단' },
  { id: '15-007', name: 'F-15K', squadron: '11전투비행단' },
];

export const hudWriteupGuide = {
  defectCode: '21-31-00 / HUD Symbol Instability',
  summary:
    'HUD 타겟팅 기호 간헐적 흔들림은 HUD 전원 공급 불안정 또는 심볼 생성기(SCG) 커넥터 접촉 불량 가능성이 높습니다. 과거 유사 사례 3건 중 2건이 커넥터 재체결로 해결되었습니다.',
  toReference: 'TO 1F-15K-2-21JG-1, Page 21-45 ~ 21-48',
  checklist: [
    'HUD 전원 공급 회로 Breaker 상태 확인 (Panel F-3)',
    'SCG 커넥터 J1/J2 체결 상태 및 핀 손상 점검',
    'HUD 제어 패널 전압 측정 (28V ±2V 범위)',
    '심볼 생성기 자체진단(Self-Test) 수행',
    '지상 시험(Ground Test) 후 흔들림 재현 여부 확인',
  ],
  estimatedTime: '2.5시간',
  priority: 'B-조건부 비행 가능',
};

export const shelfLifeItems = [
  { partName: '채프/플레어 발사기 카트리지', aircraftId: '15-001', daysRemaining: 3, category: 'CAD' },
  { partName: '사출좌석 로켓모터', aircraftId: '15-007', daysRemaining: 7, category: 'PAD' },
  { partName: 'AIM-120 신관 어셈블리', aircraftId: '16-003', daysRemaining: 14, category: 'CAD' },
  { partName: 'M61 신관 모듈', aircraftId: '15-001', daysRemaining: 21, category: 'PAD' },
];

export const ocrMappedFields = {
  '기체 번호': '15-001',
  '정비 일자': '2026-06-09',
  '정비 유형': '일상정비 (Daily)',
  '작업 내용': '좌측 날개 플랩 액추에이터 점검',
  '정비사': '김OO (3급)',
  '소요 시간': '1.5 HR',
  '특이사항': '이상 없음, 다음 정비 2026-06-16',
};

export const DEMO_SYMPTOM = 'HUD 타겟팅 기호 간헐적 흔들림';
