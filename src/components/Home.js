import React, { useRef } from "react"
import Description2 from "./Description2"
import Contact from "./Contact"
import Clients from "./Clients"
import Footer from "./Footer"
import HowItWorks from "./HowItWorks"
import Offer from "./Offer"
import Header from "./Header"
import Blog from "./Blog"



export default function Home() {


    const description = useRef()
    const whatwedo = useRef()
    const howitworks = useRef()
    const contact = useRef()
    const home = useRef()



    return (
        <div className="w-full px-0 relative fredoka-font bg-black">

            <Header description={description} home={home} />
            <Description2 description={description} whatwedo={whatwedo} howitworks={howitworks} contact={contact} />

            <Clients />
            <Offer whatwedo={whatwedo} />

            <HowItWorks howitworks={howitworks} />
            <Blog />
            <Contact contact={contact} />
            <Footer home={home} />
        </div>
    )
}