import { useContext } from "react"
import { Store } from "../utils/Store"
import Head from "next/head"
import Link from "next/link"

export default function Layout({ title, children }) {
  const { state } = useContext(Store)
  const { cart } = state
  return (
    <>
      <Head>
        <title>{title ? title + " - Eunsinsa" : "Eunsinsa"}</title>
        <meta name="description" content="Nextjs Ecommerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
          <Link href="/">
            <a className="text-lg font-bold">eunsinsa</a>
          </Link>
          <div>
            <Link href="/cart">
              <a className="p-2">
                Cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white "></span>
                )}
              </a>
            </Link>
            <Link href="/login">
              <a className="p-2">Login</a>
            </Link>
          </div>
        </nav>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-black-100">
          <p>Copyright &copy; 2022 NextShop</p>
        </footer>
      </div>
    </>
  )
}
