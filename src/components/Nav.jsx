import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* ---------------- LOGO */}
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>

        {/* ---------------- LINKS */}
        <ul className="flex-1 flex justify-end mr-10 items-center gap-16 max-lg:hidden">
          {navLinks.map((item, i) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ---------------- LOGO */}
        <div className="lg:hidden">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
