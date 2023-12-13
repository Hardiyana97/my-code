import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

const people = [
    {
        name: 'Bunsong',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
    },
    // More people...
    {
        name: 'Kuming',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1527082395-e939b847da0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
    },
    // More people...
    {
        name: 'Wira',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    // More people...
]

export default function Example() {
    useEffect(() => {
        AOS.init({ duration: 800 })
    }, [])
    return (
        <div className="bg-slate-300 py-24 sm:py-32">
            <div data-aos="fade-left" className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 data-aos="fade-down" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p data-aos="fade-up" className="mt-6 text-lg leading-8 text-black">
                        "Welcome to meet our leadership team, a group of dedicated individuals who lead with passion, expertise, and a shared vision. They are the driving force behind our organization's success, guiding us towards innovation, growth, and excellence. Get ready to be inspired by their leadership and learn more about their unique perspectives and contributions."
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
