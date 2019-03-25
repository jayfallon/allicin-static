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
  pageWidth: '96rem',
  pagePadding: '0 1.6rem',

  boxShadow: '0 0.15rem 0.5rem 0 hsla(0, 0%, 0%, 0.25)',

  footerBg: 'hsla(315, 19%, 13%, 1)',
  footerLinks: 'hsla(171, 33%, 96%, 1)',
  footerText: 'hsla(225, 26%, 79%, 1)',
  sideNavLinks: 'hsla(225, 26%, 79%, 1)',
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>{this.props.children}</>
      </ThemeProvider>
    );
  }
}

export default Page;
