import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'

export const name = '< Kyle Davidson />'
export const siteTitle = '<Kyle />'

export default function Blog({
  children
}: {
  children: React.ReactNode
  home?: boolean
}) {
  useEffect(() => { document.querySelector("body").classList.add("bg-slate-800") });

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" key="robots" />
        <meta
          name="description"
          content="Kyle Davidson's website" key="description"
        />
        <meta name="og:title" content={siteTitle} key="title" />
        <title>{siteTitle}</title>
      </Head>

      <>
        <header className='flex flex-row flex-nowrap w-full justify-center bg-slate-600'>
          <Link href="/">
            <h1 className='m-4 text-4xl font-bold text-green-500 hover: cursor-pointer'>{name}</h1>
          </Link>
        </header>
      </>

      <main className='bg-slate-800'>{children}</main>
    </>
  )
}