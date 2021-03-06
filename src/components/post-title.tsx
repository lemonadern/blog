import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="text-4xl font-bold tracking-tighter md:leading-none mb-8 text-center">
      {children}
    </h1>
  )
}

export default PostTitle
