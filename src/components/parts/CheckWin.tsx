import { typeBoardState } from "../UseGameState/UseGameState";

export const checkWin = (boardState: typeBoardState, step?: number) => {
    const WinCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i: number = 0; i < WinCombinations.length; i++) {
        console.log(i);
        const [a, b, c] = WinCombinations[i];
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            return boardState[a];
        } else if (step == 9 && i == 7) {
            return 'Tied';
        }
    }
    return null;
};
