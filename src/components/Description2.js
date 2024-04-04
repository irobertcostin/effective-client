
/* eslint-disable no-undef */
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import fig1 from "../images/fig1.png"




export default function Description2({ description, whatwedo, howitworks, contact }) {




    let go = (element) => {
        element.current.scrollIntoView({ behavior: 'smooth' });
    }





    const links = [

        { name: 'Road to success', id: whatwedo },
        { name: 'How it works', id: howitworks },
        { name: 'Get in touch', id: contact },
    ]
    const stats = [
        { name: 'web impressions', value: '500k+' },
        { name: 'clients', value: '30+' },
        { name: 'across our clients', value: '5* rated' },
    ]




    return (
        <div ref={description} className="relative isolate overflow-hidden bg-white pt-12 ">

            <div
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div
                className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl ">

                <div className="mx-auto max-w-2xl xl:w-full xl:max-w-full lg:mx-0 px-6 lg:px-8 xl:grid xl:grid-cols-2 xl:justify-center xl:items-center ">
                    <div className="text-3xl xl:text-7xl font-bold bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent ">
                        <TypeAnimation
                            sequence={[
                                'we',
                                500,
                                'we are', //  Continuing previous Text
                                500,
                                'we are effective',
                                500,
                                '.'

                            ]}
                            speed={45}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="mt-6 text-lg leading-6 text-slate-700  xl:mt-0 xl:text-xl">
                        Founded in 2020, we stand as a dynamic and versatile full-service creative and marketing powerhouse. We craft, innovate, design, articulate, brand, market, and transcend conventional boundaries.
                    </p>
                </div>


                <div className="w-full xl:grid xl:grid-cols-2 mt-10 ">

                    <div className="mx-auto  max-w-2xl lg:mx-0  my-10 flex flex-col gap-5 justify-center items-center px-6 lg:px-8 xl:my-0">
                        <img alt="fig1" className="rounded-lg w-full" src={fig1}></img>
                    </div>


                    <div className="mx-auto  max-w-2xl lg:mx-0   my-10 flex flex-col gap-5 justify-center items-center px-6 lg:px-0 xl:gap-10">
                        <div className=" w-full  bg-gradient-to-r from-rose-500 to-rose-300 rounded-lg px-4 py-5 pb-10 flex flex-col gap-5 xl:pb-12">
                            <p className="text-white xl:text-3xl animate-pulse">OUR VISION</p>
                            <p className="text-white text-lg xl:text-5xl">Elevate Your Digital Presence With Effective Expertise.</p>
                        </div>

                        <div className=" w-full bg-gradient-to-r from-pink-400 to-yellow-300   rounded-lg px-4 py-5 pb-10 flex flex-col gap-5 xl:pb-12">
                            <p className="text-white xl:text-3xl animate-pulse">OUR MISSION</p>
                            <p className="text-white text-lg xl:text-5xl">Unleash Your Potential in the Digital Realm with Effective Skills.</p>
                        </div>
                    </div>

                </div>

                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none xl:px-0 xl:pl-8 3xl:pl-6 xl:mt-0">

                    <div className=" px-6 xl:px-0 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 md:text-xl text-indigo-950 sm:grid-cols-2 md:flex lg:gap-x-10 md:items-center xl:justify-between">
                        {links.map((link) => (
                            <button onClick={() => go(link.id)} key={link.name} href={link.href} className="border-2 rounded-full flex justify-start  md:text-xl md:py-1 xl:text-2xl px-10 md:px-2 xl:px-20 bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent   border-fuchsia-500">
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </button>
                        ))}
                    </div>


                    <dl className="mt-16   sm:mt-10 bg-gradient-to-r from-violet-600 to-rose-300  flex  justify-between items-center  py-10 px-3  md:px-5 md:mx-5 md:justify-center md:gap-32 md:rounded-lg md:mb-10 xl:mx-0 xl:px-0">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse text-center ">
                                <dt className=" text-lg leading-7 text-slate-200">{stat.name}</dt>
                                <dd className="text-4xl font-semibold  leading-9 tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>

                </div>
            </div>
        </div>
    )
}
