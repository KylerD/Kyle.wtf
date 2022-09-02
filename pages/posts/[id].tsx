import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import Blog from '../../components/blog'
import ReactMarkdown from '../../node_modules/react-markdown/index'
import CodeBlock from '../../components/codeblock'
import { PostData } from '../../models/postData'

export default function Post({
  postData
}: {
  postData: PostData
}) {
  return (
    <Blog>
      <div className='flex flex-row flex-wrap w-full justify-evenly'>
        <div className="my-6 mx-auto flex flex-col font-['terminal'] w-full">
          <h1 id="title" className="font-bold leading-tight text-6xl mt-0 mb-2 text-center text-green-500 mx-auto">{postData.title}</h1>

          <p className="text-2xl font-bold text-center mx-auto text-green-500">
            <Date dateString={postData.date} />
          </p>
        </div>
        <span className='w-full border-b-4 border-b-green-500 border-dashed mb-6'></span>

        <div className="w-full">
          <ReactMarkdown components={CodeBlock} className="mx-auto prose-lg max-w-7xl text-center prose-p:text-2xl prose-p:text-white prose-p:tracking-wide prose-strong:animate-powerful prose-p:subpixel-antialiased prose-a:text-green-500 prose-a:underline prose-h2:text-green-500 prose-h2:font-['terminal'] mb-6 prose-img:mx-auto prose-ul:text-xl prose-ol:text-white prose-ol:text-2xl prose-ul:text-gray-600 prose-ul:list-disc prose-ul:max-w-5xl prose-ul:mx-auto prose-ol:list-decimal prose-ol:max-w-4xl prose-ol:mx-auto prose-pre:bg-white" >{postData.markdown}</ReactMarkdown>
        </div>


      </div>
    </Blog >
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)

  return {
    props: {
      postData
    }
  }
}