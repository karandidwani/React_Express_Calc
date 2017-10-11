import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import './style.css';
import Home from './home'


class SignUp extends React.Component {

    state = {
        userdata: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        success: false,
        message: ''
    };

    handleSignUp(userdata){

        fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userdata)
        }).then((response) => response.json()).then((responseJson) => {
            console.log("result" + responseJson.status);
            this.props.history.push('/home');
        })
            .catch(error => {
                console.log("This is error : " + error);
                return error;
            });

    }

    render() {
        return (
            <div className="App">
                <Route exact path="/" render={() => (
                    <div>
                        <span>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Create an Account</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value={this.state.userdata.firstname}
                                                   placeholder="FirstName"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userdata: {
                                                               ...this.state.userdata,
                                                               firstname: event.target.value
                                                           }
                                                       })
                                                   }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value={this.state.userdata.lastname}
                                                   placeholder="LastName"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userdata: {
                                                               ...this.state.userdata,
                                                               lastname: event.target.value
                                                           }
                                                       })
                                                   }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="email" value={this.state.userdata.email}
                                                   placeholder="email"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userdata: {
                                                               ...this.state.userdata,
                                                               email: event.target.value
                                                           }
                                                       })
                                                   }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="password" value={this.state.userdata.password}
                                                   placeholder="password"
                                                   onChange={(event) => {
                                                       this.setState({
                                                           userdata: {
                                                               ...this.state.userdata,
                                                               password: event.target.value
                                                           }
                                                       })
                                                   }}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox"/>I agree to <a
                                            href="https://www.dropbox.com/terms">DropBox Terms</a>
                                            &nbsp;&nbsp;
                                            <button className="loginsignup"
                                                    onClick={() => {
                                                        this.handleSignUp(this.state.userdata)
                                                    }}>Create an account
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </span>
                    </div>
                    )}
                />
                <Route exact path = '/home' render = { () => (
                    <div>
                        <Home username={this.state.userdata.firstname}/>
                    </div>
                ) } />
            </div>
        )
    }
}

export default withRouter(SignUp);