import React from 'react';
import {withRouter} from 'react-router-dom';

class Home extends React.Component{
    render(){
        return (

            <BrowserRouter>
                <h1>Welcome {this.props.username}</h1>
            </BrowserRouter>

        )
    }
}

export default withRouter(Home);