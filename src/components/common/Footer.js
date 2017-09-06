import React from 'react';
import '../../styles/common/footer.scss';

const Footer = () => {
    return (
        <div className="site-footer">
            <div className="row">
            <div className="horizontal-footer-break push-xs-1 col-xs-10">
                <hr/>
            </div>
            <div className="copyright-info col-xs-12">
                <p className="text-muted company-name">100 Men Who Care Colorado - Mile High Chapter</p>
                        <a className="facebook-link" href="https://www.facebook.com/100MenDenverChapter/">
                            <i className="fa fa-2x fa-facebook-official facebook-logo-footer"/>
                        </a>
                <p className="text-muted d-block"><i className="fa fa-copyright"/> {new Date().getFullYear()}</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;