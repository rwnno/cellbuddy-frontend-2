import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#162617',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#d4ffd1',
      fontFamily: 'Segoe UI, sans-serif',
      borderBottom: '1px solid #7ffb89'
    }}>
      <h2 style={{ color: '#7ffb89' }}>CellBuddy</h2>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}
