import React, { useState } from 'react'
import Logo from '../../assets/icons/logo.svg'
import { Send, Menu, X } from 'lucide-react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed left-[50%] translate-x-[-50%] flex max-w-[862px] w-[92%] bg-white shadow-sm mx-auto rounded-[15px] md:rounded-[20px] justify-between p-[10px] md:p-[15px] lg:p-[20px] mt-[8px] md:mt-[15px] lg:mt-[20px] items-center z-50'>
      <img src={Logo} alt="" className='h-[20px] md:h-[24px] lg:h-auto' />

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center gap-[6px] lg:gap-[15px]'>
        <li><a className='hover:bg-secondary p-[6px] lg:p-[10px] rounded-sm text-[12px] lg:text-[15px] transition-all duration-300' href="#docs">Docs</a></li>
        <li><a className='hover:bg-secondary p-[6px] lg:p-[10px] rounded-sm text-[12px] lg:text-[15px] transition-all duration-300' href="#pricing">Pricing</a></li>
        <li><a className='hover:bg-secondary p-[6px] lg:p-[10px] rounded-sm text-[12px] lg:text-[15px] transition-all duration-300' href="#about">About</a></li>
        <li><a className='hover:bg-secondary p-[6px] lg:p-[10px] rounded-sm text-[12px] lg:text-[15px] transition-all duration-300' href="#blog">Blog</a></li>
        <li><a className='hover:bg-secondary p-[6px] lg:p-[10px] rounded-sm text-[12px] lg:text-[15px] transition-all duration-300' href="#community">Community</a></li>
      </ul>

      {/* Desktop Telegram Button */}
      <button className='hidden md:flex cursor-pointer items-center gap-[6px] lg:gap-[10px] bg-blue-500 text-white py-[4px] lg:py-[5px] px-[8px] lg:px-[10px] rounded-[8px] lg:rounded-[10px] text-[12px] lg:text-[15px] hover:bg-blue-600 transition-all duration-300'>
        <Send size={16} className='lg:w-[20px] lg:h-[20px]' />
        Telegram
      </button>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden cursor-pointer p-[6px] rounded-[8px] hover:bg-gray-100 transition-all duration-300'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className='relative w-[22px] h-[22px]'>
          <Menu
            size={22}
            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
          />
          <X
            size={22}
            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
          />
        </div>
      </button>

      {/* Mobile Navigation Menu with Transition */}
      <div className={`absolute top-full left-0 right-0 mt-[8px] bg-white rounded-[12px] shadow-lg overflow-hidden md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
        <div className='p-[15px]'>
          <ul className='flex flex-col gap-[6px]'>
            <li>
              <a
                className='block hover:bg-secondary p-[10px] rounded-[8px] text-[14px] transition-all duration-200'
                href="#docs"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </a>
            </li>
            <li>
              <a
                className='block hover:bg-secondary p-[10px] rounded-[8px] text-[14px] transition-all duration-200'
                href="#pricing"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className='block hover:bg-secondary p-[10px] rounded-[8px] text-[14px] transition-all duration-200'
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className='block hover:bg-secondary p-[10px] rounded-[8px] text-[14px] transition-all duration-200'
                href="#blog"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                className='block hover:bg-secondary p-[10px] rounded-[8px] text-[14px] transition-all duration-200'
                href="#community"
                onClick={() => setIsMenuOpen(false)}
              >
                Community
              </a>
            </li>
          </ul>
          <button
            className='w-full mt-[12px] cursor-pointer flex items-center justify-center gap-[8px] bg-blue-500 text-white py-[10px] px-[15px] rounded-[10px] text-[14px] hover:bg-blue-600 transition-all duration-300'
            onClick={() => setIsMenuOpen(false)}
          >
            <Send size={18} />
            Telegram
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
