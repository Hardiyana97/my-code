import React from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])
    return (
        <div id="Home" className="min-h-screen bg-white flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gp-10">
            <div className="w-full lg:w-2/4 space-y-4 mt-14 lg:mt-0">
                <h1 data-aos="fade-down" className="font-bold text-blue-950 text-4xl text-center lg:text-start leading-tight">Welcome to My'Coffe Shop ...</h1>
                <h2 data-aos="fade-right" className="font-semibold text-3xl text-center lg:text-start leading-tight">Satu sentuhan manis dari coffe untuk mengawali mu di pagi hari .</h2>
                <p data-aos="fade-right" className="text-2xl font-semibold">Dan Hanya Coffe lah yang bisa membangkitkan Semangatmu !!</p>
            </div>

            <div className="relative">
                <img data-aos="fade-up" src="https://media.istockphoto.com/id/1174632449/id/foto/tampilan-samping-kopi-latte-panas-dengan-seni-latte-dalam-cangkir-hijau-keramik-dan-piring.jpg?b=1&s=612x612&w=0&k=20&c=_mc1QGe7CabuOfiIeipMoj92P8vqfXZQLzPKo3SJQHI=" alt="/" />
            </div>
        </div>
    )
}

export default Home