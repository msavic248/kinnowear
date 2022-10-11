import Head from 'next/head'
import Navbar from "../../components/Navbar.jsx"


export default function App() {

  return (
    <>
      <Head>
        <title>kinnowear - Cart</title>
        <meta name="description" content="Upcycled custom-made clothing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1>This is the cart</h1>
      </main>
    </>
  )
}
