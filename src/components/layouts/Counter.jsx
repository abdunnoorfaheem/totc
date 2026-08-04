import React, { useState, useEffect, useRef } from "react";
import Container from "../Container";
import { useInView } from "react-intersection-observer";

const statsData = [
  { id: 1, end: 15, suffix: "K+", label: "Students" },
  { id: 2, end: 75, suffix: "%", label: "Total success" },
  { id: 3, end: 35, suffix: "", label: "Main questions" },
  { id: 4, end: 26, suffix: "", label: "Chief experts" },
  { id: 5, end: 16, suffix: "", label: "Years of experience" },
];


const useCountUp = (end, duration = 2500, start = false) => {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, end, duration]);

  return count;
};

const CounterItem = ({ end, suffix, label, inView }) => {
  const count = useCountUp(end, 2500, inView);

  return (
    <div className="text-center">
      <h3 className="text-7xl lg:text-8xl font-medium bg-gradient-to-t from-[#136CB5] to-[#49BBBD] text-transparent bg-clip-text">
        {count}
        {suffix}
      </h3>
      <p className="text-2xl lg:text-[28px] text-[#010514] opacity-[0.8] mt-2">
        {label}
      </p>
    </div>
  );
};

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref}>
      <Container>
        <div className="py-10">
          <h4 className="text-5xl font-bold font-roboto text-center pb-4 text-[#2F327D]">
            Our Success
          </h4>
          <p className="text-center text-[#010514] max-w-2xl m-auto text-lg opacity-[0.8]">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>

        <div className="py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {statsData.map((item) => (
              <CounterItem
                key={item.id}
                end={item.end}
                suffix={item.suffix}
                label={item.label}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Counter;