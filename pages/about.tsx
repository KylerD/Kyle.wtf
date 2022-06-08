import Layout from '../components/layout'
import React from 'react'
import Image from 'next/image'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {

  const [expand, setExpand] = React.useState(false);

  function handleExpand() {
    setExpand(!expand);
  }

  return (
    <Layout>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <div className='flex w-full mx-auto justify-center my-2'>
              <Image className='rounded-full' priority src="/images/kd.jpeg" width='100' height='100' />
            </div>

            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Bout Ye 👋</p>
            <p className="mt-4 max-w-4xl text-xl text-gray-700 lg:mx-auto">
              I'm a 30 something Software Architect. I work for Kainos by day, and moonlight as an Ethereum Blockchain developer by night.
              I get to do a bunch of cool stuff as part of my job. If you check in every once and a while I might have some blog posts about it here.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

