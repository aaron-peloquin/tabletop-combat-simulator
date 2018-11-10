import { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import Head from "next/head";

import {initializeStore} from "../store/store";
import withRedux from "next-redux-wrapper";
import Layout from "./../components/layout";

const defaultWebsiteTitle = "Default Website Title";

const MyApp = (props) => {
  const {Component, pageProps, store} = props;
  const {title=defaultWebsiteTitle} = pageProps;
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </Container>

  );};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  /** If this page has getInitialProps(), run it to fill pageProps */
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  /** Extract pageProp title, or set title to the default */
  const {title = defaultWebsiteTitle} = pageProps;

  /** If we have a document, update it'"s title for UX */
  if (typeof document != "undefined" ) {
    document.title = title;
  }

  return { pageProps };
};

export default withRedux(initializeStore,{debug: true})(MyApp);