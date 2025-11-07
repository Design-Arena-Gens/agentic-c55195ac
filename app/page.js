'use client';

import { useState } from 'react';

export default function BuildingDesign() {
  const [view, setView] = useState('floor');

  // Scale factor: 1 foot = 20 pixels
  const scale = 20;

  // Dimensions in feet
  const hall = { length: 24, width: 12 };
  const room = { length: 12, width: 11 };
  const height = 11.6;
  const wallThickness = 0.5;

  // Calculate total building dimensions
  const totalWidth = hall.width + (2 * room.width) + (3 * wallThickness);
  const totalLength = hall.length;

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          color: 'white',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          Building Design - Ground Floor
        </h1>

        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
          marginBottom: '20px'
        }}>
          <div style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '30px',
            justifyContent: 'center'
          }}>
            <button
              onClick={() => setView('floor')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                background: view === 'floor' ? '#667eea' : '#e0e0e0',
                color: view === 'floor' ? 'white' : '#333',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              Floor Plan
            </button>
            <button
              onClick={() => setView('3d')}
              style={{
                padding: '12px 30px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                background: view === '3d' ? '#667eea' : '#e0e0e0',
                color: view === '3d' ? 'white' : '#333',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
            >
              3D View
            </button>
          </div>

          {view === 'floor' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg
                width={totalWidth * scale + 100}
                height={totalLength * scale + 100}
                style={{ border: '2px solid #ddd', borderRadius: '10px', background: '#f9f9f9' }}
              >
                <defs>
                  <pattern id="tile" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect width="20" height="20" fill="#fff"/>
                    <path d="M 0 0 L 20 0 L 20 20 L 0 20 Z" fill="none" stroke="#e0e0e0" strokeWidth="0.5"/>
                  </pattern>
                </defs>

                <g transform="translate(50, 50)">
                  {/* Left rooms (2 rooms) */}
                  <g>
                    {/* Room 1 - Bottom Left */}
                    <rect
                      x={0}
                      y={0}
                      width={room.width * scale}
                      height={room.length * scale}
                      fill="url(#tile)"
                      stroke="#333"
                      strokeWidth="3"
                    />
                    <text
                      x={room.width * scale / 2}
                      y={room.length * scale / 2 - 10}
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="bold"
                      fill="#667eea"
                    >
                      Room 1
                    </text>
                    <text
                      x={room.width * scale / 2}
                      y={room.length * scale / 2 + 15}
                      textAnchor="middle"
                      fontSize="14"
                      fill="#666"
                    >
                      12' × 11'
                    </text>

                    {/* Door for Room 1 */}
                    <line
                      x1={room.width * scale}
                      y1={room.length * scale / 2 - 15}
                      x2={room.width * scale}
                      y2={room.length * scale / 2 + 15}
                      stroke="#fff"
                      strokeWidth="4"
                    />
                    <path
                      d={`M ${room.width * scale} ${room.length * scale / 2 - 15} Q ${room.width * scale + 20} ${room.length * scale / 2} ${room.width * scale} ${room.length * scale / 2 + 15}`}
                      fill="none"
                      stroke="#999"
                      strokeWidth="2"
                    />
                  </g>

                  {/* Hall - Center */}
                  <rect
                    x={(room.width + wallThickness) * scale}
                    y={0}
                    width={hall.width * scale}
                    height={hall.length * scale}
                    fill="#e8f4f8"
                    stroke="#333"
                    strokeWidth="3"
                  />
                  <text
                    x={(room.width + wallThickness + hall.width / 2) * scale}
                    y={hall.length * scale / 2 - 10}
                    textAnchor="middle"
                    fontSize="20"
                    fontWeight="bold"
                    fill="#2c5aa0"
                  >
                    HALL
                  </text>
                  <text
                    x={(room.width + wallThickness + hall.width / 2) * scale}
                    y={hall.length * scale / 2 + 15}
                    textAnchor="middle"
                    fontSize="14"
                    fill="#666"
                  >
                    24' × 12'
                  </text>

                  {/* Staircase in corner of hall */}
                  <g>
                    <rect
                      x={(room.width + wallThickness) * scale + 10}
                      y={10}
                      width={60}
                      height={80}
                      fill="#d4a574"
                      stroke="#8b6f47"
                      strokeWidth="2"
                    />
                    {[...Array(8)].map((_, i) => (
                      <line
                        key={i}
                        x1={(room.width + wallThickness) * scale + 10}
                        y1={10 + (i * 10)}
                        x2={(room.width + wallThickness) * scale + 70}
                        y2={10 + (i * 10)}
                        stroke="#8b6f47"
                        strokeWidth="1"
                      />
                    ))}
                    <text
                      x={(room.width + wallThickness) * scale + 40}
                      y={55}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#fff"
                      fontWeight="bold"
                    >
                      STAIR
                    </text>
                  </g>

                  {/* Right rooms (2 rooms) */}
                  <g>
                    {/* Room 2 - Bottom Right */}
                    <rect
                      x={(room.width + wallThickness + hall.width + wallThickness) * scale}
                      y={0}
                      width={room.width * scale}
                      height={room.length * scale}
                      fill="url(#tile)"
                      stroke="#333"
                      strokeWidth="3"
                    />
                    <text
                      x={(room.width + wallThickness + hall.width + wallThickness + room.width / 2) * scale}
                      y={room.length * scale / 2 - 10}
                      textAnchor="middle"
                      fontSize="18"
                      fontWeight="bold"
                      fill="#667eea"
                    >
                      Room 2
                    </text>
                    <text
                      x={(room.width + wallThickness + hall.width + wallThickness + room.width / 2) * scale}
                      y={room.length * scale / 2 + 15}
                      textAnchor="middle"
                      fontSize="14"
                      fill="#666"
                    >
                      12' × 11'
                    </text>

                    {/* Door for Room 2 */}
                    <line
                      x1={(room.width + wallThickness + hall.width + wallThickness) * scale}
                      y1={room.length * scale / 2 - 15}
                      x2={(room.width + wallThickness + hall.width + wallThickness) * scale}
                      y2={room.length * scale / 2 + 15}
                      stroke="#fff"
                      strokeWidth="4"
                    />
                  </g>

                  {/* Dimensions */}
                  {/* Total width dimension */}
                  <g>
                    <line
                      x1={0}
                      y1={hall.length * scale + 30}
                      x2={totalWidth * scale}
                      y2={hall.length * scale + 30}
                      stroke="#ff6b6b"
                      strokeWidth="2"
                      markerEnd="url(#arrowred)"
                      markerStart="url(#arrowred)"
                    />
                    <text
                      x={totalWidth * scale / 2}
                      y={hall.length * scale + 50}
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                      fill="#ff6b6b"
                    >
                      Total Width: {totalWidth.toFixed(1)}'
                    </text>
                  </g>

                  {/* Height dimension */}
                  <g>
                    <line
                      x1={totalWidth * scale + 30}
                      y1={0}
                      x2={totalWidth * scale + 30}
                      y2={hall.length * scale}
                      stroke="#51cf66"
                      strokeWidth="2"
                      markerEnd="url(#arrowgreen)"
                      markerStart="url(#arrowgreen)"
                    />
                    <text
                      x={totalWidth * scale + 35}
                      y={hall.length * scale / 2}
                      textAnchor="start"
                      fontSize="14"
                      fontWeight="bold"
                      fill="#51cf66"
                      transform={`rotate(90, ${totalWidth * scale + 35}, ${hall.length * scale / 2})`}
                    >
                      Length: {totalLength}'
                    </text>
                  </g>

                  <defs>
                    <marker id="arrowred" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                      <polygon points="0,0 10,5 0,10" fill="#ff6b6b" />
                    </marker>
                    <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                      <polygon points="0,0 10,5 0,10" fill="#51cf66" />
                    </marker>
                  </defs>
                </g>
              </svg>
            </div>
          )}

          {view === '3d' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <svg
                width="800"
                height="600"
                style={{ border: '2px solid #ddd', borderRadius: '10px', background: 'linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%)' }}
              >
                <defs>
                  <linearGradient id="wallGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor:'#f0f0f0', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#d0d0d0', stopOpacity:1}} />
                  </linearGradient>
                  <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#c44536', stopOpacity:1}} />
                    <stop offset="100%" style={{stopColor:'#8b2f23', stopOpacity:1}} />
                  </linearGradient>
                </defs>

                {/* Ground */}
                <rect x="0" y="450" width="800" height="150" fill="#7cb342" />
                <ellipse cx="400" cy="450" rx="300" ry="30" fill="#6a9d33" opacity="0.5" />

                {/* Building - Front face */}
                <polygon
                  points="150,450 650,450 650,250 150,250"
                  fill="url(#wallGradient)"
                  stroke="#333"
                  strokeWidth="2"
                />

                {/* Building - Side face (3D effect) */}
                <polygon
                  points="650,250 650,450 750,400 750,200"
                  fill="#c0c0c0"
                  stroke="#333"
                  strokeWidth="2"
                />

                {/* Roof - Front */}
                <polygon
                  points="130,250 670,250 670,200 130,200"
                  fill="url(#roofGradient)"
                  stroke="#333"
                  strokeWidth="2"
                />

                {/* Roof - Side */}
                <polygon
                  points="670,200 670,250 770,200 770,150"
                  fill="#a03828"
                  stroke="#333"
                  strokeWidth="2"
                />

                {/* Windows - Left side */}
                <g>
                  <rect x="180" y="300" width="60" height="80" fill="#87CEEB" stroke="#333" strokeWidth="2" />
                  <line x1="210" y1="300" x2="210" y2="380" stroke="#333" strokeWidth="2" />
                  <line x1="180" y1="340" x2="240" y2="340" stroke="#333" strokeWidth="2" />

                  <rect x="260" y="300" width="60" height="80" fill="#87CEEB" stroke="#333" strokeWidth="2" />
                  <line x1="290" y1="300" x2="290" y2="380" stroke="#333" strokeWidth="2" />
                  <line x1="260" y1="340" x2="320" y2="340" stroke="#333" strokeWidth="2" />
                </g>

                {/* Door - Center */}
                <g>
                  <rect x="360" y="340" width="80" height="110" fill="#8b4513" stroke="#333" strokeWidth="2" rx="5" />
                  <circle cx="420" cy="395" r="4" fill="#ffd700" />
                  <line x1="400" y1="340" x2="400" y2="450" stroke="#654321" strokeWidth="1" />
                </g>

                {/* Windows - Right side */}
                <g>
                  <rect x="480" y="300" width="60" height="80" fill="#87CEEB" stroke="#333" strokeWidth="2" />
                  <line x1="510" y1="300" x2="510" y2="380" stroke="#333" strokeWidth="2" />
                  <line x1="480" y1="340" x2="540" y2="340" stroke="#333" strokeWidth="2" />

                  <rect x="560" y="300" width="60" height="80" fill="#87CEEB" stroke="#333" strokeWidth="2" />
                  <line x1="590" y1="300" x2="590" y2="380" stroke="#333" strokeWidth="2" />
                  <line x1="560" y1="340" x2="620" y2="340" stroke="#333" strokeWidth="2" />
                </g>

                {/* Side windows */}
                <g>
                  <polygon points="680,300 730,280 730,350 680,370" fill="#87CEEB" stroke="#333" strokeWidth="2" />
                  <line x1="705" y1="280" x2="705" y2="360" stroke="#333" strokeWidth="1" />
                </g>

                {/* Height indicator */}
                <g>
                  <line x1="100" y1="250" x2="100" y2="450" stroke="#ff6b6b" strokeWidth="3" markerEnd="url(#arrow3d)" markerStart="url(#arrow3d)" />
                  <text x="70" y="355" fontSize="16" fontWeight="bold" fill="#ff6b6b" transform="rotate(-90, 70, 355)">
                    Height: 11.6'
                  </text>
                </g>

                <defs>
                  <marker id="arrow3d" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <polygon points="0,0 10,5 0,10" fill="#ff6b6b" />
                  </marker>
                </defs>

                {/* Title on building */}
                <text x="400" y="480" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">
                  Ground Floor Height: 11.6 feet
                </text>
              </svg>
            </div>
          )}
        </div>

        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}>
          <h2 style={{ marginTop: 0, color: '#667eea' }}>Specifications</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ marginTop: 0, color: '#333' }}>🏛️ Hall</h3>
              <p style={{ margin: '5px 0' }}>Length: 24 feet</p>
              <p style={{ margin: '5px 0' }}>Width: 12 feet</p>
              <p style={{ margin: '5px 0' }}>Area: 288 sq ft</p>
            </div>
            <div style={{ padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ marginTop: 0, color: '#333' }}>🚪 Rooms (4 total)</h3>
              <p style={{ margin: '5px 0' }}>Each: 12' × 11'</p>
              <p style={{ margin: '5px 0' }}>2 rooms on left side</p>
              <p style={{ margin: '5px 0' }}>2 rooms on right side</p>
              <p style={{ margin: '5px 0' }}>Area each: 132 sq ft</p>
            </div>
            <div style={{ padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ marginTop: 0, color: '#333' }}>📏 Building</h3>
              <p style={{ margin: '5px 0' }}>Total Width: {totalWidth.toFixed(1)} feet</p>
              <p style={{ margin: '5px 0' }}>Total Length: 24 feet</p>
              <p style={{ margin: '5px 0' }}>Height: 11.6 feet</p>
              <p style={{ margin: '5px 0' }}>Total Area: {(288 + (132 * 4)).toFixed(0)} sq ft</p>
            </div>
            <div style={{ padding: '15px', background: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ marginTop: 0, color: '#333' }}>🪜 Staircase</h3>
              <p style={{ margin: '5px 0' }}>Location: Corner of hall</p>
              <p style={{ margin: '5px 0' }}>Connects to upper floor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
