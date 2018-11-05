const about = () => {
  return <p>About page content</p>
}

about.getInitialProps = async ({ req }) => {
  return { title: "About" }
}

export default about
