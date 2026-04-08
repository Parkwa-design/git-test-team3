import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JournalPage from './presentation/pages/journal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav style={{ padding: '20px', borderBottom: '1px solid #efefef', display: 'flex', gap: '20px' }}>
          <Link to="/">Home</Link>
          <Link to="/journal" style={{ fontWeight: 600 }}>Journal</Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div style={{ padding: '40px', textAlign: 'center' }}>
              <h1 className="serif" style={{ fontSize: '3rem', marginBottom: '20px' }}>Achim</h1>
              <p>마치 아침처럼 고요하고 서정적인 공간</p>
              <div style={{ marginTop: '40px' }}>
                <Link to="/journal" style={{ padding: '12px 24px', border: '1px solid #1a1a1a' }}>GO TO JOURNAL</Link>
              </div>
            </div>
          } />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
