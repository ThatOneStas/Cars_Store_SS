import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {useEffect} from "react"
import {useDispatch} from "react-redux"
// layout (header, footer)
import Layouts from '@/layouts'

export default function App({ Component, pageProps }: AppProps) {
  // on load
  useEffect(()=>{})
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
