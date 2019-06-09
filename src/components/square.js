import React from 'react';
import './square.scss';

function Square(props) {
    const clasname = props.isWinner ? "square square-winner" : "square";
    return (
        <button className={clasname} onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;