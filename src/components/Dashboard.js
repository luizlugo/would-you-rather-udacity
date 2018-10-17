import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import UnansweredPolls from './UnansweredPolls';
import AnsweredPolls from './AnsweredPolls';

class Dashboard extends React.Component {
    state = {
        currentTab: 0
    };

    onTabPressed = (tab) => {
        this.setState(() => ({
            currentTab: tab
        }));
    }
    
    render() {
        const { authedUser } = this.props;

        if (!authedUser) {
            return <Redirect to="/login" />
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <label className={`nav-link ${(this.state.currentTab) === 0 ? 'active' : ''}`} onClick={() => this.onTabPressed(0)}>Unanswered Questions</label>
                        </li>
                        <li className="nav-item">
                            <label className={`nav-link ${(this.state.currentTab) === 1 ? 'active' : ''}`} onClick={() => this.onTabPressed(1)}>Answered Questions</label>
                        </li>
                    </ul>
                </div>
                {   (this.state.currentTab === 0) && 
                    <div className="col-md-12">
                        <UnansweredPolls />
                    </div>
                }
                {   (this.state.currentTab === 1) &&
                    <div className="col-md-12">
                        <AnsweredPolls />
                    </div>
                }
            </div>
        )
    }
}
export default connect(({ authedUser }) => {
    return {
        authedUser
    }
})(Dashboard);