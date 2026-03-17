import { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { FROST_REGIONS, HEATMAP_POINTS, RISK_COLORS, REGIONS } from '../data/frostData'
import './HeatMapView.css'

// Component that adds the heatmap layer via leaflet.heat
function HeatLayer({ points, visible }) {
  const map = useMap()
  const heatRef = useRef(null)

  useEffect(() => {
    if (!window.L || !window.L.heatLayer) return

    if (heatRef.current) {
      map.removeLayer(heatRef.current)
      heatRef.current = null
    }

    if (visible) {
      heatRef.current = window.L.heatLayer(points, {
        radius: 35,
        blur: 25,
        maxZoom: 8,
        gradient: {
          0.0: '#0d47a1',
          0.3: '#1565c0',
          0.5: '#ff8c42',
          0.7: '#ef5350',
          1.0: '#b71c1c',
        },
      }).addTo(map)
    }

    return () => {
      if (heatRef.current) {
        map.removeLayer(heatRef.current)
      }
    }
  }, [map, points, visible])

  return null
}

export default function HeatMapView() {
  const [selectedRegion, setSelectedRegion] = useState('All')
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [showHeat, setShowHeat] = useState(true)
  const [showMarkers, setShowMarkers] = useState(true)
  const [heatLoaded, setHeatLoaded] = useState(false)
  const [filterRisk, setFilterRisk] = useState('all')

  // Load leaflet.heat dynamically
  useEffect(() => {
    if (window.L && window.L.heatLayer) {
      setHeatLoaded(true)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/leaflet.heat@0.2.0/dist/leaflet-heat.js'
    script.onload = () => setHeatLoaded(true)
    document.head.appendChild(script)
  }, [])

  const filtered = FROST_REGIONS.filter(r => {
    const regionMatch = selectedRegion === 'All' || r.region === selectedRegion
    const riskMatch = filterRisk === 'all' || r.cropRisk === filterRisk
    return regionMatch && riskMatch
  })

  const heatPoints = filtered.flatMap(region => {
    const points = []
    for (let i = 0; i < 8; i++) {
      points.push([
        region.lat + (Math.random() - 0.5) * 3,
        region.lng + (Math.random() - 0.5) * 3,
        region.intensity,
      ])
    }
    points.push([region.lat, region.lng, region.intensity])
    return points
  })

  const riskStats = {
    'very-high': FROST_REGIONS.filter(r => r.cropRisk === 'very-high').length,
    'high': FROST_REGIONS.filter(r => r.cropRisk === 'high').length,
    'medium': FROST_REGIONS.filter(r => r.cropRisk === 'medium').length,
  }

  return (
    <div className="heatmap-view">
      <div className="view-header">
        <div>
          <div className="view-title">Global Frost Risk Heat Map</div>
          <div className="view-sub">Project A · Item 1 — Landscape Mapping</div>
        </div>
        <div className="header-controls">
          <div className="layer-toggles">
            <button
              className={`layer-btn ${showHeat ? 'active' : ''}`}
              onClick={() => setShowHeat(!showHeat)}
            >
              <span className="layer-dot heat-dot"></span>
              Heat Layer
            </button>
            <button
              className={`layer-btn ${showMarkers ? 'active' : ''}`}
              onClick={() => setShowMarkers(!showMarkers)}
            >
              <span className="layer-dot marker-dot"></span>
              Regions
            </button>
          </div>

          <select
            className="region-select"
            value={selectedRegion}
            onChange={e => setSelectedRegion(e.target.value)}
          >
            {REGIONS.map(r => <option key={r} value={r}>{r}</option>)}
          </select>

          <select
            className="region-select"
            value={filterRisk}
            onChange={e => setFilterRisk(e.target.value)}
          >
            <option value="all">All Risk Levels</option>
            <option value="very-high">Very High</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
          </select>
        </div>
      </div>

      <div className="map-wrapper">
        <MapContainer
          center={[30, 10]}
          zoom={2}
          style={{ width: '100%', height: '100%' }}
          minZoom={2}
          maxZoom={10}
          zoomControl={true}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='© CartoDB'
          />

          {heatLoaded && showHeat && (
            <HeatLayer points={heatPoints} visible={showHeat} />
          )}

          {showMarkers && filtered.map(region => {
            const riskColor = RISK_COLORS[region.cropRisk]?.color || '#888'
            return (
              <CircleMarker
                key={region.id}
                center={[region.lat, region.lng]}
                radius={region.cropRisk === 'very-high' ? 9 : region.cropRisk === 'high' ? 7 : 5}
                pathOptions={{
                  color: riskColor,
                  fillColor: riskColor,
                  fillOpacity: 0.85,
                  weight: 1.5,
                }}
                eventHandlers={{
                  click: () => setSelectedMarker(region),
                }}
              >
                <Popup>
                  <div className="popup-content">
                    <div className="popup-title">{region.name}</div>
                    <div className="popup-country">{region.country} · {region.region}</div>
                    <div className="popup-row">
                      <span>Risk level</span>
                      <span style={{ color: RISK_COLORS[region.cropRisk]?.color }}>
                        {RISK_COLORS[region.cropRisk]?.label}
                      </span>
                    </div>
                    <div className="popup-row">
                      <span>Intensity</span>
                      <span>{Math.round(region.intensity * 100)}%</span>
                    </div>
                    <div className="popup-crops">
                      {region.crops.map(c => (
                        <span key={c} className="popup-crop-tag">{c}</span>
                      ))}
                    </div>
                    <div className="popup-notes">{region.notes}</div>
                    {region.frostEvents && (
                      <div className="popup-row">
                        <span>Frost events/yr</span>
                        <span>{region.frostEvents}</span>
                      </div>
                    )}
                    <div className="popup-data-flag">
                      ⚠ Awaiting primary research data
                    </div>
                  </div>
                </Popup>
              </CircleMarker>
            )
          })}
        </MapContainer>

        {/* Legend */}
        <div className="map-legend">
          <div className="legend-title">Crop Risk Level</div>
          {Object.entries(RISK_COLORS).map(([key, val]) => (
            <div key={key} className="legend-row">
              <span className="legend-dot" style={{ background: val.color }}></span>
              <span>{val.label}</span>
            </div>
          ))}
          <div className="legend-divider"></div>
          <div className="legend-title">Heat Gradient</div>
          <div className="legend-gradient"></div>
          <div className="legend-gradient-labels">
            <span>Low</span><span>High</span>
          </div>
        </div>

        {/* Stats overlay */}
        <div className="map-stats">
          <div className="map-stat">
            <span className="map-stat-value">{filtered.length}</span>
            <span className="map-stat-label">Regions shown</span>
          </div>
          <div className="map-stat-sep"></div>
          <div className="map-stat">
            <span className="map-stat-value" style={{ color: '#ef5350' }}>{riskStats['very-high']}</span>
            <span className="map-stat-label">Very high risk</span>
          </div>
          <div className="map-stat-sep"></div>
          <div className="map-stat">
            <span className="map-stat-value" style={{ color: '#ff8c42' }}>{riskStats['high']}</span>
            <span className="map-stat-label">High risk</span>
          </div>
        </div>

        <div className="data-placeholder-banner">
          <span>📋</span>
          <span>Placeholder data — replace with research findings from Project A, Items 1–2. Click any marker to view/edit region notes.</span>
        </div>
      </div>
    </div>
  )
}
