import React, { useState, useEffect, useContext } from 'react';
import { SiFuturelearn, SiGooglegemini } from "react-icons/si";
import { motion } from 'framer-motion';
import { IoArrowUpCircle, IoMicOutline } from "react-icons/io5";
import TemplateCards from './TemplateCards';
import { PiGlobeStand } from 'react-icons/pi';
import { GiArchiveResearch } from 'react-icons/gi';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { GoPaperAirplane } from 'react-icons/go';
import { Context } from '../../context/Context';
import MessageLoader from './MessageLoader';

const ChatPage = () => {
    const User = 'Kanchan';

    // State to track if the keyboard is open
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const { onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input } = useContext(Context);

    useEffect(() => {
        // Track window inner height to detect keyboard visibility
        const initialHeight = window.innerHeight;

        const handleResize = () => {
            // Compare current height with initial height
            setIsKeyboardOpen(window.innerHeight < initialHeight);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <motion.div layout className="text-outfit flex flex-col flex-1 p-4 md:ps-0 text-white overflow-hidden border-black">
            <motion.div layout className="flex justify-between items-center pb-4">
                <motion.h2 layout className="text-2xl font-bold text-white">
                    NavAI
                    <span className="text-xs ms-1 font-light inline-flex gap-1 items-end">
                        Powered By
                        <SiGooglegemini />
                        Gemini
                    </span>
                </motion.h2>
                <motion.div layout className="profile w-9 h-9 rounded-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/profile-1661966219494-f87fcbcf7937image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                        alt=""
                    />
                </motion.div>
            </motion.div>

            <motion.div layout className="frame flex flex-1 bg-white rounded-md flex justify-center border-black">
                <motion.div layout className="flex flex-1 p-6 flex flex-col lg:max-w-[65%] border-black">

                    {/* ---------------------------- Chat Content */}

                    {!showResult ?
                        <>
                            <motion.div layout className="flex-1 p-6 bg-white rounded-lg flex flex-col justify-center border-red-400">
                                <motion.div layout className="font-semibold text-3xl xl:text-5xl">
                                    <span
                                        style={{
                                            background: '#03001e',
                                            backgroundImage: '-webkit-linear-gradient(to left, #fdeff9, #ec38bc, #7303c0, #03001e)',
                                            backgroundImage: 'linear-gradient(to left, #fdeff9, #ec38bc, #7303c0, #03001e)',
                                            WebkitTextFillColor: 'transparent',
                                            WebkitBackgroundClip: 'text',
                                            color: 'transparent',
                                        }}
                                    >
                                        Hey, {User}!
                                    </span>
                                    <p className="pt-3 text-gray-300">
                                        How may I help you today?
                                    </p>
                                </motion.div>

                                {/* Conditionally render TemplateCards based on keyboard visibility */}
                                {!isKeyboardOpen && (
                                    <div className="grid md:grid-cols-3 pt-12 border-black gap-5">
                                        <TemplateCards
                                            icon={<PiGlobeStand />}
                                            prompt={'Suggest beautiful places to see on an upcoming road trip to Ladakh from Chandigarh'}
                                        />
                                        <TemplateCards
                                            icon={<SiFuturelearn />}
                                            prompt={'Briefly summarize how to learn React Native after learning React.js for the web.'}
                                        />
                                        <TemplateCards
                                            icon={<GiArchiveResearch />}
                                            prompt={'Can you explain what the Pi coin is and whether it’s worth keeping Pi coins in a wallet for the future?'}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </>
                        :
                        <>
                            <div className="result h-[66vh] max-h-[66vh] p-6 bg-white rounded-lg overflow-y-auto scrollbar-hide flex flex-col gap-5 justify-start border-red-400">
                                <div className="result-title flex gap-5 items-start">
                                    <img
                                        src="https://images.unsplash.com/profile-1661966219494-f87fcbcf7937image?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                                        alt=""
                                        className="min-w-9 h-9 rounded-full overflow-hidden"
                                    />
                                    <p className="text-sm text-black">{recentPrompt}</p>
                                </div>
                                <div className="result_data flex gap-5 flex-grow items-start">
                                    <div className="gemini_icon text-3xl min-w-9 h-9 flex justify-center items-center text-gray-400">
                                        {/* <SiGooglegemini /> */}
                                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z" fill="url(#prefix__paint0_radial_980_20147)" /><defs><radialGradient id="prefix__paint0_radial_980_20147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"><stop offset=".067" stop-color="#9168C0" /><stop offset=".343" stop-color="#5684D1" /><stop offset=".672" stop-color="#1BA1E3" /></radialGradient></defs></svg>
                                    </div>
                                    {loading ?
                                        <MessageLoader />
                                        :
                                        <div className="text-sm text-black text-justify leading-7
                                            flex flex-col gap-[1rem] p-[1rem]">
                                            <p className='result-message' dangerouslySetInnerHTML={{ __html: resultData }} />
                                        </div>
                                    }
                                </div>
                            </div>


                        </>
                    }

                    {/* ---------------------------- Chat Input*/}
                    <motion.div layout className="flex justify-between mt-4 rounded-full border border-gray-300 overflow-hidden">
                        <motion.input
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    onSent(input);
                                }
                            }}
                            value={input}
                            type="text"
                            placeholder="Enter a prompt here"
                            layout
                            className="w-full p-3 py-2 focus:outline-none text-darkop80 focus:border-blue-500"
                        />
                        <motion.div className="flex gap-1 me-1 items-center border-black p-1 text-2xl text-gray-700">
                            <MdOutlineAddPhotoAlternate />
                            <IoMicOutline />

                            <GoPaperAirplane onClick={() => onSent(input)} />

                        </motion.div>
                    </motion.div>
                    {/* ---------------------------- Chat Disclaimer*/}
                    <p className="disclaimer text-[10px] text-gray-400 mt-3 text-center">
                        NavAI powered by Gemini may display inaccurate info, including about people, so double-check its answers for accuracy.
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default ChatPage;
