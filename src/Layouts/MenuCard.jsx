import React from "react";
import { FaShoppingCart } from "react-icons/fa"

const MenuCard = (props) => {
    return (
        <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
            <div>
                <img className="rounded-xl" src={props.img} alt="/" />
            </div>
            <div className="p-2 mt-5">
                <div className="flex flex-row justify-between">
                    <h3 className="font-bold text-xl">{props.title}</h3>
                    <h3 className="font-bold text-xl">{props.value}</h3>
                </div>
                <div className="flex flex-row justify-between mt-3">
                    <div className="flex gap-2">
                        <button className="px-3 text-sm font-bold border-2 bg-slate-500">Hot</button>
                        <button className="px-3 text-sm font-bold border-2 bg-yellow-300">Cold</button>
                    </div>
                    <span className="flex items-center bg-yellow-300 px-3 py-2 rounded-full cursor-pointer">
                        <FaShoppingCart size={25} />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MenuCard