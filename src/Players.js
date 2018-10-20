import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';

const Players = props =>
    <div className="row players-list">
        <div className="col-md-6 col-md-offset-3">
            <ul className="list-group">
                {props.players.map((player, index) =>
                    <Player
                        name={player.name}
                        score={player.score}
                        key={player.id}
                        id={player.id}
                        onScoreChange={(value) => props.incrementPlayerScore(value, index)}
                        remove={() => props.removePlayer(index)} />
                )}
            </ul>
        </div>
    </div>;

Players.propTypes = {
    players: PropTypes.array.isRequired,
    incrementPlayerScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
}

export default Players;