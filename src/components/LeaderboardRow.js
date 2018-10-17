import React from 'react';

const LeaderboardRow = (props) => {
    const { user } = props;
    return (
        <li className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2 user-avatar-container">
                        <img className="user-avatar" src={user.avatarURL} alt={`${user.name}'s avatar`} />
                    </div>
                    <div className="col-md-8">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text"><b>Answered Questions:</b> {Object.keys(user.answers).length}</p>
                        <p className="card-text"><b>Created Questions:</b> {Object.keys(user.questions).length}</p>
                    </div>
                    <div className="col-md-2 center-elements">
                        <h2 className="text-center">
                            {user.score}
                        </h2>
                    </div>
                </div>
            </div>
        </li>
    )
}
export default LeaderboardRow;