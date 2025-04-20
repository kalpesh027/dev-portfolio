import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-all duration-300">
        <header className="flex justify-between items-center p-6">
          <h1 className="text-2xl font-bold">Kalpesh Dev</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
          >
            {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>
        <main className="p-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Hey, I'm Kalpesh 👋</h2>
            <p className="text-lg">I build high-performance websites & automation tools for local businesses.</p>
          </motion.div>
        </main>
      </div>
    </div>
  )
}
