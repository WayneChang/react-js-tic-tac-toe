import React from 'react';
import Square from './square';

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const cols = 3;
        const rows = 3;
        const board = [];
        for (let row = 0; row <= rows; row++) {
            let rowComps = [];
            for (let col = 0; col <= cols; col++) {
                if (row === 0 && col === 0) {
                    rowComps.push(<label key={0} className="col-row-category">row\col</label>);
                } else if (row === 0) {
                    rowComps.push(<label key={col} className="col-title">{col}</label>);
                } else if (col === 0) {
                    rowComps.push(<label key={row} className="row-title">{row}</label>);
                } else {
                    rowComps.push(this.renderSquare(row * 3 + col));
                }
            }
            board.push(<div key={row} className="board-row">{rowComps}</div>);
        }
        return (
            <div>{board}</div>
        );
    }
}

export default Board;