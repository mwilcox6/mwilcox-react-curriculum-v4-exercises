// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// StrictMode helps developers identify potential bugs by running additional checks during development. In this example, the timer didn't have a cleanup function, so when StrictMode ran the effect again, both timers continued running and caused the counter to increase twice as fast. Adding clearInterval(timerId) allows React to stop the previous timer during cleanup, ensuring only one timer runs at a time.
