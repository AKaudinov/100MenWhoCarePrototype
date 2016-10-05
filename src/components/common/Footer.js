import React from 'react';

const Footer = () => {
    return (
        <div className="row">
            <div className="horizontal-footer-break push-xs-1 col-xs-10">
                <hr/>
            </div>
            <div className="watermark col-xs-12">
                <p className="text-muted d-block">100 Men Who Care</p>
                <p className="text-muted d-block"><i className="fa fa-copyright"/>2016</p>
            </div>
        </div>
    );
};

export default Footer;