import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export const name = '< Kyle Davidson />'
export const siteTitle = '<Kyle />'
export const webUrl = 'https://www.kyled.wtf/'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" key="robots" />
        <meta
          name="og:description"
          content="Blogs and stuff" key="description"
        />
        <meta name="og:title" content={siteTitle} key="title" />
        <meta name="og:url" content={webUrl} key="url" />
        <meta name="og:type" content="website" key="type" />
        <meta name="twitter:card" content="summary" />
        <meta name="og:image" content="favicon.ico" />

        <title>{siteTitle}</title>
      </Head>

      <>
        <header className='flex flex-row flex-nowrap w-full justify-center'>
          <Link href="/">
            <h1 className='m-4 text-4xl font-bold text-green-500 hover: cursor-pointer'><a>{name}</a></h1>
          </Link>
        </header>
      </>

      <main>{children}</main>
    </>
  )
}