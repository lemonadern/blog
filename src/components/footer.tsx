import Container from './container'

const Footer = () => {
  return (
    <footer className="py-6">
      <Container>
        <div className="py-4 flex flex-row justify-center gap-2 items-center">
          <p>Twitter</p>
          <p>GitHub</p>
        </div>
        <div className="py-2">
          <p className="text-center">&copy; 2022 lemonadern</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
