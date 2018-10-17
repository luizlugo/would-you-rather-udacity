import React from 'react';
import { connect } from 'react-redux';
import LeaderboardRow from './LeaderboardRow';

class Leaderboard extends React.Component {
    getUsersByScore = () => {
        const { users } = this.props;
        return Object.keys(users).map((_userId) => {
            return {
                ...users[_userId],
                score: Object.keys(users[_userId].answers).length + Object.keys(users[_userId].questions).length
            }
        }).sort((_x, _y) => {
            return _y.score - _x.score
        });
    }

    render() {
        
        const users = this.getUsersByScore();

        console.log('users', users);
        return (
            <div className="row">
                <div className="col-md-12">
                    <ul>
                        {
                            this.getUsersByScore().map((user) => (
                                <LeaderboardRow user={user} key={user.id} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ users }) => {
    return {
        users
    };
}
export default connect(mapStateToProps)(Leaderboard);