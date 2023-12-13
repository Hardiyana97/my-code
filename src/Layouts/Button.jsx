import React from "react";

const Button = (props) => {
    return (
        <div>
            <button className="px-6 py-1 text-blacks font-bold text-2xl bg-slate-900 text-white hover:text-yellow-600 cursor-pointer transition-all rounded-full">
                {props.tittle}
            </button>
        </div>
    )
}

export default Button