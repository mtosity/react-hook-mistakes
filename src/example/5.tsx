import { useEffect, useRef, useState } from "react";

/*
    useLayoutEffect
    initial render
    useEffect
*/

export const Example5 = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    setMarginTop(100);

    return () => {
      setMarginTop(0);
    };
  }, []);

  // This artificially slows down rendering
  const now = performance.now();
  while (performance.now() - now < 100) {
    // Do nothing for a bit...
  }

  return (
    <div
      ref={ref}
      style={{
        marginTop,
        backgroundColor: "red",
      }}
    >
      Example
    </div>
  );
};
