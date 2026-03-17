import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterNum = ({ end, prefix = "", suffix = "", className = "" }) => {
  const [startCount, setStartCount] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={className}>
      {startCount && (
        <CountUp
          start={0}
          end={end}
          duration={5}
          prefix={prefix}
          suffix={suffix}
        >
          {({ countUpRef }) => (
            <span ref={countUpRef} />
          )}
        </CountUp>
      )}
    </div>
  );
};

export default CounterNum;