
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold mb-4">Kalpesh's Portfolio</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-gray-800 text-white px-4 py-2 rounded dark:bg-white dark:text-black"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </motion.div>
  )
}

export default App
