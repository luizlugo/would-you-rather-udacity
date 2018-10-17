import React from 'react';
import { connect } from 'react-redux';
import PollList from './PollList';

class AnsweredPolls extends React.Component {
    getAnsweredQuestions() {
        const { users, authedUser, questions } = this.props;
        return Object.keys(questions).filter((_questionId) => {
            return users[authedUser].answers[_questionId];
        }).sort((_x, _y) => {
            return questions[_y].timestamp - questions[_x].timestamp;
        });
    }

    render() {
        const answeredQuestions = this.getAnsweredQuestions();
        if (answeredQuestions.length === 0) {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <h2>No More Questions</h2>
                    </div>
                </div>
            );
        }

        return (
            <div className="row">
                <div className="col-md-12">
                    <PollList questions={answeredQuestions} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ users, questions, authedUser }) => {
    return {
        users,
        questions,
        authedUser
    }
};
export default connect(mapStateToProps)(AnsweredPolls);