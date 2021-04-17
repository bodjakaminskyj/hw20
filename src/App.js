import './App.css';
import Timer from './components/timer';


function App() {
  return (
    <div className="App">
      <Timer time = {61000}   onTick infiniteTimer onTimeStart onTimePause step={1000} />
    </div>
  );
}

export default App;
