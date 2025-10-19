import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/apiClient';

export default function Team() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    fetchContent('team')
      .then(setTeam)
      .catch(() => setTeam([]));
  }, []);
  return (
    <div className="container">
      <h1 className="page-title">仲間紹介</h1>
      <div className="grid">
        {team.map(m => (
          <div key={m.id} className="card">
            <h3>{m.name}</h3>
            <div className="muted">{m.role}</div>
            {m.link && <p><a href={m.link} target="_blank" rel="noreferrer">プロフィール</a></p>}
          </div>
        ))}
      </div>
    </div>
  );
}
