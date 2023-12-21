import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const NAV_LINKS = [
    { label: "HOME", link: "/" },
    { label: "OUR STORY", link: "/our-story" },
    { label: "OUR WORK", link: "/our-work" },
    { label: "OUR CREW", link: "/our-crew" },
    { label: "BLOG", link: "/blog" },
    { label: "CONTACT", link: "/contact" },
  ];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={`header fixed w-full top-0 z-50 ${openMenu ? "bg-slate-100" : "bg-[#03030267]"}`}>
      <div className="container">
        <div className="flex items-center justify-between p-4 md:p-6">
          <a className={`brand text-lg md:text-xl ${openMenu ? "text-slay-900 z-[999]" : "text-white"}`} href="/">
            Logo
          </a>
          <nav className="hidden md:block">
            <ul className="flex font-medium space-x-4 text-white">
              {
                NAV_LINKS.map((item) => (
                  <li key={item.link}>
                    <NavLink
                      className={({ isActive, isPending }) => `${isPending || isActive ? "border-b-2 py-1" : ""}`}
                      to={item.link}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>
          <div className="md:hidden">
            {
              openMenu
              ? <CloseIcon onClick={() => setOpenMenu(false)} />
              : <MenuIcon onClick={() => setOpenMenu(true)} />
            }
          </div>
        </div>
      </div>
      <div id="mobile-menu" className={`md:hidden ${openMenu ? "" : "hidden"} bg-slate-100 w-full absolute right-0`}>
        <ul className="text-black text-center pt-4 pb-8">
          {
            NAV_LINKS.map((item) => (
              <li key={item.link}>
                <NavLink
                  className={({ isActive, isPending }) => `${isPending || isActive ? "bg-slate-200" : ""} py-2 block`}
                  to={item.link}
                >
                  {item.label}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
