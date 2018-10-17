import React from 'react';
import { connect } from 'react-redux';
import { handleNavigation } from '../actions/navigation';
import { handleAnswerQuestion } from '../actions/questions';

class PollView extends React.Component {
    state = {
        selectedAnswer: this.props.selectedAnswer
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleNavigation('questionDetails'));
    }

    onAnswerClicked = (selectedAnswer) => {
        const { answered } = this.props;

        if (answered) {
            return;
        }
        
        this.setState((_prevState) => ({
            selectedAnswer
        }));
    }

    onSaveOptionClicked = () => {
        const { dispatch, authedUser, history, id } = this.props;
        const answer = {
            authedUser,
            qid: id,
            answer: this.state.selectedAnswer
        };
        dispatch(handleAnswerQuestion(answer));
        history.push({
            pathname: '/dashboard'
        });
    }

    getOptionPercentage = (option) => {
        const totalOfVotes = this.getTotalOfVotes();
        const optionVotes = option.votes.length;
        return Math.round((optionVotes / totalOfVotes) * 100);
    }

    getTotalOfVotes = () => {
        const optionOneTotalVotes = this.props.question.optionOne && this.props.question.optionOne.votes ? this.props.question.optionOne.votes.length : 0;
        const optionTwoTotalVotes = this.props.question.optionTwo && this.props.question.optionTwo.votes ? this.props.question.optionTwo.votes.length : 0;
        return optionOneTotalVotes + optionTwoTotalVotes;
    }

    render() {
        const { questionUser, question, answered } = this.props;
        const { selectedAnswer } = this.state;

        console.log('selectedAnswer', selectedAnswer);
        
        return (
            <div className="row poll-view">
                <div className="offset-md-3 col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center">Would you Rather?</h4>
                            <h6 className="text-center">{`Asked by: ${questionUser.name}`}</h6>
                        </div>
                    </div>

                    <div className="row poll-options-container">
                        <div className={`col-md-5 poll-option bordered ${(selectedAnswer === 'optionOne' ? 'active': '')}`} onClick={(e) => this.onAnswerClicked('optionOne')}>
                            <label className="text-center">{question.optionOne.text}</label>
                        </div>
                        <div className="col-md-2 user-avatar-container">
                            <img className="user-avatar" src={questionUser.avatarURL} alt={`${questionUser.name}'s avatar`} />
                        </div>
                        <div className={`col-md-5 poll-option bordered ${(selectedAnswer === 'optionTwo' ? 'active' : '')}`} onClick={(e) => this.onAnswerClicked('optionTwo')}>
                            <label className="text-center">{question.optionTwo.text}</label>
                        </div>
                    </div>

                    {
                        (answered) && (
                            <div className="row poll-options-container">
                                <div className='col-md-5'>
                                    <p className="text-center">{this.getOptionPercentage(question.optionOne)}%</p>
                                    <p className="text-center">{question.optionOne.votes.length} of {this.getTotalOfVotes()}</p>
                                </div>
                                <div className='offset-md-2 col-md-5'>
                                    <p className="text-center">{this.getOptionPercentage(question.optionTwo)}%</p>
                                    <p className="text-center">{question.optionTwo.votes.length} of {this.getTotalOfVotes()}</p>
                                </div>
                            </div>
                        )
                    }
                    {
                        (!answered) && (
                            <div className="row default-margin-top">
                                <div className="col-md-12 center-elements">
                                    <button className="btn btn-lg btn-primary" disabled={!selectedAnswer} onClick={() => this.onSaveOptionClicked()}>SAVE ANSWER</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({questions, users, authedUser}, props) => {
    const id = props.match.params.questionId;
    const question = questions[id] ? questions[id] : null;
    const selectedAnswer = users[authedUser].answers[id];

    return {
        question,
        questionUser: users[question.author],
        authedUser,
        id,
        selectedAnswer,
        answered: selectedAnswer ? true : false
    }
};
export default connect(mapStateToProps)(PollView);
