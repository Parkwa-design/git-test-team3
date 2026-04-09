import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JournalPage from './presentation/pages/journal';
import AccountPage from './presentation/pages/account';
import MartPage from './presentation/pages/mart';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* 통합 네비게이션 가이드 (임시) */}
        <nav style={{ 
          padding: '15px 40px', 
          borderBottom: '1px solid #efefef', 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 1000
        }}>
          <Link to="/" style={{ fontWeight: 800, fontSize: '1.2rem', color: '#111', textDecoration: 'none' }}>ACHIM</Link>
           <div style={{ display: 'flex', gap: '30px' }}>
            <Link to="/journal" style={{ color: '#555', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>JOURNAL</Link>
            <Link to="/mart" style={{ color: '#555', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>MART</Link>
            <Link to="/account" style={{ color: '#555', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>MY ACCOUNT</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div style={{ padding: '100px 40px', textAlign: 'center' }}>
              <h1 className="serif" style={{ fontSize: '4rem', marginBottom: '20px', fontWeight: 300 }}>Achim</h1>
              <p style={{ color: '#888', letterSpacing: '0.1em' }}>고요한 아침의 기록과 대화</p>
              <div style={{ marginTop: '60px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link to="/journal" style={{ padding: '15px 35px', border: '1px solid #111', color: '#111', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.2em' }}>GO TO JOURNAL</Link>
                <Link to="/account" style={{ padding: '15px 35px', backgroundColor: '#111', color: '#fff', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.2em' }}>GO TO ACCOUNT</Link>
              </div>
            </div>
          } />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/mart" element={<MartPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
