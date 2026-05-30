import Layout from './UI/Layout/Layout'

import './App.css'
import Hero from './UI/organisms/HeroSection/HeroSection'
import Skills from './UI/organisms/Skills/Skills'
import Projects from './UI/organisms/Projects/Projects'
import Architectures from './UI/organisms/Architectures/Architectures'
import Contacts from './UI/organisms/Contacts/Contacts'
import useDarkMode from './hooks/useDarkMode'

function App() {
   const {theme,toggleTheme} = useDarkMode()
   
  return (
    <div className={`w-full min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'dark bg-slate-950 text-gray-100' : 'bg-white text-slate-900'
    }`}>
     <Layout theme={theme}>
      <Hero />
      <Skills />
      <Projects />
      <Architectures />
      <Contacts />
     </Layout>
      <button 
                onClick={toggleTheme}
                className="fixed bottom-5 right-5 p-3 rounded-full bg-fuchsia-600 text-white z-50 shadow-lg cursor-pointer hover:scale-110 transition-transform"
                title="Toggle Theme"
            >
                {theme === "light" ? "🌙" : "☀️"}
            </button>
    </div>
  )
}

export default App
