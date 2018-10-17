import React from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { withRouter } from 'react-router-dom';

class PollForm extends React.Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        author: this.props.authedUser
    }

    onChange = (e) => {
        const { value, id } = e.target;
        
        this.setState((_prevState) => ({
            ..._prevState,
            [id]: value
        }));
    }

    onSubmitForm = (e) => {
        const { dispatch, history } = this.props;
        const { optionOneText, optionTwoText, author } = this.state;
        const question = {
            optionOneText,
            optionTwoText,
            author
        };
        dispatch(handleAddQuestion(question));
        this.setState((_prevState) => ({
            ..._prevState
        }));
        history.push({
            pathname: '/dashboard'
        });
    }

    render() {
        const { author } = this.props;
        return (
            <div className="row poll-view">
                <div className="offset-md-3 col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center">Would you Rather?</h4>
                        </div>
                    </div>

                    <div className="row poll-options-container">
                        <div className="col-md-5 poll-option">
                            <textarea placeholder="Enter Option One" className="form-control" value={this.state.optionOneText} id="optionOneText" onChange={this.onChange}></textarea>
                        </div>
                        <div className="col-md-2 user-avatar-container">
                            <img className="user-avatar" src={author.avatarURL} alt={`${author.name}'s avatar`} />
                        </div>
                        <div className="col-md-5 poll-option">
                            <textarea placeholder="Enter Option Two" className="form-control" value={this.state.optionTwoText} id="optionTwoText" onChange={this.onChange}></textarea>
                        </div>
                    </div>

                    <div className="row default-margin-top">
                        <div className="col-md-12 center-elements">
                            <button className="btn btn-lg btn-primary" disabled={(this.state.optionOneText === '' || this.state.optionTwoText === '')} onClick={this.onSubmitForm}>SAVE POLL</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ authedUser, users }) => {
    return {
        author: users[authedUser],
        authedUser
    }
};
export default withRouter(connect(mapStateToProps)(PollForm));
