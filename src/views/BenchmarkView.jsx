import './GenericView.css'
import './BenchmarkView.css'

const SCORING_CRITERIA = [
  { key: 'rangeOfProtection', label: 'Range of Protection (°C)', description: 'Temperature protection capability', higherIsBetter: true },
  { key: 'windVulnerability', label: 'Wind Vulnerability', description: 'Resistance to wind interference', higherIsBetter: false },
  { key: 'cropDamagePotential', label: 'Crop Damage Potential', description: 'Risk of damaging the crop itself', higherIsBetter: false },
  { key: 'inversionRequired', label: 'No Inversion Required', description: 'Works without temperature inversion', higherIsBetter: true },
  { key: 'capitalExpenses', label: 'Low Capital Expenses', description: 'Low upfront cost per hectare', higherIsBetter: true },
  { key: 'operatingExpenses', label: 'Low Operating Expenses', description: 'Low ongoing cost per hectare/hr', higherIsBetter: true },
]

const METHODS = [
  {
    name: 'Wind Machines',
    category: 'Wind',
    isCryobio: false,
    scores: { rangeOfProtection: 2, windVulnerability: 1, cropDamagePotential: 5, inversionRequired: 1, capitalExpenses: 1, operatingExpenses: 5 },
    total: 275,
  },
  {
    name: 'Return Stack Oil Heaters (used)',
    category: 'Heaters & Gas Burners',
    isCryobio: false,
    scores: { rangeOfProtection: 4, windVulnerability: 4, cropDamagePotential: 2, inversionRequired: 4, capitalExpenses: 5, operatingExpenses: 1 },
    total: 350,
  },
  {
    name: 'Return Stack Oil Heaters (new)',
    category: 'Heaters & Gas Burners',
    isCryobio: false,
    scores: { rangeOfProtection: 4, windVulnerability: 4, cropDamagePotential: 2, inversionRequired: 4, capitalExpenses: 4, operatingExpenses: 2 },
    total: 350,
  },
  {
    name: 'Pressurized Propane Heaters',
    category: 'Heaters & Gas Burners',
    isCryobio: false,
    scores: { rangeOfProtection: 4, windVulnerability: 4, cropDamagePotential: 2, inversionRequired: 4, capitalExpenses: 2, operatingExpenses: 1 },
    total: 305,
  },
  {
    name: 'Over-Plant Sprinklers',
    category: 'Sprinklers & Irrigation',
    isCryobio: false,
    scores: { rangeOfProtection: 5, windVulnerability: 2, cropDamagePotential: 1, inversionRequired: 5, capitalExpenses: 4, operatingExpenses: 4 },
    total: 385,
  },
  {
    name: 'Under-Plant Sprinklers',
    category: 'Sprinklers & Irrigation',
    isCryobio: false,
    scores: { rangeOfProtection: 4, windVulnerability: 3, cropDamagePotential: 5, inversionRequired: 5, capitalExpenses: 4, operatingExpenses: 4 },
    total: 445,
  },
  {
    name: 'Micro-Sprinklers',
    category: 'Sprinklers & Irrigation',
    isCryobio: false,
    scores: { rangeOfProtection: 3, windVulnerability: 3, cropDamagePotential: 5, inversionRequired: 5, capitalExpenses: 4, operatingExpenses: 4 },
    total: 415,
  },
  {
    name: 'Light, Thin Covers',
    category: 'Blankets & Covers',
    isCryobio: false,
    scores: { rangeOfProtection: 1, windVulnerability: 2, cropDamagePotential: 4, inversionRequired: 5, capitalExpenses: 3, operatingExpenses: 5 },
    total: 325,
  },
  {
    name: 'Medium Covers',
    category: 'Blankets & Covers',
    isCryobio: false,
    scores: { rangeOfProtection: 3, windVulnerability: 2, cropDamagePotential: 5, inversionRequired: 5, capitalExpenses: 2, operatingExpenses: 5 },
    total: 390,
  },
  {
    name: 'Heavy, Layered Covers',
    category: 'Blankets & Covers',
    isCryobio: false,
    scores: { rangeOfProtection: 3, windVulnerability: 2, cropDamagePotential: 4, inversionRequired: 5, capitalExpenses: 1, operatingExpenses: 5 },
    total: 355,
  },
  {
    name: 'CryoBio Frost Spray',
    category: 'CryoBio',
    isCryobio: true,
    scores: { rangeOfProtection: 4, windVulnerability: 2, cropDamagePotential: 5, inversionRequired: 5, capitalExpenses: 5, operatingExpenses: 2 },
    total: 420,
  },
]

const CATEGORY_COLORS = {
  'Wind': '#7e8494',
  'Heaters & Gas Burners': '#ff8c42',
  'Sprinklers & Irrigation': '#4fc3f7',
  'Blankets & Covers': '#9c8fbd',
  'CryoBio': '#66bb6a',
}

function ScoreDots({ score, max = 5, isCryobio }) {
  return (
    <div className="score-dots">
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className="score-dot"
          style={{
            background: i < score
              ? isCryobio ? '#66bb6a' : '#4fc3f7'
              : 'var(--bg3)',
            border: `1px solid ${i < score ? (isCryobio ? '#66bb6a' : '#4fc3f7') : 'var(--border)'}`,
          }}
        />
      ))}
    </div>
  )
}

const sortedMethods = [...METHODS].sort((a, b) => b.total - a.total)
const maxTotal = Math.max(...METHODS.map(m => m.total))

export default function BenchmarkView() {
  return (
    <div className="view-body generic-view">
      <div className="view-header-inner">
        <div className="view-title">Competitive Benchmarking</div>
        <div className="view-sub">Project B · Item 4 — Frost Protection Method Scorecard</div>
      </div>

      {/* Summary bar chart */}
      <div className="card">
        <div className="card-title">Overall Score Ranking (out of 500)</div>
        <div className="bar-chart">
          {sortedMethods.map(m => (
            <div key={m.name} className="bar-row">
              <div className="bar-name" title={m.name}>
                {m.name}
                {m.isCryobio && <span className="cryobio-tag">★</span>}
              </div>
              <div className="bar-track">
                <div
                  className="bar-fill"
                  style={{
                    width: `${(m.total / maxTotal) * 100}%`,
                    background: m.isCryobio
                      ? 'linear-gradient(90deg, #66bb6a, #43a047)'
                      : `${CATEGORY_COLORS[m.category]}88`,
                    borderRight: m.isCryobio ? '2px solid #66bb6a' : 'none',
                  }}
                />
              </div>
              <div className="bar-score" style={{ color: m.isCryobio ? '#66bb6a' : 'var(--text-secondary)' }}>
                {m.total}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full scorecard */}
      <div className="card">
        <div className="card-title">Detailed Scorecard (1–5 per criterion)</div>
        <table className="data-table benchmark-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Category</th>
              {SCORING_CRITERIA.map(c => (
                <th key={c.key} title={c.description}>{c.label}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sortedMethods.map(m => (
              <tr key={m.name} className={m.isCryobio ? 'cryobio-row' : ''}>
                <td className={m.isCryobio ? 'cell-accent' : 'cell-primary'}>
                  {m.name}
                  {m.isCryobio && <span className="cryobio-tag">★</span>}
                </td>
                <td>
                  <span
                    className="tag"
                    style={{
                      background: CATEGORY_COLORS[m.category] + '22',
                      color: CATEGORY_COLORS[m.category],
                    }}
                  >
                    {m.category}
                  </span>
                </td>
                {SCORING_CRITERIA.map(c => (
                  <td key={c.key}>
                    <ScoreDots score={m.scores[c.key]} isCryobio={m.isCryobio} />
                  </td>
                ))}
                <td>
                  <span
                    className="total-score"
                    style={{ color: m.isCryobio ? '#66bb6a' : 'var(--text-primary)' }}
                  >
                    {m.total}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Scoring note */}
      <div className="card scoring-note">
        <div className="card-title">Scoring Methodology</div>
        <div className="note-grid">
          {SCORING_CRITERIA.map(c => (
            <div key={c.key} className="note-item">
              <span className="note-label">{c.label}</span>
              <span className="note-desc">{c.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
