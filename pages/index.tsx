import Layout from '../components/layout'
import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <Layout home>

      <header className='flex flex-row flex-wrap w-full h-screen justify-center'>
        <div className="w-full md:w-2/3 p-4">
          <div className="w-full flex-row flex-wrap">
            <div className="relative col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
              <div className="relative flex text-slate-400 text-lg leading-6">
                <div className="font-['terminal'] mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                  kyle (node)
                </div>
                <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                  <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                </div>
              </div>

              <div className="relative">
                <pre className="text-lg leading-6 text-slate-50 flex ligatures-none">
                  <code className="flex-none min-w-full p-5 space-y-4">
                    {/* Web Stack */}
                    <div className="flex">
                      <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                        <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      <div className='relative'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full bg-slate-800 
                        animate-terminal"></span>
                        <p className="font-['terminal'] flex-auto text-purple-400">
                          POWERING UP WEBSITE...
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="tailwind"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>

                        <p className="flex-auto font-['terminal']">
                          ...TAILWIND (<span className='text-red-400'>25%</span>)
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="typescript"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>
                        <p className="font-['terminal'] flex-auto">
                          ...TYPESCRIPT (<span className='text-orange-400'>50%</span>)
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="next"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>
                        <p className="font-['terminal'] flex-auto">
                          ...NEXT.JS (<span className='text-yellow-400'>75%</span>)
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="vercel"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>
                        <p className="font-['terminal'] flex-auto">
                          ...VERCEL (<span className='text-green-400'>100%</span>)
                        </p>
                      </div>
                    </div>

                    {/* SOCIALS */}
                    <div className="flex my-2">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="socials"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                          <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p className="font-['terminal'] flex-auto text-purple-400">
                          FINDING SOCIALS...
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="employer"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>
                        <p className="font-['terminal'] flex-auto">
                          ...EMPLOYER: <span className='text-green-400 underline'>
                            <Link href={'https://www.kainos.com/'}>KAINOS</Link>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="twitter"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>
                        <p className="font-['terminal'] flex-auto">
                          ...TWITTER: <span className='text-green-400 underline'>
                            <Link href={'https://twitter.com/iKyleDavidson'}>TWEETING</Link>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="linkedin"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>
                        <p className="font-['terminal'] flex-auto">
                          ...LINKEDIN: <span className='text-green-400 underline'>
                            <Link href={'https://www.linkedin.com/in/kyledavidson200/'}>LINKED</Link>
                          </span>
                        </p>
                      </div>
                    </div>

                    {/* Site Nav */}
                    <div className="flex my-2">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="navigation"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-pink-400 w-auto h-6 mr-3">
                          <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <p className="font-['terminal'] flex-auto text-purple-400">
                          NAVIGATION...
                        </p>
                      </div>
                    </div>
                    <div className="flex">
                      <div className='relative flex'>
                        <span className="absolute z-10 top-0 right-0 inline-block h-full w-full bg-slate-800 
                        animate-terminal" id="about"></span>
                        <svg viewBox="0 -9 3 24" aria-hidden="true" className="flex-none overflow-visible text-green-400 w-auto h-6 mr-3">
                          <line x1="0" y1="5" x2="5" y2="5" stroke="currentColor" />
                        </svg>
                        <p className="font-['terminal'] flex-auto">
                          ...ABOUT: <span className='text-green-400 underline'>
                            <Link href={'/about'}>ME</Link>
                          </span>
                        </p>
                      </div>
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