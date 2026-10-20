import { Projects } from '../constants';
import { Arrow, githubLogo} from '../assets';

import ClipPath from '../assets/ProjectImg/ClipPath';

import Section from './Section';
import Heading from './Heading';
import HoverButton from "./Animation";

import { toast } from 'react-toastify';

const showDemoLogin = ({ title, username, password }) => {
  toast.info(
    <div>
      You can login in the {title} with the following credentials:
      <br />
      <strong>Username:</strong> {username}
      <br />
      <strong>Password:</strong> {password}
    </div>
  , {
    position: "top-right",
    autoClose: 15000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    theme: "dark",
    });
}

const Project = () => {
  return (
    <Section
      className=''
      id='projects'
      labelledBy='projects-heading'
    >
      <div className='container relative'>
        <Heading
          id='projects-heading'
          className="md:max-w-md lg:max-w-2xl"
          title='Projects'
        />
        <ul role='list' className='grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-y-3 gap-x-16 pr-10 mb-10'>
          {Projects.map((project) => (
            <li className='relative p-0.5 bg-no-repeat bg-[length:100%_100%] w-full'
              style={{ backgroundImage: `url(${project.backgroundImg})` }}
              key={project.id}>
              <div className='relative z-10 flex flex-col min-h-[22rem] p-[2.8rem] pointer-events-none'>
                {project.username && (
                  <div className='absolute right-10'>
                    <button
                      type='button'
                      onClick={() => showDemoLogin(project)}
                      aria-label={`Show demo login for ${project.title}`}
                      className='relative flex items-center justify-center rounded-full ml-2 group z-10 pointer-events-auto w-8 h-8 bg-red-600'
                    >?</button>
                  </div>
                )}
                <h3 className='h5 mb-5'>{project.title}</h3>
                <p className='body-2 mb-6 text-n-3'>{project.description}</p>
                <div className='flex gap-2 mt-auto'>
                  {project.technologies.filter(Boolean).map((technology) => (
                    <span key={technology} className='font-code text-sm py-1 rounded-md mr-2'>{technology}</span>
                  ))}
                </div>
                {(project.link || project.livedemo) && (
                  <div className='flex items-center mt-auto z-10'>
                    {project.link && (
                      <HoverButton>
                        <a href={project.link} aria-label={`${project.title} source code on GitHub`} className='w-12 h-12 pointer-events-auto'>
                          <img src={githubLogo} alt="" />
                        </a>
                      </HoverButton>
                    )}
                    {project.livedemo && (
                      <a
                        href={project.livedemo}
                        aria-label={`${project.title} live demo`}
                        className='ml-auto flex items-center font-code text-xs font-bold text-n-1 uppercase tracking-wider pointer-events-auto'
                      >
                        Live Demo<Arrow/>
                      </a>
                    )}
                  </div>
                )}
              </div>
              <div
                className='absolute inset-0.5 bg-slate-950'
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className={`absolute inset-0 opacity-0 transition-opacity ${project.id == 4 ? 'hover:opacity-50' : 'hover:opacity-20'}`}>
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt=""
                      loading="lazy"
                      className='object-cover w-full h-full'
                    />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {/* One shared clip-path definition (it used to be repeated in every card, duplicating id="benefits") */}
        <ClipPath />
      </div>
    </Section>
  )
}

export default Project;
