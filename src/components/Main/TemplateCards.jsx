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


        // <div className="relative p-6 rounded-md overflow-hidden shadow-lg border border-gray-200 ">
        //     {/* Gradient Overlay */}
        //     <div className="absolute inset-0  pointer-events-none"></div>

        //     {/* Card Content */}
        //     <div className="relative z-10 flex flex-col items-center text-center text-white space-y-3">
        //         {/* Logo Icon */}
        //         <FaReact className="text-4xl text-white opacity-80" />

        //         {/* Title */}
        //         <h3 className="text-lg font-semibold">Welcome to React</h3>

        //         {/* Description */}
        //         <p className="text-sm opacity-80">
        //             Explore the beauty of modern UI with a gradient glass effect.
        //         </p>
        //     </div>
        // </div>

    )
}

export default TemplateCards