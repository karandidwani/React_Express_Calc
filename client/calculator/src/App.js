import React from 'react';
import "./App.css";
import {BrowserRouter} from 'react-router-dom';
import SignUp from './components/signuppage';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <SignUp/>
            </BrowserRouter>
        )
    }
}

export default App;