/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import type { AppProps } from 'next/app';
import { NextUIProvider} from "@nextui-org/react";
import Footer from '../components/Footer';
import NavbarMenuProject from '../components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <NavbarMenuProject/>
      <NextUIProvider>
        
               <Component {...pageProps} />
       </NextUIProvider>
    <Footer/>
  </>;
}