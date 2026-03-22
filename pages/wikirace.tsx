import { useEffect } from 'react';

export default function WikiRace() {
  useEffect(() => {
    window.location.href = 'https://chrysalis-iiserb.github.io/chrysalis-iiserb/public/wiki_racing.html';
  }, []);

  return <div>Loading WikiRace...</div>;
}
```
5. Commit it

Then wait for ✅ Ready and visit:
```
https://chrysalis-iiserb-mocha.vercel.app/wikirace
