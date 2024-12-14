```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: only updates if a condition is met
    let someCondition = true //In real application, it's a condition based on props, state or external data
    if(someCondition){
      setCount(prevCount => prevCount + 1);
    }
  }, [count]);

  return <div>Count: {count}</div>;
}
```