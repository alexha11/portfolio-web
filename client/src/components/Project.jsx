import { Projects } from '../constants';
import { apphubThumbnail, Arrow } from '../assets';

import Section from './Section';
import Heading from './Heading';

// const Project = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4">
//       <h2 className="my-20 text-center text-4xl">Projects</h2> 
//       <div>
//         {Projects.map((project, index) => {
//           return (
//             <div key={index} className="flex flex-col md:flex-row items-center justify-center md:justify-between">
//               <div className="w-full md:w-1/2">
//                 <img src={`./src/assets/${project.image}`} alt={project.title} className="w-full h-64 object-cover rounded-md" />
//               </div>
//               <div className="w-full md:w-1/2 mt-4 md:mt-0">
//                 <h3 className="text-2xl text-white">{project.title}</h3>
//                 <p className="text-white mt-4">{project.description}</p>
//                 <div className="flex mt-4">
//                   {project.technologies.map((technology, index) => {
//                     return (
//                       <span key={index} className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500  bg-clip-text text-xl tracking-tight text-transparent py-1 rounded-md mr-2">{technology}</span>
//                     );
//                   })}
//                 </div>
//                 <div className="mt-6">
//                   <a href={project.link} className="bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500 text-white px-4 py-2 rounded-md mt-20">View Project</a>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
      
//     </div>
//   );
// } 

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
              <div className='relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none'>
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
                  className='absolute inset-10 z-1 bg-n-8 rounded-md'
                  style={{ clipPath: 'url(#projects)' }}
                > 
                  <div className='absolute inset-0 opacity-0 transition-opacity hover:opacity-10'>
                    {project.thumbnail && (
                      <img src={project.thumbnail} alt={project.title} className='w-full h-full object-cover rounded-md  ' />
                    
                    )}
                  </div>
                </div>
                <clipPath id='projects'/>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Project;