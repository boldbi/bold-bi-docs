import React from 'react';
import '../assets/css/footer.css';

class Footer extends React.Component {
	render() {
		const currentYear = new Date().getFullYear();
		return (
                        <div id="doc-footer">
                                <div id="footer-copyright">
                                        <a id="copyright" target="_blank" rel="noopener noreferrer" href="https://www.boldbi.com/copyright">Copyright © 2001 - <span id="copyright-year"> {currentYear}</span> Syncfusion Inc. All Rights Reserved</a>
                                        <div className="copyright-short" aria-hidden="true">© 2001 - {currentYear} Syncfusion Inc.</div>
                                </div>
                                <div className="footer-links-container" aria-label="Legal">
                                        <a className="footer-links" href="https://www.boldbi.com/legal/terms-of-use/">Terms of Use</a>
                                        <a className="footer-links" href="https://www.boldbi.com/legal/privacy/">Privacy Policy</a>
                                        <a className="footer-links" href="https://www.boldbi.com/legal/cookie-policy/">Cookie Policy</a>
                                </div>
                        </div>
                )
	}
}

export default Footer;
