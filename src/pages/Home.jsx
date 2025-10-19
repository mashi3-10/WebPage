import React from 'react';
import { Header, Footer } from '../components';

export default function Home() {
  return (
    <div>
      <Header />
      <main style={{padding: '1rem'}}>
        <h2>Home</h2>
        <p>ようこそ。これはサンプルページです。</p>
      </main>
      <Footer />
    </div>
  );
}
