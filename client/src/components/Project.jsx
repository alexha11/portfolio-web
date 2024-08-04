import { Projects } from '../constants';
import { Arrow} from '../assets';

import ClipPath from '../assets/ProjectImg/ClipPath';

import Section from './Section';
import Heading from './Heading';

import test from '../assets/ProjectImg/image-2.png'


const Project = () => {
  return (
    <Section
      className=''
      id='projects'
    >
      <Heading 
        title='Projects'
      />
      <div className='container z-2 relative'>
        <div className='flex flex-wrap gap-10 mb-10'>
          {Projects.map((project) => (
            <div className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md-max-w-[24rem]'
              style={{ backgroundImage: `url(${project.backgroundImg})` }}
              key={project.id}>
              <div className='relative z-10 flex flex-col min-h-[22rem] p-[2.8rem] pointer-events-none'>
                <h5 className='h5 mb-5'>{project.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{project.description}</p>
                <div className='flex items-center mt-auto'>
                  <div className='flex gap-2'>
                    {project.technologies.map((technology) => (
                      <span className='bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 bg-clip-text text-sm text-transparent py-1 rounded-md mr-2'>{technology}</span>
                    ))}
                  </div>
                  <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Expore more </p>
                  <Arrow/>
                </div>
              </div>
                <div 
                  className='absolute inset-0.5 bg-n-8'
                  style={{ clipPath: "url(#projects)" }}
                  > 
                  <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                    {project.thumbnail && (
                      <img 
                        src={test} 
                        alt={project.title} 
                        className=' object-cover w-full h-full'
                        />
                    
                    )}
                  </div>
                </div>

                <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Project;