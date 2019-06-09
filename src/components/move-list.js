import React from 'react';

function MoveList(props) {
    let moves = props.history.map((step, move) => {
        let desc =
            move ? `Go to move # ${move},
                  ${step.squares[step.currMove]} at
                  (col, row) = (${(step.currMove % 3) + 1}, ${Math.floor(step.currMove / 3) + 1})`
                : "Go to game start";
        desc = move === props.stepNumber ? <b>{desc}</b> : desc;
        return (
            <li key={move}>
                <button
                    onClick={() => props.onClick(move)}>
                    {desc}
                </button>
            </li>
        );
    });
    if (props.isMoveSortDesc) {
        moves = moves.reverse();
    }
    return (
        <div><ol>{moves}</ol></div>
    );
}

export default MoveList;