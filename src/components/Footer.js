import logo from "../images/logo.png"
import fbook from "../images/facebook.png"
import insta from "../images/insta.png"
import React, { useState } from 'react';
import { Drawer, ConfigProvider } from "antd";





export default function Footer({ home }) {


    let go = () => {
        home.current.scrollIntoView({ behavior: 'smooth' });
    }


    const [open, setOpen] = useState(false);

    const [placement, setPlacement] = useState('right');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleWhatsAppButtonClick = () => {
        const phoneNumber = '+40759894218';
        const message = "Hello,%20I%20want%20to%20elevate%20my%20brand%20and%20need%20your%20help.%20Please%20get%20back%20to%20me%20asap!";

        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url);
    };


    const handleEmailButtonClick = () => {
        const email = 'contact@effectivemedia.ro';
        const subject = 'Digital Marketing Inquiry';
        const body = 'Hello,';

        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };





    return (
        <footer className="w-full relative bg-black   flex flex-col justify-between py-4 px-4 overflow-hidden">

            <div
                className="absolute inset-x-0  transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] z-20 "
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>



            <div className="w-full text-white z-50  flex flex-col gap-10 py-5    xl:flex-row xl:justify-center xl:items-start">



                <div className="flex justify-center xl:w-full xl:h-52 xl:max-w-[300px] xl:items-center  ">
                    <img alt="logofooter" src={logo} className="w-80 xl:-ml-60"></img>
                </div>




                <div className="w-full  flex flex-col xl:max-w-[300px] ">
                    <p className="text-3xl w-full text-center xl:text-start bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">Social media</p>

                    <div className="w-full flex px-5 gap-10 py-10 justify-center xl:justify-start xl:px-0">

                        <a href="https://www.facebook.com/effectivemediaro" target="_blank" rel="noreferrer" className="  text-neutral-600 dark:text-neutral-200">
                            <img className="h-10 sm:h-12 sm:w-12" src={fbook}></img>
                        </a>



                        <a href="https://www.instagram.com/effectivemedia.ro/" target="_blank" rel="noreferrer" className=" text-neutral-600 dark:text-neutral-200">
                            <img className="h-10 sm:h-12 sm:w-12" src={insta}></img>
                        </a>

                        <a href="https://linkedin.com/company/effective-media-ro/" target="_blank" rel="noreferrer" className=" text-neutral-600 dark:text-neutral-200">
                            <svg color="" enableBackground="new 0 0 56.693 56.693" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" className="h-10 sm:h-12 sm:w-12  text-white" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="#ffffff" d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                                    <path fill="#ffffff" d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                                </g>
                            </svg>
                        </a>


                    </div>

                </div>

                <div className="w-full  flex flex-col xl:max-w-[300px] ">
                    <p className="text-3xl w-full text-center xl:text-start bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent xl:text- xl:px-5">Resources</p>

                    <div className="w-full flex flex-col px-5 gap-2  py-10 justify-center  text-xl items-center xl:items-start xl:gap-5 ">

                        <button onClick={go} className="flex gap-2 items-center">
                            <svg enableBackground="new 0 0 32 32" className="w-5 h-5" fill="#fff" id="Glyph" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" ><path d="M30.854,16.548C30.523,17.43,29.703,18,28.764,18H28v11c0,0.552-0.448,1-1,1h-6v-7c0-2.757-2.243-5-5-5  s-5,2.243-5,5v7H5c-0.552,0-1-0.448-1-1V18H3.235c-0.939,0-1.759-0.569-2.09-1.451c-0.331-0.882-0.088-1.852,0.62-2.47L13.444,3.019  c1.434-1.357,3.679-1.357,5.112,0l11.707,11.086C30.941,14.696,31.185,15.666,30.854,16.548z" id="XMLID_219_" /></svg>
                            <p>Home</p>
                        </button>
                        <button className="flex gap-2 items-center">
                            <svg className="w-5 h-5" enableBackground="new 0 0 512 512" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" ><g><path d="M434.5,72.3V412c0,33.6-27.5,61.1-61,61.1H126.7c-5.6,0-11-1-16.2-2.5c7.8,23.7,30,41.1,56.2,41.1h249.9   c32.7,0,59.5-26.8,59.5-59.5V128.8C476.1,102.3,458.5,80,434.5,72.3z" fill="#fff" /><path d="M345.2,0H95.4C62.7,0,35.9,26.8,35.9,59.5V383c0,32.7,26.8,59.5,59.5,59.5h249.9   c32.7,0,59.5-26.8,59.5-59.5V59.5C404.7,26.8,378,0,345.2,0z M364.2,349.8c0,25.7-21.1,46.8-46.8,46.8H120.9   c-25.7,0-46.8-21.1-46.8-46.8V95.4c0-25.7,21.1-46.8,46.8-46.8h196.6c25.7,0,46.8,21.1,46.8,46.8V349.8z" fill="#fff" /><g><path d="M319.8,117.5H190.5c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h129.3c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,113.1,325.2,117.5,319.8,117.5z" fill="#fff" /><path d="M319.8,175.2H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,170.7,325.2,175.2,319.8,175.2z" fill="#fff" /><path d="M319.8,232.8H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,228.4,325.2,232.8,319.8,232.8z" fill="#fff" /><path d="M319.8,290.5H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,286.1,325.2,290.5,319.8,290.5z" fill="#fff" /><path d="M319.8,348.2H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,343.7,325.2,348.2,319.8,348.2z" fill="#fff" /></g></g></svg>
                            <p>Blog</p>
                        </button>


                        <div className="flex gap-2 items-center">
                            <svg enableBackground="new 0 0 32 32" className="h-7 mb-2 -mt-1 -ml-3 mr-1  w-7 flex items-center justify-center" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" ><g id="Padding__x26__Artboard" /><g id="Icons"><g><path d="M17.09961,26.36353c-0.19336,0-0.3501,0.15674-0.3501,0.3501v4.03955    c0,0.19336,0.15674,0.3501,0.3501,0.3501s0.3501-0.15674,0.3501-0.3501v-4.03955    C17.44971,26.52026,17.29297,26.36353,17.09961,26.36353z" fill="none" /><path d="M18.59131,23.04224c-1.01562,0-1.8418,0.82617-1.8418,1.8418c0,0.19336,0.15674,0.3501,0.3501,0.3501    s0.3501-0.15674,0.3501-0.3501c0-0.62939,0.51221-1.1416,1.1416-1.1416c0.19336,0,0.3501-0.15674,0.3501-0.3501    S18.78467,23.04224,18.59131,23.04224z" fill="none" /><path d="M23.99512,12.16724c-3.40771,0-6.18018,2.77686-6.18018,6.18994v2.19324h0.7002h1.0498h0.7002    v-2.19324c0-2.06201,1.67773-3.73975,3.73975-3.73975c2.05664,0,3.72998,1.67773,3.72998,3.73975v2.19324h0.7002h1.0498h0.7002    v-2.19324C30.18506,14.94409,27.4082,12.16724,23.99512,12.16724z" fill="#fff" /><path d="M30.40283,21.39087h-0.05835h-0.15942h-0.7002h-1.0498h-0.7002h-7.46973h-0.7002h-1.0498h-0.7002    h-0.21777c-1.51514,0-2.74756,1.23242-2.74756,2.74707v8.94727c0,1.51514,1.23242,2.74756,2.74756,2.74756h12.80566    c1.51514,0,2.74756-1.23242,2.74756-2.74756v-8.94727C33.15039,22.62329,31.91797,21.39087,30.40283,21.39087z M18.59131,23.74243    c-0.62939,0-1.1416,0.51221-1.1416,1.1416c0,0.19336-0.15674,0.3501-0.3501,0.3501s-0.3501-0.15674-0.3501-0.3501    c0-1.01562,0.82617-1.8418,1.8418-1.8418c0.19336,0,0.3501,0.15674,0.3501,0.3501S18.78467,23.74243,18.59131,23.74243z     M16.74951,26.71362c0-0.19336,0.15674-0.3501,0.3501-0.3501s0.3501,0.15674,0.3501,0.3501v4.03955    c0,0.19336-0.15674,0.3501-0.3501,0.3501s-0.3501-0.15674-0.3501-0.3501V26.71362z" fill="#fff" /></g></g></svg>
                            <button onClick={showDrawer}>Privacy policy</button>
                        </div>

                    </div>

                </div>



                <div className="w-full  flex flex-col  xl:max-w-[300px]  ">
                    <p className="text-3xl w-full text-center xl:text-start bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent xl:text- xl:px-5">Get in touch</p>

                    <div className="w-full flex flex-col px-5 gap-2 py-10 justify-between items-center md:gap-5 xl:items-start">


                        <button className="flex items-center ">

                            <a
                                href="tel:0040759894218"
                                className='flex justify-center items-center gap-2 text-xl'
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-5 w-5">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd" />
                                </svg>
                                Phone call
                            </a>

                        </button>


                        <button onClick={handleWhatsAppButtonClick} className="flex items-center gap-2 text-xl">
                            <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 308 308" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_468_"> <path id="XMLID_469_" d="M227.904,176.981c-0.6-0.288-23.054-11.345-27.044-12.781c-1.629-0.585-3.374-1.156-5.23-1.156 c-3.032,0-5.579,1.511-7.563,4.479c-2.243,3.334-9.033,11.271-11.131,13.642c-0.274,0.313-0.648,0.687-0.872,0.687 c-0.201,0-3.676-1.431-4.728-1.888c-24.087-10.463-42.37-35.624-44.877-39.867c-0.358-0.61-0.373-0.887-0.376-0.887 c0.088-0.323,0.898-1.135,1.316-1.554c1.223-1.21,2.548-2.805,3.83-4.348c0.607-0.731,1.215-1.463,1.812-2.153 c1.86-2.164,2.688-3.844,3.648-5.79l0.503-1.011c2.344-4.657,0.342-8.587-0.305-9.856c-0.531-1.062-10.012-23.944-11.02-26.348 c-2.424-5.801-5.627-8.502-10.078-8.502c-0.413,0,0,0-1.732,0.073c-2.109,0.089-13.594,1.601-18.672,4.802 c-5.385,3.395-14.495,14.217-14.495,33.249c0,17.129,10.87,33.302,15.537,39.453c0.116,0.155,0.329,0.47,0.638,0.922 c17.873,26.102,40.154,45.446,62.741,54.469c21.745,8.686,32.042,9.69,37.896,9.69c0.001,0,0.001,0,0.001,0 c2.46,0,4.429-0.193,6.166-0.364l1.102-0.105c7.512-0.666,24.02-9.22,27.775-19.655c2.958-8.219,3.738-17.199,1.77-20.458 C233.168,179.508,230.845,178.393,227.904,176.981z"></path> <path id="XMLID_470_" d="M156.734,0C73.318,0,5.454,67.354,5.454,150.143c0,26.777,7.166,52.988,20.741,75.928L0.212,302.716 c-0.484,1.429-0.124,3.009,0.933,4.085C1.908,307.58,2.943,308,4,308c0.405,0,0.813-0.061,1.211-0.188l79.92-25.396 c21.87,11.685,46.588,17.853,71.604,17.853C240.143,300.27,308,232.923,308,150.143C308,67.354,240.143,0,156.734,0z M156.734,268.994c-23.539,0-46.338-6.797-65.936-19.657c-0.659-0.433-1.424-0.655-2.194-0.655c-0.407,0-0.815,0.062-1.212,0.188 l-40.035,12.726l12.924-38.129c0.418-1.234,0.209-2.595-0.561-3.647c-14.924-20.392-22.813-44.485-22.813-69.677 c0-65.543,53.754-118.867,119.826-118.867c66.064,0,119.812,53.324,119.812,118.867 C276.546,215.678,222.799,268.994,156.734,268.994z"></path> </g> </g></svg>
                            <p>Whatsapp</p>
                        </button>

                        <button
                            onClick={handleEmailButtonClick}
                            className="flex items-center  text-xl">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="mr-2 h-6 w-6">
                                <path
                                    d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path
                                    d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                            contact@<span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">effectivemedia.ro</span>
                        </button>




                    </div>

                </div>




            </div>


            <div className="w-full border-t border-fuchsia-500 z-50 text-white flex justify-center items-center text-center pt-2">
                <p>All rights reserved @2020 Effective Media Agency</p>
            </div>


            <ConfigProvider
                theme={{
                    token: {
                        colorBgBase: "black",
                        colorText: "white",
                        colorIcon: "white",
                        colorIconHover: "red",

                    },
                }}
            >

                <Drawer
                    title="Privacy Policy"
                    placement={placement}
                    closable={true}
                    onClose={onClose}
                    open={open}
                    key={placement}
                >
                    <div className=" w-full text-white flex flex-col gap-5">
                        <p>Effective Media Agency is committed to protecting and respecting your privacy. This Privacy Policy outlines the types of personal information we collect, how we use it, and your rights regarding this information.</p>
                        <div className="w-full flex flex-col gap-3">

                            <p className="font-bold">Information We Collect</p>
                            <p>We may collect and process the following data about you:</p>
                            <div className="flex flex-col gap-3">
                                <p><span className="font-bold">01. Personal Information:</span> This includes your name, email address, postal address, phone number, and any other information you provide to us when you fill out forms on our website, communicate with us via email, phone, or social media, or sign up for our services.</p>
                                <p><span className="font-bold">02. Website Usage Information:</span> We may collect information about your usage of our website, such as the pages you visit, the links you click on, your IP address, browser type, and operating system.</p>
                            </div>

                            <p className="font-bold">How We Use Your Information</p>
                            <p>We use the information we collect about you for the following purposes:</p>
                            <div className="flex flex-col gap-3">
                                <p><span className="font-bold">01. Providing Services:</span> To provide you with the services you have requested from us, including digital marketing, brand development, website development, social media advertising, and other related services.</p>
                                <p><span className="font-bold">02. Communication:</span> To communicate with you about our services, respond to your inquiries, and provide customer support.</p>
                                <p><span className="font-bold">03. Improvement:</span> To improve our website, services, and customer experience.</p>
                                <p><span className="font-bold">04. Marketing:</span> With your consent, we may send you marketing communications about our services and promotions that may be of interest to you.</p>
                            </div>

                            <p className="font-bold">Disclosure of Your Information</p>
                            <p>We may share your personal information with third parties under the following circumstances:</p>
                            <div className="flex flex-col gap-3">
                                <p><span className="font-bold">01. Service Providers:</span> We may engage third-party service providers to assist us in providing our services and processing your information.</p>
                                <p><span className="font-bold">02. Legal Obligations:</span> We may disclose your information to comply with legal obligations, enforce our terms and conditions, or protect our rights, property, or safety.</p>
                            </div>


                            <p className="font-bold">Your Rights</p>
                            <p>You have the following rights regarding your personal information:</p>
                            <div className="flex flex-col gap-3">
                                <p><span className="font-bold">01. Access:</span> You have the right to access the personal information we hold about you and request a copy of it.</p>
                                <p><span className="font-bold">02. Correction:</span> You have the right to request corrections to any inaccurate or incomplete personal information we hold about you.</p>
                                <p><span className="font-bold">03. Deletion:</span> You have the right to request the deletion of your personal information from our records.</p>
                                <p><span className="font-bold">04. Withdrawal of Consent:</span> If you have provided consent for the processing of your personal information, you have the right to withdraw your consent at any time.
                                </p>
                            </div>


                            <p className="font-bold">Security</p>
                            <p>We reserve the right to update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated Privacy Policy will indicate the date of the latest revision.</p>


                            <p className="font-bold">Contact Us</p>
                            <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <span className="text-red-500">contact@effectivemedia.ro.</span></p>


                        </div>
                    </div>
                </Drawer>

            </ConfigProvider>




        </footer>
    )
}