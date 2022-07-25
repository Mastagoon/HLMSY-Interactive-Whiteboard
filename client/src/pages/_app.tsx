import "../styles/globals.css"
import type { AppProps } from "next/app"
import { CanvasProvider } from "../context/canvasContext"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/assets/icons/favicon/favicon.ico" />
        <title>Here, let me show you</title>
      </Head>
      <CanvasProvider>
        <Component {...pageProps} />{" "}
      </CanvasProvider>
    </>
  )
}

export default MyApp
