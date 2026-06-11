import { useState } from 'react';
import { aircraftList } from './data/mockData';
import HomeScreen from './screens/HomeScreen';
import WriteupScreen from './screens/WriteupScreen';
import WriteupResultScreen from './screens/WriteupResultScreen';
import OcrScreen from './screens/OcrScreen';
import ShelfLifeScreen from './screens/ShelfLifeScreen';
import WikiScreen from './screens/WikiScreen';

const SCREENS = {
  home: 'home',
  writeup: 'writeup',
  writeupResult: 'writeupResult',
  ocr: 'ocr',
  shelf: 'shelf',
  wiki: 'wiki',
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.home);
  const [aircraft, setAircraft] = useState(aircraftList[0]);
  const [writeupState, setWriteupState] = useState({ symptom: '', hapticMode: false });

  const goHome = () => setScreen(SCREENS.home);

  const renderScreen = () => {
    switch (screen) {
      case SCREENS.home:
        return (
          <HomeScreen
            aircraft={aircraft}
            onAircraftChange={setAircraft}
            onNavigate={setScreen}
            screens={SCREENS}
          />
        );
      case SCREENS.writeup:
        return (
          <WriteupScreen
            aircraft={aircraft}
            onBack={goHome}
            onResult={(symptom, hapticMode) => {
              setWriteupState({ symptom, hapticMode });
              setScreen(SCREENS.writeupResult);
            }}
          />
        );
      case SCREENS.writeupResult:
        return (
          <WriteupResultScreen
            aircraft={aircraft}
            symptom={writeupState.symptom}
            hapticMode={writeupState.hapticMode}
            onBack={() => setScreen(SCREENS.writeup)}
          />
        );
      case SCREENS.ocr:
        return <OcrScreen onBack={goHome} />;
      case SCREENS.shelf:
        return <ShelfLifeScreen onBack={goHome} />;
      case SCREENS.wiki:
        return <WikiScreen onBack={goHome} />;
      default:
        return null;
    }
  };

  return <div className="app-shell">{renderScreen()}</div>;
}
