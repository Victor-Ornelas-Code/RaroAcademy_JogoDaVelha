import React, { useState } from "react";
import { checkWin } from "../parts/CheckWin";

export type typeValue = 'X' | 'O' | null;

export type typeBoardState = typeValue[];

const createBoardState = () => Array<typeValue>(9).fill(null);

export type typeGameState = {
    history: typeBoardState[],
    step: number,
}

const UseGameState = () => {
    const newGame = {
        history: [createBoardState()],
        step: 0,
    }
    const [gameState, setGameState] = React.useState<typeGameState>(newGame);

    const step = gameState.step
    const current = gameState.history[step];
    const xIsNext = (gameState.step % 2) === 0;
    const win = checkWin(current, step);

    const handleClick = (square: number) => {
        const history = gameState.history.slice(0, gameState.step + 1)
        const boardState = history[history.length - 1];
        if (checkWin(boardState) || boardState[square]) {
            return;
        }

        const newBoardState = boardState.slice();
        newBoardState[square] = (gameState.step % 2) === 0 ? 'X' : 'O';
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1,
        });
    }

    const reset = () => setGameState(newGame)

    return {
        current,
        xIsNext,
        win,
        handleClick,
        reset,
    }
}

export default UseGameState;
