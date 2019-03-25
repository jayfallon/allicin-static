import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import Footer from './Footer';

const theme = {
  globalBg: 'hsla(50, 30%, 96%, 1)',
  globalText: 'hsla(0, 0%, 20%, 1)',
  globalRestText: 'hsla(0, 0%, 50%, 1)',
  aboutGridText: 'hsla(0, 0%, 35%, 1)',
  aboutGridBorder: 'hsla(0, 0%, 80%, 1)',
  pageMargin: '0 auto',
  pageWidth: '92.8rem',
  pagePadding: '0 1.6rem',
  flatWhite: 'hsla(0, 100%, 100%, 1)',
  braveBlue: 'hsla(212, 98%, 17%, 1)',
  easyBlue: 'hsla(207, 80%, 65%, 1)',
  boxShadow: '0 0.15rem 0.5rem 0 hsla(0, 0%, 0%, 0.25)',

  funBlue: 'hsla(223, 72%, 37%, 1)',
  thunder: 'hsla(315, 19%, 13%, 1)',
  footerBg: 'var(--Thunder)',
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          {this.props.children}
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
