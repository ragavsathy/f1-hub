"use client";

import Link from "next/link";

export default function Home() {
  const standings = [
    { rank: 1, name: "Max Verstappen", team: "Red Bull Racing", points: 400, colorClass: "team-blue" },
    { rank: 2, name: "Lando Norris", team: "McLaren", points: 350, colorClass: "team-papaya" },
    { rank: 3, name: "Charles Leclerc", team: "Ferrari", points: 320, colorClass: "team-red" },
    { rank: 4, name: "Lewis Hamilton", team: "Ferrari", points: 290, colorClass: "team-red" },
    { rank: 5, name: "George Russell", team: "Mercedes", points: 280, colorClass: "team-teal" },
  ];

  const races = [
    { round: 15, name: "Dutch Grand Prix", track: "Circuit Zandvoort", date: "Aug 25, 2026", passed: true },
    { round: 16, name: "Italian Grand Prix", track: "Autodromo Nazionale Monza", date: "Sep 1, 2026", passed: false },
    { round: 17, name: "Azerbaijan Grand Prix", track: "Baku City Circuit", date: "Sep 15, 2026", passed: false },
    { round: 18, name: "Singapore Grand Prix", track: "Marina Bay Street Circuit", date: "Sep 22, 2026", passed: false },
  ];

  return (
    <main className="container">
      <div className="hero-section animate-slide-up">
        {/* We use standard img to avoid next/image strict configurations if any */}
        <img src="/hero.png" alt="F1 Car Night" className="hero-image" />
        <div className="hero-content">
          <h1>F1 Hub 2026</h1>
          <p>The ultimate destination for live standings, upcoming race schedules, and premier team analytics.</p>
        </div>
      </div>

      <div className="grid">
        <Link href="/drivers" className="link-hook">
          <div className="glass-panel animate-slide-up delay-100" style={{ cursor: 'pointer', height: '100%' }}>
            <h2 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              Driver Standings
              <span style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', textTransform: 'uppercase', borderBottom: '1px solid transparent' }}>View Details →</span>
            </h2>
            <ul className="driver-list">
              {standings.map((driver) => (
                <li key={driver.rank} className="driver-item">
                  <div className="driver-info">
                    <div className="driver-rank">{driver.rank}</div>
                    <div className={driver.colorClass}>
                      <div className="driver-name">{driver.name}</div>
                      <div className="driver-team">{driver.team}</div>
                    </div>
                  </div>
                  <div className="driver-points">{driver.points} PTS</div>
                </li>
              ))}
            </ul>
          </div>
        </Link>

        <div className="glass-panel animate-slide-up delay-200">
          <h2>Race Calendar</h2>
          <ul className="race-list">
            {races.map((race) => (
              <li key={race.round} className="race-item" style={{ opacity: race.passed ? 0.5 : 1 }}>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-red)', fontWeight: 'bold' }}>ROUND {race.round}</div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '4px 0' }}>{race.name}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{race.track}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold' }}>{race.date}</div>
                  {race.passed && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Completed</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass-panel animate-slide-up delay-300" style={{ marginTop: '2rem' }}>
        <h2>Latest Race Highlights</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', marginTop: '0.5rem', fontWeight: 'bold' }}>Dutch Grand Prix 2026 - Circuit Zandvoort</p>
        
        <div className="grid">
          <div style={{ padding: '1.25rem', background: 'var(--card-bg)', borderRadius: '12px' }} className="team-papaya">
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>McLaren Analytics</div>
            <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
              Masterclass in tyre conservation. Executed an aggressive undercut that allowed them to take track position early. Lando's pace on hard compounds during the 2nd stint was untouchable.
            </div>
          </div>
          <div style={{ padding: '1.25rem', background: 'var(--card-bg)', borderRadius: '12px' }} className="team-blue">
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Red Bull Strategy</div>
            <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
              Struggled with rear degradation in sector 2. Pitted slightly late responding to the undercut, leaving Max exposed to DRS trains. Balance issues reported mid-race compromised push laps.
            </div>
          </div>
          <div style={{ padding: '1.25rem', background: 'var(--card-bg)', borderRadius: '12px' }} className="team-red">
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Ferrari Execution</div>
            <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
              Solid race pace but heavily conservative on strategy. A slow 3.4s pit stop prevented Leclerc from challenging for podium spots. Over-managed medium tyres costing early tactical advantage.
            </div>
          </div>
          <div style={{ padding: '1.25rem', background: 'var(--card-bg)', borderRadius: '12px' }} className="team-teal">
            <div style={{ fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>Mercedes Adjustment</div>
            <div style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: '1.5' }}>
              Strong baseline setup, but lacked straight-line speed natively. Attempted an ambitious 1-stop strategy that nearly paid dividends until drastic cliff-falloff on final 5 laps.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
