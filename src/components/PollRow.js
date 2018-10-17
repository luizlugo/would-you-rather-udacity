import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PollRow extends React.Component {
    onViewPollClicked = () => {
        const { history, question } = this.props;
        history.push({
            pathname: `/questions/${question.id}`,
        })
    }

    render() {
        const { question, author } = this.props;
        return (
            <li className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-2 user-avatar-container">
                            <img className="user-avatar" src={author.avatarURL} alt={`${author.name}'s avatar`} />
                        </div>
                        <div className="col-md-10">
                            <h5 className="card-title">{`${author.name} asked:`}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Would you Rather?</h6>
                            <p className="card-text"><b>Option One:</b> {question.optionOne.text}</p>
                            <p className="card-text"><b>Option Two:</b> {question.optionTwo.text}</p>
                            <button type="button" className="btn btn-outline-primary" onClick={()=> this.onViewPollClicked()}>View Poll</button>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}
const mapStateToProps = ({ questions, users },  { id }) => {
    const question = questions[id];
    return {
        question: question,
        author: users[question.author]
    };
}
export default withRouter(connect(mapStateToProps)(PollRow));