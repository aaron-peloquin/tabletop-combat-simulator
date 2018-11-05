import { Container } from "next/app"
import React from "react"
import { Provider } from "react-redux"
import Head from "next/head"

import withReduxStore from "../store/AppWithRedux"
import SideBar from "../components/SideBar"
import HeaderBar from "./../components/HeaderBar"

const defaultWebsiteTitle = "Default Website Title"

const MyApp = (props) => {
  const {Component, pageProps, router, reduxStore} = props
  const {title=defaultWebsiteTitle} = pageProps

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <HeaderBar />
      <SideBar />
      <Provider store={reduxStore}>
        <Component {...pageProps} router={router} />
      </Provider>
    </Container>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}
  /** If this page has getInitialProps(), run it to fill pageProps */
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  /** Extract pageProp title, or set title to the default */
  const {title = defaultWebsiteTitle} = pageProps
  /** If we have a document, update it'"s title for UX */
  if (typeof document != "undefined" ) {
    document.title = title
  }

  return { pageProps }
}

export default withReduxStore(MyApp)