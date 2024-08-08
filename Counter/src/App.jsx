import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [customTime, setCustomTime] = useState('');

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);

  const handleReset = () => {
    setCount(0);
    setIsRunning(false);
  };

  const handleSetTime = () => {
    const time = parseInt(customTime, 10);
    if (!isNaN(time)) {
      setCount(time);
      setIsRunning(false);
      setCustomTime(''); 
    }
  };

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => setCount(prev => prev + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [isRunning]);

  return (
    <div className="counter-app">
      <h1 className="counter-title">Counter App: {count}</h1>
      <div className="input-group">
        <input
          type="number"
          value={customTime}
          onChange={(e) => setCustomTime(e.target.value)}
          placeholder="Set initial time"
          className="time-input"
        />
        <button onClick={handleSetTime} className="button set-time">Set Time</button>
      </div>
      <div className="button-group">
        <button onClick={handleStart} className="button start">Start</button>
        <button onClick={handleStop} className="button stop">Stop</button>
        <button onClick={handleReset} className="button reset">Reset</button>
      </div>
    </div>
  );
}

export default App;
