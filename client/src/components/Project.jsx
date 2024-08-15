import { Projects } from '../constants';
import { Arrow, githubLogo} from '../assets';

import ClipPath from '../assets/ProjectImg/ClipPath';

import Section from './Section';
import Heading from './Heading';
import HoverButton from "./Animation";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Project = () => {

  const notification = () => {
    toast.info(
      <div>
        You can login in the blog app with the following credentials:
        <br />
        <strong>Username:</strong> Guest_Login_For_Demo
        <br />
        <strong>Password:</strong> 48eqlFbt1gVF7xOOkaA9cYoy2
      </div>
    , {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "dark",
      zIndex: 1000,
      });
  }

  return (
    <Section
      className=''
      id='projects'
    >
      <div className='container z-2 relative'>
        <Heading 
          className="md:max-w-md lg:max-w-2xl"
          title='Projects'
        />     
        <div className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-y-3 gap-x-16 pr-10 mb-10'>
          {Projects.map((project) => (
            <div className='relative p-0.5 bg-no-repeat bg-[length:100%_100%] md-max-w-[24rem] w-full h-90'
              style={{ backgroundImage: `url(${project.backgroundImg})` }}
              key={project.id}>
              <div className='relative z-10 flex flex-col min-h-[22rem] p-[2.8rem] pointer-events-none '>
              {project.id == 3 && (
                        <div className='absolute right-10'>
                          <button onClick={notification} className='relative flex items-center justify-center rounded-full ml-2 group z-10 pointer-events-auto w-8 h-8 bg-red-600'>?</button>
                          <ToastContainer />
                    </div>
                    
                )}
                <h5 className='h5 mb-5'>{project.title}</h5>
                <p className='body-2 mb-6 text-n-3'>{project.description}</p>
                <div className='flex gap-2 mt-auto'>
                    {project.technologies.map((technology) => (
                      <span className='font-code text-sm  py-1 rounded-md mr-2'>{technology}</span>
                    ))}
                  </div>
                {project.id !== 6 && (
                  <div className='flex items-center mt-auto z-10'>
                    <HoverButton>
                      <a href={project.link} className='w-12 h-12 pointer-events-auto'><img src={githubLogo} alt="GitHub Logo"/></a>
                    </HoverButton>
                    <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider pointer-events-auto'>Live Demo</p>
                    <a href={project.livedemo} className='pointer-events-auto'><Arrow/></a>
                  
                  </div>  
                )}
              </div>
                <ClipPath />
                <div 
                  className='absolute inset-0.5 bg-slate-950'
                  style={{ clipPath: "url(#benefits)" }}

                  > 
                  <div className={`absolute inset-0 opacity-0 transition-opacity ${project.id == 4 ? 'hover:opacity-50' : 'hover:opacity-20'}`}>

                    {project.thumbnail && (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title} 
                        className=' object-cover w-full h-full'
                        />
                    
                    )}
                  </div>
                </div>
            </div>
          
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Project;