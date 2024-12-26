"use client";
import CountUp from "react-countup";

const Statistics = () => {
  const stats = [
    { id: 1, value: 17000, suffix: "+", title: "Alumni" },
    { id: 2, value: 10, suffix: "+", title: "Alumni Meet" },
    { id: 3, value: 5, suffix: "+", title: "Alumni Chapter" },
  ];

  return (
    <div className="flex justify-center items-center lg:gap-64 md:gap-32 xs:gap-7">
      {stats.map((stat) => (
        <div key={stat.id} className="flex flex-col items-center">
          <div className="lg:text-5xl md:text-3xl xs:text-base md:font-bold sm:font-semibold font-primary text-blue-700">
            <CountUp end={stat.value} duration={3} />{stat.suffix}
          </div>
          <div className="md:text-lg font-primary xs:text-xs mt-2 text-gray-600">{stat.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
