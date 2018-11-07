import "isomorphic-fetch"

const about = () => {
  return <p>About page content</p>
}

about.getInitialProps = async () => {
  let title = "About"
  let data = await fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => response.json()).then(data => {
    title = data.title
  })
  return { title }
}

export default about
