import React from "react";
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
import { RiTwitterXFill } from "react-icons/ri"
import { PiWhatsappLogoDuotone } from "react-icons/pi"

const TeamCard = (props) => {
    return (
        <div className="flex flex-col items-center gap-3 pt-8 w-full md:w-1/4 bg-slate-500 rounded-xl">
            <div className="w-3/4">
                <img className="Rounded-lg" src={props.img} alt="" />
            </div>
            <div>
                <h1 className="text-xl font-semibold py-2 text-center">
                    {props.name}
                </h1>
                <div className="flex flex-row justify-between py-4 gap-4">
                    <BsInstagram size={25} className="hover:text-pink-700 cursor-pointer" />
                    <BsFacebook size={25} className="hover:text-blue-900 cursor-pointer" />
                    <RiTwitterXFill size={25} className="hover:text-black cursor-pointer" />
                    <PiWhatsappLogoDuotone size={28} className="hover:text-green-500 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default TeamCard