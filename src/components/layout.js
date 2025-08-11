import React from "react";
import Helmet from "react-helmet";
import {ThemeProvider} from "styled-components"
import "../assets/css/index.css";
import "../assets/css/style.css";
import "../../node_modules/prismjs/themes/prism.css"
import theme from '../templates/theme'

export default class MainLayout extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="stylesheet" href="https://cdn.syncfusion.com/ej2/fabric.css" />
        </Helmet>
        <ThemeProvider theme={theme}>
          <div>
            {children}
          </div>
        </ThemeProvider>
      </div>
    );
  }
}
