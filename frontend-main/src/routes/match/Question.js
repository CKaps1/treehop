import React from 'react';

export class Question extends React.Component {
    render() {
        return (
            <h2 className="question">{this.props.questionName}</h2>
        );
    }
}

export default Question;