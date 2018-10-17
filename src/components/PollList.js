import React from 'react';
import PollRow from './PollRow';

const PollList = ({ questions, answered }) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <ul className="pollList">
                    {questions.map((_questionId) => (
                        <PollRow key={_questionId} id={_questionId} />
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default PollList;