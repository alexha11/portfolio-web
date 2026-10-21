import CountUp from "react-countup";

import { stats } from "../constants";
import useMediaQuery from "../hooks/useMediaQuery";

// The final value is rendered invisibly to reserve its width, so the counting digits
// overlay it instead of shifting the layout. Counts once, when scrolled into view.
const Counter = ({ value, decimals = 0, suffix = "" }) => {
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const final = `${value.toFixed(decimals)}${suffix}`;
  return (
    <span className="relative inline-block lining-nums tabular-nums">
      <span className="invisible">{final}</span>
      <span className="absolute inset-0">
        {reduceMotion ? final : <CountUp end={value} decimals={decimals} suffix={suffix} duration={2} enableScrollSpy scrollSpyOnce />}
      </span>
    </span>
  );
};

const Stats = () => (
  <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-line py-6">
    {stats.map((stat) => (
      <div key={stat.label} className="flex flex-col-reverse gap-1">
        <dt className="text-xs leading-snug text-muted sm:text-sm">{stat.label}</dt>
        <dd className="font-serif text-3xl text-fg sm:text-4xl">
          <Counter {...stat} />
        </dd>
      </div>
    ))}
  </dl>
);

export default Stats;
