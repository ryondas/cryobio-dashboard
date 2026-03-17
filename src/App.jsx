import { useState } from 'react'
import HeatMapView from './views/HeatMapView'
import OverviewView from './views/OverviewView'
import CropsView from './views/CropsView'
import CompetitorView from './views/CompetitorView'
import './App.css'

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview', icon: '◈' },
  { id: 'heatmap', label: 'Frost Heat Map', icon: '⬡' },
  { id: 'crops', label: 'Crops & Markets', icon: '◉' },
  { id: 'competitors', label: 'Benchmarking', icon: '◎' },
]

export default function App() {
  const [activeView, setActiveView] = useState('heatmap')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="app-shell">
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        <div className="sidebar-header">
          <div className="brand">
            <span className="brand-mark">❄</span>
            {sidebarOpen && (
              <div className="brand-text">
                <span className="brand-name">CryoBio</span>
                <span className="brand-sub">Market Intelligence</span>
              </div>
            )}
          </div>
          <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? '‹' : '›'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeView === item.id ? 'active' : ''}`}
              onClick={() => setActiveView(item.id)}
              title={!sidebarOpen ? item.label : undefined}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="sidebar-footer">
            <div className="project-badge">
              <span className="badge-dot"></span>
              <span>TCG × CryoBio — Active</span>
            </div>
          </div>
        )}
      </aside>

      <main className="main-content">
        {activeView === 'overview' && <OverviewView />}
        {activeView === 'heatmap' && <HeatMapView />}
        {activeView === 'crops' && <CropsView />}
        {activeView === 'competitors' && <CompetitorView />}
      </main>
    </div>
  )
}
