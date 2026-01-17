import React, { useState } from 'react'
import Header from '@/components/mycomponents/Header'
import { Button } from '@/components/ui/button'
import Aws from '../assets/icons/Group.svg'
import Smth from '../assets/icons/Vector (1).svg'
import aa from '../assets/icons/SVG.svg'
import img1 from '../assets/images/K8s Operator.png'
import img2 from "../assets/images/K8s Operator (1).png"
import img3 from '../assets/images/Developer Tools.png'
import Simg from '../assets/images/Nuntio Architecture Visual → G2HQjyuaS0DkLKTQqPLS6mEBuKM.webp.png'
import MiniLogo from '../assets/icons/svg1505679848_1143.svg'
import section2Img from "../assets/images/Autoscaler.png"
import section3Img from "../assets/images/Local Development.png"
import section4Img from "../assets/images/Rollouts.png"
import Builds from "../assets/images/Builds.png"
import Builds2 from "../assets/images/Builds and Rollouts Illustration (1).png"
import RolBax from "../assets/images/Rollbacks.png"
import section5Img from "../assets/images/Builds and Rollouts Illustration.png"
import d1 from "../assets/images/Network Configurations Icon.png"
import d2 from "../assets/images/div.framer-1kce91c.png"
import d3 from "../assets/images/div.framer-o1njyo.png"
import Tick from "../assets//images/div.framer-17bmv1z.png"
import d4 from "../assets/images/Container Settings Icon.png"
import { ArrowRight, Cloud, Github, TicketCheck } from 'lucide-react'
import Footer from '@/components/mycomponents/Footer'



function Home() {


    const [open, setOpen] = useState(1)

    return (
        <div className='overflow-x-hidden'>
            <Header />
            <main>
                <div className="container max-w-[1400px] mx-auto px-[12px] sm:px-[16px] md:px-[24px] lg:px-[40px]">
                    {/* Hero Section */}
                    <section id='docs'>
                        <div className='flex flex-col lg:flex-row items-center justify-between gap-[30px] lg:gap-0'>
                            <div className='text-center lg:text-left w-full lg:w-auto'>
                                <h1 className='w-full lg:w-[521px] text-[22px] sm:text-[28px] md:text-[36px] lg:text-[45.31px] mt-[80px] sm:mt-[100px] lg:mt-[144px] mb-[12px] sm:mb-[16px] lg:mb-[22px] font-[500] leading-tight'>The application platform
                                    for Kubernetes</h1>
                                <p className='text-[#606060] text-[13px] sm:text-[15px] lg:text-[18px] w-full lg:w-[510px] leading-relaxed'>Deploy, manage and troubleshoot cloud-native applications
                                    at scale without overwhelming your engineers with the
                                    complexity of Kubernetes.</p>
                                <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-[10px] sm:gap-[20px] lg:gap-[30px] mt-[20px] lg:mt-[24px]'>
                                    <Button className='flex cursor-pointer items-center gap-[8px] w-full sm:w-auto text-[13px] sm:text-[14px] py-[10px] px-[16px]'>Documentation <ArrowRight size={16} /></Button>
                                    <Button className='flex cursor-pointer bg-backround text-black rounded-[10px] hover:text-white border-[#DEDEDE] border-[2px] items-center gap-[8px] w-full sm:w-auto text-[13px] sm:text-[14px] py-[10px] px-[16px]'> <Github size={16} />Get Started</Button>
                                </div>
                                <div className='mt-[40px] sm:mt-[60px] lg:mt-[120px]'>
                                    <p className='text-[13px] sm:text-[14px]'>Compatible with</p>
                                    <div className='flex items-center justify-center lg:justify-start gap-[15px] sm:gap-[20px] mt-[10px]'>
                                        <img src={aa} alt="" className='h-[20px] sm:h-auto' />
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-auto flex justify-center px-[10px]'>
                                <img src={Simg} alt="" className='w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-none' />
                            </div>
                        </div>
                    </section>

                    {/* K8 Complexity Section */}
                    <section id='pricing'>
                        <div>
                            <p className='bg-background w-auto max-w-[160px] sm:max-w-[180px] rounded-[8px] sm:rounded-[10px] text-center mx-auto mt-[60px] sm:mt-[100px] lg:mt-[200px] mb-[10px] sm:mb-[12px] border-[2px] p-[4px] sm:p-[3px] border-[#E8E8E8] text-[11px] sm:text-[13px]'>Fixing K8 complexity</p>
                            <h1 className='text-[#131313] w-full lg:w-[769px] text-[20px] sm:text-[26px] md:text-[34px] lg:text-[42px] text-center mx-auto font-[400] mb-[30px] sm:mb-[40px] lg:mb-[60px] px-[8px] leading-tight'>
                                Don't let the complexity of Kubernetes
                                leak into your engineering team
                            </h1>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-[20px] lg:gap-[30px]'>
                                <div className='w-full bg-[white]'>
                                    <img src={img1} alt="" className='w-full max-w-[280px] mx-auto md:max-w-none' />
                                    <h1 className='text-[15px] sm:text-[17px] lg:text-[19px] mt-[16px] sm:mt-[24px] lg:mt-[32px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-center md:text-left'>Abstract Away K8s Primitives</h1>
                                    <p className='text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px] text-center md:text-left'>Deploy, manage and debug applications with
                                        end-to-end ownership without experiencing
                                        bottlenecks or battling Kubernetes hurdles.</p>
                                </div>
                                <div className='w-full'>
                                    <img src={img2} alt="" className='w-full max-w-[280px] mx-auto md:max-w-none' />
                                    <h1 className='text-[15px] sm:text-[17px] lg:text-[19px] mt-[16px] sm:mt-[24px] lg:mt-[32px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-center md:text-left'>Abstract Away K8s Primitives</h1>
                                    <p className='text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px] text-center md:text-left'>Deploy, manage and debug applications with
                                        end-to-end ownership without experiencing
                                        bottlenecks or battling Kubernetes hurdles.</p>
                                </div>
                                <div className='w-full'>
                                    <img src={img3} alt="" className='w-full max-w-[280px] mx-auto md:max-w-none' />
                                    <h1 className='text-[15px] sm:text-[17px] lg:text-[19px] mt-[16px] sm:mt-[24px] lg:mt-[32px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-center md:text-left'>Abstract Away K8s Primitives</h1>
                                    <p className='text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px] text-center md:text-left'>Deploy, manage and debug applications with
                                        end-to-end ownership without experiencing
                                        bottlenecks or battling Kubernetes hurdles.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Dark Section - Developer-Friendly */}
                    <section id='about'>
                        <div className='mt-[50px] sm:mt-[80px] lg:mt-[120px] p-[16px] sm:p-[24px] lg:p-[40px] bg-[#1F1F1F] rounded-[12px] sm:rounded-[16px] lg:rounded-[18px]'>
                            <p className='inline-flex items-center gap-[8px] bg-[#484848] text-[#D8D8D8] text-[11px] sm:text-[13px] rounded-[8px] p-[6px] sm:p-[5px]'><img src={MiniLogo} alt="" className='w-[14px] sm:w-auto' />Convention over Configuration</p>
                            <h1 className='mt-[10px] sm:mt-[12px] text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] text-white font-[400] leading-tight'>Developer-Friendly Kubernetes Abstractions</h1>
                            <p className='text-[#DEDEDE] mt-[16px] sm:mt-[20px] lg:mt-[27px] text-[13px] sm:text-[15px] lg:text-[18px] w-full lg:w-[618px] leading-relaxed'>Deploy and scale applications without battling the intricacies of K8s and
                                spending valuable time configuring low-level K8s resources repeatedly.</p>
                            <button className='bg-background flex items-center gap-[8px] p-[8px] sm:p-[10px] mt-[20px] sm:mt-[28px] lg:mt-[33px] rounded-[8px] sm:rounded-[10px] text-[13px] sm:text-[15px] text-[#131313]'>Explore documentation <ArrowRight size={16} /></button>

                            {/* Feature Cards Grid */}
                            <div className='mt-[40px] sm:mt-[80px] lg:mt-[120px]'>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]'>
                                    <div className='bg-[#262626] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[2px] border-[#484848]'>
                                        <img src={section2Img} alt="" className='w-full max-w-[200px] sm:max-w-[260px] mx-auto' />
                                        <h1 className='text-center text-background mt-[16px] sm:mt-[28px] lg:mt-[40px] text-[15px] sm:text-[16px] lg:text-[18px]'>Autoscaler</h1>
                                        <p className='text-center text-[#A1A1A1] mt-[8px] sm:mt-[10px] text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed'>Seamlessly enable vertical- and horizontal autoscaling with CPU- &
                                            Memory limits, number of replicas & avg. CPU utilisation Targets.</p>
                                    </div>
                                    <div className='bg-[#262626] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[2px] border-[#484848]'>
                                        <img src={section3Img} alt="" className='w-full max-w-[180px] sm:max-w-[220px] mx-auto' />
                                        <h1 className='text-center text-background mt-[16px] sm:mt-[28px] lg:mt-[40px] text-[15px] sm:text-[16px] lg:text-[18px]'>Network Interfaces</h1>
                                        <p className='text-center text-[#A1A1A1] mt-[8px] sm:mt-[10px] text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed'>Manage Private and Public Network Interfaces and
                                            let Rig automatically handle the rest.</p>
                                    </div>
                                </div>
                                <div className='mt-[16px] sm:mt-[20px] lg:mt-[24px] grid grid-cols-1 lg:grid-cols-2 gap-[16px] sm:gap-[20px] lg:gap-[24px]'>
                                    <div className='bg-[#262626] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[2px] border-[#484848]'>
                                        <img src={section4Img} alt="" className='w-full max-w-[180px] sm:max-w-[220px] mx-auto' />
                                        <h1 className='text-center text-background mt-[16px] sm:mt-[28px] lg:mt-[40px] text-[15px] sm:text-[16px] lg:text-[18px]'>Environment Variables</h1>
                                        <p className='text-center text-[#A1A1A1] mt-[8px] sm:mt-[10px] text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed'>Automate configuring the low-level Kubernetes
                                            resources on both container and pod-level.</p>
                                    </div>
                                    <div className='bg-[#262626] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[2px] border-[#484848]'>
                                        <img src={section5Img} alt="" className='w-full max-w-[200px] sm:max-w-[260px] mx-auto' />
                                        <h1 className='text-center text-background mt-[16px] sm:mt-[28px] lg:mt-[40px] text-[15px] sm:text-[16px] lg:text-[18px]'>Config Files</h1>
                                        <p className='text-center text-[#A1A1A1] mt-[8px] sm:mt-[10px] text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed'>Our platform simplifies config files and their mounting.
                                            Don't spend time changing low-level K8s resources.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Deployment Engine Section */}
                            <div className='mt-[60px] sm:mt-[120px] lg:mt-[200px]'>
                                <p className='inline-flex items-center gap-[8px] bg-[#262626] text-[#D8D8D8] text-[11px] sm:text-[13px] rounded-[8px] p-[6px] sm:p-[5px]'><img src={MiniLogo} alt="" className='w-[14px] sm:w-auto' />Deployment</p>
                                <h1 className='text-background text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] mt-[10px] sm:mt-[12px] leading-tight'>Flexible and scalable Deployment Engine</h1>
                                <p className='text-[#DEDEDE] w-full lg:w-[938px] text-[13px] sm:text-[15px] lg:text-[18px] mt-[16px] sm:mt-[22px] lg:mt-[26px] leading-relaxed'>Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rig enables developers to
                                    deploy well-configured applications in Kubernetes without the complexity.</p>
                                <button className='flex items-center bg-background p-[8px] sm:p-[10px] mt-[20px] sm:mt-[24px] rounded-[8px] sm:rounded-[10px] gap-[8px] text-[13px] sm:text-[15px]'>Explore documentation <ArrowRight size={16} /></button>

                                <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[30px] mt-[30px] sm:mt-[50px] lg:mt-[79px]'>
                                    <div className='border-[2px] border-[#484848] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px]'>
                                        <h1 className='text-background text-[16px] sm:text-[18px] lg:text-[20px] mb-[8px] sm:mb-[10px]'>Builds</h1>
                                        <p className='text-[#A1A1A1] text-[13px] sm:text-[14px] lg:text-[16px]'>Immutable deployments of a new services w.
                                            automatic configurations of resources.</p>
                                        <img className='mt-[24px] sm:mt-[32px] lg:mt-[40px] w-full' src={Builds} alt="" />
                                    </div>

                                    <div className='border-[2px] border-[#484848] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px]'>
                                        <h1 className='text-background text-[16px] sm:text-[18px] lg:text-[20px] mb-[8px] sm:mb-[10px]'>Rollouts & Rollbacks</h1>
                                        <p className='text-[#A1A1A1] text-[13px] sm:text-[14px] lg:text-[16px]'>Deploy and update configurations with
                                            immutability and efficient Rollbacks.</p>
                                        <img className='mt-[24px] sm:mt-[32px] lg:mt-[40px] w-full' src={RolBax} alt="" />
                                    </div>

                                    <div className='border-[2px] border-[#484848] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px]'>
                                        <h1 className='text-background text-[16px] sm:text-[18px] lg:text-[20px] mb-[8px] sm:mb-[10px]'>Integrations</h1>
                                        <p className='text-[#A1A1A1] text-[13px] sm:text-[14px] lg:text-[16px]'>Integrate seamlessly into existing cloud-
                                            native deployment stacks.</p>
                                        <img className='mt-[24px] sm:mt-[32px] lg:mt-[40px] w-full' src={Builds2} alt="" />
                                    </div>
                                </div>
                            </div>

                            {/* Troubleshooting Section */}
                            <div>
                                <p className='inline-flex items-center gap-[8px] bg-[#262626] text-[#D8D8D8] mt-[60px] sm:mt-[120px] lg:mt-[199px] text-[11px] sm:text-[13px] rounded-[8px] p-[6px] sm:p-[5px]'><img src={MiniLogo} alt="" className='w-[14px] sm:w-auto' />Troubleshoot & Debug</p>
                                <h1 className='mt-[10px] sm:mt-[12px] text-[20px] sm:text-[28px] md:text-[36px] lg:text-[48px] text-white font-[400] leading-tight'>Troubleshooting made simple</h1>
                                <p className='text-[#DEDEDE] text-[13px] sm:text-[15px] lg:text-[18px] w-full lg:w-[745px] mt-[16px] sm:mt-[22px] lg:mt-[27px] leading-relaxed'>Deploy and manage any application on any cloud provider with Rig and Kubernetes. Rig
                                    enables developers to deploy well-configured applications in Kubernetes without.</p>
                                <button className='bg-background flex items-center gap-[8px] p-[8px] sm:p-[10px] mt-[20px] sm:mt-[28px] lg:mt-[33px] rounded-[8px] sm:rounded-[10px] text-[13px] sm:text-[15px] text-[#131313]'>Explore documentation <ArrowRight size={16} /></button>

                                <div className='mt-[24px] sm:mt-[32px] lg:mt-[40px] grid grid-cols-2 lg:grid-cols-4 gap-[12px] sm:gap-[16px] lg:gap-[30px]'>
                                    <div className='bg-[#262626] border-[2px] border-[#484848] p-[12px] sm:p-[16px] lg:p-[20px] rounded-[10px]'>
                                        <img src={d1} alt="" className='w-[32px] sm:w-[40px] lg:w-auto' />
                                        <h2 className='text-background mt-[16px] sm:mt-[20px] lg:mt-[24px] mb-[12px] sm:mb-[16px] lg:mb-[24px] text-[14px] sm:text-[16px] lg:text-[18px]'>Cluster insights</h2>
                                        <p className='text-[#A1A1A1] text-[12px] sm:text-[14px] lg:text-[16px]'>High-level access to cluster
                                            health, features and issues.</p>
                                    </div>

                                    <div className='bg-[#262626] border-[2px] border-[#484848] p-[12px] sm:p-[16px] lg:p-[20px] rounded-[10px]'>
                                        <img src={d2} alt="" className='w-[32px] sm:w-[40px] lg:w-auto' />
                                        <h2 className='text-background mt-[16px] sm:mt-[20px] lg:mt-[24px] mb-[12px] sm:mb-[16px] lg:mb-[24px] text-[14px] sm:text-[16px] lg:text-[18px]'>Instances</h2>
                                        <p className='text-[#A1A1A1] text-[12px] sm:text-[14px] lg:text-[16px]'>Instance status and
                                            dependencies in one
                                            aggregated view.</p>
                                    </div>

                                    <div className='bg-[#262626] border-[2px] border-[#484848] p-[12px] sm:p-[16px] lg:p-[20px] rounded-[10px]'>
                                        <img src={d3} alt="" className='w-[32px] sm:w-[40px] lg:w-auto' />
                                        <h2 className='text-background mt-[16px] sm:mt-[20px] lg:mt-[24px] mb-[12px] sm:mb-[16px] lg:mb-[24px] text-[14px] sm:text-[16px] lg:text-[18px]'>Logging</h2>
                                        <p className='text-[#A1A1A1] text-[12px] sm:text-[14px] lg:text-[16px]'>Stream combined Capsule logs
                                            across instances, directly from
                                            the dashboard.</p>
                                    </div>

                                    <div className='bg-[#262626] border-[2px] border-[#484848] p-[12px] sm:p-[16px] lg:p-[20px] rounded-[10px]'>
                                        <img src={d4} alt="" className='w-[32px] sm:w-[40px] lg:w-auto' />
                                        <h2 className='text-background mt-[16px] sm:mt-[20px] lg:mt-[24px] mb-[12px] sm:mb-[16px] lg:mb-[24px] text-[14px] sm:text-[16px] lg:text-[18px]'>Health Checks</h2>
                                        <p className='text-[#A1A1A1] text-[12px] sm:text-[14px] lg:text-[16px]'>Easily configure Liveness and
                                            Ready probes for Capsules.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Team Benefits Section */}
                    <section id='blog' className='mt-[60px] sm:mt-[120px] lg:mt-[199px]'>
                        <div>
                            <h1 className='text-center text-[20px] sm:text-[28px] lg:text-[40px] px-[8px] leading-tight'>A platform to benefit the entire team</h1>
                            <div className='flex flex-wrap items-center justify-center mt-[24px] sm:mt-[32px] lg:mt-[40px] mb-[24px] sm:mb-[32px] lg:mb-[40px] gap-[10px] sm:gap-[16px] lg:gap-[30px]'>
                                <button onClick={() => setOpen(1)} className={`transition-all duration-300 p-[8px] sm:p-[10px] rounded-[8px] sm:rounded-[10px] cursor-pointer text-[12px] sm:text-[14px] lg:text-[16px] ${open === 1 ? "bg-black text-white" : " bg-secondary"}`}>Product Teams</button>
                                <button onClick={() => setOpen(2)} className={`transition-all duration-300 p-[8px] sm:p-[10px] rounded-[8px] sm:rounded-[10px] cursor-pointer text-[12px] sm:text-[14px] lg:text-[16px] ${open === 2 ? "bg-black text-white" : " bg-secondary"}`}>DevOps/Platform Teams</button>
                                <button onClick={() => setOpen(3)} className={`transition-all duration-300 p-[8px] sm:p-[10px] rounded-[8px] sm:rounded-[10px] cursor-pointer text-[12px] sm:text-[14px] lg:text-[16px] ${open === 3 ? "bg-black text-white" : " bg-secondary"}`}>Engineering Leaders</button>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-[16px] sm:gap-[20px]'>
                                {open === 1 ? (<>
                                    <div className='border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] bg-secondary rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='text-black mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-black text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                    <div className='bg-secondary border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='text-black mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-black text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                    <div className='bg-secondary border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='text-black mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-black text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                </>) : open === 2 ? (<>
                                    <div className='border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                    <div className='border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                    <div className='border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                </>) : open === 3 ? (<>
                                    <div className='border-[2px] bg-secondary p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='text-black mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-black text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                    <div className='border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] bg-secondary border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='text-black mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-black text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                    <div className='border-[2px] p-[14px] sm:p-[18px] lg:p-[20px] rounded-[12px] sm:rounded-[14px] lg:rounded-[16px] bg-secondary border-[#E7E7E7]'>
                                        <img src={Tick} alt="" className='w-[24px] sm:w-auto' />
                                        <h1 className='text-black mt-[14px] sm:mt-[18px] lg:mt-[20px] mb-[12px] sm:mb-[16px] lg:mb-[20px] text-[#131313] text-[14px] sm:text-[16px] lg:text-[17px]'>Straight from code to production</h1>
                                        <p className='text-black text-[#606060] text-[13px] sm:text-[14px] lg:text-[16px]'>Let developers independently deploy to K8
                                            without any bottlenecks, steep K8 learning
                                            curves or unnecessary deployment stages.</p>
                                    </div>
                                </>) : null}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section>
                        <div>
                            <h1 className='mt-[50px] sm:mt-[80px] lg:mt-[117px] text-[#131313] text-[20px] sm:text-[28px] lg:text-[40px] text-center px-[8px] leading-tight'>Ready to take Rig for a spin?</h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-[16px] sm:gap-[20px] mt-[24px] sm:mt-[32px] lg:mt-[40px]'>
                                <div className='p-[14px] sm:p-[18px] lg:p-[20px] border-[2px] border-[#DEDEDE] rounded-[10px] sm:rounded-[12px]'>
                                    <h1 className='mb-[10px] sm:mb-[14px] lg:mb-[16px] text-[16px] sm:text-[20px] lg:text-[24px]'>Schedule a call</h1>
                                    <p className='mb-[24px] sm:mb-[32px] lg:mb-[40px] text-[#606060] text-[14px] sm:text-[16px] lg:text-[20px]'>We are gladly helping companies to get started.</p>
                                    <button className='bg-card-foreground text-background p-[10px] sm:p-[8px] rounded-[8px] sm:rounded-[10px] w-full sm:w-auto text-[13px] sm:text-[14px] lg:text-[16px]'>Schedule a Call</button>
                                </div>
                                <div className='p-[14px] sm:p-[18px] lg:p-[20px] border-[2px] border-[#DEDEDE] rounded-[10px] sm:rounded-[12px]'>
                                    <h1 className='mb-[10px] sm:mb-[14px] lg:mb-[16px] text-[16px] sm:text-[20px] lg:text-[24px]'>Try it out yourself</h1>
                                    <p className='mb-[24px] sm:mb-[32px] lg:mb-[40px] text-[#606060] text-[14px] sm:text-[16px] lg:text-[20px]'>We have made it as easy as possible to try Rig.</p>
                                    <button className='bg-card-foreground text-background p-[10px] sm:p-[8px] rounded-[8px] sm:rounded-[10px] w-full sm:w-auto text-[13px] sm:text-[14px] lg:text-[16px]'>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home
