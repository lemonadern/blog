import Container from '@/components/container'
import Stories from '@/components/stories'
import Header from '@/components/header'
import Layout from '@/components/layout'
import { getAllPosts } from '@/lib/api'
import Head from 'next/head'
import Post from '@/types/post'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>lemonadern's blog</title>
        </Head>
        <Container>
          <Header/>
          {allPosts.length > 0 && <Stories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
  ])

  return {
    props: { allPosts },
  }
}
