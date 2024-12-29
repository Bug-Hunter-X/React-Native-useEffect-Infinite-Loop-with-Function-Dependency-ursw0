The solution uses `useCallback` to memoize the `fetchData` function, preventing unnecessary re-renders.

```javascript
import { useEffect, useCallback } from 'react';

const MyComponent = () => {
  const fetchData = useCallback(async () => {
    // ...fetch data...
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    // ...JSX...
  );
};
```