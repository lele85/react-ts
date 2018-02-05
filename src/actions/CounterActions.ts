import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();
export const counterInc = actionCreator<{by: number}>('@@counter/INC');
export const counterDec = actionCreator<{by: number}>('@@counter/DEC');