import { NextUIProvider } from '@nextui-org/react'
import Footer from 'components/Footer'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head />
      <NextUIProvider>
        <body className="bg-white text-black" suppressHydrationWarning>
          <Main />
          <NextScript />
        </body>
      </NextUIProvider>
    </Html>
  )
}
