import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../actions/authedUser';
import { handleNavigation } from '../actions/navigation';

class Navbar extends React.Component {
    logout = (_e) => {
        _e.preventDefault();
        const { dispatch } = this.props;
        dispatch(handleLogout());
        dispatch(handleNavigation('dashboard'));
    }

    updateOptionSelected = (option) => {
        const { dispatch } = this.props;
        dispatch(handleNavigation(option));
    }

    render() {
        const { users, authedUser, navigation } = this.props;
        const currentUser = users[authedUser];
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to="/dashboard" className="navbar-brand">Would you Rather?</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                { (authedUser) && (
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={`nav-item ${(navigation === 'dashboard' ? 'active' : '')}`}>
                                <NavLink to="/dashboard" className="nav-link" onClick={() => this.updateOptionSelected('dashboard')}>Dashboard</NavLink>
                            </li>
                            <li className={`nav-item ${(navigation === 'leaderboard' ? 'active' : '')}`}>
                                <NavLink to="/leaderboard" className="nav-link" onClick={() => this.updateOptionSelected('leaderboard')}>Leaderboard</NavLink>
                            </li>
                            <li className={`nav-item ${(navigation === 'add' ? 'active' : '')}`}>
                                <NavLink to="/add" className="nav-link" onClick={() => this.updateOptionSelected('add')}>New Question</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text navbar__user-name">
                            Welcome back, <b>{currentUser.name}</b>
                        </span>
                        <form className="form-inline" onSubmit={this.logout}>
                            <button className="btn btn-sm btn-outline-dark">Logout</button>
                        </form>
                    </div>
                )}
            </nav>
        )
    }
}
const mapStateToProps = ({ authedUser, users, navigation }) => {
    return {
        authedUser,
        users,
        navigation
    };
}
export default connect(mapStateToProps)(Navbar);