import { useEffect } from 'react';

export default function WikiRace() {
  useEffect(() => {
    window.location.href = 'https://chrysalis-iiserb.github.io/chrysalis-iiserb/public/wiki_racing.html';
  }, []);

  return <div>Loading WikiRace...</div>;
}


