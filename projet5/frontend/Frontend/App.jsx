import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import Projets from './pages/Projets.jsx'
import ProjetDetail from './pages/ProjetDetail.js'
import Membres from './pages/Membres.js'
import Dashboard from './pages/Dashboard.js'
import './App.css'

function Nav() {
  const loc = useLocation()
  const links = [
    { to: '/', label: 'Dashboard' },
    { to: '/projets', label: 'Projets' },
    { to: '/membres', label: 'Membres' },
  ]
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">▲</span>
        ProjetManager
      </Link>
      <div className="navbar-links">
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`nav-link ${loc.pathname === l.to ? 'active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:id" element={<ProjetDetail />} />
          <Route path="/membres" element={<Membres />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
