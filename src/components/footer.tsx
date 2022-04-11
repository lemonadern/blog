import Container from './container'
import { TWITTER_URL, GITHUB_URL, ZENN_URL,WANTEDLY_URL } from '@/lib/constants'
import { FaTwitter ,FaGithub } from "react-icons/fa"
import { SiZenn } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="py-6">
      <Container>
        <div className="py-4 flex flex-row justify-center gap-6 items-center text-lg">
          <a href={TWITTER_URL}><FaTwitter /></a>
          <a href={GITHUB_URL}><FaGithub /></a>
          <a href={ZENN_URL}><SiZenn /></a>
        </div>
        <div className="py-2">
          <p className="text-center text-base">&copy; 2022 lemonadern</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
