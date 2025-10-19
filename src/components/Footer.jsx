import React from 'react';

export default function Footer() {
  return (
    <footer style={{padding: '1rem', borderTop: '1px solid #eaeaea', marginTop: '2rem'}}>
      <small>© {new Date().getFullYear()} My App</small>
    </footer>
  );
}
