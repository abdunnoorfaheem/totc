import { useState } from 'react';
import Container from '../Container.jsx'
import Image from '../Image.jsx';
import Button from '../Button.jsx';
import Logo from '../../assets/logo.png';
import {Link} from 'react-router-dom'

 const Header=()=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[url('./src/assets/banner.png')] bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex justify-between items-center py-6 md:py-8">
          
          
          <div>
            <Link to={"/"}>
              <Image imgSrc={Logo} imgAlt={"Logo"} />
            </Link>
          </div>

          
          <div className="hidden lg:flex">
            <ul className="flex gap-x-8 xl:gap-x-12 text-[18px] xl:text-[22px] font-poppins text-white font-normal">
              <li><Link to={"/"} className="hover:text-gray-300 transition">Home</Link></li>
              <li><Link to={"/courses"} className="hover:text-gray-300 transition">Courses</Link></li>
              <li><Link to={"/service"} className="hover:text-gray-300 transition">Service</Link></li>
              <li><Link to={"/blog"} className="hover:text-gray-300 transition">Blog</Link></li>
              <li><Link to={"/aboutUs"} className="hover:text-gray-300 transition">About Us</Link></li>
            </ul>
          </div>

          
          <div className="hidden lg:flex gap-x-4">
            <Button className={'text-[#5B5B5B] font-poppins text-[18px] xl:text-[22px] font-medium xl:px-12 xl:py-4 px-8 py-3 rounded-[80px] hover:bg-white hover:opacity-[0.30] bg-white duration-300 ease-in'}>
              Login
            </Button>
            <Button className={'text-[#5B5B5B] font-poppins text-[18px] xl:text-[22px] font-medium xl:px-12 xl:py-4 px-8 py-3 rounded-[80px] hover:bg-white hover:opacity-[0.30] bg-white duration-300 ease-in'}>
              Sign Up
            </Button>
          </div>

         
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
               
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
               
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

        </div>

       
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-white/20">
            <ul className="flex flex-col gap-y-4 text-[18px] font-poppins text-white font-normal mb-6">
              <li><Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to={"/courses"} onClick={() => setIsOpen(false)}>Courses</Link></li>
              <li><Link to={"/service"} onClick={() => setIsOpen(false)}>Service</Link></li>
              <li><Link to={"/blog"} onClick={() => setIsOpen(false)}>Blog</Link></li>
              <li><Link to={"/aboutUs"} onClick={() => setIsOpen(false)}>About Us</Link></li>
            </ul>

            <div className="flex flex-col gap-y-3">
              <Button className={'w-full text-[#5B5B5B] font-poppins text-[18px] font-medium py-3 rounded-[80px] bg-white hover:opacity-[0.80] duration-300'}>
                Login
              </Button>
              <Button className={'w-full text-[#5B5B5B] font-poppins text-[18px] font-medium py-3 rounded-[80px] bg-white hover:opacity-[0.80] duration-300'}>
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;