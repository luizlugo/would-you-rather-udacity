import React from 'react';
import { connect } from 'react-redux';
import { handleAddUser } from '../actions/users';

class Signup extends React.Component {
    state = {
        name: '',
        avatarURL: '',
        error: false
    };

    onChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        const { users } = this.props;
        const nameFound = Object.keys(this.props.users).map((_userId) => users[_userId]).find((_user) => _user.name === value)

        this.setState((_prevState) => ({
            ..._prevState,
            [id]: value,
            error: nameFound ? true : false
        }));
    }

    onAvatarClicked = (_avatar) => {
        this.setState((_prevState) => ({
            ..._prevState,
            avatarURL: _avatar
        }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { name, avatarURL } = this.state;

        dispatch(handleAddUser({
            name,
            avatarURL: `/assets/img/${avatarURL}.png`
        }));

       this.props.history.push({
           pathname: '/login'
       });
    }

    onCancelClicked = (e) => {
        e.preventDefault();
        this.props.history.push({
            pathname: '/login'
        });
    }

    render() {
        return (
            <div className="row default-margin-top">
                <div className="offset-md-4 col-md-4">
                    <h2 className="text-center">Create an account for free.</h2>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Enter your name" id="name" className="form-control" onChange={this.onChange} value={this.state.name} />
                            { (this.state.error) && <span className="text-danger">This name was already taken by someone else. Please use another one</span> }
                        </div>
                        <label>Select your avatar:</label>
                        <div className="row avatars-container">
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'adam' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('adam')}>
                                <img src="/assets/img/adam.png" className="user-avatar" alt="Adam avatar" />
                            </div>
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'anjali' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('anjali')}>
                                <img src="/assets/img/anjali.png" className="user-avatar" alt="Anjali avatar" />
                            </div>
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'arjun' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('arjun')}>
                                <img src="/assets/img/arjun.png" className="user-avatar" alt="Arjun avatar"/>
                            </div>
                        </div>
                        <div className="row avatars-container">
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'jorge' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('jorge')}>
                                <img src="/assets/img/jorge.png" className="user-avatar" alt="Jorge avatar" />
                            </div>
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'maya' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('maya')}>
                                <img src="/assets/img/maya.png" className="user-avatar" alt="Maya avatar" />
                            </div>
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'rahul' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('rahul')}>
                                <img src="/assets/img/rahul.png" className="user-avatar" alt="Rahul avatar" />
                            </div>
                        </div>
                        <div className="row avatars-container">
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'sadona' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('sadona')}>
                                <img src="/assets/img/sadona.png" className="user-avatar" alt="Sadona avatar" />
                            </div>
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'sandy' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('sandy')}>
                                <img src="/assets/img/sandy.png" className="user-avatar" alt="Sandy avatar" />
                            </div>
                            <div className={`col-md-4 user-avatar-container ${(this.state.avatarURL) === 'steve' ? 'active' : ''}`} onClick={() => this.onAvatarClicked('steve')}>
                                <img src="/assets/img/steve.png" className="user-avatar" alt="Steve avatar" />
                            </div>
                        </div>
                        <div className="row default-margin-top">
                            <div className="offset-md-3 col-md-3">
                                <button className="btn btn-lg btn-outline-primary" disabled={this.state.name === '' || this.state.avatarURL === '' || this.state.error} type="submit">Register</button>
                            </div>
                            <div className="col-md-3">
                                <button className="btn btn-lg btn-outline-danger" onClick={this.onCancelClicked}>Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}
const mapStateToProps = ({users}) => {
    return {
        users
    }
}
export default connect(mapStateToProps)(Signup);