// ============================================================
// CRYOBIO FROST DATA — Primary data layer
// ============================================================
// HOW TO EDIT:
//   - Update null values with real research findings
//   - intensity: 0.0 (no risk) to 1.0 (extreme risk)
//   - cropRisk: 'low' | 'medium' | 'high' | 'very-high'
//   - adoptionOutlook: 'rapid' | 'subsidy-needed' | 'partnership-needed'
//   - All monetary values in USD
// ============================================================

export const FROST_REGIONS = [

  // ── NORTH AMERICA ──────────────────────────────────────────
  {
    id: 'us-pnw',
    name: 'Pacific Northwest, USA',
    lat: 47.5, lng: -120.5,
    intensity: 0.72,
    cropRisk: 'high',
    crops: ['Apples', 'Cherries', 'Pears'],
    country: 'USA',
    region: 'North America',

    // PROJECT A: Frost & Economic Data
    frostFrequency: null,         // TODO: avg frost events per year
    lateFrostRisk: null,          // TODO: 'low' | 'medium' | 'high' | 'very-high'
    yieldLossPct: null,           // TODO: e.g. 0.25 = 25% average yield loss
    economicLoss: null,           // TODO: annual crop loss USD e.g. 500000000
    revenueAtRisk: null,          // TODO: total revenue exposed to frost USD

    // PROJECT B: Pricing & Competition
    incumbentMethods: null,       // TODO: e.g. ['Wind machines', 'Sprinklers']
    incumbentCostPerAcre: null,   // TODO: USD per acre per season
    wtpEstimate: null,            // TODO: willingness to pay USD/acre
    subsidyAvailable: null,       // TODO: true | false
    adoptionOutlook: null,        // TODO: 'rapid' | 'subsidy-needed' | 'partnership-needed'

    // PROJECT C: Regulatory & Policy
    regulatoryPathway: null,      // TODO: e.g. 'biostimulant' | 'biopesticide'
    tradeAgreement: null,         // TODO: true | false — US trade agreement exists
    fundingOpportunities: null,   // TODO: e.g. 'USDA EQIP program'

    notes: 'Late spring frosts major concern for tree fruits',
  },

  {
    id: 'us-ca',
    name: 'California Central Valley',
    lat: 36.7, lng: -119.8,
    intensity: 0.55,
    cropRisk: 'medium',
    crops: ['Grapes', 'Almonds', 'Stone fruits'],
    country: 'USA',
    region: 'North America',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Radiative frost common in valley floor',
  },

  {
    id: 'us-mi',
    name: 'Michigan, USA',
    lat: 44.3, lng: -85.6,
    intensity: 0.68,
    cropRisk: 'high',
    crops: ['Cherries', 'Apples', 'Blueberries'],
    country: 'USA',
    region: 'North America',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Lake-effect moderation but significant frost risk',
  },

  {
    id: 'us-wa',
    name: 'Wenatchee Valley, WA',
    lat: 47.4, lng: -120.3,
    intensity: 0.75,
    cropRisk: 'high',
    crops: ['Apples', 'Cherries'],
    country: 'USA',
    region: 'North America',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Primary US apple production zone',
  },

  {
    id: 'ca-okanagan',
    name: 'Okanagan Valley, Canada',
    lat: 49.9, lng: -119.5,
    intensity: 0.70,
    cropRisk: 'high',
    crops: ['Apples', 'Peaches', 'Grapes'],
    country: 'Canada',
    region: 'North America',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Critical Canadian wine and fruit region',
  },

  // ── EUROPE ─────────────────────────────────────────────────
  {
    id: 'fr-champagne',
    name: 'Champagne, France',
    lat: 49.1, lng: 4.0,
    intensity: 0.80,
    cropRisk: 'very-high',
    crops: ['Grapes (Chardonnay)', 'Pinot Noir'],
    country: 'France',
    region: 'Europe',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: 2200000000, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: 'rapid',
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: '2021 frost caused ~€2.2B damage across French vineyards',
  },

  {
    id: 'fr-burgundy',
    name: 'Burgundy, France',
    lat: 47.3, lng: 4.8,
    intensity: 0.78,
    cropRisk: 'very-high',
    crops: ['Grapes', 'Blackcurrants'],
    country: 'France',
    region: 'Europe',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: 'rapid',
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'High-value AOC wines particularly exposed',
  },

  {
    id: 'de-rhineland',
    name: 'Rhineland, Germany',
    lat: 50.0, lng: 7.9,
    intensity: 0.65,
    cropRisk: 'high',
    crops: ['Grapes', 'Apples'],
    country: 'Germany',
    region: 'Europe',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Riesling and Pinot Noir growing areas',
  },

  {
    id: 'es-rioja',
    name: 'La Rioja, Spain',
    lat: 42.3, lng: -2.5,
    intensity: 0.55,
    cropRisk: 'medium',
    crops: ['Grapes'],
    country: 'Spain',
    region: 'Europe',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Continental climate with frost exposure',
  },

  {
    id: 'it-trentino',
    name: 'Trentino-Alto Adige, Italy',
    lat: 46.1, lng: 11.1,
    intensity: 0.70,
    cropRisk: 'high',
    crops: ['Apples', 'Grapes'],
    country: 'Italy',
    region: 'Europe',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Major apple production region, alpine frost exposure',
  },

  {
    id: 'cz-moravia',
    name: 'Moravia, Czech Republic',
    lat: 49.0, lng: 17.0,
    intensity: 0.72,
    cropRisk: 'high',
    crops: ['Grapes', 'Stone fruits'],
    country: 'Czech Republic',
    region: 'Europe',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Northernmost wine region in Central Europe',
  },

  {
    id: 'hu-eger',
    name: 'Eger, Hungary',
    lat: 47.9, lng: 20.4,
    intensity: 0.68,
    cropRisk: 'high',
    crops: ['Grapes'],
    country: 'Hungary',
    region: 'Europe',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Famous wine region with spring frost risk',
  },

  // ── SOUTH AMERICA ──────────────────────────────────────────
  {
    id: 'ar-mendoza',
    name: 'Mendoza, Argentina',
    lat: -32.9, lng: -68.8,
    intensity: 0.75,
    cropRisk: 'very-high',
    crops: ['Grapes', 'Olives', 'Stone fruits'],
    country: 'Argentina',
    region: 'South America',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: 'rapid',
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Malbec heartland, significant frost exposure',
  },

  {
    id: 'cl-maule',
    name: 'Maule Valley, Chile',
    lat: -35.5, lng: -71.5,
    intensity: 0.65,
    cropRisk: 'high',
    crops: ['Grapes', 'Apples', 'Pears'],
    country: 'Chile',
    region: 'South America',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: true, fundingOpportunities: null,
    notes: 'Major fruit export region. US-Chile FTA in place.',
  },

  {
    id: 'br-rs',
    name: 'Rio Grande do Sul, Brazil',
    lat: -29.5, lng: -51.0,
    intensity: 0.55,
    cropRisk: 'medium',
    crops: ['Grapes', 'Apples'],
    country: 'Brazil',
    region: 'South America',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Southern Brazil wine region',
  },

  // ── OCEANIA ────────────────────────────────────────────────
  {
    id: 'au-yarra',
    name: 'Yarra Valley, Australia',
    lat: -37.7, lng: 145.5,
    intensity: 0.60,
    cropRisk: 'medium',
    crops: ['Grapes', 'Berries'],
    country: 'Australia',
    region: 'Oceania',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Cool climate viticulture zone',
  },

  {
    id: 'nz-central-otago',
    name: 'Central Otago, NZ',
    lat: -45.1, lng: 169.3,
    intensity: 0.78,
    cropRisk: 'high',
    crops: ['Grapes (Pinot Noir)', 'Stone fruits'],
    country: 'New Zealand',
    region: 'Oceania',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: 'rapid',
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Southernmost wine region globally, extreme frost',
  },

  // ── AFRICA ─────────────────────────────────────────────────
  {
    id: 'za-stellenbosch',
    name: 'Stellenbosch, South Africa',
    lat: -33.9, lng: 18.8,
    intensity: 0.45,
    cropRisk: 'medium',
    crops: ['Grapes'],
    country: 'South Africa',
    region: 'Africa',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Occasional frost events in wine regions',
  },

  // ── ASIA ───────────────────────────────────────────────────
  {
    id: 'cn-xinjiang',
    name: 'Xinjiang, China',
    lat: 41.8, lng: 86.1,
    intensity: 0.70,
    cropRisk: 'high',
    crops: ['Grapes', 'Cotton', 'Tree fruits'],
    country: 'China',
    region: 'Asia',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Continental climate, significant frost events',
  },

  {
    id: 'jp-aomori',
    name: 'Aomori, Japan',
    lat: 40.8, lng: 140.7,
    intensity: 0.72,
    cropRisk: 'high',
    crops: ['Apples'],
    country: 'Japan',
    region: 'Asia',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: 'partnership-needed',
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: "Japan's premier apple region",
  },

  {
    id: 'tr-anatolia',
    name: 'Central Anatolia, Turkey',
    lat: 38.5, lng: 34.0,
    intensity: 0.65,
    cropRisk: 'high',
    crops: ['Apricots', 'Cherries', 'Grapes'],
    country: 'Turkey',
    region: 'Asia',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: 'partnership-needed',
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Turkey is top global apricot producer; frost critical',
  },

  {
    id: 'uz-fergana',
    name: 'Fergana Valley, Uzbekistan',
    lat: 40.4, lng: 71.8,
    intensity: 0.68,
    cropRisk: 'high',
    crops: ['Apricots', 'Grapes', 'Stone fruits'],
    country: 'Uzbekistan',
    region: 'Asia',
    frostFrequency: null, lateFrostRisk: null, yieldLossPct: null, economicLoss: null, revenueAtRisk: null,
    incumbentMethods: null, incumbentCostPerAcre: null, wtpEstimate: null, subsidyAvailable: null, adoptionOutlook: null,
    regulatoryPathway: null, tradeAgreement: null, fundingOpportunities: null,
    notes: 'Historic fruit-growing region, significant frost exposure',
  },
]

export const HEATMAP_POINTS = FROST_REGIONS.flatMap(region => {
  const points = []
  const spread = 1.5
  const count = Math.round(region.intensity * 12) + 3
  for (let i = 0; i < count; i++) {
    points.push([
      region.lat + (Math.random() - 0.5) * spread * 2,
      region.lng + (Math.random() - 0.5) * spread * 2,
      region.intensity,
    ])
  }
  points.push([region.lat, region.lng, region.intensity])
  return points
})

export const RISK_COLORS = {
  'very-high': { color: '#ef5350', label: 'Very High' },
  'high': { color: '#ff8c42', label: 'High' },
  'medium': { color: '#ffd740', label: 'Medium' },
  'low': { color: '#66bb6a', label: 'Low' },
}

export const REGIONS = ['All', 'North America', 'Europe', 'South America', 'Oceania', 'Asia', 'Africa']
