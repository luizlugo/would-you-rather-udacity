import React from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class Login extends React.Component {
    state = {
        authedUser: null,
        redirect: false
    }
    onUserChange = (e) => {
        const authedUser = e.target.value;
        this.setState((prevState) => {
            return {
                authedUser
            }
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { authedUser } = this.state;
        // TODO: Save user selected and redirect to dashboard
        dispatch(setAuthedUser(authedUser));
        this.setState((_prevState) => ({
            ..._prevState,
            redirect: true
        }))
    }

    render() {
        const { users } = this.props;
        const { authedUser, redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />
        }

        return (
            <div className="row default-margin-top">
                <div className="offset-md-4 col-md-4">
                    <h2 className="text-center">
                        Welcome to the Would you rather App
                    </h2>
                    <p className="text-center">
                        If you are already register please select your name from the list below
                    </p>

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <select className="form-control" id="exampleFormControlSelect1" onChange={this.onUserChange}>
                                <option value="">Select a User</option>
                                {
                                    Object.keys(users).map((key) => (
                                        <option value={key} key={key}>{users[key].name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <NavLink to="/signup">Not seeing your name in the list. Sign up for free!</NavLink>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-primary btn-lg" disabled={!authedUser || (authedUser === '')}>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (({users}) => {
    return {
        users
    };
});
export default connect(mapStateToProps)(Login);