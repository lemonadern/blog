import DateFormatter from './date-formatter'
import PostTitle from './post-title'

type Props = {
  title: string
  date: string
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-center gap-6 text-opacity-80 max-w-4xl mx-auto mb-14">
        <DateFormatter dateString={date} />
      </div>
    </>
  )
}

export default PostHeader
