import React from "react"
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { PiWhatsappLogoDuotone } from "react-icons/pi";

const Footer = () => {

    return (
        <div className="bg-slate-900 text-white rounded-sm-3xl mt-8 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between p-10 md:px-32 px-5">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl hover:text-yellow-600 pb-8">Sentuhan Manis</h1>
                    <p className="text-sm hover:text-yellow-600">Welcome To My Coffe !</p>
                </div>
                <div>
                    <h1 className="font-medium text-xl hover:text-yellow-600 pb-4 pt-5 md:pt-0">Sosial Medis</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-pink-600 transition-all cursor-pointer" href="/">
                            <IoLogoInstagram className="text-[28px]" />
                        </a>
                        <a className="hover:text-black transition-all cursor-pointer" href="/">
                            <RiTwitterXFill className="text-[28px]" />
                        </a>
                        <a className="hover:text-blue-900 transition-all cursor-pointer" href="/">
                            <IoLogoFacebook className="text-[28px]" />
                        </a>
                        <a className="hover:text-green-500 transition-all cursor-pointer" href="/">
                            <PiWhatsappLogoDuotone className="text-[28px]" />
                        </a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl hover:text-yellow-600 pb-4 pt-5 md:pt-0">Menu</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="">Expresso</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Americano</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Latte</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Cappuccino</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Dalgona</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Machiato</a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium hover:text-yellow-600 text-xl pb-4 pt-5 md:pt-0">Links</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Menu</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">About Us</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Teams</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Menu</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Other Menu</a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">Review</a>
                    </nav>
                </div>
                <div>
                    <h1 className="font-medium text-xl pb-4 pt-5 hover:text-yellow-600 md:pt-0">Contact Us</h1>
                    <nav className="flex flex-col gap-2">
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">
                            SentuhanManis@gmail.com
                        </a>
                        <a className="hover:text-yellow-600 transition-all cursor-pointer" href="/">
                            +62 899 5051 877
                        </a>
                    </nav>
                </div>
                <div>
                    <p className="hover:text-yellow-600">@copyright developer by</p>
                    <br />
                    <span className="hover:text-yellow-600">Hardiyana</span>
                </div>
            </div>
        </div>
    )
}

export default Footer

