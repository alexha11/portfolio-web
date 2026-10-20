import Section from "../Section";
import Heading from "../Heading";
import Form from "./Form";
import ErrorBoundary from "../ErrorBoundary";
import CanvasPlaceholder from "../3DImage/CanvasPlaceholder";
import useInView from "../../hooks/useInView";
import useMediaQuery from "../../hooks/useMediaQuery";

import { lazy, Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

// The globe (and its 6 MB texture) loads only once the contact section is near the viewport
const Globe = lazy(() => import('../3DImage/Globe'));

const toastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'colored',
};

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);
  const globeView = useInView();
  const isTouch = useMediaQuery('(pointer: coarse)');

  // Field validation (required, email format) is done by the browser before this runs
  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      });
      form.current.reset();
      toast.success('Message sent!', toastOptions);
    } catch {
      toast.error('Something went wrong. Please try again.', toastOptions);
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      className= ""
      id="contact"
      labelledBy="contact-heading"
    >
      <div className='container relative'>
        <Heading id="contact-heading" title="Contact" text="Feel free to reach out to me for any queries or collaborations." />
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 flex items-center justify-center">
          <form ref={form} onSubmit={sendEmail} className="w-full max-w-[32rem] xl:max-w-[38rem]">
              <div className="flex flex-col">
                <div className="my-6">
                  <Form
                    label="Name"
                    type="text"
                    name="user_name"
                    autoComplete="name"
                    placeholder="Your name"/>
                </div>
                <div className="my-6">
                  <Form
                    label="Email"
                    type="email"
                    name="user_email"
                    autoComplete="email"
                    placeholder="Your email"
                  />
                </div>
                <div className="my-6">
                  <Form
                    big
                    label="Message"
                    name="message"
                    placeholder="Your message"
                  />
                </div>
                <div className="flex justify-center">
                  <button type="submit" disabled={sending} className="button bg-slate-600 px-3 py-2 min-w-15 rounded-md hover:ring-2 hover:ring-[#4681f4] disabled:opacity-60">
                    {sending ? 'Sending…' : 'Send'}
                  </button>
                </div>
              </div>
            </form>

        </div>
        <div className="flex flex-col items-center justify-center mt-7 lg:w-1/3">
          <div>
            <p className="text-sm max-w-xl">You can introduce by telling about your country &#128513; For example, my country - Vietnam is an S-shaped land located on the eastern edge of mainland Southeast Asia. You can see from here.</p>
          </div>
          {/* Without WebGL the globe is simply left out */}
          <ErrorBoundary>
            <div ref={globeView.ref} className="w-full h-[400px] mt-12 md:mt-0">
              {globeView.seen && (
                <Suspense fallback={<CanvasPlaceholder />}>
                  <Globe active={globeView.inView} interactive={!isTouch} />
                </Suspense>
              )}
            </div>
          </ErrorBoundary>
        </div>
       </div>
      </div>
    </Section>
  );
}


export default Contact;
