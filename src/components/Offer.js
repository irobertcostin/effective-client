import { TypeAnimation } from "react-type-animation"
import video from "../images/video.mp4"


const services = [
    { name: 'App Development', nr: "01.", description: "The world has gone digital & we know how important a first impression is. We optimize your website for viewing on a wide variety of devices, ensuring your brand is always positioned as seamless & user-friendly." },
    { name: 'Branding & Design', nr: "02.", description: "Crafting compelling visual narratives tailored to your unique identity. Whether it's building a brand from the ground up, or strengthening your existing brand - we can create what you need to succeed." },
    { name: 'Content Creation', nr: "03.", description: "Attention span online is shorter than ever. We create original short-form content that is perfect for social posts, targeted ad campaigns & points of acquisition - from plan to production we harness your vision and bring it to life." },
    { name: 'Digital Marketing', nr: "04.", description: "We create results-driven strategies that don't just work - they exceed expectations. Often the difference between success and failure is asking the right questions, and that's where we start." },
    { name: 'SEO', nr: "05.", description: "Leverage top-notch optimization strategies to increase your website's search engine rankings and drive meaningful traffic to your site. Trust us to deliver measurable results and achieve your goals on Google." },
    { name: 'Social Media', nr: "06.", description: "With a streamlined approach to social brand management, we maximize your social potential with our niche approach. As an agency we provide a hands-off approach to community management & audience growth - letting you focus on the big picture." },

]


export default function Offer({ whatwedo }) {



    return (
        <div ref={whatwedo} className="w-full relative   flex flex-col justify-between py-10 px-4 bg-white">

            <div
                className="absolute inset-x-0  transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]  "
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-70 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>



            <div className="w-full z-50 ">


                <div className="w-full flex flex-col justify-center  items-center gap-5">

                    <div className="text-xl md:text-2xl xl:text-3xl font-bold w-full text-center bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">

                        <TypeAnimation
                            sequence={[

                                'what', //  Continuing previous Text
                                500,
                                'what we',
                                500,
                                'what we offer.',
                                500,
                            ]}

                            repeat={Infinity}
                        />

                    </div>

                    <p className="text-3xl  xl:text-5xl  xl:py-5 xl:max-w-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent text-center ">

                        Where Strategy Meets Digital. Your Success Story Begins With Effective.

                    </p>

                </div>


                <div className="w-full py-10 flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3  ">

                    {
                        services.map((item => (
                            <div key={item.name} className="w-full shadow-lg bg-white bg-opacity-90 relative border border-fuchsia-500 rounded-lg   p-4 flex flex-col gap-4 min-h-[240px] md:min-h-[280px]  2xl:p-7 2xl:px-10 justify-center md:justify-start ">
                                <p className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent">{item.name}</p>
                                <p className="text-lg text-indigo-800">{item.description}</p>
                                {/* <p className="absolute top-2 right-5 text-3xl bg-gradient-to-r from-indigo-600 to-pink-400 bg-clip-text text-transparent">{item.nr}</p> */}
                            </div>
                        )))
                    }

                </div>



            </div>



            <div className="w-full">
                <video src={video} className="absolute bottom-20 z-10 -right-32 xl:bottom-40" autoPlay={true} muted={true} loop={true} controls={false} playsInline={true}></video>
            </div>


        </div>
    )
}