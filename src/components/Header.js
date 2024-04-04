import { TypeAnimation } from "react-type-animation"
import logo from "../images/logo.png"
import { useRef } from "react"


export default function Header({ description, home }) {




    let scrollHandler = () => {

        description.current.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <div ref={home} className="w-full homeimage  h-[80vh]  2xl:h-[95vh] ">
            <div className="flex flex-col justify-start    relative gap-32 items-center h-[80vh] 2xl:h-[95vh] py-10 w-full bg-black bg-opacity-30 2xl:gap-80">

                <div className="w-40 h-40 rounded-full md:w-80 md:h-80 animate-spin   absolute -top-12 -right-12 bg-gradient-to-r from-fuchsia-600 to-pink-600">

                </div>

                <div className="flex flex-col justify-center items-center gap-5 ease-in duration-500 ">
                    <img alt="logo" src={logo} className="w-60"></img>
                </div>



                <div className="w-full  px-5 text-center flex flex-col justify-start h-full items-center gap-5">
                    <div className="text-3xl text-white font-bold xl:text-5xl  h-24 md:h-16 ">

                        <TypeAnimation
                            sequence={[

                                'a powerful player', //  Continuing previous Text
                                500,
                                'a powerful player in the digital',
                                500,
                                'a powerful player in the digital marketing',
                                500,
                                'a powerful player in the digital marketing space',
                                500,
                                <span className="text-rose-500 font-extrabold text-3xl -ml-0.5">.</span>,
                                500,
                            ]}

                            repeat={Infinity}
                        />

                        <span className="text-rose-500 font-extrabold text-3xl -ml-0.5">.</span>
                    </div>
                    <button onClick={scrollHandler} className="text-white max-w-[250px] bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:bg-gradient-to-l hover:from-fuchsia-600 hover:to-yellow-500 w-full ease-in-out duration-300 rounded-full py-2 px-5 text-center text-lg">LEARN MORE</button>
                </div>
            </div>

        </div>

    )
}