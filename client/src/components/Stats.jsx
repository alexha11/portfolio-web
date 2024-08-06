import CountUp from 'react-countup';

const stats = [
  {
    num: 400,
    text: "Coding problems"
  },
  {
    num: 5,
    text: "Fully projects"
  },
  {
    num: 3,
    text: "Years of Experience"
  },
  {
    num: 2,
    text: "Companies"
  },
]

const Stats = () => {
    return (
        <div className='container relative'>
          <div className='flex items-center justify-center gap-20 mt-20'>
            {stats.map((item, index) => {
              return (
                <div key={index} className='flex flex-row items-center justify-center gap-2'>
                  <CountUp end={item.num} duration={2} delay={2} className='text-4xl xl:text-6xl font-extrabold text-n-1' />
                  <p className='text-n-3'>{item.text}</p>
                </div>
              )
            })}
          </div>

        </div>
    );
}

export default Stats;