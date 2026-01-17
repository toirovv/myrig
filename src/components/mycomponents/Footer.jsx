import React from 'react'
import Stack from "../../assets/icons/SVG (1).svg"
import Img from "../../assets/images/div.framer-1g099dr.png"
import Logo from "../../assets/icons/svg1052471163_3673.svg"
import Github2 from "../../assets/icons/div.framer-hec3oc-container.svg"
import In from "../../assets/icons/div.framer-e9cv9e-container.svg"
import Stack2 from "../../assets/icons/div.framer-14lu32u-container.svg"
import X1 from "../../assets/icons/div.framer-1getbkx-container.svg"
import { Github } from 'lucide-react'

function Footer() {
    return (
        <footer className='bg-[#1E1E1E] mt-[30px]' id='community'>
            <div className='container mx-auto px-[12px] sm:px-[16px] md:px-[24px] lg:px-[40px]'>
                <div className='py-[20px] sm:py-[24px] lg:py-[30px]'>
                    {/* Community Section */}
                    <div className='p-[16px] sm:p-[24px] lg:p-[50px] mt-[30px] sm:mt-[50px] lg:mt-[80px] bg-[#262626] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px]'>
                        <div className='flex flex-col lg:flex-row items-center justify-between gap-[24px] sm:gap-[30px] lg:gap-0'>
                            <div className='text-center lg:text-left w-full lg:w-auto'>
                                <h1 className='text-background text-[20px] sm:text-[28px] lg:text-[43px]'>Join our Community</h1>
                                <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[12px] sm:gap-[16px] lg:gap-[20px] mt-[16px] sm:mt-[20px] lg:mt-[24px]'>
                                    <button className='flex items-center justify-center gap-[8px] bg-background p-[10px] sm:p-[8px] rounded-[8px] sm:rounded-[10px] text-[13px] sm:text-[14px] lg:text-[16px] w-full sm:w-auto transition-all duration-300 hover:opacity-90'><img src={Stack} alt="" className='w-[18px] sm:w-auto' />Join our Slack</button>
                                    <button className='flex items-center justify-center border-[2px] border-[#484848] gap-[8px] bg-[#262626] p-[10px] sm:p-[8px] rounded-[8px] sm:rounded-[10px] text-white text-[13px] sm:text-[14px] lg:text-[16px] w-full sm:w-auto transition-all duration-300 hover:bg-[#333]'><Github size={18} />Star us on Github</button>
                                </div>
                            </div>
                            <div className='w-full lg:w-auto flex justify-center'>
                                <img className='w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[500px] xl:max-w-[700px]' src={Img} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className='py-[20px] sm:py-[24px] lg:py-[30px]'>
                    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between gap-[24px] sm:gap-[30px] lg:gap-0'>
                        <div className='text-center lg:text-left'>
                            <img src={Logo} alt="" className='mx-auto lg:mx-0 h-[24px] sm:h-auto' />
                            <div className='flex items-center justify-center lg:justify-start mt-[16px] sm:mt-[20px] lg:mt-[24px] gap-[12px] sm:gap-[10px]'>
                                <button className='hover:opacity-70 transition-all duration-300 p-[4px]'><img src={Github2} alt="" className='w-[20px] sm:w-auto' /></button>
                                <button className='hover:opacity-70 transition-all duration-300 p-[4px]'><img src={X1} alt="" className='w-[20px] sm:w-auto' /></button>
                                <button className='hover:opacity-70 transition-all duration-300 p-[4px]'><img src={In} alt="" className='w-[20px] sm:w-auto' /></button>
                                <button className='hover:opacity-70 transition-all duration-300 p-[4px]'><img src={Stack2} alt="" className='w-[20px] sm:w-auto' /></button>
                            </div>
                        </div>
                        <div className='w-full lg:w-auto max-w-[450px] lg:max-w-[500px]'>
                            <div className='bg-[#262626] border-[2px] border-[#484848] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[10px] sm:rounded-[12px]'>
                                <p className='text-[#A1A1A1] text-[12px] sm:text-[14px] lg:text-[16px] text-center lg:text-left'>Sign up for our newsletter and join the growing Rig.dev community.</p>
                                <div className='flex flex-col sm:flex-row items-stretch gap-[10px] sm:gap-[12px] lg:gap-[15px] mt-[16px] sm:mt-[24px] lg:mt-[36px]'>
                                    <input className='rounded-[8px] sm:rounded-[10px] border-[2px] border-[#484848] p-[10px] sm:p-[10px] placeholder:text-[#757575] bg-transparent text-white flex-1 min-w-0 text-[13px] sm:text-[14px] lg:text-[16px]' type="text" placeholder='First name' />
                                    <input className='rounded-[8px] sm:rounded-[10px] border-[2px] border-[#484848] p-[10px] sm:p-[10px] placeholder:text-[#757575] bg-transparent text-white flex-1 min-w-0 text-[13px] sm:text-[14px] lg:text-[16px]' type="text" placeholder='Email' />
                                    <button className='bg-background p-[10px] sm:p-[10px] rounded-[8px] sm:rounded-[10px] text-[13px] sm:text-[14px] lg:text-[16px] whitespace-nowrap transition-all duration-300 hover:opacity-90'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='mt-[24px] sm:mt-[36px] lg:mt-[50px] border-[#484848]' />
                    <div className='flex flex-col sm:flex-row items-center mt-[20px] sm:mt-[30px] lg:mt-[41px] justify-between gap-[16px] sm:gap-[20px]'>
                        <div className='flex flex-col sm:flex-row items-center gap-[10px] sm:gap-[20px] lg:gap-[30px] text-center'>
                            <p className='text-[#606060] text-[10px] sm:text-[11px] lg:text-[12px]'>© 2023 Rig.Dev ApS</p>
                            <p className='text-[#606060] text-[10px] sm:text-[11px] lg:text-[12px] hover:text-white cursor-pointer transition-colors duration-300'>Terms of Service</p>
                            <p className='text-[#606060] text-[10px] sm:text-[11px] lg:text-[12px] hover:text-white cursor-pointer transition-colors duration-300'>Privacy & Cookies policy</p>
                        </div>
                        <div>
                            <p className='text-[#A1A1A1] text-[13px] sm:text-[14px] lg:text-[16px]'>hello@rig.dev</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
