import React, {PropTypes} from 'react';
import Header from './common/Header';
import HeaderNew from './common/HeaderNew';
import Footer from './common/Footer';
//<Header />
class App extends React.Component {
    render(){
        return(
          <div className="main container-fluid">
              <div className="row">
                  <HeaderNew/>
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