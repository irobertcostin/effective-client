import europeca from "../images/europeca.webp"
import proper from "../images/proper.webp"
import gym from "../images/technogym.webp"
import trans from "../images/trans.webp"
import voila from "../images/voilaballroom.webp"
import ponteggi from "../images/ponteggi.webp"
import marcelinos from "../images/Marcelinos.webp"
import harmony from "../images/harmony.webp"
import gek from "../images/gek.webp"
import dislessia from "../images/dislessia.webp"
import Marquee from "react-fast-marquee";


export default function Clients() {
    return (
        <div className="bg-black py-4  md:py-16  ">
            <div className="mx-auto ">
                <h2 className="text-center text-lg md:text-3xl font-semibold leading-8 text-white">
                    Trusted by
                </h2>
                <div className="mx-auto ">

                    <Marquee className=" mx-0 h-36 xl:h-60 overflow-hidden "
                        style={{ width: "200%", flex: true, justifyContent: "between" }}
                        pauseOnClick
                        pauseOnHover
                        autoFill={true}
                        speed={30}
                    >
                        <img
                            className=" h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40  "
                            src={voila}
                            alt="voilaballroom"
                            width="50px"
                            height="50px"
                        />
                        <img
                            className="h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40   "
                            src={proper}
                            alt="properpizza"
                            width={158}
                            height={48}
                        />
                        <img
                            className="h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40  "
                            src={trans}
                            alt="transport"
                            width={158}
                            height={48}
                        />
                        <img
                            className="h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40   "
                            src={gym}
                            alt="gym"
                            width={158}
                            height={48}
                        />
                        <img
                            className=" h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40   "
                            src={ponteggi}
                            alt="ponteggi"
                            width={40}
                            height={40}
                        />
                        <img
                            className=" h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40   "
                            src={europeca}
                            alt="europeca"
                            width={158}
                            height={48}
                        />
                        <img
                            className=" h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40   "
                            src={marcelinos}
                            alt="marcelinos"
                            width={158}
                            height={48}
                        />
                        <img
                            className=" h-32 w-32 md:h-32 md:w-32 xl:h-40 xl:w-40   "
                            src={gek}
                            alt="gek"
                            width={158}
                            height={48}
                        />

                        <img
                            className=" h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40   "
                            src={dislessia}
                            alt="dislessia"
                            width={158}
                            height={48}
                        />
                        <img
                            className=" h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40   "
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
