import React from "react"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import Button from "./Button";

const ProductCard = (props) => {
    return (
        <div className="w-full lg:w-1/4 bg-white p-2 rounded-lg">
            <img className="rounded-lg" src={props.img} alt="" />
            <div className="flex flex-col items-center mt-5 gap-3">
                <h2 className="font-semibold text-xl">{props.tittle}</h2>
                <div className="flex">
                    <BsStarFill className="text-slate-900" />
                    <BsStarFill className="text-slate-900" />
                    <BsStarFill className="text-slate-900" />
                    <BsStarFill className="text-slate-900" />
                    <BsStarHalf className="text-slate-900" />
                </div>
                <h3 className="font-semibold text-lg">Rp.30000</h3>
                <Button tittle="Add to Card" />
            </div>
        </div>

    )
}

export default ProductCard

