import Head from 'next/head'
import Navbar from "../components/Navbar.jsx"
import Products from "../components/Products.jsx";
import { useEffect, useState } from "react"

export default function App() {
  const [theme, setTheme] = useState("dark")

  function handleButtonClick() {
      if(theme === "dark") {
          setTheme("light")
      } else {
          setTheme("dark")
      }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <>
      <Head>
        <title>kinnowear</title>
        <meta name="description" content="Upcycled custom-made clothing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar theme={theme} onButtonClick={handleButtonClick}/>
      <main className="flex flex-col items-center">
        <Products />
      </main>
    </>
  )
}
