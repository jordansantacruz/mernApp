import React, {Component} from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeAccountType = this.onChangeAccountType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            accountType: '',
            users: []
        }


    }

    componentDidMount(){
        var userTypeArray = ['customer', 'staff', 'management'];

        this.setState({
            users: userTypeArray,
            accountType: userTypeArray[0]
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

    onChangeAccountType(e){
        this.setState({
            accountType: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            accountType: this.state.accountType
        }

        //TODO: Remove hardcoded API location
        axios.post('http://localhost:5000/users/add', user)
        .then(function(res) {
            //Add some kind of confirmation message
            console.log(res);
        })
        .catch(res => {
            console.log(res.body);
        });

    }

    render() {
        return(
            <div>
            <h3>Create User</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" required minLength="8" maxLength="50"           
                        className="form-control"
                        onChange={this.onChangeUsername}/>
                    
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="text" required minLength="8" maxLength="50"
                        className="form-control"
                        onChange={this.onChangePassword}/>
                </div>
                <div className="form-group">
                    <label>Account Type:</label>
                    <select
                            required
                            className="form-control"
                            value={this.state.accountType}
                            onChange={this.onChangeAccountType}>
                            {
                                this.state.users.map(function (user){
                                    return <option key={user} value={user}>
                                        {user}
                                    </option>
                                })
                            }
                    </select>
                </div>
                
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        )
    }
}