import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import NewPoll from './NewPoll';
import PollView from './PollView';

export default class Main extends React.Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Switch>
                            <Route path="/dashboard" exact component={Dashboard} />
                            <Route path="/leaderboard" exact component={Leaderboard} />
                            <Route path="/add" exact component={NewPoll} />
                            <Route path="/questions/:questionId" component={PollView} />
                            <Route path="/" render={() => <Redirect to="/dashboard" />} />
                        </Switch>
                    </div>
                </div>
            </Fragment>
        );
    }
}