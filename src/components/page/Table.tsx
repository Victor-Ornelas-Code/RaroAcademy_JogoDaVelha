import { FC } from "react";

export const Table: FC = ({ children }) => <div className='table'>{children}</div>;
export const Row: FC = ({ children }) => <div className='row'>{children}</div>;
export const Column: FC = ({ children }) => <div className='column'>{children}</div>;
