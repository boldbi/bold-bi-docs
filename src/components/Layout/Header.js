import React from 'react';
import styled from 'styled-components';

class MainHeader extends React.Component {
    /* eslint-disable */
    constructor() {
        super();
        this.state = {
            blogPath: "https://www.boldbi.com/blog",
            demosPath: "https://embed-sdk.boldbi.com/"
        }
    }
    render() {
        return (
            <SiteContainer>
                <div className="doc-icons icon-burger_menu doc-hamburger-icon"></div>
                <a className="doc-logo-link"><div className="doc-logo"></div></a>
                <div className="doc-header-platform">Documentation</div>
                <div className="doc-header-links">
                    <a href={this.state.demosPath} target="_blank"><div className="doc-header-link doc-demos-link">Demos</div></a>
                    <a href="https://www.boldbi.com/contact" target="_blank"><div className="doc-header-link doc-support-link">Support</div></a>
                    <a href={this.state.blogPath} target="_blank"><div className="doc-header-link doc-forum-link">Blog</div></a>
                    <div id="doc-content-search"></div>
                </div>
            </SiteContainer>
        )
    }
    updatePlatform(name) {
        if (name == "cloud-bi") {
            this.setState({
                blogPath: "https://www.boldbi.com/blog",
                demosPath: "https://samples.boldbi.com/"
            })
        }
    }
}

const SiteContainer = styled.div`
  background: ${props => props.theme.brand};
  padding: 0px 20px;
  @media screen and (max-width: 764px) {
    padding: 0px 10px;
  }
`

export default MainHeader
