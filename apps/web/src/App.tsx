import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';
// import { HabitCreator } from './pages/HabitCreator/HabitCreator';

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto p-4 min-h-screen bg-surface">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/create" element={<HabitCreator />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;