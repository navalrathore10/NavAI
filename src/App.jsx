import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import ChatPage from './components/Main/Chatpage'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <motion.div layout className=' flex flex-grow max-h-screen'
        style={{
          background: '#03001e', /* fallback for old browsers */
          backgroundImage: '-webkit-linear-gradient(to left, #fdeff9, #ff81dd, #7303c0, #03001e)', /* Chrome 10-25, Safari 5.1-6 */
          backgroundImage: 'linear-gradient(to left, #fdeff9, #ff81dd, #7303c0, #03001e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          // WebkitTextFillColor: 'transparent',
          // WebkitBackgroundClip: 'text',
          // color: 'transparent'
        }}>
        <motion.div layout className="sidebar hidden md:flex">
          <Sidebar />
        </motion.div>
        <ChatPage />
      </motion.div>
    </>
  )
}

export default App
