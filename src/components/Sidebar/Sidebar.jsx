// Sidebar.jsx
import React, { useState } from 'react';
import { FaQuestionCircle, FaChartBar, FaCog } from 'react-icons/fa';
import { AiOutlinePlus } from "react-icons/ai";
import { RiMenu5Fill, RiHistoryFill } from "react-icons/ri";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { motion } from 'framer-motion';



const Sidebar = () => {

    const [menuOpen, setMenuOpen] = useState(true);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <motion.div layout className={`text-outfit h-screen ${menuOpen ? 'w-min' : 'w-[250px]'}  p-4 flex flex-col justify-between gap-5 text-white`}>

            <motion.div layout
                onClick={toggleMenu}
                className="menubar text-4xl cursor-pointer w-min">
                {menuOpen ?
                    <BiMenu />
                    :
                    <BiMenuAltLeft />
                }
            </motion.div>

            {/* New Section */}
            <motion.div layout className="NewChat flex justify-start items-center gap-2 p-2 px-3 
                border border-gray-400 rounded-full w-max h-[40px]
                ">
                <AiOutlinePlus />
                <span className={`${menuOpen ? 'hidden' : 'block'}`}>
                    New Chat
                </span>
            </motion.div>

            {/* Recent Section */}
            <motion.div layout className="flex flex-col gap-3">

                {/* Recent Title */}
                <button className="text-left flex items-center gap-3 text-lg p-2 px-3">
                    <RiHistoryFill />
                    <p className={`font-semibold text-gray-300 ${menuOpen ? 'hidden' : 'block'}`}>Recent</p>
                </button>

                {/* Recent Items */}
                <motion.div layout className={`flex flex-col space-y-2 mt-2 ${menuOpen ? 'hidden' : 'block'}`}>
                    <button className="bg-lightop20 p-2 rounded-md text-gray-300 hover:bg-gray-700">
                        What is the full form of HTML?
                    </button>
                    <button className="bg-lightop20 p-2 rounded-md text-gray-300 hover:bg-gray-700">
                        What is React JS?
                    </button>
                </motion.div>
            </motion.div>

            {/* Footer Section (Help, Activity, Settings) */}
            <motion.div layout className="mt-auto flex flex-col gap-3 text-gray-400">

                {/* Help Button */}
                <button className={`flex ${menuOpen?'justify-center':''} items-center gap-2 p-2 hover:bg-gray-800 rounded-md`}>
                    <FaQuestionCircle />
                    <span className={`${menuOpen ? 'hidden' : 'block'}`}>Help</span>
                </button>

                {/* Activity Button */}
                <button className={`flex ${menuOpen?'justify-center':''} items-center gap-2 p-2 hover:bg-gray-800 rounded-md`}>
                    <FaChartBar />
                    <span className={`${menuOpen ? 'hidden' : 'block'}`}>Activity</span>
                </button>

                {/* Settings Button */}
                <button className={`flex ${menuOpen?'justify-center':''} items-center gap-2 p-2 hover:bg-gray-800 rounded-md`}>
                    <FaCog />
                    <span className={`${menuOpen ? 'hidden' : 'block'}`}>Settings</span>
                </button>
            </motion.div>

        </motion.div>

    );
};

export default Sidebar;
