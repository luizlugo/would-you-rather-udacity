import React from 'react';
import PollForm from './PollForm';
import { connect } from 'react-redux';
import { handleNavigation } from '../actions/navigation';

class NewPoll extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleNavigation('add'));
    }

    render() {
        return (
            <PollForm />
        )
    }
}
export default connect()(NewPoll);