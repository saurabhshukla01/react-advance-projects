import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
const Header = () => {
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('mytheme')) || "dark");

    useEffect(() => {
        localStorage.setItem("mytheme", JSON.stringify(theme))
        document.documentElement.removeAttribute("class")
        document.documentElement.classList.add(theme)
    }, [theme])
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="Taskmate logo" />
                <span>Taskmate</span>
            </div>
            <div className='themeSelector'>
                <span className={theme === "light" ? "light activeTheme" : "light"} onClick={() => setTheme("light")}></span>
                <span className={theme === "medium" ? "medium activeTheme" : "medium"} onClick={() => setTheme("medium")}></span>
                <span className={theme === "dark" ? "dark activeTheme" : "dark"} onClick={() => setTheme("dark")}></span>
                <span className={theme === "gOne" ? "gOne activeTheme" : "gOne"} onClick={() => setTheme("gOne")}></span>
                <span className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"} onClick={() => setTheme("gTwo")}></span>
                <span className={theme === "gThree" ? "gThree activeTheme" : "gThree"} onClick={() => setTheme("gThree")}></span>
            </div>
        </header>
    )
}

export default Header