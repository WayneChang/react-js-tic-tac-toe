import React from 'react';

function Square(props) {
    const clasname = props.isWinner ? "square-winner" : "square";
    return (
        <button className={clasname} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;