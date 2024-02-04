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
    <header className={`header fixed w-full top-0  z-50 ${openMenu ? "bg-slate-100" : "bg-[#1A1A1A]"}`}>
      <div className="container">
        <div className=" p-4 md:p-6">
         
          <nav className="hidden md:block">
            <ul className="flex w-full items-center justify-between font-medium  text-white">
                <div className='flex flex-1 justify-center'>
                <li className='mr-6' key={NAV_LINKS[0].link}>
                    <NavLink
                      className={({ isActive, isPending }) => `${isPending || isActive ? "border-b-2 py-1" : ""}`}
                      to={NAV_LINKS[0].link}
                    >
                      {NAV_LINKS[0].label}
                    </NavLink>
                  </li>
                  <li className='mr-6' key={NAV_LINKS[1].link}>
                    <NavLink
                      className={({ isActive, isPending }) => `${isPending || isActive ? "border-b-2 py-1" : ""}`}
                      to={NAV_LINKS[1].link}
                    >
                      {NAV_LINKS[1].label}
                    </NavLink>
                  </li>
                  <li className='mr-6' key={NAV_LINKS[2].link}>
                    <NavLink
                      className={({ isActive, isPending }) => `${isPending || isActive ? "border-b-2 py-1" : ""}`}
                      to={NAV_LINKS[2].link}
                    >
                      {NAV_LINKS[2].label}
                    </NavLink>
                  </li>
                </div>
                <div className='flex flex-1 justify-center'>
                  <a className={`brand text-lg md:text-xl ${openMenu ? "text-slay-900 z-[999]" : "text-white"}`} href="/">
                    <img
                      src="https://res.cloudinary.com/dlicwfgtq/image/upload/v1706929148/bw/makjnf7l0rfsa0krvuiu.jpg"
                      alt="Logo"
                      className="mx-auto "
                      style={{ height: '2rem', fontSize: "1rem" }}
                    />
                    </a>
                </div>
                <div className='flex flex-1 justify-center'>
                 <li className='mr-6' key={NAV_LINKS[3].link}>
                    <NavLink
                      className={({ isActive, isPending }) => `${isPending || isActive ? "border-b-2 py-1" : ""}`}
                      to={NAV_LINKS[3].link}
                    >
                      {NAV_LINKS[3].label}
                    </NavLink>
                  </li> 
                  <li className='mr-6' key={NAV_LINKS[4].link}>
                    <NavLink
                      className={({ isActive, isPending }) => `${isPending || isActive ? "border-b-2 py-1" : ""}`}
                      to={NAV_LINKS[4].link}
                    >
                      {NAV_LINKS[4].label}
                    </NavLink>
                  </li> 
                  <li className='mr-6' key={NAV_LINKS[5].link}>
                    <NavLink
                      className={({ isActive, isPending }) => `${isPending || isActive ? "border-b-2 py-1" : ""}`}
                      to={NAV_LINKS[5].link}
                    >
                      {NAV_LINKS[5].label}
                    </NavLink>
                  </li>
                </div>
            </ul>
          </nav>
          <div className="md:hidden text-white">
            {
              openMenu
              ? <CloseIcon className=" text-black" onClick={() => setOpenMenu(false)} />
              : <MenuIcon className=" text-white" onClick={() => setOpenMenu(true)} />
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
