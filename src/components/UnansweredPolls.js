import React from 'react';
import { connect } from 'react-redux';
import PollList from './PollList';

class UnansweredPolls extends React.Component {
    getUnansweredQuestions() {
        const { users, authedUser, questions } = this.props;
        return Object.keys(questions).filter((_questionId) => {
            return !users[authedUser].answers[_questionId];
        }).sort((_x, _y) => {
            return questions[_y].timestamp - questions[_x].timestamp;
        });
    }

    render() {
        const unansweredQuestions = this.getUnansweredQuestions();

        if (unansweredQuestions.length === 0) {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <h2>No more Questions to answer for now...</h2>
                    </div>
                </div>
            );
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <PollList questions={unansweredQuestions} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser, users, questions }) => {
    return {
        users,
        questions,
        authedUser
    }
};
export default connect(mapStateToProps)(UnansweredPolls);