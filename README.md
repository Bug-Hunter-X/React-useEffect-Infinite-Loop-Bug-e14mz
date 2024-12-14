# React useEffect Infinite Loop

This repository demonstrates a common error in React: an infinite loop caused by incorrectly using the `useEffect` hook.  The example shows how an empty dependency array in `useEffect` can unintentionally trigger continuous state updates, leading to an infinite loop and performance issues.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides a corrected version.

## Bug Description
The `useEffect` hook in `bug.js` attempts to update the `count` state within the effect's callback.  Since the dependency array is empty, this effect runs after every render, causing `count` to be incremented infinitely.  This results in a browser freeze or crash.

## Solution
The `bugSolution.js` file shows how to correctly use `useEffect`.  By adding `count` to the dependency array, the effect only runs when `count` changes.  However, the example showcases a conditional update to prevent an infinite loop by triggering the update only under specific conditions.  This prevents any unintentional infinite loops.