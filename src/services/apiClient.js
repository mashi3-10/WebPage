// 単純な fetch wrapper を置く場所の例
export async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}

// コンテンツ用の簡易 fetch ラッパー
export async function fetchContent(name) {
  const url = `/data/${name}.json`;
  try {
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) throw new Error(`fetch ${url} failed: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('fetchContent error', err);
    throw err;
  }
}
