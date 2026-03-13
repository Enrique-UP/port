import React, { useState } from "react";
import CountUp from "react-countup";
import { useOnInView } from "react-intersection-observer";

const CounterItem = ({ end }) => {
  const [startCount, setStartCount] = useState(false);

  const ref = useOnInView(
    (inView) => {
      if (inView) setStartCount(true);
    },
    {
      threshold: 0.5,
      triggerOnce: true,
    }
  );

  return (
    <li ref={ref}>
      <b>Heading</b>
      {startCount && (
        <CountUp
          start={0}
          end={end}
          duration={5}
          decimal=","
          prefix="$ "
          suffix="+"
        />
      )}
    </li>
  );
};

const CounterNum = () => {
  return (
    <ul className="counter" style={{display: "flex", flexDirection: "column", gap: "150px 0"}}>
      <CounterItem end={1000} />
      <CounterItem end={2000} />
      <CounterItem end={3000} />
    </ul>
  );
};

export default CounterNum;