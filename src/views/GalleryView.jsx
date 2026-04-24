import { useState } from 'react'
import './GalleryView.css'

const MAPS = [
  // Revenue at Risk
  { id: 'rev-global', file: 'revenue_at_risk_global.png', label: 'Revenue at Risk — Global', category: 'Revenue at Risk', region: 'Global' },
  { id: 'rev-europe', file: 'revenue_at_risk_regional_europe.png', label: 'Revenue at Risk — Europe', category: 'Revenue at Risk', region: 'Europe' },
  { id: 'rev-na', file: 'revenue_at_risk_regional_north_america.png', label: 'Revenue at Risk — North America', category: 'Revenue at Risk', region: 'North America' },
  { id: 'rev-med', file: 'revenue_at_risk_regional_mediterranean.png', label: 'Revenue at Risk — Mediterranean', category: 'Revenue at Risk', region: 'Mediterranean' },

  // Combined
  { id: 'combined-global', file: 'crop_combined_highvalue_global.png', label: 'All High-Value Crops — Global', category: 'Combined', region: 'Global' },
  { id: 'combined-na', file: 'crop_combined_regional_north_america.png', label: 'All Crops — North America', category: 'Combined', region: 'North America' },
  { id: 'combined-eu', file: 'crop_combined_regional_europe.png', label: 'All Crops — Europe', category: 'Combined', region: 'Europe' },
  { id: 'combined-med', file: 'crop_combined_regional_mediterranean.png', label: 'All Crops — Mediterranean', category: 'Combined', region: 'Mediterranean' },

  // Individual crops
  { id: 'apple', file: 'crop_apple_global.png', label: 'Apple — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'grape', file: 'crop_grape_global.png', label: 'Grape — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'peach', file: 'crop_peach_global.png', label: 'Peach — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'cherry', file: 'crop_cherry_global.png', label: 'Cherry — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'apricot', file: 'crop_apricot_global.png', label: 'Apricot — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'strawberry', file: 'crop_strawberry_global.png', label: 'Strawberry — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'blueberry', file: 'crop_blueberry_global.png', label: 'Blueberry — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'raspberry', file: 'crop_raspberry_global.png', label: 'Raspberry — Global', category: 'Crop Maps', region: 'Global' },
  { id: 'cranberry', file: 'crop_cranberry_global.png', label: 'Cranberry — Global', category: 'Crop Maps', region: 'Global' },
]

const CATEGORIES = ['All', 'Revenue at Risk', 'Combined', 'Crop Maps']

export default function GalleryView() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeCategory === 'All' ? MAPS : MAPS.filter(m => m.category === activeCategory)

  return (
    <div className="gallery-view">
      <div className="view-header">
        <div>
          <div className="view-title">Research Map Gallery</div>
          <div className="view-sub">Project A · Items 1 & 2 — Geospatial Outputs</div>
        </div>
        <div className="gallery-filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-body">
        <div className="gallery-grid">
          {filtered.map(map => (
            <div
              key={map.id}
              className="gallery-card"
              onClick={() => setLightbox(map)}
            >
              <div className="gallery-img-wrap">
                <img
                  src={`/map_exports/${map.file}`}
                  alt={map.label}
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span>Click to enlarge</span>
                </div>
              </div>
              <div className="gallery-meta">
                <span className="gallery-label">{map.label}</span>
                <span className={`gallery-cat-tag cat-${map.category.toLowerCase().replace(/ /g, '-')}`}>
                  {map.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <div className="lightbox-header">
              <span className="lightbox-title">{lightbox.label}</span>
              <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            </div>
            <img
              src={`/map_exports/${lightbox.file}`}
              alt={lightbox.label}
              className="lightbox-img"
            />
          </div>
        </div>
      )}
    </div>
  )
}
