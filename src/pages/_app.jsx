import {Container} from "next/app";
import React from "react";
import {Provider} from "react-redux";
import Head from "next/head";
import {MuiThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import JssProvider from "react-jss/lib/JssProvider";

import {initializeStore} from "../store/store";
import withRedux from "next-redux-wrapper";
import Layout from "./../components/layout";
import getPageContext from "./../muiHelpers";

const defaultWebsiteTitle = "Default Website Title";

const MyApp = (props) => {
  const {Component, pageProps, store, router} = props;
  const {title=defaultWebsiteTitle} = pageProps;
  const pageContext = getPageContext();
  pageProps.pageContext = pageContext;
  pageProps.router = router;

  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Provider store={store}>
        <JssProvider registry={pageContext.sheetsRegistry} generateClassName={pageContext.generateClassName}>
          <MuiThemeProvider theme={pageContext.theme} sheetsManager={pageContext.sheetsManager}>
            <CssBaseline />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MuiThemeProvider>
        </JssProvider>
      </Provider>
    </Container>
  );
};

MyApp.componentDidMount = () => {
  // Remove the server-side injected CSS.
  const jssStyles = document.querySelector("#jss-server-side");
  if (jssStyles && jssStyles.parentNode) {
    jssStyles.parentNode.removeChild(jssStyles);
  }
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  /** If this page has getInitialProps(), run it to fill pageProps */
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  /** Extract pageProp title, or set title to the default */
  const {title = defaultWebsiteTitle} = pageProps;
  /** If we have a document, update it's title for UX */
  if (typeof document != "undefined" ) {
    document.title = title;
  }
  return { pageProps };
};

export default withRedux(initializeStore)(MyApp);