import { lazy, Suspense, useId, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import Section from "../Section";
import SocialLinks from "../SocialLinks";
import ErrorBoundary from "../ErrorBoundary";
import CanvasPlaceholder from "../3DImage/CanvasPlaceholder";
import { MailIcon, MapPinIcon } from "../icons";
import { profile } from "../../constants";
import useInView from "../../hooks/useInView";
import useMediaQuery from "../../hooks/useMediaQuery";

// The globe (and its large texture) loads only once the contact section is near the viewport
const Globe = lazy(() => import("../3DImage/Globe"));

const fieldClassName =
  "mt-2 block w-full rounded-md border border-line bg-canvas px-3 py-2.5 text-sm text-fg transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const Field = ({ label, name, type = "text", autoComplete, multiline }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-fg">
        {label}
      </label>
      {multiline ? (
        <textarea id={id} name={name} rows={5} required className={fieldClassName} />
      ) : (
        <input id={id} name={name} type={type} autoComplete={autoComplete} required className={fieldClassName} />
      )}
    </div>
  );
};

const statusMessages = {
  sent: "Thanks, your message was sent. I'll get back to you soon.",
  error: "Something went wrong. Please try again or email me directly.",
};

const Contact = () => {
  const form = useRef(null);
  const [status, setStatus] = useState("idle");
  const globeView = useInView();
  const isTouch = useMediaQuery("(pointer: coarse)");

  // Field validation (required, email format) is done by the browser before this runs
  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      });
      form.current.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="max-w-sm leading-relaxed text-muted">
            Feel free to reach out about opportunities, collaborations or questions. Email is the quickest way to reach me.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 text-fg transition-colors hover:text-accent">
                <MailIcon className="h-4 w-4 text-muted" />
                {profile.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-muted">
              <MapPinIcon className="h-4 w-4" />
              {profile.location}
            </li>
          </ul>
          <SocialLinks className="-ml-2.5 mt-5" />
          {/* Without WebGL the globe is simply left out */}
          <ErrorBoundary>
            <figure className="mt-8 max-w-[16rem]">
              <div ref={globeView.ref} className="h-56 w-full">
                {globeView.seen && (
                  <Suspense fallback={<CanvasPlaceholder />}>
                    <Globe active={globeView.inView} interactive={!isTouch} />
                  </Suspense>
                )}
              </div>
              <figcaption className="mt-2 text-center text-xs text-muted">From Vietnam, based in Finland</figcaption>
            </figure>
          </ErrorBoundary>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <Field label="Name" name="user_name" autoComplete="name" />
          <Field label="Email" name="user_email" type="email" autoComplete="email" />
          <Field label="Message" name="message" multiline />
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-canvas transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            <p role="status" className="text-sm text-muted">
              {statusMessages[status]}
            </p>
          </div>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
