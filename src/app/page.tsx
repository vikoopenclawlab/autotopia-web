'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: '#eee',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '3rem',
            background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0.5rem',
          }}>
            🚀 nextjs-template-test
          </h1>
          <p style={{ color: '#888', fontSize: '1.1rem' }}>
            Full CI/CD pipeline with GitHub Actions + GHCR
          </p>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          <Card title="Version" value="v0.1.0" />
          <Card title="Status" value="✅ Deployed" />
          <Card title="Environment" value="production" />
        </div>

        <section style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          padding: '2rem',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          <h2 style={{ marginBottom: '1rem', color: '#00ff88' }}>Interactive Demo</h2>
          <p style={{ marginBottom: '1rem', color: '#ccc' }}>
            You clicked the button {count} times
          </p>
          <button
            onClick={() => setCount(c => c + 1)}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              background: 'linear-gradient(90deg, #00d9ff, #00ff88)',
              border: 'none',
              borderRadius: '8px',
              color: '#1a1a2e',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'transform 0.1s',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Click me! 🎉
          </button>
        </section>

        <footer style={{
          marginTop: '3rem',
          textAlign: 'center',
          color: '#555',
          fontSize: '0.9rem',
        }}>
          Built with Next.js 14 + Fastify + Prisma + GitHub Actions
        </footer>
      </div>
    </main>
  );
}

function Card({ title, value }: { title: string; value: string }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.05)',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center',
    }}>
      <div style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{title}</div>
      <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#00d9ff' }}>{value}</div>
    </div>
  );
}
