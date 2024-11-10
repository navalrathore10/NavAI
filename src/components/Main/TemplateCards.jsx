import React from 'react'
import { FaReact } from 'react-icons/fa'

function TemplateCards({ prompt, icon }) {
    return (
        <div className="relative shadow-lg rounded-xl overflow-hidden border border-white bg-white/10 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-400 opacity-20 pointer-events-none z-1 w-full h-full overflow-hidden rounded-xl"></div>
            <div className="z-2 content flex flex-col justify-between bg-lightop20 backdrop-blur-2xl border-black 
                    w-full h-full p-2 text-xs lg:text-sm xl:text-md text-black leading-5 font-light">
                <p>{prompt}</p>
                <div className="icon flex justify-end">
                    {icon}
                </div>
            </div>
        </div>
    )
}

export default TemplateCards