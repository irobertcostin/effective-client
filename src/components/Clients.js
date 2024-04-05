import europeca from "../images/europeca.png"
import proper from "../images/proper.png"
import gym from "../images/technogym.png"
import trans from "../images/trans.png"
import voila from "../images/voilaballroom.png"
import ponteggi from "../images/ponteggi.png"
import marcelinos from "../images/Marcelinos.png"
import harmony from "../images/harmony.png"
import gek from "../images/gek.png"
import dislessia from "../images/dislessia.png"
import Marquee from "react-fast-marquee";


export default function Clients() {
    return (
        <div className="bg-black py-8 md:py-16 ">
            <div className="mx-auto ">
                <h2 className="text-center text-lg md:text-3xl font-semibold leading-8 text-white">
                    Trusted by
                </h2>
                <div className="mx-auto ">

                    <Marquee className=" mx-0 h-44 xl:h-60 overflow-hidden "
                        style={{ width: "200%", flex: true, justifyContent: "between" }}
                        pauseOnClick
                        pauseOnHover
                        autoFill={true}
                        speed={30}
                    >
                        <img
                            className="  max-h-40 2xl:max-h-60  w-full object-cover lg:col-span-1"
                            src={voila}
                            alt="voilaballroom"
                            width={300}
                            height={48}
                        />
                        <img
                            className=" max-h-40 2xl:max-h-48 w-full object-cover lg:col-span-1"
                            src={proper}
                            alt="properpizza"
                            width={158}
                            height={48}
                        />
                        <img
                            className=" max-h-40 2xl:max-h-60 w-full object-cover lg:col-span-1"
                            src={trans}
                            alt="transport"
                            width={158}
                            height={48}
                        />
                        <img
                            className=" max-h-40 2xl:max-h-48 w-full object-cover sm: lg:col-span-1"
                            src={gym}
                            alt="gym"
                            width={158}
                            height={48}
                        />
                        <img
                            className="   max-h-40 2xl:max-h-60 w-full object-cover sm:col-start-auto lg:col-span-1"
                            src={ponteggi}
                            alt="ponteggi"
                            width={158}
                            height={48}
                        />
                        <img
                            className="  m max-h-40 2xl:max-h-48 w-full object-cover sm:col-start-auto lg:col-span-1"
                            src={europeca}
                            alt="europeca"
                            width={158}
                            height={48}
                        />
                        <img
                            className="  max-h-40 2xl:max-h-60 w-full object-cover sm:col-start-auto lg:col-span-1"
                            src={marcelinos}
                            alt="marcelinos"
                            width={158}
                            height={48}
                        />
                        <img
                            className="  max-h-40 2xl:max-h-80 w-full object-cover sm:col-start-auto lg:col-span-1"
                            src={gek}
                            alt="gek"
                            width={158}
                            height={48}
                        />

                        <img
                            className="  max-h-40 xl:max-h-32 2xl:max-h-48 w-full object-cover sm:col-start-auto lg:col-span-1"
                            src={dislessia}
                            alt="dislessia"
                            width={158}
                            height={48}
                        />
                        <img
                            className="  ml-3 max-h-32 2xl:max-h-48 w-full object-cover sm:col-start-auto lg:col-span-1"
                            src={harmony}
                            alt="harmony"
                            width={158}
                            height={48}
                        />

                    </Marquee>




                </div>
            </div>
        </div>
    )
}
