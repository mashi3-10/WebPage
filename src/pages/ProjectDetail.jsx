import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchContent } from '../services/apiClient';

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    fetchContent('projects')
      .then(list => setProject(list.find(p => String(p.id) === String(id)) || null))
      .catch(() => setProject(null));
  }, [id]);

  if (!project) return <div className="container">プロジェクトが見つかりません。<br/><Link to="/projects">一覧へ戻る</Link></div>;
  return (
    <div className="container">
      <article className="card">
        <h1 className="page-title">{project.title}</h1>
        <p className="muted">{project.summary}</p>
  {project.screenshots?.map((s, i) => <img key={i} src={s} alt={`${project.title}-${i}`} className="responsive-img" />)}
        <p>技術: {project.tech?.join(', ')}</p>
        <p>{project.github && <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>}</p>
        {project.demo && <p><a href={project.demo} target="_blank" rel="noreferrer">デモ</a></p>}
        <p><Link to="/projects">← 一覧に戻る</Link></p>
      </article>
    </div>
  );
}
