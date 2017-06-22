import React, { Component } from 'react';
import Squre from "../squre/squre";
import './board.css';

class Board extends Component {
    constructor(){
        super();
        this.state = {
            board:[null,null,null,
                    null,null,null,
                    null,null,null],
            nextPlayer:true,
            tie:0
        }
    }
    handleClick(i){
        var temp_board = this.state.board.slice(); //Immutate

        if (temp_board[i] || this.checkForWinner(this.state.board)){
            return;
        }
        
        temp_board[i] = this.state.nextPlayer ? "X" : "O";
        this.setState({
            board: temp_board,
            nextPlayer: !this.state.nextPlayer,
            tie: this.state.tie+1
        });
    }

    checkForWinner(board){
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for (var i = 0; i < lines.length; i++){
            var [a,b,c] = lines[i];
            
            if (board[a] && board[a] === board[b] && board[a] === board[c]){
                console.log(board);
                return board[a];
            }
        }
        return null;
    }
    renderSqure(i){
        return <Squre player={this.state.board[i]} onClick={()=>this.handleClick(i)}/>
    }
    render() {
        var winner = this.checkForWinner(this.state.board);
        if (winner){
            var statement = "Winner is  " + winner + "!"
        }else if(this.state.tie ===9){
            statement = "Game Tied!"
        }else{
            statement = "Next: " + (this.state.nextPlayer ? "X" : "O")
        }
        return (
            <div>
                <div id="statement">{statement}</div>

                <div className="board_wrapper">
                
                    <div>
                        {this.renderSqure(0)}
                        {this.renderSqure(1)}
                        {this.renderSqure(2)}
                    </div>
                    <div>
                        {this.renderSqure(3)}
                        {this.renderSqure(4)}
                        {this.renderSqure(5)}
                    </div>
                    <div>
                        {this.renderSqure(6)}
                        {this.renderSqure(7)}
                        {this.renderSqure(8)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;