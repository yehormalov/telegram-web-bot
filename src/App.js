import { useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';

function App() {
  const {tg, onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='App'>
      <Header />
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
