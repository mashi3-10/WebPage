import { useState } from 'react';

export default function useExample(initial = 0) {
  const [count, setCount] = useState(initial);
  const inc = () => setCount(c => c + 1);
  return { count, inc };
}
