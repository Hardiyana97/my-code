import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs"


const ReviewCard = (props) => {
    return (
        <div className="w-full md:w-1/3 bg-white border-black border-2 md:border-one p-5 rounded-lg">
            <div>
                <p className="text-slate-950 font-semibold">
                    Setelah menikmati secangkir kopi yang luar biasa ini, rasanya sulit untuk menemukan kata-kata yang tepat untuk mengungkapkan betapa enaknya rasanya. Sensasi yang melintasi lidah dan menyapu seluruh indera, menciptakan kebahagiaan yang tak tergantikan.
                </p>
            </div>
            <div className="flex flex-row justify-center items-center mt-4 gap-4">
                <img className="rounded-full w-1/2 " src={props.img} alt="" />
                <h3 className="font-semibold text-center">{props.name}</h3>
            </div>
            <div className="flex flex-row justify-center items-center mt-8 gap-4 ">
                <BsStarFill className="text-slate-900" />
                <BsStarFill className="text-slate-900" />
                <BsStarFill className="text-slate-900" />
                <BsStarFill className="text-slate-900" />
                <BsStarHalf className="text-slate-900" />
            </div>
        </div>
    )
}

export default ReviewCard