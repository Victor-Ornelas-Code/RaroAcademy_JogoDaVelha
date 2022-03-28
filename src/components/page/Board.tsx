import { typeBoardState } from "../UseGameState/UseGameState";
import { Row, Column } from "./Table";
import { typeSquareProps, Square } from "./Square";

type typeBoardPros = {
    board: typeBoardState;
    onClick: (square: number) => void;
};
export const Board = ({ board, onClick }: typeBoardPros) => {

    const createProps = (square: number): typeSquareProps => {
        return {
            value: board[square],
            onClick: () => onClick(square)
        };
    };
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
    );
};
