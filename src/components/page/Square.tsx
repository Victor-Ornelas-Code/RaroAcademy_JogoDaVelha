import { typeValue } from "../UseGameState/UseGameState";


export type typeSquareProps = {
    value: typeValue;
    onClick: () => void;
};
export const Square = (props: typeSquareProps) => <button className='square' onClick={props.onClick}> {props.value} </button>;
