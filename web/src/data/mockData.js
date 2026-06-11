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

export const wikiEquipment = [
  {
    id: 'LAU-128',
    tag: 'QR-LAU128',
    name: 'LAU-128 런처',
    location: '좌측 날개 하부',
    category: '무장',
    tips: [
      {
        id: 1,
        author: '박OO 상사 (전출)',
        date: '2025-11-12',
        content: '커넥터 끼울 때 살짝 왼쪽으로 틀어서 넣으면 잘 들어갑니다. TO 그림과 실제 각도가 5° 차이남.',
        likes: 12,
      },
      {
        id: 2,
        author: '이OO 병장',
        date: '2026-03-04',
        content: '장착 전 핀 3번째 홈에 이물질 자주 끼어있음. 손전등으로 먼저 확인하세요.',
        likes: 8,
      },
    ],
  },
  {
    id: 'HUD-SCG',
    tag: 'QR-HUD01',
    name: 'HUD / 심볼 생성기',
    location: '콕핏 전방',
    category: '항전',
    tips: [
      {
        id: 3,
        author: '최OO 하사',
        date: '2026-01-20',
        content: 'SCG J2 커넥터 체결 시 "딸깍" 소리 2번 들릴 때까지 밀어야 함. 1번만 들리면 간헐적 흔들림 재발.',
        likes: 15,
      },
      {
        id: 4,
        author: '김OO 병장',
        date: '2026-05-28',
        content: 'Breaker F-3 리셋 후 30초 대기 필수. 바로 Self-Test 하면 오탐 나옴.',
        likes: 6,
      },
    ],
  },
  {
    id: 'MJ-1',
    tag: 'QR-MJ1',
    name: 'MJ-1 무장 카트',
    location: '라인 정비고',
    category: '지상장비',
    tips: [
      {
        id: 5,
        author: '정OO 상사',
        date: '2025-08-15',
        content: '야간 작업 시 카트 조향각 마커(적색 테이프)가 안 보이면 파일론 접근 각도 틀어짐. 테이프 교체 주기 2주.',
        likes: 10,
      },
    ],
  },
  {
    id: 'FLAP-ACT',
    tag: 'QR-FLAP',
    name: '플랩 액추에이터',
    location: '좌·우 날개 후연',
    category: '기체',
    tips: [
      {
        id: 6,
        author: '한OO 병장',
        date: '2026-02-10',
        content: '토크 값 180 in-lb 적용 시 반시계 방향 2단계 체결. 시계방향으로 하면 실링 누출 빈발.',
        likes: 9,
      },
    ],
  },
];
