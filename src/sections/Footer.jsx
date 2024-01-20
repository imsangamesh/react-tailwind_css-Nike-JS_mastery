import footerLogo from "../assets/images/footer-logo.svg";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-continer">
      {/* -------------------------- BRAND + LINKS */}
      <div className="flex justify-between items-start flex-wrap max-lg:flex-col">
        {/* -------------------------- BRAND */}
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a>

          <p className="text-base mt-8 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards!
          </p>

          {/* -------------------------- SOCIAL LINKS */}
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-10 h-10 bg-white/60 hover:bg-white/90 rounded-full transition-all duration-500">
                <img src={icon.src} alt="" width={20} height={20} />
              </div>
            ))}
          </div>
        </div>

        {/* -------------------------- LINKS */}
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wra max-lg:mt-10">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray">
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------- COPYRIGHTS */}
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-montserrat">
        <p className="cursor-pointer">&copy; Copyright. All rights reserved.</p>
        <p className="cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
