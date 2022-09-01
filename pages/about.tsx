import Layout from '../components/layout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <Layout>
      <div className='flex flex-row flex-wrap w-full h-screen justify-center'>
        <div className="w-full md:w-2/3 p-4">
          <div className="w-full flex-row flex-wrap">
            <div className="relative col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
              <div className="relative flex text-slate-400 text-lg leading-6">
                <div className="font-['terminal'] mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                  about me (node)
                </div>
                <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                  <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl"></div>
                </div>
              </div>

              <div className="relative">
                <pre className="text-lg leading-6 text-slate-50 flex ligatures-none">
                  <code className="min-w-full p-5 space-y-4  font-['terminal']">
                    {/* Web Stack */}
                    <div className="flex w-full">
                      <p className="flex-auto text-6xl text-purple-400 mx-auto text-center">
                        BOUT YE
                      </p>
                    </div>
                    {/* About Me */}
                    <div className="flex relative w-[16rem] h-[16rem] md:w-[32rem] md:h-[32rem] mx-auto">
                      <span className="absolute z-10 h-full w-full animate-flicker opacity-0" id="ascii">
                        <Image priority src="/images/kdascii.png" layout='fill' />
                      </span>
                      <span className="w-full h-full">
                        <Image priority src="/images/kd.jpeg" layout='fill' />
                      </span>
                    </div>
                    <div className="flex mx-auto w-full">
                      <p className="text-center text-2xl mx-auto whitespace-normal">
                        Hey there, I'm Kyle! I've been designing and building software systems for over 10 years and currently work as a Solution Architect at <span className='text-green-400 underline'>
                          <Link href={'https://www.kainos.com/'}>KAINOS</Link>
                        </span>. I get to work on a bunch of cool stuff as part of my day to day, but some of the things I'm most proud of would be:
                      </p>
                    </div>
                    <div className="flex mx-auto whitespace-normal">
                      <ol className="mx-auto max-w-4xl text-white text-2xl list-none text-center">
                        <li className="my-2 border-t-green-400 border-dashed border-t-2 py-2">
                          Lead Architect for the <span className='text-green-400 underline'>
                            <Link href={'https://www.gov.uk/guidance/plan-and-manage-roadworks'}>Street Manager</Link>
                          </span> service with the Department for Transport which my team and I delivered over 4 years.
                        </li>

                        <li className="my-2 border-t-green-400 border-dashed border-t-2 py-2">
                          Lead Curator of <span className='text-green-400 underline'>
                            <Link href={'https://beltech.co/'}>Beltech</Link>
                          </span>
                        </li>

                        <li className="my-2 border-t-green-400 border-dashed border-t-2 py-2">
                          Supporting local start-ups in Belfast with advice and assistance via Kainos' start-up initiative
                        </li>

                        <li className="my-2 border-t-green-400 border-dashed border-t-2 py-2">
                          Driving capability initiatives that align our engineers on best practices and standards. Currently I lead our JavaScript community
                        </li>

                        <li className="my-2 border-t-green-400 border-b-green-400 border-dashed border-b-2 border-t-2  py-2">
                          Working with our recruitment and pre-sales teams to find more talented people and secure more business
                        </li>
                      </ol>
                    </div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout >
  )
}

