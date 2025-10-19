import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchContent } from '../services/apiClient';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContent('projects')
      .then(data => setProjects(data))
      .catch(() => setProjects([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="container">読み込み中…</div>;
  return (
    <div className="container">
      <h1 className="page-title">成果物</h1>
      <div className="grid">
        {projects.map(p => (
          <article key={p.id} className="card project-card">
            {p.screenshots?.[0] && <img src={p.screenshots[0]} alt={`${p.title} screenshot`} />}
            <h3><Link to={`/projects/${p.id}`}>{p.title}</Link></h3>
            <p className="muted">{p.summary}</p>
            <p>
              {p.github ? <a href={p.github} target="_blank" rel="noreferrer">GitHub</a> : null}
              {' '}
              {p.demo ? <a href={p.demo} target="_blank" rel="noreferrer">デモ</a> : null}
            </p>
            <div className="muted">タグ: {p.tags?.join(', ')}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
