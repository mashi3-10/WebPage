import React from 'react'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Team from './pages/Team'
import Changelog from './pages/Changelog'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <HashRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="*" element={<div>404 — ページが見つかりません</div>} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
