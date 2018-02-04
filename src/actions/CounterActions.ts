import { Dispatch } from 'redux';
import Promise from 'ts-promise';
import { OtherAction } from './OtherActions';


interface CounterIncrementAction {
    type: CounterActionsKeys.INC,
    by: number
};

interface CounterDecrementAction {
    type: CounterActionsKeys.DEC
    by: number
};

export enum CounterActionsKeys {
    INC = "@@counter/INC",
    DEC = "@@counter/DEC",
};

export type CounterActionTypes =
   | CounterIncrementAction
   | CounterDecrementAction
   | OtherAction;


export const counterIncrement = (by:number) : CounterActionTypes  =>  {
    return {type:CounterActionsKeys.INC, by: by};
}

export const counterIncrementAsync = (by: number) => {
    return (dispatch : Dispatch<CounterActionTypes>) => {
        const p = new Promise<number>((resolve, reject) => {
            setTimeout(() => {
                dispatch(counterIncrement(by));
                resolve(by);
            }, 2000)
        });
        return p;
    }
}

export const counterDecrement = (by: number) : CounterActionTypes => {
    return {type:CounterActionsKeys.DEC, by: by};
}