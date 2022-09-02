import Link from 'next/link'
import React, { useEffect } from 'react'
import KyleHead from './kyleHead'

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
  useEffect(() => { document.querySelector("body").classList.add("bg-white") });

  return (
    <>
      <KyleHead></KyleHead>

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