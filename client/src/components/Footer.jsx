import SocialLinks from "./SocialLinks";
import { profile } from "../constants";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="mx-auto flex max-w-5xl flex-col-reverse items-center justify-between gap-4 px-6 py-8 sm:flex-row">
      <p className="text-sm text-muted">
        &copy; {new Date().getFullYear()} {profile.name}
      </p>
      <SocialLinks />
    </div>
  </footer>
);

export default Footer;
