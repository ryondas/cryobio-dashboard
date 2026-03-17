import { FROST_REGIONS } from '../data/frostData'
import './OverviewView.css'

const PROJECT_ITEMS = [
  { id: 'A1', project: 'A', name: 'Global Frost Damage Landscape Mapping', status: 'in-progress', priority: 'critical' },
  { id: 'A2', project: 'A', name: 'Crop, Value & Economic Impact Analysis', status: 'not-started', priority: 'critical' },
  { id: 'B3', project: 'B', name: 'Willingness-to-Pay & Market Fit Estimation', status: 'not-started', priority: 'high' },
  { id: 'B4', project: 'B', name: 'Competitive & Practice Benchmarking', status: 'not-started', priority: 'high' },
  { id: 'C5', project: 'C', name: 'Regulatory, Trade & Policy Landscape Review', status: 'not-started', priority: 'medium' },
  { id: 'C6', project: 'C', name: 'Funding, Incentives & Strategic Enablers', status: 'not-started', priority: 'medium' },
  { id: 'X7', project: 'Final', name: 'Synthesis, Prioritization & Strategic Recommendations', status: 'not-started', priority: 'high' },
]

const STATUS_CONFIG = {
  'complete': { label: 'Complete', color: '#66bb6a' },
  'in-progress': { label: 'In Progress', color: '#4fc3f7' },
  'not-started': { label: 'Not Started', color: '#4a4f60' },
}

const PRIORITY_CONFIG = {
  'critical': { label: 'Critical', color: '#ef5350' },
  'high': { label: 'High', color: '#ff8c42' },
  'medium': { label: 'Medium', color: '#ffd740' },
}

const KEY_FACTS = [
  { label: 'Regions Mapped', value: FROST_REGIONS.length, sub: 'placeholder data', accent: '#4fc3f7' },
  { label: 'Countries Covered', value: [...new Set(FROST_REGIONS.map(r => r.country))].length, sub: 'across 6 continents', accent: '#4fc3f7' },
  { label: 'Very High Risk Regions', value: FROST_REGIONS.filter(r => r.cropRisk === 'very-high').length, sub: 'requiring prioritization', accent: '#ef5350' },
  { label: 'Crop Types Identified', value: [...new Set(FROST_REGIONS.flatMap(r => r.crops))].length, sub: 'unique crop varieties', accent: '#ff8c42' },
]

export default function OverviewView() {
  return (
    <div className="view-body overview-view">
      {/* Summary stats */}
      <div className="stat-grid">
        {KEY_FACTS.map(f => (
          <div key={f.label} className="stat-chip">
            <div className="stat-label">{f.label}</div>
            <div className="stat-value" style={{ color: f.accent }}>{f.value}</div>
            <div className="stat-sub">{f.sub}</div>
          </div>
        ))}
      </div>

      <div className="overview-grid">
        {/* Project tracker */}
        <div className="card">
          <div className="card-title">Project Items Tracker</div>
          <div className="tracker-list">
            {PROJECT_ITEMS.map(item => (
              <div key={item.id} className="tracker-row">
                <div className="tracker-id">{item.id}</div>
                <div className="tracker-name">{item.name}</div>
                <div className="tracker-right">
                  <span
                    className="tracker-badge"
                    style={{ color: PRIORITY_CONFIG[item.priority].color, background: PRIORITY_CONFIG[item.priority].color + '18' }}
                  >
                    {PRIORITY_CONFIG[item.priority].label}
                  </span>
                  <span
                    className="tracker-badge"
                    style={{ color: STATUS_CONFIG[item.status].color, background: STATUS_CONFIG[item.status].color + '18' }}
                  >
                    {STATUS_CONFIG[item.status].label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CryoBio context */}
        <div className="card context-card">
          <div className="card-title">CryoBio Product Context</div>
          <div className="context-rows">
            <div className="context-item">
              <span className="context-label">Protection range</span>
              <span className="context-val accent-cold">Up to −8°C</span>
            </div>
            <div className="context-item">
              <span className="context-label">vs. incumbents</span>
              <span className="context-val accent-muted">~−2°C (wind machines, burners)</span>
            </div>
            <div className="context-item">
              <span className="context-label">Near-term cost</span>
              <span className="context-val">~$50/acre</span>
            </div>
            <div className="context-item">
              <span className="context-label">Target sell price</span>
              <span className="context-val accent-warm">~$20/acre</span>
            </div>
            <div className="context-item">
              <span className="context-label">Long-term scaled cost</span>
              <span className="context-val accent-success">~$5/acre</span>
            </div>
            <div className="context-item">
              <span className="context-label">US grower interviews</span>
              <span className="context-val">100+ completed</span>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div className="card-title">Key Research Questions</div>
            <ul className="rq-list">
              <li>Where globally do frost events cause significant agricultural losses?</li>
              <li>Which regions have crop economics that support ~$20/acre protection cost?</li>
              <li>What incumbent solutions exist internationally & at what cost?</li>
              <li>Which markets offer fastest path to adoption given regulatory landscape?</li>
              <li>Where do government subsidies or climate incentives create tailwinds?</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="data-note">
        <span>⚠</span>
        <span>All map data is currently placeholder/framework. As your team completes research, update <code>src/data/frostData.js</code> with real values — frost event frequency, economic impact figures, and WTP estimates. Each region object is structured to receive these fields.</span>
      </div>
    </div>
  )
}
