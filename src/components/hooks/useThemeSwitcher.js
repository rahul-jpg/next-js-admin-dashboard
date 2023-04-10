import ThemeContext from "@/context/themeContext";
import { useContext, useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-scheme:dark)"
    const [mode, setMode] = useState("");
    const { setThemeMode } = useContext(ThemeContext)
    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const userPref = window.localStorage.getItem("theme")

        const handleChange = () => {
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light"
                setMode(check)
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                    setThemeMode("light")
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light"
                setMode(check)
                window.localStorage.setItem("theme", check)
                if (check === "dark") {
                    document.documentElement.classList.add("dark")
                    setThemeMode("dark")
                } else {
                    document.documentElement.classList.remove("dark")
                    setThemeMode("light")
                }
            }
        }

        handleChange()

        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, []);

    useEffect(() => {
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        }

        if (mode === "light") {
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }, [mode]);
    return [mode, setMode]
}

export default useThemeSwitcher