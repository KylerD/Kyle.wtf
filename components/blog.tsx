import Link from 'next/link'
import React, { useEffect } from 'react'
import KyleHead from './kyleHead'

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
      <KyleHead></KyleHead>

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