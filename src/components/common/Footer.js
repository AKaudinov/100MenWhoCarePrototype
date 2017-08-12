import React from 'react';
import '../../styles/common/footer.scss';

const Footer = () => {
    return (
        <div className="row site-footer">
            <div className="horizontal-footer-break push-xs-1 col-xs-10">
                <hr/>
            </div>
            <div className="watermark col-xs-12">
                <p className="text-muted company-name">100 Men Who Care Colorado - Mile High Chapter</p>
                        <a className="btn facebook-link" href="https://www.facebook.com/100WhoCareAlliance/">
                            <i className="fa fa-facebook-official"/>
                        </a>
                <p className="text-muted d-block"><i className="fa fa-copyright"/>2017</p>
            </div>
        </div>
    );
};

export default Footer;