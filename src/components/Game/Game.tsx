import UseGameState, { typeBoardState, typeValue } from "../UseGameState/UseGameState"
import "./main.css"
import { Table, Row, Column } from "../page/Table"
const Game = () => {
    const {
        current,
        xIsNext,
        win,
        handleClick,
        reset } = UseGameState();

    const ButtonReset = () => <button className="reset" onClick={reset}>New Game</button>
    const WinOrTied = (win: string) => {
        if (win != 'Tied') {
            return `Winner: ${win}`

        }
        return win
    }

    return (
        <Table>
            <Row>
                <Column>
                    <div>{win ? WinOrTied(win) : `Next player: ${xIsNext ? 'X' : 'O'}`}</div>
                    <Board board={current} onClick={handleClick} />
                </Column>
                {win ? <ButtonReset /> : <div className="reset" />}
            </Row>
        </Table>
    )
}

type boardPros = {
    board: typeBoardState,
    onClick: (square: number) => void,
}

const Board = ({ board, onClick }: boardPros) => {

    const createProps = (square: number): SquareProps => {
        return {
            value: board[square],
            onClick: () => onClick(square)
        }
    }
    return (
        <Column>
            <Row>
                <Square {...createProps(0)} />
                <Square {...createProps(1)} />
                <Square {...createProps(2)} />
            </Row>
            <Row>
                <Square {...createProps(3)} />
                <Square {...createProps(4)} />
                <Square {...createProps(5)} />
            </Row>
            <Row>
                <Square {...createProps(6)} />
                <Square {...createProps(7)} />
                <Square {...createProps(8)} />
            </Row>
        </Column>
    )
}

type SquareProps = {
    value: typeValue,
    onClick: () => void,
}
const Square = (props: SquareProps) => <button className='square' onClick={props.onClick}> {props.value} </button>

export default Game