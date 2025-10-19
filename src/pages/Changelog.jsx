import React, { useEffect, useState } from 'react';
import { fetchContent } from '../services/apiClient';

export default function Changelog() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    fetchContent('changelog')
      .then(setLogs)
      .catch(() => setLogs([]));
  }, []);
  return (
    <div className="container">
      <h1 className="page-title">更新ログ</h1>
      <div className="grid">
        {logs.map(l => (
          <div key={l.date} className="card">
            <div className="muted">{l.date}</div>
            <p>{l.summary} {l.link && <a href={l.link} target="_blank" rel="noreferrer">関連</a>}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
