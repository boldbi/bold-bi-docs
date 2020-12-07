import React from "react";
import Helmet from "react-helmet";
import {ThemeProvider} from "styled-components"
import "../assets/css/index.css";
import "../assets/css/style.css";
import "../../node_modules/prismjs/themes/prism.css"
import theme from '../templates/theme'
import favicon from '../../static/favicon.ico';

export default class MainLayout extends React.Component {

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <link rel="shortcut icon" href={favicon} />
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
