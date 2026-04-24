import './GenericView.css'
import './PriorityMarketsView.css'

// Priority markets ranked by overall strategic fit
// Update scores and notes as research progresses
const PRIORITY_MARKETS = [
  {
    rank: 1,
    country: 'France',
    region: 'Europe',
    flag: '🇫🇷',
    keyRegions: ['Champagne', 'Burgundy', 'Loire Valley'],
    keyCrops: ['Grapes', 'Stone fruits'],
    marketSize: 'Very Large',
    frostRisk: 'very-high',
    adoptionOutlook: 'rapid',
    scores: { frostSeverity: 5, cropValue: 5, marketAccess: 4, regulatory: 4, wtpStrength: 5 },
    rationale: '2021 frost caused ~€2.2B damage to French vineyards alone. High-value AOC wines create strong WTP. EU regulatory framework is navigable.',
  },
  {
    rank: 2,
    country: 'Argentina',
    region: 'South America',
    flag: '🇦🇷',
    keyRegions: ['Mendoza', 'Patagonia'],
    keyCrops: ['Grapes (Malbec)', 'Stone fruits', 'Olives'],
    marketSize: 'Large',
    frostRisk: 'very-high',
    adoptionOutlook: 'rapid',
    scores: { frostSeverity: 5, cropValue: 4, marketAccess: 3, regulatory: 3, wtpStrength: 4 },
    rationale: 'Mendoza is one of the world\'s highest-altitude wine regions with severe frost exposure. Export-oriented growers have strong incentive to protect yields.',
  },
  {
    rank: 3,
    country: 'USA',
    region: 'North America',
    flag: '🇺🇸',
    keyRegions: ['Pacific Northwest', 'Michigan', 'California'],
    keyCrops: ['Apples', 'Cherries', 'Grapes', 'Berries'],
    marketSize: 'Very Large',
    frostRisk: 'high',
    adoptionOutlook: 'rapid',
    scores: { frostSeverity: 4, cropValue: 5, marketAccess: 5, regulatory: 5, wtpStrength: 5 },
    rationale: '100+ grower interviews already validate WTP. Easiest regulatory pathway. Strong existing relationships. Ideal launch market.',
  },
  {
    rank: 4,
    country: 'Italy',
    region: 'Europe',
    flag: '🇮🇹',
    keyRegions: ['Trentino-Alto Adige', 'Veneto', 'Tuscany'],
    keyCrops: ['Apples', 'Grapes', 'Stone fruits'],
    marketSize: 'Large',
    frostRisk: 'high',
    adoptionOutlook: 'rapid',
    scores: { frostSeverity: 4, cropValue: 5, marketAccess: 4, regulatory: 4, wtpStrength: 4 },
    rationale: 'Italy is the world\'s largest wine producer. Alpine frost exposure in northern regions is significant. EU regulatory harmonization with France.',
  },
  {
    rank: 5,
    country: 'Chile',
    region: 'South America',
    flag: '🇨🇱',
    keyRegions: ['Maule Valley', 'Bío Bío'],
    keyCrops: ['Grapes', 'Apples', 'Pears', 'Cherries'],
    marketSize: 'Medium',
    frostRisk: 'high',
    adoptionOutlook: 'rapid',
    scores: { frostSeverity: 4, cropValue: 4, marketAccess: 4, regulatory: 4, wtpStrength: 3 },
    rationale: 'Major fruit export economy. US-Chile FTA simplifies trade. Strong grower sophistication and export orientation.',
  },
  {
    rank: 6,
    country: 'New Zealand',
    region: 'Oceania',
    flag: '🇳🇿',
    keyRegions: ['Central Otago', 'Marlborough'],
    keyCrops: ['Grapes (Pinot Noir)', 'Stone fruits'],
    marketSize: 'Small',
    frostRisk: 'high',
    adoptionOutlook: 'rapid',
    scores: { frostSeverity: 5, cropValue: 5, marketAccess: 4, regulatory: 4, wtpStrength: 4 },
    rationale: 'Southernmost wine region globally. Extreme frost exposure. Very high crop values per hectare. English-speaking market with sophisticated growers.',
  },
  {
    rank: 7,
    country: 'Germany',
    region: 'Europe',
    flag: '🇩🇪',
    keyRegions: ['Rhineland', 'Mosel', 'Baden'],
    keyCrops: ['Grapes (Riesling)', 'Apples'],
    marketSize: 'Large',
    frostRisk: 'high',
    adoptionOutlook: 'subsidy-needed',
    scores: { frostSeverity: 4, cropValue: 4, marketAccess: 4, regulatory: 4, wtpStrength: 3 },
    rationale: 'Premium wine regions with frost risk. Strong climate-tech adoption culture. EU CAP subsidies could support uptake.',
  },
  {
    rank: 8,
    country: 'Turkey',
    region: 'Asia',
    flag: '🇹🇷',
    keyRegions: ['Central Anatolia', 'Aegean'],
    keyCrops: ['Apricots', 'Cherries', 'Grapes'],
    marketSize: 'Large',
    frostRisk: 'high',
    adoptionOutlook: 'partnership-needed',
    scores: { frostSeverity: 4, cropValue: 3, marketAccess: 3, regulatory: 2, wtpStrength: 3 },
    rationale: 'World\'s top apricot producer. Significant frost exposure. Requires local distribution partner. Regulatory pathway less clear.',
  },
  {
    rank: 9,
    country: 'Canada',
    region: 'North America',
    flag: '🇨🇦',
    keyRegions: ['Okanagan Valley', 'Niagara'],
    keyCrops: ['Apples', 'Peaches', 'Grapes'],
    marketSize: 'Medium',
    frostRisk: 'high',
    adoptionOutlook: 'rapid',
    scores: { frostSeverity: 4, cropValue: 4, marketAccess: 5, regulatory: 5, wtpStrength: 4 },
    rationale: 'Regulatory alignment with USA. Okanagan growers are sophisticated and export-oriented. Natural expansion from US market.',
  },
  {
    rank: 10,
    country: 'Japan',
    region: 'Asia',
    flag: '🇯🇵',
    keyRegions: ['Aomori', 'Nagano'],
    keyCrops: ['Apples', 'Grapes'],
    marketSize: 'Large',
    frostRisk: 'high',
    adoptionOutlook: 'partnership-needed',
    scores: { frostSeverity: 4, cropValue: 5, marketAccess: 3, regulatory: 3, wtpStrength: 4 },
    rationale: 'Ultra-premium fruit market with extremely high crop values. Regulatory pathway requires local partner. High WTP if product can be registered.',
  },
]

const ADOPTION_CONFIG = {
  'rapid': { label: 'Rapid Adoption', color: '#66bb6a' },
  'subsidy-needed': { label: 'Subsidy Needed', color: '#ffd740' },
  'partnership-needed': { label: 'Partnership Needed', color: '#ff8c42' },
}

const RISK_COLORS = {
  'very-high': '#ef5350',
  'high': '#ff8c42',
  'medium': '#ffd740',
}

const SCORE_KEYS = [
  { key: 'frostSeverity', label: 'Frost Severity' },
  { key: 'cropValue', label: 'Crop Value' },
  { key: 'marketAccess', label: 'Market Access' },
  { key: 'regulatory', label: 'Regulatory' },
  { key: 'wtpStrength', label: 'WTP Strength' },
]

function ScoreBar({ score, max = 5 }) {
  return (
    <div className="pm-score-bar">
      <div className="pm-score-fill" style={{ width: `${(score / max) * 100}%` }} />
    </div>
  )
}

export default function PriorityMarketsView() {
  return (
    <div className="view-body generic-view">
      <div className="view-header-inner">
        <div className="view-title">Priority Markets</div>
        <div className="view-sub">Project A · Item 2 — Strategic Market Prioritization</div>
      </div>

      <div className="pm-summary">
        <div className="pm-summary-item">
          <span className="pm-summary-val" style={{ color: '#66bb6a' }}>
            {PRIORITY_MARKETS.filter(m => m.adoptionOutlook === 'rapid').length}
          </span>
          <span className="pm-summary-label">Rapid adoption markets</span>
        </div>
        <div className="pm-summary-item">
          <span className="pm-summary-val" style={{ color: '#ffd740' }}>
            {PRIORITY_MARKETS.filter(m => m.adoptionOutlook === 'subsidy-needed').length}
          </span>
          <span className="pm-summary-label">Subsidy-dependent markets</span>
        </div>
        <div className="pm-summary-item">
          <span className="pm-summary-val" style={{ color: '#ff8c42' }}>
            {PRIORITY_MARKETS.filter(m => m.adoptionOutlook === 'partnership-needed').length}
          </span>
          <span className="pm-summary-label">Partnership-required markets</span>
        </div>
        <div className="pm-summary-item">
          <span className="pm-summary-val" style={{ color: '#4fc3f7' }}>
            {[...new Set(PRIORITY_MARKETS.map(m => m.region))].length}
          </span>
          <span className="pm-summary-label">Regions covered</span>
        </div>
      </div>

      <div className="pm-list">
        {PRIORITY_MARKETS.map(market => {
          const adoption = ADOPTION_CONFIG[market.adoptionOutlook]
          const totalScore = Object.values(market.scores).reduce((a, b) => a + b, 0)
          return (
            <div key={market.country} className={`pm-card ${market.rank <= 3 ? 'pm-card-top' : ''}`}>
              <div className="pm-card-left">
                <div className="pm-rank">#{market.rank}</div>
                <div className="pm-flag">{market.flag}</div>
                <div className="pm-country-info">
                  <div className="pm-country">{market.country}</div>
                  <div className="pm-region-label">{market.region}</div>
                </div>
              </div>

              <div className="pm-card-middle">
                <div className="pm-regions">
                  {market.keyRegions.map(r => (
                    <span key={r} className="pm-region-tag">{r}</span>
                  ))}
                </div>
                <div className="pm-crops">
                  {market.keyCrops.map(c => (
                    <span key={c} className="pm-crop-tag">{c}</span>
                  ))}
                </div>
                <div className="pm-rationale">{market.rationale}</div>
              </div>

              <div className="pm-card-right">
                <div className="pm-scores">
                  {SCORE_KEYS.map(({ key, label }) => (
                    <div key={key} className="pm-score-row">
                      <span className="pm-score-label">{label}</span>
                      <ScoreBar score={market.scores[key]} />
                      <span className="pm-score-num">{market.scores[key]}/5</span>
                    </div>
                  ))}
                </div>
                <div className="pm-card-footer">
                  <span
                    className="pm-adoption"
                    style={{ color: adoption.color, background: adoption.color + '18' }}
                  >
                    {adoption.label}
                  </span>
                  <span className="pm-total-score">
                    {totalScore}<span style={{ fontSize: 10, color: 'var(--text-muted)' }}>/25</span>
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
