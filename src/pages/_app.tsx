import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import {useEffect} from "react"
import {Provider, useDispatch} from "react-redux"
// layout (header, footer)
import Layouts from '@/layouts'
import { store } from "../redux"

export default function App({ Component, pageProps }: AppProps) {
  // on load
  useEffect(()=>{

  })
  return (
    <Provider store={store}>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  );
}
