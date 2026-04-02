import React from 'react';
import styled from 'styled-components';

class MainHeader extends React.Component {
    /* eslint-disable */
    constructor() {
        super();
        this.state = {
            forumPath: "https://www.boldbi.com/forums/",
            kbPath: "https://support.boldbi.com/kb"
        }
    }
    render() {
        return (
            <SiteContainer>
                <div className="doc-icons icon-burger_menu doc-hamburger-icon"></div>
                <a className="doc-logo-link" href="https://www.boldbi.com/documentation"><div className="doc-logo"></div></a>
                <div className="doc-header-platform">Documentation</div>
                <div className="doc-header-links">
                    <a href={this.state.forumPath} target="_blank"><div className="doc-header-link doc-forum-link">Forum</div></a>
                    <a href={this.state.kbPath} target="_blank"><div className="doc-header-link doc-demos-link">KB</div></a>
                    <div id="doc-content-search"></div>
                    <a href="https://app.boldid.net/register/bi/embedded?evaluation=v2" target="_blank" role="button"><div class="header-demo-link">Try it Free</div></a>
                </div>
            </SiteContainer>
        )
    }
    updatePlatform(name) {
        if (name == "cloud-bi") {
            this.setState({
                forumPath: "https://www.boldbi.com/forums/",
                kbPath: "https://support.boldbi.com/kb"
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
