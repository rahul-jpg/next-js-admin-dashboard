import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Topbar from '@/components/Topbar'
import { useEffect, useState } from 'react'
import ThemeContext from '@/context/themeContext'
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher'

const montserrat = Montserrat({
  variable: "--font-mon",
  subsets: ["latin"]
})

export default function App({ Component, pageProps }) {

  const [themeMode, setThemeMode] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined" || null) {
      setThemeMode(window.localStorage.getItem("theme"))
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
        <main className={`${montserrat.variable} flex bg-light-BGC dark:bg-dark-BGC`}>
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={`${isOpen ? "w-[85%] md:w-[100%]" : "w-[97%] md:w-[100%] md:ml-[4rem] sm:ml-0"} overflow-hidden`}>
            <Topbar />
            <Component {...pageProps} />
          </div>
        </main>
      </ThemeContext.Provider>
    </>

  )
}
