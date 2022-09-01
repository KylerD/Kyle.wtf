import Layout from '../components/layout'
import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../lib/posts'

export default function Posts({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {

  return (
    <Layout>
      <header className='flex flex-row flex-wrap w-full h-screen justify-center'>
        <div className="w-full md:w-2/3 p-4">
          <div className="w-full flex-row flex-wrap">
            <div className="relative col-span-3 bg-slate-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10">
              <div className="relative flex text-slate-400 text-lg leading-6">
                <div className="font-['terminal'] mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                  posts (node)
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
                        POSTS
                      </p>
                    </div>
                    <div className="flex mx-auto whitespace-normal">
                      <ol className="mx-auto max-w-4xl text-white text-2xl list-none text-center">
                        {allPostsData.map(({ id, date, title }) => (
                          <li className="my-2 border-b-green-400 border-dashed border-b-2 py-2" key={id}>
                            <span className='text-green-400 underline'><Link href={`/posts/${id}`}><a>{title} ({date})</a></Link></span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout >
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

