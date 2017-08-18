import React, {PropTypes} from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
    render(){
        return(
          <div className="main container-fluid">
              <div className="row">
              <Header />
              <div id="main-container">
                {this.props.children}
              </div>
              <Footer />
                  </div>
          </div>
        );
    }
}

App.propTypes ={
    children: PropTypes.object.isRequired
};

export default App;