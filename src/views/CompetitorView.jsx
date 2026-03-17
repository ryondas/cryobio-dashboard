import './GenericView.css'

const COMPETITORS = [
  { name: 'Wind Machines', type: 'Physical', costCapex: '$3,000–8,000/acre', costOpex: '$150–400/acre/yr', tempRange: '−2°C', coverage: 'Medium', envImpact: 'Medium', notes: 'Effective for advective frost only; fails for radiative' },
  { name: 'Gas / Propane Burners', type: 'Thermal', costCapex: '$500–1,500/acre', costOpex: '$300–800/acre/yr', tempRange: '−3°C', coverage: 'Low', envImpact: 'High', notes: 'High fuel cost; significant CO2 emissions; scaling difficult' },
  { name: 'Overhead Sprinklers', type: 'Irrigation', costCapex: '$1,000–4,000/acre', costOpex: '$50–200/acre/yr', tempRange: '−5°C', coverage: 'High', envImpact: 'Medium', notes: 'Water-intensive; risk of over-icing damaging crops' },
  { name: 'Frost Blankets / Covers', type: 'Physical', costCapex: '$200–1,000/acre', costOpex: '$50–200/acre/yr', tempRange: '−2°C', coverage: 'Low', envImpact: 'Low', notes: 'Labor-intensive; not scalable for large orchards' },
  { name: 'CryoBio Spray', type: 'Biochemical', costCapex: '—', costOpex: '$20/acre (target)', tempRange: '−8°C ✓', coverage: 'High ✓', envImpact: 'Low ✓', notes: 'First-in-class; plant & food safe; easy to apply', isCryobio: true },
]

export default function CompetitorView() {
  return (
    <div className="view-body generic-view">
      <div className="view-header-inner">
        <div className="view-title">Competitive Benchmarking</div>
        <div className="view-sub">Project B · Item 4 — Competitive & Practice Benchmarking</div>
      </div>

      <div className="data-note" style={{ marginBottom: 20 }}>
        <span>📋</span>
        <span>Cost ranges below are illustrative based on US interviews. Project B Item 4 will add region-specific cost data, adoption rates per country, and supplier landscape by market.</span>
      </div>

      <div className="card" style={{ overflowX: 'auto' }}>
        <div className="card-title">Frost Protection Method Comparison</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Type</th>
              <th>Capex</th>
              <th>Opex / season</th>
              <th>Temp protection</th>
              <th>Coverage</th>
              <th>Env. impact</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map(c => (
              <tr key={c.name} className={c.isCryobio ? 'cryobio-row' : ''}>
                <td className={c.isCryobio ? 'cell-accent' : 'cell-primary'}>{c.name}</td>
                <td><span className="tag tag-blue">{c.type}</span></td>
                <td className="cell-mono">{c.costCapex}</td>
                <td className="cell-mono">{c.costOpex}</td>
                <td className={c.isCryobio ? 'cell-success' : 'cell-primary'}>{c.tempRange}</td>
                <td className={c.isCryobio ? 'cell-success' : 'cell-primary'}>{c.coverage}</td>
                <td className={c.isCryobio ? 'cell-success' : 'cell-primary'}>{c.envImpact}</td>
                <td className="cell-notes">{c.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="placeholder-block">
        <div className="ph-icon">◎</div>
        <div className="ph-title">WTP & Pricing Model</div>
        <div className="ph-sub">Region-specific willingness-to-pay analysis, purchasing-power-adjusted pricing scenarios, and subsidy landscape will appear here from Project B Item 3.</div>
      </div>
    </div>
  )
}
