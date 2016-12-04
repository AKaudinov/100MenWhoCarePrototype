import React from 'react';
import '../../styles/common/footer.scss';

const Footer = () => {
    return (
        <div className="row">
            <div className="horizontal-footer-break push-xs-1 col-xs-10">
                <hr/>
            </div>
            <div className="watermark col-xs-12">
                <p className="text-muted company-name">100 Who Care Colorado</p>
                        <a className="btn facebook-link" href="https://www.facebook.com/100WhoCareAlliance/">
                            <i className="fa fa-facebook-official"/>
                        </a>
                <p className="text-muted d-block"><i className="fa fa-copyright"/>2016</p>
            </div>
        </div>
    );
};

export default Footer;