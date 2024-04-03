import React from 'react';
import styled from 'styled-components';

class MainHeader extends React.Component {
    /* eslint-disable */
    constructor() {
        super();
        this.state = {
            blogPath: "https://www.boldbi.com/blog",
            demosPath: "https://samples.boldbi.com/embed"
        }
    }
    render() {
        return (
            <SiteContainer>
                <div className="doc-icons icon-burger_menu doc-hamburger-icon"></div>
                <a className="doc-logo-link" href="https://www.boldbi.com/documentation"><div className="doc-logo"></div></a>
                <div className="doc-header-platform">Documentation</div>
                <div className="doc-header-links">
                    <a href={this.state.demosPath} target="_blank"><div className="doc-header-link doc-demos-link">Demos</div></a>
                    <a href="https://www.boldbi.com/support" target="_blank"><div className="doc-header-link doc-support-link">Support</div></a>
                    <a href={this.state.blogPath} target="_blank"><div className="doc-header-link doc-forum-link">Blog</div></a>
                    <div id="doc-content-search"></div>
                    <a href="https://app.boldid.net/bi/embedded/register?plan=146&evaluation=v2&leadsource=www.boldbi.com&gclid=&referrerroriginurl=https://www.boldbi.com/page-sitemap1.xml&secondaryreferraloriginurl=https://help.boldbi.com/&host=server&quantity=1&_gl=1*1fncaio*_gcl_au*MjA5NDgyNDY2OS4xNjg5NjU4OTEx*_ga*NDcwNjgzMjYxLjE2ODk1NjkyMjk.*_ga_SRXJZD7EME*MTY5MDI3NDMwNy40MC4xLjE2OTAyNzg3ODEuMC4wLjA." target="_blank" role="button"><div class="header-demo-link">Start Free Trial</div></a>
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
