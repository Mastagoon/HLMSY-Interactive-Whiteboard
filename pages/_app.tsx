import "../styles/globals.css"
import type { AppProps } from "next/app"
import { CanvasProvider } from "../context/canvasContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CanvasProvider>
      <Component {...pageProps} />{" "}
    </CanvasProvider>
  )
}

export default MyApp
