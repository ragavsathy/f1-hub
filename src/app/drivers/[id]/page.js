"use client";

import Link from 'next/link';
import { use } from 'react';
import { drivers } from '../../../data/drivers';

export default function DriverDashboard({ params }) {
  // For Next.js 15+ App Router, dynamic params are a promise that must be resolved using React.use()
  const unwrappedParams = use(params);
  const driver = drivers.find(d => d.id === unwrappedParams.id);

  if (!driver) {
    return (
      <main className="container animate-slide-up">
        <Link href="/drivers" className="back-button">← Back to Directory</Link>
        <h1>Driver Not Found</h1>
      </main>
    )
  }

  return (
    <main className="container animate-slide-up">
      <Link href="/drivers" className="back-button">← Back to Directory</Link>
      
      <div className={`glass-panel ${driver.colorClass}`} style={{ marginBottom: '3rem', borderLeftWidth: '6px' }}>
        <h1 style={{ textTransform: 'uppercase', margin: '0 0 0.5rem 0', fontSize: '3.5rem', letterSpacing: '-0.02em' }}>
          {driver.name}
        </h1>
        <h2 style={{ color: 'var(--text-muted)', margin: 0, border: 'none', padding: 0, fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          {driver.team}
        </h2>
        
        <strong style={{ textTransform: 'uppercase', color: 'var(--foreground)', letterSpacing: '1px' }}>2026 Summary</strong>
        <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: 'rgba(255,255,255,0.85)', marginTop: '0.5rem', maxWidth: '800px' }}>
          {driver.summary}
        </p>
      </div>

      <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textTransform: 'uppercase', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.5rem' }}>
        Race Chronology
      </h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {driver.races.map(race => (
          <div key={race.raceId} className="glass-panel" style={{ opacity: race.status === 'Completed' ? 1 : 0.45 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.5rem' }}>{race.name}</h4>
              <span style={{ fontSize: '0.9rem', color: race.status === 'Completed' ? 'var(--accent-teal)' : 'var(--text-muted)', padding: '6px 14px', borderRadius: '20px', background: 'rgba(0,0,0,0.2)', fontWeight: 'bold' }}>
                {race.status}
              </span>
            </div>

            {race.status === 'Completed' ? (
              <div className="grid">
                <div>
                  <div style={{ fontWeight: 'bold', color: '#00d2be', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                    📈 The Good
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', margin: 0 }}>{race.theGood}</p>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#e10600', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem' }}>
                    📉 The Bad
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: '1.6', margin: 0 }}>{race.theBad}</p>
                </div>
                <div style={{ gridColumn: '1 / -1', background: 'rgba(0,0,0,0.15)', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem', borderLeft: '4px solid var(--text-muted)' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    ⏱️ Telemetry Highlights
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', color: 'var(--foreground)' }}>{race.telemetry}</div>
                </div>
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>Driver telemetry and strategic analysis unavailable until race is completed.</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
