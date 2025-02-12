import { getAllPostsMeta } from "@/lib/mdx"
import { About } from "@/ui/About"
import { Layout } from "@/ui/Layout"
import { MediaPreview } from "@/ui/MediaPreview"
import { PostPreview } from "@/ui/PostPreview"
import { InferGetStaticPropsType } from "next"
import React from "react"

export const getStaticProps = async () => {
  const posts = getAllPostsMeta("post")
  return { props: { posts } }
}

const videos = [
  {
    title:
      "How I Built the Portfolio That Landed Me a Dev Role (Tech Stack Explained)",
    image: "/blog/zl9iXZrw_dw.png",
    url: "https://www.youtube.com/watch?v=zl9iXZrw_dw",
    text: "In this video, I go through how I built the website/portfolio that helped me land my first developer role at one of my dream companies.",
  },
]

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div className="space-y-14 lg:space-y-24">
        <div id="about">
          <About />
        </div>

        <div id="blog">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Recent Posts</h2>
            <h4 className="mt-2 text-gray-500">
              Thoughts on what I'm building and learning.
            </h4>
            {posts.map((post) => (
              <div
                key={post.slug}
                className="mt-6 sm:grid sm:grid-cols-2 sm:gap-10"
              >
                <PostPreview post={post} />
              </div>
            ))}
          </div>
        </div>

        <div id="reel">
          <div className="container px-4 mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Recent Videos</h2>
            <h4 className="mt-2 text-gray-500">
              Videos on what I'm building and learning.
            </h4>
            <div className="mt-6 sm:grid sm:grid-cols-2 sm:gap-10">
              {videos.map((video) => (
                <MediaPreview
                  key={video.url}
                  type="youtube"
                  url={video.url}
                  title={video.title}
                  text={video.text}
                  image={video.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
