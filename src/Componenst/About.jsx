import React from "react"
import TeamCard from "../Layouts/TeamCard";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])
    return (
        <div id="About" className="min-h-Scereen flex flex-col items-center justify-center lg:px-32 px-5 bg-slate-300">
            <h1 data-aos="fade-down" className="font-bold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

            <div className="flex flex-col lg:flex-row items-center p-9 gap-5">
                <div className="w-full lg:w-2/4">
                    <img data-aos="fade-right" className="rounded-lg" src="https://images.pexels.com/photos/2159158/pexels-photo-2159158.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
                </div>
                <div className="w-full lg:w-2/4 p-4 space-y-3">
                    <h2 data-aos="fade-left" className="font-semibold text text-4xl">Dibalik Cita Rasa Yang Spesial dari kopi kami ....</h2>
                    <p data-aos="fade-left" className="font-semibold text-xl">Seiring berjalannya waktu, cafe ini telah menorehkan sejarah yang panjang dan mengesankan dalam dunia kuliner. Berdiri sejak tahun 1997 yang lalu, cafe ini telah menjadi simbol keberhasilan dan dedikasi dalam menyajikan produk asli yang dapat dipercaya.

                        Sejarah cafe ini dimulai dari sebuah impian yang tumbuh dalam benak seorang pengusaha berbakat. Dengan tekad yang kuat dan semangat yang membara, ia memutuskan untuk membuka cafe ini sebagai wujud dari cintanya terhadap kopi </p>
                    <p data-aos="fade-left" className="font-semibold text-xl">Dalam perjalanan panjangnya, cafe ini telah mengalami berbagai tantangan dan rintangan.cafe ini berhasil melewati semua hambatan dan terus berkembang menjadi salah satu tempat yang paling dicari oleh pecinta kuliner.</p>
                </div>
            </div>
            <div>
                <div id="Teams" className="min-h-screen bg-slate-300 flex flex-col justify-center items-center md:px-32 px-5">
                    <h1 className="text-4xl font-semibold text-center mt-10 pt pb-10">Our Barista</h1>
                    <div data-aos="fade-right" className="flex flex-col md:flex-row justify-center items-center gap-10">
                        <TeamCard img="https://img.freepik.com/free-photo/medium-shot-barista-holding-coffee-cup_23-2149045716.jpg?size=626&ext=jpg&ga=GA1.1.259451719.1701783778&semt=sph" name="Asep" />
                        <TeamCard img="https://img.freepik.com/free-photo/smiling-asian-girl-barista-giving-order-client-holding-takeaway-coffee-cup-wearing-apron-working_1258-138302.jpg?size=626&ext=jpg&ga=GA1.1.259451719.1701783778&semt=sph" name="Siti" />
                        <TeamCard img="https://img.freepik.com/free-photo/japanese-man-making-coffee-restaurant_23-2149319362.jpg?size=626&ext=jpg&ga=GA1.1.259451719.1701783778&semt=sph" name="Agus" />
                        <TeamCard img="https://img.freepik.com/premium-photo/coffee-shop-owner-serving-latte-her-first-visitor-herself_197531-22376.jpg?size=626&ext=jpg&ga=GA1.1.259451719.1701783778&semt=sph" name="Jaenab" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About