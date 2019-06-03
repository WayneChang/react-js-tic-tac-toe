import React from 'react';
import Square from './square';

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    <label className="col-row-category">row\col</label>
                    <label className="col-title">1</label>
                    <label className="col-title">2</label>
                    <label className="col-title">3</label>
                </div>
                <div className="board-row">
                    <label className="row-title">1</label>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    <label className="row-title">2</label>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    <label className="row-title">3</label>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;