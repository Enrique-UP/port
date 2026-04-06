import React from "react";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

export default function CounterNum({
  end,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className={className}>
      {inView && (
        <CountUp
          start={0}
          end={end || 0}
          duration={3}
          prefix={prefix}
          suffix={suffix}
        />
      )}
    </div>
  );
}