import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import Sidebar from '../components/sideBar/Sidebar'
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
          <div className={`${isOpen ? "w-[16rem] min-w-[16rem] xs:w-[14rem] sm:h-screen" : "w-[4rem] min-w-[4rem] sm:w-16"} md:fixed z-20 h-screen sm:h-12`}>
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div className={`${isOpen ? "w-[85%] md:w-[100%]" : "w-[97%] md:w-[100%] md:ml-[4rem] sm:ml-0"} overflow-x-hidden overflow-y-scroll h-screen`}>
            <Topbar />
            <Component {...pageProps} />
          </div>
        </main>
      </ThemeContext.Provider>
    </>

  )
}
