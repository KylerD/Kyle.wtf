import Layout, { name } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Image from 'next/image'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import cn from 'classnames';
import React from 'react'

export default function Home() {
  const [expand, setExpand] = React.useState(false);

  function handleExpand() {
    setExpand(!expand);
  }

  return (
    <Layout home>

      <header className='flex flex-row flex-wrap w-full h-screen justify-center items-center'>
        <div className={cn('flex flex-row justify-center items-center w-full', { 'md:w-1/2': expand })}>
          <button onClick={handleExpand}
            className={cn('text-6xl font-bold text-green-500 animate-pulse hover:cursor-pointer hover:animate-none', { 'animate-none': expand })}>{name}</button>
        </div>

        <div className={cn("w-full md:w-1/2 p-4", { 'hidden': !expand })}>
          <div className="w-full flex-row flex-wrap">
            {/* About stack */}
            <div className="relative col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
              <div className="relative flex text-slate-400 text-xs leading-6">
                <div className="font-['terminal'] mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                  about (node)
                </div>
                <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                  <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                </div>

              </div>
              <div className="relative">
                <pre className="text-sm leading-6 text-slate-50 flex ligatures-none">
                  <code className="flex-none min-w-full p-5">
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        Building website...
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        .....TYPESCRIPT (<span className='text-green-400'>100%</span>)
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        .....NEXT.JS (<span className='text-yellow-400'>70%</span>)
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="flex-auto font-['terminal']">
                        .....TAILWIND (<span className='text-red-400'>30%</span>)
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="flex-auto font-['terminal']">
                        <span className='text-green-400'>COMPLETE</span>
                      </p>
                    </div>
                    <div className="flex my-2">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        Shilling socials...
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        .....EMPLOYER: <span className='text-green-400 underline'>
                          <Link href={'https://www.kainos.com/'}>KAINOS</Link>
                        </span>
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        .....TWITTER: <span className='text-blue-400 underline'>
                          <Link href={'https://twitter.com/iKyleDavidson'}>TWEETING</Link>
                        </span>
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        .....LINKEDIN: <span className='text-blue-400 underline'>
                          <Link href={'https://www.linkedin.com/in/kyledavidson200/'}>LINKED</Link>
                        </span>
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="flex-auto font-['terminal']">
                        <span className='text-green-400'>COMPLETE</span>
                      </p>
                    </div>
                    <div className="flex my-2">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        Navigation...
                      </p>
                    </div>
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                        <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                      </svg>
                      <p className="font-['terminal'] flex-auto">
                        <span className='text-green-400 underline'>
                          <Link href={'/about'}>ABOUT ME</Link>
                        </span>
                      </p>
                    </div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  )
}