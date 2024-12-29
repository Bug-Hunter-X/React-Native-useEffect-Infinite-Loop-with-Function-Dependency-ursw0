# React Native useEffect Infinite Loop

This repository demonstrates a common error in React Native involving the `useEffect` hook and function dependencies, leading to infinite re-renders.  The solution using `useCallback` is also provided.

## Bug
The `bug.js` file shows the problematic code, where the `fetchData` function is included in the dependency array of `useEffect`. Because `fetchData` is redefined on every render, it causes an infinite loop.

## Solution
The `bugSolution.js` file demonstrates the fix, using `useCallback` from `react` to memoize the `fetchData` function.  This prevents it from changing on every render and resolves the infinite loop issue.