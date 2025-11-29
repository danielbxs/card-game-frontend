import { Link, NavLink } from "react-router";
import { HiUserCircle, HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { navDropdownLinks, navLinks } from "../lib/constants";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuSeparator,
} from "@headlessui/react";

export default function Navigation({ username }) {
  return (
    <header className="bg-zinc-800 text-white">
      <nav className="flex items-center justify-between py-4 px-20">
        <div>
          <Link to="/">
            <img
              src="/hooper-logo.webp"
              alt="Hooper Cards Logo"
              className=" max-w-24 object-cover"
            />
          </Link>
        </div>

        <div className="nav-links">
          {navLinks.map((l) => (
            <NavLink
              to={l.path}
              key={l.name}
              className={({ isActive }) =>
                isActive ? "nav-link--active" : "nav-link"
              }
            >
              {l.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center justify-center">
          {!username ? (
            <Menu>
              <MenuButton className="hover:cursor-pointer">
                <HiUserCircle className="w-10 h-10" />
              </MenuButton>
              <MenuItems anchor="bottom" className="nav-menu-items">
                {navDropdownLinks.map((l) => (
                  <MenuItem className="nav-menu-item" key={l.name}>
                    <Link to={l.path}>{l.name}</Link>
                  </MenuItem>
                ))}
                <MenuSeparator className="h-px bg-zinc-600" />

                <MenuItem>
                  <button className="flex items-center justify-center gap-2 hover:text-red-500 font-semibold hover:cursor-pointer px-3 py-1 w-full">
                    Logout
                    <HiArrowRightEndOnRectangle className="w-5 h-5" />
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          ) : (
            <Link
              className="px-5 py-2 rounded-md bg-amber-500 text-zinc-800 font-semibold hover:bg-amber-600"
              to="/signin"
            >
              Sign in
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
