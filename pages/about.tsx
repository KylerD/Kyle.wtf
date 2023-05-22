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
                  <code className="min-w-full p-5 space-y-6 font-['terminal']">
                    <div className="flex w-full">
                      <p className="flex-auto text-6xl text-purple-400 mx-auto text-center">
                        Hello World
                      </p>
                    </div>
                    {/* About Me */}
                    <div className="flex relative w-[16rem] h-[16rem] md:w-[24rem] md:h-[24rem] mx-auto">
                      <span className="absolute z-10 h-full w-full animate-flicker opacity-0" id="ascii">
                        <Image priority src="/images/kdascii.png" layout='fill' />
                      </span>
                      <span className="w-full h-full">
                        <Image priority src="/images/kd.jpeg" layout='fill' />
                      </span>
                    </div>
                    <div className="flex mx-auto w-full">
                      <p className="text-center text-2xl mx-auto whitespace-normal">
                        Formerly the Lead Architect for Transport in <span className='text-green-400 underline'>
                          <Link href={'https://www.kainos.com/'}>Kainos</Link>
                        </span> digital services division, I am now Engineering Lead at <span className='text-green-400 underline'>
                          <Link href={'https://hamiltonrobson.com/'}>Hamilton Robson</Link>
                        </span>, and the CTO of <span className='text-green-400 underline'>
                          <Link href={'https://www.track.software/'}>Track Software</Link>
                        </span>. My experience includes successfully leading multimillion-pound projects that have delivered award winning nationwide digital services, driving digital transformation initiatives, and leveraging emerging technologies to drive growth and efficiency. Some recent achievements I'm proud of include:
                      </p>
                    </div>
                    <div className="flex mx-auto whitespace-normal mb-32">
                      <ol className="mx-auto max-w-4xl text-white text-2xl list-none text-center">
                        <li className="my-2 border-t-green-400 border-dashed border-t-2 py-2">
                          <p className='text-purple-400'>2021 - 2023</p>

                          Lead curator of Belfast's largest annual technology conference <span className='text-green-400 underline'>
                            <Link href={'https://beltech.co/'}>Beltech</Link>
                          </span>
                        </li>

                        <li className="my-2 border-t-green-400 border-dashed border-t-2 py-2">
                          <p className='text-purple-400'>2021 - 2023</p>
                          Leader of the Kainos JavaScript Community of over 80+ engineers. This group plays a key role in setting and implementing company-wide strategy around web development standards, tools, techniques, and technologies.
                        </li>


                        <li className="my-2 border-t-green-400 border-dashed border-t-2 py-2">
                          <p className='text-purple-400'>2018 - 2022</p>
                          Lead Architect of the industry award winning Department for Transport (DfT) <span className='text-green-400 underline'>
                            <Link href={'https://www.gov.uk/guidance/plan-and-manage-roadworks'}>Street Manager</Link>
                          </span> service
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

