import React from "react";
import MenuCard from "../Layouts/MenuCard";
import ProductCard from "../Layouts/OtherMenuCard"
import ReviewCard from "../Layouts/ReviewCard";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const Menu = () => {
    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])
    return (
        <div data-aos="fade-out" id="Menu" className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-slate-300">
            <h1 className="font-semibold text-center text-4xl mt-24 mb-8">Coffe Menu</h1>

            <div data-aos="fade-up" className="flex flex-wrap pb-8 gap-8 justify-center items-center">
                <MenuCard img="https://media.istockphoto.com/id/1126871442/id/foto/cangkir-kopi.jpg?s=612x612&w=0&k=20&c=PtF2DoDJDNyUgr7xQV9_lBGSRr8bn1LM3Z8z-2CjunM=" title="Expresso" />
                <MenuCard img="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Americano" />
                <MenuCard img="https://images.pexels.com/photos/433145/pexels-photo-433145.jpeg?auto=compress&cs=tinysrgb&w=600" title="Latte" />
                <MenuCard img="https://images.pexels.com/photos/162947/coffee-glass-beverage-coffee-mug-162947.jpeg?auto=compress&cs=tinysrgb&w=600" title="Cappuccino" />
                <MenuCard img="https://images.pexels.com/photos/4116728/pexels-photo-4116728.jpeg?auto=compress&cs=tinysrgb&w=600" title="Dalgona" />
                <MenuCard img="https://images.pexels.com/photos/685529/pexels-photo-685529.jpeg?auto=compress&cs=tinysrgb&w=600" title="Machiato" />
            </div>
            <div id="Other Menu" className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-slate-300">
                <h1 data-aos="fade-down" className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">Other Drink Menu</h1>
                <div data-aos="fade-left" className="flex flex-col lg:flex-row gap-12 justify-center">
                    <ProductCard img="https://images.pexels.com/photos/2876038/pexels-photo-2876038.jpeg?auto=compress&cs=tinysrgb&w=600" title="Mocacino" />
                    <ProductCard img="https://images.pexels.com/photos/7091588/pexels-photo-7091588.jpeg?auto=compress&cs=tinysrgb&w=600" title="Matcha" />
                    <ProductCard img="https://images.pexels.com/photos/6542756/pexels-photo-6542756.jpeg?auto=compress&cs=tinysrgb&w=600" title="" />
                </div>
            </div>
            <div>
                <div id="Review" className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5 bg-slate-300">
                    <h1 data-aos="fade-right" className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">Costumer's Review</h1>
                    <div data-aos="fade-left" className="flex flex-col md:flex-row gap-5 mt-5">
                        <ReviewCard img="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=600" name="Dapit" />
                        <ReviewCard img="https://images.pexels.com/photos/1642161/pexels-photo-1642161.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" name="Sopia" />
                        <ReviewCard img="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?auto=compress&cs=tinysrgb&w=600" name="Olivia" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu