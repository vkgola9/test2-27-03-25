import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from './NavItems';

const NavMenu = ({ isMobile }) => {
  const navItems = NavItems();

  return (
    <nav className={isMobile ? 'block lg:hidden' : 'hidden lg:flex items-center'}>
      <ul className={isMobile ? 'flex flex-col space-y-4' : 'flex space-x-4'}>
        {navItems.map((item) => (((item.disabled === 0 || item.disabled === undefined) && (item.location === "header" || item.location === "both") && item?.subItems ? (
            <li key={item.item} className="relative group">
              <Link to={item.to} className="font-semibold text-indigo-500 hover:text-indigo-800 transition-colors">
                {item.item}
              </Link>
              {/* Submenu */}
              <ul className={isMobile ? 'pl-4 bg-white dark:bg-gray-700 rounded-md shadow-lg' : 'absolute hidden group-hover:block bg-white dark:bg-gray-700 p-2 rounded-md shadow-lg w-80'}>
                {item.subItems.map((subItem) => (subItem.disabled === 0 || subItem.disabled === undefined) && subItem.location === "header" && (
                    <li key={subItem.item}>
                      <Link to={subItem.to} className="block hover:text-accent transition-colors py-1">
                        {subItem.item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </li>
          ) : (item.disabled === 0 || item.disabled === undefined) && (item.location === "header" || item.location === "both") && (
              <li key={item.item}>
                <Link to={item.to} className="font-semibold text-indigo-500 hover:text-indigo-800 transition-colors">
                  {item.item}
                </Link>
              </li>
            ))
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
