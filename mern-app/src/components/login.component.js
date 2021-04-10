import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component{
    constructor(props){
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: '',
            password: '',
            accountType: ''
        }
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            accountType: 'management'
        }

        //TODO: make this API function
        axios.post('http://localhost:5000/users/login', user)
            .then(function(res){
                //redirect to homepage
                console.log(res);
            });
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    render() {
        return(
            <div>
                <h3>Log In</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text" required 
                            className="form-control"
                            onChange={this.onChangeUsername}/>
                        
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input type="text" required 
                            className="form-control"
                            onChange={this.onChangePassword}/>
                        
                    </div>

                    
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}