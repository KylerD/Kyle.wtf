import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export const name = '< Kyle Davidson />'
export const siteTitle = '<Kyle />'

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
        <meta
          name="description"
          content="Kyle Davidson's website"
        />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>
      </Head>
      {!home && (
        <>
          <header className='flex flex-row flex-nowrap w-full justify-center'>
            <Link href="/">
              <h1 className='m-4 text-xl font-bold text-green-500 hover: cursor-pointer'>{name}</h1>
            </Link>
          </header>
        </>
      )}
      <main>{children}</main>
    </>
  )
}