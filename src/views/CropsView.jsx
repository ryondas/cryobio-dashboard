import { FROST_REGIONS } from '../data/frostData'
import './GenericView.css'

const CROP_SUMMARY = {}
FROST_REGIONS.forEach(r => {
  r.crops.forEach(crop => {
    if (!CROP_SUMMARY[crop]) CROP_SUMMARY[crop] = { count: 0, regions: [], highRisk: 0 }
    CROP_SUMMARY[crop].count++
    CROP_SUMMARY[crop].regions.push(r.name)
    if (r.cropRisk === 'high' || r.cropRisk === 'very-high') CROP_SUMMARY[crop].highRisk++
  })
})

const sortedCrops = Object.entries(CROP_SUMMARY)
  .sort((a, b) => b[1].count - a[1].count)

export default function CropsView() {
  return (
    <div className="view-body generic-view">
      <div className="view-header-inner">
        <div className="view-title">Crops & Market Analysis</div>
        <div className="view-sub">Project A · Item 2 — Crop, Value & Economic Impact</div>
      </div>

      <div className="data-note" style={{ marginBottom: 20 }}>
        <span>📋</span>
        <span>This section will hold crop-level economic data (value/acre, yield-loss estimates, revenue-at-risk) once Project A Item 2 research is complete. The table below reflects crops identified in initial region mapping.</span>
      </div>

      <div className="card">
        <div className="card-title">Crops by Frost Exposure — Initial Mapping</div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Crop</th>
              <th>Regions exposed</th>
              <th>High/very-high risk</th>
              <th>Value/acre</th>
              <th>Annual frost loss estimate</th>
              <th>WTP est. ($/acre)</th>
            </tr>
          </thead>
          <tbody>
            {sortedCrops.map(([crop, data]) => (
              <tr key={crop}>
                <td className="cell-primary">{crop}</td>
                <td>{data.count}</td>
                <td>
                  <span style={{
                    color: data.highRisk > 2 ? '#ef5350' : data.highRisk > 0 ? '#ff8c42' : '#66bb6a',
                    fontWeight: 500,
                  }}>
                    {data.highRisk}
                  </span>
                </td>
                <td className="cell-placeholder">— pending research</td>
                <td className="cell-placeholder">— pending research</td>
                <td className="cell-placeholder">— pending research</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="placeholder-block">
        <div className="ph-icon">◉</div>
        <div className="ph-title">Economic Impact Charts</div>
        <div className="ph-sub">Revenue-at-risk charts, yield loss data, and crop priority rankings will populate here once Project A Item 2 data is collected.</div>
      </div>
    </div>
  )
}
