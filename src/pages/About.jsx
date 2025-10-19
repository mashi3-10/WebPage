import React from 'react'
import { Header, Footer } from '../components'

export default function About() {
  return (
    <div>
      <Header />
      <main style={{padding: '1rem'}}>
        <h2>About</h2>
        <p>これはサンプルの About ページです。</p>
      </main>
      <Footer />
    </div>
  )
}
