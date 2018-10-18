import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoadingBar from 'react-redux-loading';
// Actions
import { handleInitData } from '../actions/shared';
// Components
import Login from './Login';
import Signup from './Signup';
import Main from './Main';

class App extends Component {
  componentDidMount() {
    const {
      dispatch
    } = this.props;
    dispatch(handleInitData());
  }

  render() {
    const { authedUser } = this.props;
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container-fluid">
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/" render={(props) => {
                if (authedUser) {
                  return <Main />;
                } else {
                  return <Redirect to={{
                    pathname: '/login',
                    state: {
                      from: props.location
                    }
                  }} />;
                }
              }}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect(({ authedUser }) => {
  return {
    authedUser
  };
})(App);
