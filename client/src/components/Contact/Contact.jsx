import Section from "../Section";
import Heading from "../Heading";
import Form from "./Form";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Main from '../3DImage/main';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(form.current.user_email.value) && form.current.user_email.value) {
      toast.error('Please enter a valid email address!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        progress: undefined,
      });
      return;
    }
    if(!form.current.user_name.value || !form.current.user_email.value || !form.current.message.value) {
      toast.error('Please fill in all fields!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        progress: undefined,
      });
      return;
    }
    
    if(!alert('Are you sure you want to send this message?')) {

      const serviceID = import.meta.env.VITE_SERVICE_ID;
      const templateID = import.meta.env.VITE_TEMPLATE_ID;
      const apiKey = import.meta.env.VITE_PUBLIC_KEY;

      emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: apiKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('Email sent successfully!');
          toastifySuccess();

        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Something went wrong. Please try again.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
            progress: undefined,
          });
        },
      );
    }
  };

  const toastifySuccess = () => {
    toast.success('Message sent!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'colored',
      progress: undefined,
    });
  };

  return (
    <Section
      className= ""
      id="contact"
    >
      <div className='container relative'>
        <Heading title="Contact" text="Feel free to reach out to me for any queries or collaborations." />
        <div className="flex lg:flex-row"> 
          <div className="w-full lg:w-2/3 flex items-center justify-center">
          <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-col xl:w-[38rem] lg:w-[31rem] w-[32rem]">
                <div className="my-6">
                  <Form 
                    label="Name"
                    type="text" 
                    name="user_name"
                    placeholder="Your name"/>
                </div>
                <div className="my-6">    
                  <Form 
                    label="Email"
                    type="email" 
                    name="user_email" 
                    placeholder="Your email"  
                  />
                </div>
                <div className="my-6">
                  <Form 
                    big
                    label="Message"
                    type="text" 
                    name="message" 
                    placeholder="Your message"
                  />
                </div>
                <div className="flex justify-center">
                  <button type="submit" value="Send" className="button bg-slate-600 px-3 py-2 w-15 rounded-md hover:ring-2 hover:ring-[#4681f4]">Send</button>
                  <ToastContainer />
                </div>
              </div>
            </form>

        </div>
        <div className="lg:w-1/3 hidden lg:flex lg:flex-col lg:items-center lg:justify-center">
          <div>
            <p className="text-sm">You can introduce by telling about your country &#128513; Vietnam is an S-shaped land located on the eastern edge of mainland Southeast Asia. You can see from here.</p>
          </div>
          <Main />
        </div>
       </div>
      </div>
    </Section>
  );
}


export default Contact;