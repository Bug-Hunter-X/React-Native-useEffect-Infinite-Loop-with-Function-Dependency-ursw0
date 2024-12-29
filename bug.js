This error occurs when using the `useEffect` hook in React Native with a dependency array that includes a function.  Because functions are created on each render, React compares them by reference and deems them different, triggering an infinite loop.

```javascript
useEffect(() => {
  const fetchData = async () => {
    // ...fetch data...
  };
  fetchData();
}, [fetchData]); // Incorrect - fetchData changes on every render
```