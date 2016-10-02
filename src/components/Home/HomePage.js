import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div id="carousel-home" className="container-fluid carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-home" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-home" data-slide-to="1"></li>
                    <li data-target="#carousel-home" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">

                    <div className="carousel-item active">
                        <img src={require('../../assets/colorado.png')} alt="Colorado"/>
                        <div className="carousel-caption">
                            <h4>Test</h4>
                            <p>First Slide</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={require('../../assets/colorado.png')} alt="Colorado 2"/>
                        <div className="carousel-caption">
                            <h4>Second Slide</h4>
                            <p>The second slide</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={require('../../assets/colorado.png')} alt="Colorado 3"/>
                        <div className="carousel-caption">
                            <h4>And one more for good measure</h4>
                            <p>Third slide for good measure</p>
                        </div>
                    </div>

                    <a className="left carousel-control" href="#carousel-home" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-home" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}
//<div className="container-fluid">
//    <div className="jumbotron">
//        <h1>This is The home page</h1>
//        <p>First Home page for testing</p>
//        <Link to="about" className="btn btn-info btn-lg" id="toAbout">About</Link>
//    </div>
//</div>

export default HomePage;