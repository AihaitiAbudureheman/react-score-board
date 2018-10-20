import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';

const Player = props =>
    <li className="list-group-item">
        <div className="row">
            <div className="col-md-8">
                <span className="remove-btn" onClick={props.remove}> x </span>
                <span>{props.name}</span>
            </div>
            <div className="col-md-4">
                <Counter
                    initialScore={props.score}
                    onChange={props.onScoreChange} />
            </div>
        </div>
    </li>;

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}
export default Player;