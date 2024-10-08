import CountUp from 'react-countup';
import { stats } from '../constants';


const Stats = () => {
    return (
        <div className='container relative'>
          <div className='flex items-center justify-center gap-4 sm:gap-12 md:gap-20 xl:mt-16 mt-10'>
            {stats.map((item, index) => {
              return (
                <div key={index} className='flex flex-row items-center justify-center gap-2'>
                  <CountUp end={item.num} duration={2} delay={2} className='text-2xl md:text-4xl xl:text-6xl font-extrabold text-n-1' /> 
                  {item.smallNumber && 
                    <div className='flex pt-2 md:pt-4'>
                      <span className='text-xl md:text-2xl xl:text-4xl font-extrabold text-n-1'>.</span>
                      <CountUp end={item.smallNumber} duration={3} delay={2} className='text-xl md:text-2xl xl:text-4xl font-extrabold text-n-1 flex' />
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