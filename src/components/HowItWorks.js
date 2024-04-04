import { TypeAnimation } from "react-type-animation"





const services = [
    { name: 'Free Consultation', nr: "01.", description: " Schedule a complimentary session to discuss your goals and challenges. We'll provide insights and tailor solutions to meet your needs effectively." },
    { name: 'Product Discovery', nr: "02.", description: "Dive deep into your brand, audience, and objectives. We unearth opportunities and formulate strategies to align your vision with market demands." },
    { name: 'Wireframe & Production', nr: "03.", description: "From concept to creation, we craft prototypes and execute meticulously. Witness your vision come to life with our collaborative design and development process." },

]


export default function HowItWorks({ howitworks }) {



    return (
        <div ref={howitworks} className="w-full relative bg-black border border-black flex flex-col justify-between py-16 px-4">

            <div
                className="absolute inset-x-0  transform-gpu overflow-hidden blur-3xl sm:top-[-20rem] z-20"
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

            <div className="w-full z-50">


                <div className="w-full flex flex-col justify-center  items-center gap-5">

                    <div className="text-xl md:text-2xl xl:text-3xl font-bold w-full text-center bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">

                        <TypeAnimation
                            sequence={[

                                'how', //  Continuing previous Text
                                500,
                                'how it',
                                500,
                                'how it works.',
                                500,
                            ]}

                            repeat={Infinity}
                        />

                    </div>

                    <p className="text-3xl  xl:text-5xl  xl:py-5 xl:max-w-5xl font-bold text-white text-center ">

                        Navigating Digital Horizons with Effective: Your Trusted Partner.

                    </p>

                </div>


                <div className="w-full py-20 flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  ">

                    {
                        services.map((item => (
                            <div key={item.name} className="w-full relative border border-yellow-500 rounded-lg   p-4 flex flex-col gap-4 min-h-[240px]  2xl:p-7 2xl:px-10 justify-center md:justify-start ">
                                <p className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">{item.name}</p>
                                <p className="text-lg text-slate-300">{item.description}</p>

                            </div>
                        )))
                    }

                </div>



            </div>



        </div>
    )
}