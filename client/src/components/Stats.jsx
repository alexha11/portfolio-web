import CountUp from 'react-countup';
import { stats } from '../constants';
import useMediaQuery from '../hooks/useMediaQuery';

// The final value is rendered invisibly to reserve its width, so the counting digits
// overlay it instead of pushing the label around (each tick used to cause a layout shift).
const Counter = ({ end, duration, className }) => {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  return (
    <span className={`relative inline-block tabular-nums ${className}`}>
      <span className='invisible'>{end}</span>
      <span className='absolute inset-0 text-right'>
        {reduceMotion ? end : <CountUp end={end} duration={duration} delay={2} />}
      </span>
    </span>
  );
};

const Stats = () => {
    return (
        <div className='container relative'>
          <div className='flex items-center justify-center gap-4 sm:gap-12 md:gap-20 xl:mt-16 mt-10'>
            {stats.map((item, index) => {
              return (
                <div key={index} className='flex flex-row items-center justify-center gap-2'>
                  <Counter end={item.num} duration={2} className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-n-1' />
                  {item.smallNumber &&
                    <div className='flex pt-2 md:pt-4'>
                      <span className='text-xl md:text-2xl xl:text-4xl font-extrabold text-n-1'>.</span>
                      <Counter end={item.smallNumber} duration={3} className='text-xl md:text-2xl xl:text-4xl font-extrabold text-n-1' />
                    </div>}
                  <p className='text-n-3 text-sm md:text-base'>{item.text}</p>
                </div>
              )
            })}
          </div>

        </div>
    );
}

export default Stats;
