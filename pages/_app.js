import App, { Container } from 'next/app';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

import Page from '../components/Page';
import { title } from './_document';

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
    --Voodoo: hsla(297, 26%, 32%, 1);
    --Starship: hsla(63, 81%, 62%, 1);
    --Martinique: hsla(255, 30%, 25%, 1);
    --RedRed: hsla(0, 100%, 50%, 1);
    --Lima: hsla(94, 66%, 45%, 1);
    --RoyalBlue: hsla(225, 67%, 53%, 1);
    --Downy: hsla(182, 51%, 62%, 1);
    --QuarterPearlLusta: hsla(43, 100%, 99%, 1);
    --CatskillWhite: hsla(171, 33%, 96%, 1);
    --CodGray: hsla(345, 14%, 5%, 1);
    --TorreaBay: hsla(226, 90%, 32%, 1);
    --Thunder: hsla(315, 19%, 13%, 1);
    --BlueHaze: hsla(225, 26%, 79%, 1);
    --background-color: var(--CatskillWhite);
    --main-background-color: var(--CatskillWhite);
    --sidenav-background: var(--CodGray);
    --text-color: var(--CodGray);
    --link-color: var(--TorreaBay);
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
      display: block;
  }

  body {
      line-height: 1;
  }

  ol,
  ul {
      list-style: none;
  }

  blockquote,
  q {
      quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
      content: '';
      content: none;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
  }

  html {
      font-size: 10px;
      box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }



  body {
    background-color: var(--background-color);
    margin: 0;
    color: var(--text-color);
    font-family: trade-gothic-next, sans-serif;
    font-size: 1.8rem;
    line-height: 1.8;
  }

  a {
    color: var(--link-color);
  }
`;

const Main = styled.main`
  background-color: var(--main-background-color);
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Container>
          <Page>
            <Main>
              <Component {...pageProps} router={router} />
            </Main>
          </Page>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}
