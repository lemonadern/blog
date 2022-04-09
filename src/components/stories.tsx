import PostPreview from './post-preview'
import Post from '@/types/post'

type Props = {
  posts: Post[]
}

const Stories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
        Posts
      </h2>
      <div className="grid grid-cols-1 gap-y-20 md:gap-y-12 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default Stories
