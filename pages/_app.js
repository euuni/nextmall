import "../styles/globals.css"
import { StoreProvider } from "../utils/Store"
import { SessionProvider } from "next-auth/react"
import { useRouter } from "next/router"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider></StoreProvider>
    </SessionProvider>
  )
}

export default MyApp
