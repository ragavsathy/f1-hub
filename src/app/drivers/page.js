import Link from 'next/link';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function DriversDirectory() {
  const drivers = await prisma.driver.findMany();
  return (
    <main className="container animate-slide-up">
      <Link href="/" className="back-button">← Back to Dashboard</Link>
      <h1 style={{ textTransform: 'uppercase', marginBottom: '2rem', fontSize: '3rem', letterSpacing: '-0.02em' }}>
        2026 Driver Directory
      </h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '700px' }}>
        Select a driver to view exclusive race-by-race telemetry and detailed performance highlights outlining the exact decisions driving their season.
      </p>

      <div className="grid">
        {drivers.map(driver => (
          <Link key={driver.id} href={`/drivers/${driver.id}`} className="link-hook">
            <div className={`glass-panel ${driver.colorClass}`} style={{ transition: 'all 0.3s', height: '100%', borderLeftWidth: '4px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h2 style={{ borderBottom: 'none', padding: 0, margin: 0, fontSize: '2rem' }}>{driver.name}</h2>
                <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px', marginTop: '8px' }}>
                  {driver.team}
                </div>
                
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '1.25rem', fontStyle: 'italic', flexGrow: 1 }}>
                  "{driver.title}"
                </p>
                
                <div style={{ marginTop: '1.5rem', fontWeight: 'bold', color: 'var(--foreground)', borderTop: '1px solid var(--card-border)', paddingTop: '1rem' }}>
                  View Full Analytics →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
