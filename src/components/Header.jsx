// src/components/Header.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigation } from '../constants';
import MenuSvg from '../assets/svg/MenuSvg';
import Button from './Button';
import { enablePageScroll, disablePageScroll } from 'scroll-lock';
import { HamburgerMenu } from "./design/header";
import {CgShoppingCart, CgProfile} from 'react-icons/cg'



const Header = () => {
  const { pathname } = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-50  border-n-1 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-1' : 'bg-n-1 backdrop-blur-sm'}`}>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 justify-between'>
        {/* Logo */}
        <a className='block text-3xl text-white' href='/' onClick={handleClick}>
          Furni.
        </a>

        <nav className={`${openNavigation ? 'flex' : 'hidden'} absolute  top-[4rem] left-0 right-0 lg:flex lg:static px-4 lg:bg-transparent bg-n-1  justify-start `}>
          <div className='relative z-2 flex flex-col group items-center justify-center m-auto lg:flex-row'>
            {navigation.map((item) => (
              
              <Link key={item.id} to={item.url} onClick={handleClick}
                className={`block relative  text-sm text-gray-400 transition-colors  px-4 py-6 md:py-6 lg:mr-3   ${item.url === pathname ? 'z-2 lg:text-gray-400' : 'lg:text-gray-400'} lg:leading-3 hover:text-white relative hover:border-b-2 hover:border-n-2 `}
              >
                {item.title}

                 
              </Link>
             
            ))}

            <div className='gap-4 flex items-center justify-center '>
              <Button className='p-3 '>
                <CgShoppingCart className='text-white h-[24px] w-[24px] hover:text-n-2'  />
              </Button>
              <Button>
                <CgProfile className='text-white h-[24px] w-[24px] hover:text-n-2'/>
              </Button>
            </div>
            
          </div>
          <HamburgerMenu />
        </nav>

       

        

        <Button className='ml-auto lg:hidden  ' onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
