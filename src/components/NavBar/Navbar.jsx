import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

import Link from "../Link/Link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/services", name: "Services" },
  ];

  return (
    <nav className="px-6 text-black">
      <div className="md:hidden text-2xl " onClick={() => setOpen(!open)}>
        {open === true ? <IoMdClose></IoMdClose> : <RiMenu2Line></RiMenu2Line>}
      </div>
      <ul
        className={`md:flex duration-1000 absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-yellow-200`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};
Link.propType = {
  route: PropTypes.object,
};
export default Navbar;
