'use client'
import React, { useState } from 'react' // Import useState
import styles from './navbar.module.css'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import LocaleSwitcher from '../utils/localeswitcher'
import { FaBars, FaTimes } from 'react-icons/fa' // Using react-icons for a modern look

const Navbar = () => {
  const { locale } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const handleThemeChange = (e:any) => {
  //   const theme = e.target.value;
  //   if (theme === 'dark') {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // };

  return (
    
    
    <nav className={`w-full  z-50 ${styles.navbar} shadow-lg bg-[#021b31]`}>
      <div className={`container-fluid mx-auto px-4 sm:px-6 lg:px-8`}>
        {/* Top Bar - Options & Contact */}
        <div className='hidden sm:flex items-center justify-between py-2 border-b border-[#006EFF]'>
          <Link href={`/${locale}/partnership`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>
          Regulated BY FSC
          </Link>
          <div className='flex items-center space-x-4 gap-x-10'>
            {/* Theme Switcher - Styled for modern look */}
            {/* <div className='relative'>
              <select className={`${styles.select} bg-gray-800/80 border border-gray-700 rounded-md py-1 px-2 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500`}>
                <option className='bg-gray-800' value="light">Light</option>
                <option className='bg-gray-800' value="dark">Dark</option>
              </select>
            </div> */}
            <Link href={`/${locale}/contact`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>
              CONTACT US
            </Link>
            
          </div>
        </div>

        {/* Main Bar - Logo, Menu, Login/Register */}
        <div className='flex items-center justify-between py-4'>
          <div className="logo flex-shrink-0">
            {/* Link to homepage using locale for consistency */}
            <Link href={`/${locale}`}>
              {/* Image adjusted for mobile/desktop, using a smaller size */}
              <Image width={280} height={52} alt='logo' src='/images/logo-full.png' priority className=' ' />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:flex items-center justify-center flex-grow'>
            <ul className={styles.menuList}>
              <li><a href={`/${locale}`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>Markets</a></li>
              <li><Link href={`/${locale}/trading`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>Trading</Link></li>
              <li><Link href={`/${locale}/education_and_tools`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>Education & Tools</Link></li>
              <li><Link href={`/${locale}/promos`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>Promos</Link></li>
              <li><Link href={`/${locale}/parterships`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>Partnerships</Link></li>
              <li><Link href={`/${locale}/about`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>About</Link></li>
              <li><Link href={`/${locale}/blog`} className={`${styles.link} hover:text-cyan-400 transition duration-300`}>Blog</Link></li>
            </ul>
          </div>

          {/* Login/Register Buttons & Mobile Toggle */}
          <div className='flex items-center space-x-3'>
            <div className='hidden sm:flex space-x-4'>
              <Link href="https://cp.mymaamarkets.com/" passHref>
                <button className='w-[113px] h-[53px] rounded-[30px] text-[16px] btn-outline px-4 py-1.5 text-sm font-medium border border-cyan-500 text-cyan-500 rounded-full hover:bg-cyan-500 hover:text-gray-900 transition duration-300 cursor-pointer' >
                  Login
                </button>
              </Link>
              <Link href="https://cp.mymaamarkets.com/Home/Signup" passHref>
                <button className='w-[150 px] h-[53px] rounded-[30px] text-[16px] bg-[#1bbf8a] px-4 py-1.5 text-sm font-medium rounded-full text-white hover:opacity-90 transition duration-300 cursor-pointer'>
                  Register
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className='lg:hidden'>
              <button onClick={toggleMenu} className='p-2 text-white focus:outline-none'>
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content (Conditional Rendering) */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute w-full bg-gray-900/95 shadow-xl transition-all duration-300 ease-in-out z-5`}>
        <ul className='flex flex-col space-y-2 p-4'>
          {/* Top Bar items on mobile */}
          <li className='sm:hidden pt-2 border-t border-gray-700'><Link href={`/${locale}/partnership`} onClick={toggleMenu} className={`${styles.mobileLink}`}>PARTNERSHIP</Link></li>
          <li className='sm:hidden'><Link href={`/${locale}/contact`} onClick={toggleMenu} className={`${styles.mobileLink}`}>CONTACT US</Link></li>
          <li className='sm:hidden'>
            <div className='flex items-center justify-between'>
              <span className='text-xs text-gray-400'>Locale:</span> <LocaleSwitcher />
            </div>
          </li>
          {/* Main Menu items on mobile */}
          <li className='pt-2 border-t border-gray-700/50'><a href={`/${locale}`} onClick={toggleMenu} className={`${styles.mobileLink}`}>Markets</a></li>
          <li><Link href={`/${locale}/trading`} onClick={toggleMenu} className={`${styles.mobileLink}`}>Trading</Link></li>
          <li><Link href={`/${locale}/education_and_tools`} onClick={toggleMenu} className={`${styles.mobileLink}`}>Education & Tools</Link></li>
          <li><Link href={`/${locale}/promos`} onClick={toggleMenu} className={`${styles.mobileLink}`}>Promos</Link></li>
          <li><Link href={`/${locale}/parterships`} onClick={toggleMenu} className={`${styles.mobileLink}`}>Partnerships</Link></li>
          <li><Link href={`/${locale}/about`} onClick={toggleMenu} className={`${styles.mobileLink}`}>About</Link></li>
          <li><Link href={`/${locale}/blog`} onClick={toggleMenu} className={`${styles.mobileLink}`}>Blog</Link></li>
          {/* Login/Register on mobile */}
          <li className='sm:hidden pt-4 flex flex-col space-y-2'>
            <Link href="https://cp.mymaamarkets.com/" passHref>
            <button className='btn-outline w-full py-2 text-sm font-medium border border-cyan-500 text-cyan-500 rounded-lg hover:bg-cyan-500 hover:text-gray-900 transition duration-300'>
              Login
            </button>
            </Link>
            <Link href="https://cp.mymaamarkets.com/Home/Signup/" passHref>
            <button className='btn-gradient-1 w-full py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90 transition duration-300'>
              Register
            </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar