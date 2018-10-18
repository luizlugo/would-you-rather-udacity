import React from 'react';

export default function NoData(props) {
    return (
        <div className="row poll-view">
            <div className="offset-md-3 col-md-6">
                <h1 className="text-center">404!</h1>
                <h2 className="text-center">Oops, we could not find this question.</h2>
            </div>
        </div>
    );
};